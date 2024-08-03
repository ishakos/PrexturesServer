const express = require("express");
const router = express.Router();
const { Fixture } = require("../models/FootballModel");
const { validateAdmin } = require("../controllers/AuthController");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const SECRET3 = process.env.SECRET3;
const admin = process.env.ADMIN;
const adminPass = process.env.ADMIN_PASS;

router.post("/fulltime", validateAdmin, async (req, res) => {
  const { number, arrayData } = req.body;
  const fixture = await Fixture.findOne({ number: number });
  if (!fixture) {
    return res.status(404).send("fixture not found");
  }
  try {
    await Fixture.updateOne(
      {
        number: number,
      },
      {
        $set: {
          fullTime: arrayData,
        },
      }
    );
    res.json({ updated: "Fulltime Updated" });
  } catch (err) {
    res.json({ error: err });
  }
});

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  if (username !== admin) {
    res.json({ error: "Admin Does Not Exist!" });
  } else {
    bcrypt.compare(password, adminPass).then((match) => {
      if (match) {
        //authentification
        const adminToken = jwt.sign({ username: admin }, SECRET3);
        res.json(adminToken);
      } else {
        res.json({ error: "Wrong Password!" });
      }
    });
  }
});

/*
router.post("/deadlined", async (req, res) => {
  const fixture = await Fixture.findOne({ number: 1 });
  if (!fixture) {
    return res.status(404).send("fixture not found");
  }
  try {
    await Fixture.updateOne(
      {
        number: 1,
      },
      {
        $set: {
          deadline: "2024-08-16T17:00:00.000+00:00",
        },
      }
    );
    res.json({ updated: "deadline Updated" });
  } catch (err) {
    res.json({ error: err });
  }
});
*/

module.exports = router;
