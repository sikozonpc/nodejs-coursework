const express = require('express')
const path = require('path')

const adminData = require('../routes/admin')

const rootDir = require('../util/path')

const router = express.Router()

router.get('/', (req, res) => { // use get for the ROOT so it doesnt intercept the other middlewares
    const products = adminData.products
    res.render('shop', {
      products: products,
      path: '/shop',
      pageTitle: 'Shop',
    })
})

module.exports = router