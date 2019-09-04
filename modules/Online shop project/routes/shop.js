const path = require('path');
const express = require('express');
const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.renderHome);

router.get('/products', productsController.getProducts)

router.get('/cart', productsController.renderCart)

router.get('/checkout', productsController.renderCheckout)

module.exports = router;
