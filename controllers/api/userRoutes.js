const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req,res) => {
    try{
        const userInfo = await User.create(req.body)

        req.session.save(() => {
            req.session.user_id = userInfo.id
            req.session.logging_in = true;

            res.status(200).json(userInfo)
        })
    } catch (err) {
        res.status(404).json(err)
    }
})





//NEW CODE -A
module.exports = router