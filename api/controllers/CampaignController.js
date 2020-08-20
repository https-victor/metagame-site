const Campaign = require("../models/Campaign");
const User = require("../models/User");

module.exports = {
  // Get all campaigns
  async getAll(req, res) {
    try {
      const campaigns = await Campaign.findAll();
      return res.json(campaigns);
    } catch (error) {
      console.log(error);
    }
  },

  // Get all campaigns by Id
  async getAllById(req, res) {
    const { userId } = req.params;
    try {
      const user = await User.findByPk(userId, {
        include: { association: "campaigns" },
      });
      return res.json(user);
    } catch (error) {
      console.log(error);
    }
  },

  // Create a new campaign
  async create(req, res) {
    const { userId } = req.params;
    const { name, description } = req.body;
    try {
      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(400).json({
          error: "User not found",
        });
      }

      const campaign = await Campaign.create({
        name,
        description,
        gmId: userId,
      });
      return res.json(campaign);
    } catch (error) {
      console.log(error);
    }
  },
};
