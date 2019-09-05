const Product = require('../models/product')

/**
 * RENDER - Add Product PAGE
 */
exports.renderAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  })
}

/**
 * RENDER - Admin Products
 */
exports.renderAdminProducts = (req, res, next) => {
  Product.getAll((products) => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Products List',
      path: 'admin/products',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    })
  })
}

/**
 * ADD - a new product to the array
 */
exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title)
  product.save()

  res.redirect('/products')
}
