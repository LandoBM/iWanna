const sequelize = require('../config/connection')
const { User, Product, Comment } = require('../models')

const userData = require('./userData.json')
const prodData = require('./prodData.json')
const commentData = require('./commentData.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true })


const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true
})

for (const product of prodData) {
    await Product.create({
        ...product,
        id: users.id
    })
}

for (const comment of commentData){
    await Comment.create({
        ...comment,
        id: users.id
    })
}

process.exit(0)
}

seedDatabase()