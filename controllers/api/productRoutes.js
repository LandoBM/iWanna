const router = require('express').Router();
const { Product } = require('../../models/Product');
const withAuth = require('../../utils/auth')


router.post('/', withAuth, async (req, res) => {
    try{
        const productInfo = await Product.create(req.body)

        req.session.save(() => {
            req.session.user_id = userInfo.user_id
        })
        
        res.status(200).json(productInfo)
    }catch (err) {
        res.status(404).json(err)
    }
})

router.delete('/:id', withAuth, async (req,res) => {
    try{
        const productData = await Product.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            }
        })

        if(!productData) {
            res.status(404).json({message: `There is no product related to this id!`})
            return
        }

    } catch(err) {
        res.status(404).json()
    }
})

module.exports = router