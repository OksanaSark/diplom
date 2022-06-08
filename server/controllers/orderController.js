const { Order, OrderInfo } = require('../models/index')
const ApiError = require('../error/ApiError')
const getProducts = require('../helpers/getProducts')
const getTotalOrderPrice = require('../helpers/getTotalOrderPrice')

class OrderController {
    async create(req, res, next) {
        try {
            const { orderId, userId } = req.body
            const updatedOrder = await Order.update(
                { status: true },
                { where: { id: orderId } }
            )

            await Order.create({ userId })

            return res.json(updatedOrder)
        } catch (e) {
            next(ApiError.badRequest((e.message)))
        }
    }

    async getAll(req, res, next) {
        try {
            const { userId } = req.query

            const orders = await Order.findAll(
                {
                    where: { userId, status: true },
                    include: [{ model: OrderInfo, as: 'orderInfo' }]
                }
            )

            const filteredOrders = orders.sort((a, b) => {
                return (a.id < b.id) ? -1 : ((a.id > b.id) ? 1 : 0);
            })

            const result = await Promise.all(filteredOrders.map(async (order) => {
                const products = await getProducts(userId, order.dataValues.orderInfo, next)

                return {
                    id: order.id,
                    date: order.updatedAt,
                    products,
                    totalPrice: getTotalOrderPrice(products)
                }
            }))

            return res.json(result)
        } catch (e) {
            next(ApiError.badRequest((e.message)))
        }
    }
}

module.exports = new OrderController()
