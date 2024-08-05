const mongoose = require("mongoose");

const PredictionSchema = new mongoose.Schema({
  fixtureNumber: {
    type: Number,
    required: true,
  },
  fixturePrediction: {
    type: [String],
    required: true,
  },
});

const UsersSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter a Username!"],
    },
    email: {
      type: String,
      required: [true, "Please enter an Email!"],
    },
    password: {
      type: String,
      required: [true, "Please enter a Password!"],
    },
    image: {
      type: String,
      required: false,
      default: "defaults/pfp",
    },
    predictions: {
      type: [PredictionSchema],
      required: true,
      default: Array.from({ length: 38 }, (_, i) => ({
        fixtureNumber: i + 1,
        fixturePrediction: ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
      })),
    },
    verified: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("Users", UsersSchema);

module.exports = User;
