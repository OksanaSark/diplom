const { Order, OrderInfo } = require('../models/index')
const ApiError = require('../error/apiError');

class OrderController {
    async add(req, res, next) {
        try {
            const { orderId, productId, count } = req.body
            if (!orderId || !productId) {
                next(ApiError.badRequest(('Неверные параметры')))
            }

            await OrderInfo.create({ orderId, productId, count })

            return res.json({message : 'Товар добавлен'})
        } catch (e) {
            next(ApiError.badRequest((e.message)))
        }
    }

    async delete(req, res, next) {
        try {
            const { productId, orderId } = req.body
            if (!orderId || !productId) {
                next(ApiError.badRequest(('Неверные параметры')))
            }

            await OrderInfo.destroy({ where: { productId, orderId } })

            return res.json({message: 'Товар удален'})
        } catch (e) {
            next(ApiError.badRequest((e.message)))
        }
    }

    async get(req, res, next) {
        try {
            const { userId } = req.body

            const basket = await Order.findOne(
                {
                    where: { userId, status: false },
                    include: [{ model: OrderInfo, as: 'orderInfo' }]
                }
            )

            return res.json(basket)
        } catch (e) {
            next(ApiError.badRequest((e.message)))
        }
    }
}

module.exports = new OrderController()