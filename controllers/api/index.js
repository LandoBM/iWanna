const router = require('express').Router()
const userRoutes = require('./userRoutes')
const productRoutes = require('./productRoutes')
const commentRoutes = require('./commentRoutes')

router.use('/user', userRoutes)
router.use('/product', productRoutes)
router.use('/comment', commentRoutes)

module.exports = router
