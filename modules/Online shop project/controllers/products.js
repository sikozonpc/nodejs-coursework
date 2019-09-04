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
  });
};

/**
 * RENDER - Admin Products
 */
exports.renderAdminProducts = (req, res, next) => {
  res.render('admin/products', {
    pageTitle: 'Admin Products List',
    path: '/admin/products',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  })
}

/**
 * RENDER - Home Page
 */
exports.renderHome = (req, res, next) => {
  res.render('shop/index', {
    pageTitle: 'Home',
    path: '/',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  })
}

/**
 * RENDER - Shop page
 */
exports.getProducts = (req, res, next) => {
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
};

/**
 * RENDER - Admnin products page
 */
exports.renderAdminProducts = (req, res, next) => {
  Product.getAll((products) => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products List',
      path: 'admin/products',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    })
  })
};

/**
 * RENDER - Cart page
 */
exports.renderCart = (req, res, next) => {
  res.render('shop/cart', {
    pageTitle: 'Cart',
    path: '/cart',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  })
};

exports.renderCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    pageTitle: 'Checkout',
    path: '/checkout',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  })
}


/**
 * ADD - a new product to the array
 */
exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title)
  product.save();

  res.redirect('/products');
};
