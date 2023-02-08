const router = require('express').Router();
const { Comment } = require('../../models/Comment');
const withAuth = require('../../utils/auth')

router.post('/', withAuth, async (req, res) => {
    try{
        const commentInfo = await Comment.create(req.body)
        
        req.session.save(()=> {
            req.session.user_id = userInfo.user_id
        })

    }catch (err){
        res.status(404).json(err)
    }
})

//NEW CODE -A
module.exports = router
