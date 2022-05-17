const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const productRouter = require('./productRouter')
const categoryRouter = require('./categoryRouter')
const ratingRouter = require('./ratingRouter')
const orderRouter = require('./orderRouter')
const basketRouter = require('./basketRouter')
const authMiddleware = require('../middleware/authMiddleware')


router.use('/user', userRouter)
router.use('/category', categoryRouter)
router.use('/product', productRouter)
router.use('/rating', authMiddleware, ratingRouter)
router.use('/order', authMiddleware, orderRouter)
router.use('/basket', authMiddleware, basketRouter)

module.exports = router