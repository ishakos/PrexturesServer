const mongoose = require("mongoose");

const teamsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a team name!"],
    },
    shortname: {
      type: String,
      required: [true, "Please enter a team short name!"],
    },
    image: {
      type: String,
      required: [true, "Please enter an image URL!"],
      default: "defaults/pfp",
    },
  },
  {
    timestamps: true,
  }
);

const matchSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a match name!"],
    },
    home: {
      type: String,
      required: [true, "Please enter the home team!"],
    },
    away: {
      type: String,
      required: [true, "Please enter the away team!"],
    },
    numF: {
      type: Number,
      required: [true, "Please enter the fixture number!"],
    },
    numM: {
      type: Number,
      required: [true, "Please enter the match number!"],
    },
  },
  {
    timestamps: true,
  }
);

// Define Fixture Schema
const fixturesSchema = new mongoose.Schema(
  {
    number: {
      type: Number,
      required: [true, "Please enter a fixture number!"],
    },
    deadline: {
      type: Date,
      required: [true, "Please enter a fixture deadline!"],
    },
    matches: {
      type: [matchSchema],
      required: [true, "Please enter matches!"],
    },
    fullTime: {
      type: [String],
      required: [true, "Please enter the full time!"],
    },
  },
  {
    timestamps: true,
  }
);

// Create Models
const Team = mongoose.model("Team", teamsSchema);
const Match = mongoose.model("Match", matchSchema);
const Fixture = mongoose.model("Fixture", fixturesSchema);

// Export Models
module.exports = { Team, Match, Fixture };
