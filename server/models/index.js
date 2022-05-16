const Product = require('./product')
const Order = require('./order')
const OrderInfo = require('./orderInfo')
const ProductInfo = require('./productInfo')
const Category = require('./category')
const Rating = require('./rating')
const User = require('./user')

Category.hasMany(Product)
Product.belongsTo(Category)

Order.hasMany(OrderInfo, { as: 'orderInfo' })
OrderInfo.belongsTo(Order)

Product.hasMany(OrderInfo)
OrderInfo.belongsTo(Product)

Product.hasMany(Rating, {as: 'rateInfo'})
Rating.belongsTo(Product)

Product.hasMany(ProductInfo, { as: 'info' })
ProductInfo.belongsTo(Product)

User.hasMany(Order)
Order.belongsTo(User)

module.exports = {
    Product,
    Order,
    ProductInfo,
    Category,
    Rating,
    User,
    OrderInfo
}
