const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsController.renderAddProduct);
// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

//TODO: should this be a diffrent set of products ?
router.get('/products', productsController.renderAdminProducts)

module.exports = router;
