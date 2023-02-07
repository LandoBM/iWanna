//NEW CODE -A
const router = require('express').Router()
const {User, Product, Comment} = require('../models')
const withAuth = require('../utils/auth')

router.get('/', async(req, res) => {
    try {
        const prodData = await Product.findAll({
            attributes: [
                'product_id',
                'product_name',
                'condition',
                'date',
                'user_id'
            ],
            include: [
                {
                    model: User,
                    attributes: ['id', 'name', 'email']
                }
            ]
        })
        const products = prodData.map((product) => product.get({plain: true}))
        res.render('homepage', {
            products,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/product/:id', withAuth, async(req, res) => {
    try {
        const prodData = await Product.findByPk(req.params.id,{
            attributes: [
                'product_id',
                'product_name',
                'condition',
                'date',
                'user_id'
            ],
            include: [
                {
                    model: User,
                    attributes: ['id', 'name', 'email']
                },
                {
                    model: Comment,
                    attributes: ['comment_id', 'user_id', 'product_id', 'comment'],
                    include: {
                        model: User,
                        attributes: ['id', 'name', 'email']
                    }
                }
            ]
        })
        const product = prodData.get({plain: true})
        res.render('product', {
            ...product,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err)
    }
})



module.exports = router