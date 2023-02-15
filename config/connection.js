require("dotenv").config();
const Sequelize = require("sequelize");
const connString = process.env.JAWSDB_URL

const sequelize = new Sequelize(connString, {
  dialect: "mysql",
});

module.exports = sequelize;
