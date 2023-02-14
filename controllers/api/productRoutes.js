const router = require('express').Router();
const { Product } = require('../../models');
<<<<<<< HEAD
const multer  = require('multer')
const path = require('path')
//const upload = multer({ dest: '../../uploads' })
//test
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './uploads')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname)
//     }
//   })

// const upload = multer({ storage: storage })

//second test
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        console.log('TEST FILE:', file)
        // cb(null, Date.now() + path.extname(file.originalname))
        cb(null, Date.now() + path.extname(file.originalname))

    }
})

const upload = multer({ storage: storage})

router.post('/', upload.single('image'), async (req, res) => {
//router.post('/', upload.any(), async (req, res) => {
try {
    console.log('REQBODY-----',req.body);
    console.log('PATH----', req.file.path)
    console.log('REQFILE-----',req.file.path);
    //console.log(req.file.filename)
    //res.send('image uploaded')
    //res.end()
    //new along with async before (req,res)/ route was just 'img'
    const productInfo = await Product.create({
        ...req.body,
        user_id: req.session.user_test,
        path: req.file.path

    })
    console.log(productInfo)
    res.status(200).json(productInfo)
    //res.send(req.file.path)
} catch (err) {
    res.status(404).json(err)
}
})

router.get('/img', (req, res) => {
    try {
        res.send('image uploaded')
    } catch (err) {
        res.status(404).json(err)
    }
    })

=======
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
>>>>>>> fa09666b8f5398e710742e57eabaa8d5bff49bff

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
<<<<<<< HEAD
router.post('/img', upload.single('imgfile'), async (req, res) => {
    try{
        // console.log(req.body)
        // console.log(req.file.path)
        // console.log(req.session.user_id)
        //console.log('4', JSON.stringify(req.file))
=======
router.post('/upload', upload.single('image'), async (req, res) => {
    try{

        const file = req.file
        const fb = req.file.filename
        console.log(req.body)
        console.log(file)
        console.log(fb)
        console.log(req.session.user_id)
>>>>>>> fa09666b8f5398e710742e57eabaa8d5bff49bff
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