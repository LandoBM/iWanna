const router = require('express').Router()

//NEW CODE STARTS HERE -A
const apiRoutes = require('./api')
const homeRoutes = require('./homeRoutes')

router.use('/api', apiRoutes)
router.use('/', homeRoutes)

module.exports = router