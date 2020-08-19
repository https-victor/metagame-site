const Sequelize = require("sequelize");

module.exports = new Sequelize("ttsrpg", "aboleth", "qsezwcaxd759183426", {
  host: "107.180.2.86",
  dialect: "mysql",
  operatorsAliases: 1,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
