require('dotenv').config()
const Sequelize =  require('sequelize')


<<<<<<< HEAD

const sequelize = new Sequelize (process.env.MYSQL_URL)
=======
const sequelize = new Sequelize (process.env.MYSQL_URI)
>>>>>>> a8e2db441a8329f2421f1873d58f8d06999b4af7

module.exports = sequelize