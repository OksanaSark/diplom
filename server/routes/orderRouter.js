const Router = require('express')
const router = new Router()
const orderController = require('../controllers/orderController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', authMiddleware, orderController.get)
router.post('/', authMiddleware, orderController.create)

module.exports = router