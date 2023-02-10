const router = require('express').Router();
const { Product } = require('../../models');

//TESTING 
const withAuth = require('../../utils/auth')
router.post('/', withAuth, async (req, res) => {
    try{
        const productInfo = await Product.create({
            ...req.body,
            user_id: req.session.user_id
        })
        console.log('PRODUCT INFO ---------', productInfo)
        // req.session.save(() => {
        //     req.session.id = productInfo.id
        // })
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

router.post('/addproduct', withAuth, async (req, res) => {
    try{
        const productInfo = await Product.create(req.body)
        console.log(productInfo)
        req.session.save(() => {
            req.session.id = productInfo.id
        })
        res.status(200).json(productInfo)
    }catch (err) {
        res.status(404).json(err)
    }
})

// router.post('/', async(req, res) => {
//     try {
//         const newProd = await Product.create({
//             ...req.body,
//             product_id: req.session.id
//             // title: req.session.title,
//             // post: req.session.post
//         })
//         console.log('NEW PROD',newProd)
//         res.status(200).json(newProd)
//     } catch(err) {
//         console.log(err)
//         res.status(500).json(err)
//     }
// })

//NEW CODE -A
module.exports = router