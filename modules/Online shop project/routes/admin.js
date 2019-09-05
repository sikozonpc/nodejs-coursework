const path = require('path')

const express = require('express')

const adminController = require('../controllers/admin')

const router = express.Router()

// /admin/add-product => GET
router.get('/add-product', adminController.renderAddProduct)
// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct)

// TODO: should this be a diffrent set of products ?
router.get('/products', adminController.renderAdminProducts)

module.exports = router
