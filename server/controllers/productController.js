const { Product, ProductInfo, Rating } = require('../models/index')
const ApiError = require('../error/ApiError')
const getRateData = require('../helpers/getRateData')


const postProductInfo = async (title, description, productId) => {
    await ProductInfo.create({
        title,
        description,
        productId
    })
}

class ProductController {
    async create(req, res, next) {
        try {
            const { name, price, categoryId, info } = req.body
            const imageName = req.file.originalname
            const imageType = req.file.mimetype
            const imageData = req.file.buffer
            const product = await Product.create({ name, price, categoryId, imageName, imageType, imageData })

            if (info) {
                const parsedInfo = JSON.parse(info)
                await Promise.all(parsedInfo.map(async i => {
                    try {
                        await postProductInfo(i.title, i.description, product.id)
                    } catch (e) {
                        next(ApiError.badRequest((e.message)))
                    }
                }))
            }

            return res.json(product)
        } catch (e) {
            next(ApiError.badRequest((e.message)))

        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params

            await ProductInfo.destroy({ where: { productId: id } })
            const deletedProduct = await Product.destroy({ where: { id }})

            return res.json(deletedProduct)
        } catch (e) {
            next(ApiError.badRequest((e.message)))
        }
    }

    async getAll(req, res, next) {
        try {
            const { categoryId, limit = 9 , page = 1 } = req.query
            const offset = page * limit - limit

            const query = categoryId > 0
                ? { where: { categoryId }, limit, offset, include: [{ model: Rating, as: 'rateInfo' }] }
                : { include: [{ model: Rating, as: 'rateInfo' }], limit, offset }

            const products = await Product.findAndCountAll(query)

            const productsWithRateInfo = products.rows.map((product) => ({
                    ...product.dataValues,
                    rateInfo: getRateData(product.rateInfo)
            }))

            return res.json({ ...products, rows: productsWithRateInfo  })
        } catch (e) {
            next(ApiError.badRequest((e.message)))
        }
    }

    async getOne(req, res, next) {
        try {
            const { id } = req.params
            const { userId } = req.query

            const product = await Product.findOne(
                {
                    where: { id },
                    include: [{ model: ProductInfo, as: 'info' }, { model: Rating, as: 'rateInfo' }]
                }
            )

            if (!product) {
                return next(ApiError.notFound('Нет такой трубы, дружок!)'))
            }

            return res.json({ ...product.dataValues, rateInfo: getRateData(product.rateInfo, userId) })
        } catch (e) {
            next(ApiError.badRequest((e.message)))
        }
    }
}

module.exports = new ProductController()
