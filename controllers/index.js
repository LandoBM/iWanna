const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;

//NEW CODE STARTS HERE -A
const apiRoutes = require('./api')
const homeRoutes = require('./homeRoutes')

router.use('/api', apiRoutes)
router.use('/', homeRoutes)
