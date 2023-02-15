const router = require('express').Router();
const { Product } = require('../../models');
const path = require('path')
const multer  = require('multer')
const storage = multer.diskStorage({ 
    dest: (req, file, cb) => {
        cb(null, '../../images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    } 
})
const upload = multer({storage: storage})

//keep
// const withAuth = require('../../utils/auth')
// router.post('/', async (req, res) => {
//     try{
//         console.log(req.body)
//         console.log(req.session.user_id)
//         const productInfo = await Product.create({
//             ...req.body,
//             user_id: req.session.user_test,

//         //     //product_id: req.session.user_id
//         //     // return res.status(201).json({
//         //     //     productInfo,
//         //     // });
//         })
//         console.log('PRODUCT INFO ---------', productInfo)
//         // req.session.save(() => {
//         //     req.session.id = productInfo.id
//         // })
//         res.status(200).json(productInfo)
//     } catch (err) {
//         res.status(404).json(err)
//     }
// })

const withAuth = require('../../utils/auth')
router.post('/upload', upload.single('image'), async (req, res) => {
    try{

        const file = req.file
        const fb = req.file.filename
        console.log(req.body)
        console.log(file)
        console.log(fb)
        console.log(req.session.user_id)
        const productInfo = await Product.create({
            ...req.body,
            user_id: req.session.user_test,

        })
        console.log('PRODUCT INFO ---------', productInfo)
        res.status(200).json(productInfo)
        res.send(file)
    } catch (err) {
        res.status(404).json(err)
    }
})


router.delete('/:id', withAuth, async (req,res) => {
    console.log('-------REQ.PARAMS', req.params.id)
    try{
        const productData = await Product.destroy({
            where: {
                product_id: req.params.id,
                //user_id: req.session.user_test
            }
        })
        if(!productData) {
            res.status(404).json({message: `There is no product related to this id!`})
            return
        }
        res.status(200).json(productData)
    } catch(err) {
        res.status(404).json()
    }
})

//keep
// router.post('/addproduct', withAuth, async (req, res) => {
//     try{
//         const productInfo = await Product.create(req.body)
//         console.log(productInfo)
//         req.session.save(() => {
//             req.session.id = productInfo.id
//         })
//         res.status(200).json(productInfo)
//     }catch (err) {
//         res.status(404).json(err)
//     }
// })

//new
router.post('/addproduct', withAuth, upload.single('uploaded_file'), async (req, res) => {
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

router.put('/:id', withAuth, async (req, res) => {
    try{
        const productInfo = await Product.update({
            product_name: req.body.product_name,
            condition: req.body.condition
        },
        {
            where: {
                product_id: req.params.id
            }
        })
       if(!productInfo){
        res.status(404).json({ message: 'No item found'})
        return
       }
       res.status(200).json(productInfo)
    } catch (err) {
        res.status(500).json(err)
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