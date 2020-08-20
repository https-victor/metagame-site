const { DataTypes } = require("sequelize");
const database = require("../database/index");
const User = require("./User");

const Campaign = database.define("campaign", {
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
});

// Campaign.belongsTo(User, { foreignKey: "gmId", as: "gm" });

module.exports = Campaign;
