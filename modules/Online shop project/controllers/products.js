const Product = require('../models/product')

/**
 * RENDER - Home Page
 */
exports.renderHome = (req, res, next) => {
  res.render('shop/index', {
    pageTitle: 'Home',
    path: '/'
  })
}

/**
 * RENDER - Shop page
 */
exports.renderProducts = (req, res, next) => {
  Product.getAll((products) => {
    res.render('shop/products', {
      prods: products,
      pageTitle: 'Products List',
      path: '/products',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    })
  })
}

/**
 * RENDER - Cart page
 */
exports.renderCart = (req, res, next) => {
  res.render('shop/cart', {
    pageTitle: 'Cart',
    path: '/cart'
  })
}

exports.renderCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    pageTitle: 'Checkout',
    path: '/checkout'
  })
}
