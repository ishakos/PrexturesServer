//middleware is a function that runs before a request, and it basicly checks if u wanna continue with the request or no

const { verify } = require("jsonwebtoken");
const bcrypt = require("bcrypt");

require("dotenv").config();
const secret = process.env.SECRET;
const secret3 = process.env.SECRET3;

//user auth
const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");
  if (!accessToken) {
    return res.json({ error: "user not logged in" });
  }
  try {
    const validToken = verify(accessToken, secret);
    req.username = validToken.username;
    if (validToken) {
      return next();
    }
  } catch (err) {
    return res.json({ error: err });
  }
};

//admin auth
const validateAdmin = (req, res, next) => {
  const adminAccess = req.header("adminAccess");
  if (!adminAccess) {
    return res.status(401).json({ error: "Admin not authenticated" });
  }
  try {
    const validToken = verify(adminAccess, secret3);
    if (validToken) {
      return next();
    }
  } catch (err) {
    return res.json({ error: "Error occured" });
  }
};

module.exports = { validateToken, validateAdmin };
