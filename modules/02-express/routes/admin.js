const express = require('express')
const path = require('path')

const rootDir = require('../util/path')

const router = express.Router()

// array of products
const products = []

/**
 * 
 */
router.get('/add-product', (req, res) => {
  res.render('add-product', { 
    path: '/admin/add-product',
    pageTitle: 'Add new Product',
   })
})

router.post('/add-product', (req, res) => {
  products.push({ title: req.body.title })

  res.redirect('/')
})

module.exports.routes = router
module.exports.products = products