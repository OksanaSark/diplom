const Router = require('express')
const router = new Router()
const multer  = require('multer')
const productController = require('../controllers/productController')
const authMiddleware = require('../middleware/authMiddleware')
const roleMiddleware = require('../middleware/roleMiddleware')

const storage = multer.memoryStorage()
const upload = multer({ storage: storage }).single('img')

router.get('/', productController.getAll)
router.get('/:id', productController.getOne)
router.post('/', authMiddleware, roleMiddleware('ADMIN'), upload, productController.create)
router.delete('/:id', authMiddleware, roleMiddleware('ADMIN'), productController.delete)

module.exports = router
