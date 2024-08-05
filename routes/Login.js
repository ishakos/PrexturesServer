const express = require("express");
const router = express.Router();
const Users = require("../models/UsersModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
let nodemailer = require("nodemailer");
const { validateToken } = require("../controllers/AuthController");

const cors = require("cors");
router.use(cors());

require("dotenv").config();
const SECRET1 = process.env.SECRET;
const GMAIL_PASS = process.env.GMAIL_PASS;
const GMAIL = process.env.GMAIL;
const DOMAIN = "https://prextures.vercel.app";

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  //user gonna empty if username dosent exist in db
  let user = await Users.findOne({ username: username });

  if (!user) {
    res.json({ error: "User Dosent Exist!" });
  } else {
    bcrypt.compare(password, user.password).then((match) => {
      if (match) {
        //authentification
        const accessToken = jwt.sign(
          { username: user.username, id: user.id },
          SECRET1
        );
        res.json(accessToken);
      } else {
        res.json({ error: "Wrong Password!" });
      }
    });
  }
});

//basicly when its validated tdir la logique te3ak hna
//e5dem kech req, for example: modifier username
router.get("/auth", validateToken, async (req, res) => {
  let user = await Users.findOne({ username: req.username });
  if (!user) {
    return res.status(404).send("User not found");
  }
  res.json(user);
});

router.post("/forgot", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await Users.findOne({ email: email });
    if (!user) {
      return res.json({ noMatch: `${email} not found, and user not found` });
    }
    const secret = SECRET1 + user.password;

    //generating the token b secret
    const token = jwt.sign({ email: user.email, id: user.id }, secret, {
      expiresIn: "5m",
    });

    //ndiro token f link
    const link = `${DOMAIN}/login/reset/${user.id}/${token}`;

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL,
        //lzm tjibo b whd l method 1st
        pass: GMAIL_PASS,
      },
    });

    var mailOptions = {
      from: GMAIL,
      to: email,
      subject: "Reset Password",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .email-container {
            width: 100%;
            max-width: 600px;
            margin: auto;
            background-color: #ffffff;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .email-header {
            text-align: center;
            padding-bottom: 20px;
        }
        .email-body {
            font-size: 16px;
            line-height: 1.6;
            color: black;
        }
        .verify-button {
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            color: white;
            background-color: #007BFF;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
        }
        .verify-button:hover {
            background-color: #0056b3;
        }
        .email-footer {
            text-align: center;
            font-size: 12px;
            color: #666666;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h2>Email Verification</h2>
        </div>
        <div class="email-body">
            <p>Dear ${user.username},</p>
            <p>Please click the button below to reset your password:</p>
            <p style="text-align: center;">
                <a href="${link}" class="verify-button">Reset Password</a>
            </p>
            <p>If you did not sign up for this account, you can ignore this email.</p>
            <p>Best regards,<br>Prextures</p>
        </div>
        <div class="email-footer">
            <p>&copy; 2024 Prextures. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`,
      text: link,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        res.json({ match: "done" });
      }
    });
  } catch (error) {
    res.json({ error: error });
  }
});

router.post("/reset/:id/:token", async (req, res) => {
  const { password, password2, id, token } = req.body;
  const user = await Users.findById(id);
  if (!user) {
    return res.json({ error: "This Id does not exist" });
  }
  if (password !== password2) {
    return res.json({ noMatch: "Passwords dosent match" });
  }
  const secret = SECRET1 + user.password;
  try {
    const verify = jwt.verify(token, secret);
    if (verify) {
      const encryptedPassword = await bcrypt.hash(password, 10);
      await Users.updateOne(
        {
          _id: id,
        },
        {
          $set: {
            password: encryptedPassword,
          },
        }
      );
      res.json({ updated: "Password Updated" });
    } else {
      res.json({ error: "Unverified" });
    }
  } catch (err) {
    res.json({ error: err });
  }
});

module.exports = router;
