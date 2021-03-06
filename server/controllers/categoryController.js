const { Category } = require('../models/index')
const ApiError = require('../error/ApiError')
const { Product } = require('../models')

class CategoryController {
    async create(req, res, next) {
        try {
            const { name } = req.body
            const category = await Category.create({ name })
            return res.json(category)
        } catch (e) {
            next(ApiError.badRequest((e.message)))
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params

            await Product.destroy({ where: { categoryId: id }})
            const deletedCategory = await Category.destroy({ where: { id }})

            return res.json(deletedCategory)
        } catch (e) {
            next(ApiError.badRequest((e.message)))
        }
    }

    async getAll(req, res, next) {
        try {
            const categories = await Category.findAll()
            return res.json(categories)
        } catch (e) {
            next(ApiError.badRequest((e.message)))
        }
    }
}

module.exports = new CategoryController()
