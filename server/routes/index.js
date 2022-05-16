const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const productRouter = require('./productRouter')
const categoryRouter = require('./categoryRouter')
const ratingRouter = require('./ratingRouter')
const orderRouter = require('./orderRouter')
const basketRouter = require('./basketRouter')

router.use('/user', userRouter)
router.use('/category', categoryRouter)
router.use('/product', productRouter)
router.use('/rating', ratingRouter)
router.use('/order', orderRouter)
router.use('/basket', basketRouter)

module.exports = router