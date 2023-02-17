const router = require('express').Router();
const { Comment } = require('../../models');

//TESTING 
const withAuth = require('../../utils/auth')
router.post('/', withAuth, async (req, res) => {
    try{
        console.log('PRODUCT_ID', req.params.id)
        console.log('PRODUCT_ID', req.query.id)
        const commentInfo = await Comment.create({
            ...req.body,
            user_id: req.session.user_test,
            product_id: req.params.id
        })
        console.log('PRODUCT_ID', req.params.id)
        console.log('PRODUCT_ID', req.query.id)
        res.status(200).json(commentInfo)
    }catch (err){
        res.status(404).json(err)
    }
})

router.post('/:id', withAuth, async (req, res) => {
    try{
        console.log('PRODUCT_ID', req.params.id)
        console.log('PRODUCT_ID', req.query.id)
        const commentInfo = await Comment.create({
            ...req.body,
            user_id: req.session.user_test,
            product_id: req.params.id
        })
        console.log('PRODUCT_ID', req.params.id)
        console.log('PRODUCT_ID', req.query.id)
        res.status(200).json(commentInfo)
    }catch (err){
        res.status(404).json(err)
    }
})

// router.delete('/:id', withAuth, async (req,res) => {
//     try{
//         const commentData = await Product.destroy({
//             where: {
//                 id: req.params.id,
//                 user_id: req.session.user_id
//             }
//         })
//         if(!commentData) {
//             res.status(404).json({message: `There is no comment related to this id!`})
//             return
//         }
//     } catch(err) {
//         res.status(404).json()
//     }
// })

router.delete('/:id', withAuth, async (req,res) => {
    console.log('-------REQ.PARAMS', req.params.id)
    try{
        const commentData = await Comment.destroy({
            where: {
                comment_id: req.params.id,
                //user_id: req.session.user_test
            }
        })
        if(!commentData) {
            res.status(404).json({message: `There is no product related to this id!`})
            return
        }
        res.status(200).json(commentData)
    } catch(err) {
        res.status(404).json()
    }
})

//NEW CODE -A
module.exports = router