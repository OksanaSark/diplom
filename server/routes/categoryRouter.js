const Router = require('express')
const router = new Router()
const categoryController = require('../controllers/categoryController')
const authMiddleware = require('../middleware/authMiddleware')
const roleMiddleware = require('../middleware/roleMiddleware')

router.get('/', categoryController.getAll)
router.post('/', authMiddleware, roleMiddleware('ADMIN'), categoryController.create)
router.delete('/:id', authMiddleware, roleMiddleware('ADMIN'), categoryController.delete)

module.exports = router
