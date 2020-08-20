const { DataTypes } = require("sequelize");
const database = require("../database/index");
const Campaign = require("./Campaign");

const User = database.define("user", {
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

User.hasMany(Campaign, { foreignKey: "gmId", as: "campaigns" });

module.exports = User;
