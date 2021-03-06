const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/refreshToken', authMiddleware, userController.refreshToken)
router.post('/registration', userController.registration)
router.post('/login', userController.login)

module.exports = router
