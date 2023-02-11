const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth')

//TESTING 
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
router.delete('/:id', withAuth, async (req,res) => {
    try{
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            }
        })
        if(!commentData) {
            res.status(404).json({message: `There is no comment related to this id!`})
            return
        }
    } catch(err) {
        res.status(404).json()
    }
})

//NEW CODE -A
module.exports = router
