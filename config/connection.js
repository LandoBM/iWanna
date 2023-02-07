require('dotenv').config()
const Sequelize =  require('sequelize')



const sequelize = new Sequelize (process.env.MYSQL_URL)

module.exports = sequelize