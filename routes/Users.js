const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const Users = require("../models/UsersModel");
const router = express.Router();
const { getUsers } = require("../controllers/UsersController");
const jwt = require("jsonwebtoken");
let nodemailer = require("nodemailer");

router.get("/", getUsers);

require("dotenv").config();
const SECRET2 = process.env.SECRET2;
const gmailpass = process.env.GMAIL_PASS;
const gmail = process.env.GMAIL;
const DOMAIN = "http://ishakos.github.io/Prextures";

//add user
router.post("/", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = Users.create({
      username: username,
      email: email,
      password: hashedPassword,
    });

    const secret = SECRET2 + hashedPassword;
    //generating the token b secret
    const token = jwt.sign({ email: email }, secret, {
      expiresIn: "24h",
    });

    //ndiro token f link
    const link = `${DOMAIN}/emailVerification/${username}/${token}`;

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmail,
        //lzm tjibo b whd l method 1st
        pass: gmailpass,
      },
    });

    var mailOptions = {
      from: gmail,
      to: email,
      subject: "Email Verification",
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
            <p>Dear ${username},</p>
            <p>Thank you for signing up! Please click the button below to verify your email address:</p>
            <p style="text-align: center;">
                <a href="${link}" class="verify-button">Verify Email</a>
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
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Verify User Email
router.post("/emailVerification/:username/:token", async (req, res) => {
  const { username, token } = req.body;
  const user = await Users.findOne({ username: username });
  if (!user) {
    return res.json({ error: "This Id does not exist" });
  }
  const secret = SECRET2 + user.password;
  try {
    const verify = jwt.verify(token, secret);
    if (verify) {
      await Users.updateOne(
        {
          username: username,
        },
        {
          $set: {
            verified: true,
          },
        }
      );
    } else {
      return res.json({ error: "Email Unverified" });
    }
    return res.json({ message: "User is verified now" });
  } catch (error) {
    return res.json({ error: error.message });
  }
});

//get user by id
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id.trim();
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Invalid ID format" });
    }
    const user = await Users.findById(id);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
