//read README file + instructions

const config = require("./config/config");
const PORT = config.PORT;
const MONGODB_URI = config.MONGODB_URI;

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//when we get and send requests rahom en forme json
app.use(express.json());
//whitelisting
app.use(cors());

//routes
const usersRoute = require("./routes/Users");
app.use("/users", usersRoute);
const loginRoute = require("./routes/Login");
app.use("/login", loginRoute);
const profileRoute = require("./routes/Profile");
app.use("/profile", profileRoute);
const scoresRoute = require("./routes/Scores");
app.use("/scores", scoresRoute);
const adminRoute = require("./routes/Admin");
app.use("/admin", adminRoute);

// Import and initialize cron jobs
require("./controllers/AuthController");

//connect to db
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on Server ${PORT}`);
    });
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log("Connection Failed", error);
  });
