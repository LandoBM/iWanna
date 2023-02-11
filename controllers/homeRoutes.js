//NEW CODE -A
const router = require("express").Router();
const { User, Product, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const prodData = await Product.findAll({
      attributes: [
        "product_id",
        "product_name",
        "condition",
        "date",
        "user_id",
      ],
      include: [
        {
          model: User,
          attributes: ["id", "name", "email"],
        },
      ],
    });
    //console.log(prodData)
    const products = prodData.map((products) => products.get({ plain: true }));
    //console.log(products)
    res.render("homepage", {
      products,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
  // res.render('homepage')
});

router.get("/product/:id", withAuth, async (req, res) => {
  try {
    const prodData = await Product.findByPk(req.params.id, {
      attributes: [
        "product_id",
        "product_name",
        "condition",
        "date",
        "user_id",
      ],
      include: [
        // User,
        // {
        //     model: Comment,
        //     include: [User]
        // }
        {
          model: User,
          attributes: ["id", "name", "email"],
        },
        {
          model: Comment,
          attributes: ["comment_id", "user_id", "product_id", "comment"],
          include: {
            model: User,
            attributes: ["id", "name", "email"],
            model: Product,
            attributes: [
              "product_id",
              "product_name",
              "condition",
              "date",
              "user_id",
            ],
          },
        },
      ],
    });
    //const product = prodData.map((product) => product.get({plain: true}))
    const product = prodData.get({ plain: true });
    console.log("PRODUCT:", product);
    res.render("product", {
      ...product,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//TESTING

router.get("/addproduct", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [
        {
          model: Product,
          attributes: [
            "product_id",
            "product_name",
            "condition",
            "date",
            "user_id",
          ],
        },
      ],
    });

    //console.log('USER DATA:', userData)
    const user = userData.get({ plain: true });
    //console.log(user)
    res.render("addproduct", {
      ...user,
      logged_in: true,
    });
    //res.render('createpost')
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/editproduct/:id", withAuth, async (req, res) => {
  try {
    const prodData = await Product.findByPk(req.params.id, {
      attributes: [
        "product_id",
        "product_name",
        "condition",
        "date",
        "user_id",
      ],
      include: [
        {
          model: User,
          attributes: ["id", "name", "email"],
        },
        {
          model: Comment,
          attributes: ["comment_id", "user_id", "product_id", "comment"],
          include: {
            model: User,
            attributes: ["id", "name", "email"],
          },
        },
      ],
    });
    const product = prodData.get({ plain: true });
    console.log(product);
    res.render("editproduct", {
      product,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/deletecom/:id", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id, {
      attributes: ["comment_id", "user_id", "product_id", "comment"],
    //   include: [
    //     {
    //         model: Product,
    //         attributes: [
    //           "product_id",
    //           "product_name",
    //           "condition",
    //           "date",
    //           "user_id",
    //         ],
    //     },
    //     {
    //         include: [
    //         {
    //             model: User,
    //             attributes: ["id", "name", "email"],
    //         },
    //         {
    //         model: Product,
    //         attributes: [
    //           "product_id",
    //           "product_name",
    //           "condition",
    //           "date",
    //           "user_id",
    //         ]},
    //     ],
    //     }
    //   ],
    });
    // const products = prodData.map((products) => products.get({ plain: true }));
    const comments = commentData.map((comments) => comments.get({ plain: true }));
    console.log(comments);
    res.redirect("/product", {
      comments,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/login", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/addproduct");
    return;
  }
  res.render("login");
});

module.exports = router;
