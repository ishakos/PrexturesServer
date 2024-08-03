const express = require("express");
const router = express.Router();
const { Team, Match, Fixture } = require("../models/FootballModel");
const Users = require("../models/UsersModel");
const { validateToken } = require("../controllers/AuthController");

require("dotenv").config();
const SECRET1 = process.env.SECRET;
const GMAIL_PASS = process.env.GMAIL_PASS;
const GMAIL = process.env.GMAIL;

router.get("/teams", async (req, res) => {
  try {
    const teams = await Team.find({});
    res.status(200).json({ teams: teams });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/matches", async (req, res) => {
  try {
    const matches = await Match.find({});
    res.status(200).json({ matches: matches });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/fixtures", async (req, res) => {
  try {
    const fixtures = await Fixture.find({});
    res.status(200).json({ fixtures: fixtures });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/predictions", validateToken, async (req, res) => {
  let user = await Users.findOne({ username: req.username });
  if (!user) {
    return res.status(404).send("User not found");
  }
  res.status(200).json({ predictions: user.predictions });
});

router.post("/predictions", validateToken, async (req, res) => {
  const now = new Date();
  const isoString = now.toISOString();
  const { number, newPrediction } = req.body;
  const user = await Users.findOne({ username: req.username });
  const fixture = await Fixture.findOne({ number: Number(number) });
  if (!fixture) {
    return res.status(404).send("fixture not found");
  }
  if (!user) {
    return res.status(404).send("user not found");
  }
  if (isoString >= fixture.deadline) {
    res.json({ expired: "Deadline is over!" });
  }

  try {
    const updateObject = {};
    updateObject[`predictions.${number - 1}.fixturePrediction`] = newPrediction;
    await Users.updateOne(
      {
        username: user.username,
      },
      {
        $set: updateObject,
      }
    );
    res.json({ updated: "fixturePrediction Updated" });
  } catch (err) {
    res.json({ error: err.message });
  }
});

module.exports = router;
