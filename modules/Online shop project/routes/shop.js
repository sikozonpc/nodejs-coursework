const express = require('express')
const productsController = require('../controllers/products')

const router = express.Router()

router.get('/', productsController.renderHome)

router.get('/products', productsController.renderProducts)

router.get('/cart', productsController.renderCart)

router.get('/checkout', productsController.renderCheckout)

router.get('/orders', productsController.renderOrders)

module.exports = router
