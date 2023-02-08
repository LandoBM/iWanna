const User = require('./User')
const Product = require('./Product')
const Comment = require('./Comment')

User.hasMany(Product, {
    foreignKey: 'user_id'
})

Product.belongsTo(User, {
    foreignKey: 'user_id'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
Comment.belongsTo(Product, {
    foreignKey: 'product_id'
});
  
User.hasMany(Comment, {
    foreignKey: 'user_id'
});
  
Product.hasMany(Comment, {
    foreignKey: 'product_id'
});

//NEW CODE -A
module.exports = {
    User,
    Product,
    Comment
}