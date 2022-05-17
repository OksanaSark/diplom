const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')

router.get('/', basketController.get)
router.post('/', basketController.add)
router.delete('/', basketController.delete)

module.exports = router