const { Product, ProductInfo, Rating } = require('../models')
const getRateData = require('./getRateData')
const ApiError = require('../error/ApiError')


module.exports = async function (userId, orderInfo, next) {
    const products = []

    if (orderInfo.length) {
        await Promise.all(orderInfo.map(async i => {
            try {
                const product = await Product.findOne(
                    {
                        where: { id: i.productId },
                        include: [{ model: ProductInfo, as: 'info' }, { model: Rating, as: 'rateInfo' }]
                    }
                )

                if (product) {
                    products.push({
                        ...product['dataValues'],
                        rateInfo: getRateData(product.rateInfo, userId),
                        count: i.count
                    })
                }

            } catch (e) {
                next(ApiError.badRequest((e.message)))
            }
        }))
    }

    return products
}
