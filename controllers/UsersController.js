//hdi function dok nexportiwha w n5dmo biha f other files

const Users = require("../models/UsersModel");

const getUsers = async (req, res) => {
  try {
    const users = await Users.find({});
    res.status(200).json({ users: users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
};
