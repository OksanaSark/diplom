const { Rating, Category} = require('../models/models')
const ApiError = require('../error/ApiError')

const calculateRating = (ratings) => {
    let rating = 0
    if (ratings) {
        ratings.forEach(i => {
            rating += i.rate
        })
        rating /= ratings.length
    }
    return rating
}

class RatingController {
    async create(req, res, next) {
        const { rate, user, productId } = req.body
        // console.log('I AM HERE', req.body)
        const ratedProduct = await Rating.findOne({ where: {productId, user}})
        if (ratedProduct) {
            return next(ApiError.badRequest('Пользователь уже поставил оценку этому товару!'))
        }

        await Rating.create({ rate, user, productId })

        const ratings = await Rating.findAll({ where: {productId} })

        let rating = calculateRating(ratings)
        return res.json(rating)
    }

    async getAll(req, res) {
        const { productId } = req.params
        const ratings = await Rating.findAll({where: { productId }})

        let rating = calculateRating(ratings)
        return res.json(rating)
    }
}

module.exports = new RatingController()
