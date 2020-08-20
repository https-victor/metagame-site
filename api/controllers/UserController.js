const User = require("../models/User");

module.exports = {
  // Get all users
  async getAll(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      console.log(error);
    }
  },

  // Create a new user
  async create(req, res) {
    const { name, email, password } = req.body;
    try {
      const user = await User.create({ name, email, password });
      return res.json(user);
    } catch (error) {
      console.log(error);
    }
  },
};
