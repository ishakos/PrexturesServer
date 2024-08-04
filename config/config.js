// npm install dotenv
require("dotenv").config();

const cors = require("cors");
app.use(cors());

module.exports = {
  PORT: process.env.PORT || 3001,
  MONGODB_URI: process.env.MONGODB_URI || "your-default-mongodb-uri-here",
};

//only used these exports in index.js
