const express = require("express");
const router = express.Router();
const Users = require("../models/UsersModel");
const bcrypt = require("bcrypt");
const { validateToken } = require("../controllers/AuthController");

require("dotenv").config();
const SECRET1 = process.env.SECRET;
const GMAIL_PASS = process.env.GMAIL_PASS;
const GMAIL = process.env.GMAIL;

router.post("/pfp", validateToken, async (req, res) => {
  const { path } = req.body;
  let user = await Users.findOne({ username: req.username });
  if (!user) {
    return res.json({ error: "This User does not exist" });
  }
  try {
    await Users.updateOne(
      {
        _id: user.id,
      },
      {
        $set: {
          image: path,
        },
      }
    );
    res.json({ updated: "Image Updated" });
  } catch (err) {
    res.json({ error: err });
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

router.post("/resetpassword", validateToken, async (req, res) => {
  let user = await Users.findOne({ username: req.username });
  const { password, password2 } = req.body;
  if (!user) {
    return res.json({ error: "This user does not exist" });
  }
  if (password !== password2) {
    return res.json({ noMatch: "Passwords dosent match" });
  }
  try {
    const encryptedPassword = await bcrypt.hash(password, 10);
    await Users.updateOne(
      {
        _id: user.id,
      },
      {
        $set: {
          password: encryptedPassword,
        },
      }
    );
    res.json({ updated: "Password Updated" });
  } catch (err) {
    res.json({ error: err });
  }
});

router.post("/deleteacc", validateToken, async (req, res) => {
  let user = await Users.findOne({ username: req.username });
  if (!user) {
    return res.json({ error: "This user does not exist" });
  }
  try {
    await Users.deleteOne({ _id: user.id });
    res.json({ updated: "Account deleted!" });
  } catch (err) {
    res.json({ error: err });
  }
});

module.exports = router;
