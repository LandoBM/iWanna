require("dotenv").config();
const Sequelize = require("sequelize");
const connString = process.env.JAWSDB_URI

const sequelize = new Sequelize(connString, {
  dialect: "mysql",
});

module.exports = sequelize;
