const Product = require('../models/product')

/**
 * RENDER - Add Product PAGE
 */
exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

/**
 * RENDER - shop page
 */
exports.getProducts = (req, res, next) => {
  Product.getAll((products) => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    })
  })
};


/**
 * ADD - a new product to the array
 */
exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title)
  product.save();

  res.redirect('/');
};
