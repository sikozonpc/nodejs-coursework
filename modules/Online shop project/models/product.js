const fs = require('fs')
const path = require('path')
const rootDir = require('../util/path')

const FILE = path.join(rootDir, 'data', 'products.json')

/** Returns a list of all of the products from its file */
const getProductsFromFile = (cb) => {
  fs.readFile(FILE, (err, data) => {
    let products = []

    if (!err) products = JSON.parse(data)

    cb(products)
  })
}

/**
 * Represents a single Product entity
 */
module.exports = class Product {
  constructor (title, imageUrl, description, price) {
    this.title = title
    this.image = imageUrl
    this.description = description
    this.price = price
  }

  /** returns all of the existing products */
  static getAll (cb) {
    getProductsFromFile(cb)
  }

  /** returs a product by title */
  getOne (title) { }

  /** saves the product to the database */
  save () {
    getProductsFromFile((products) => {
      products.push(this)

      fs.writeFile(FILE, JSON.stringify(products), (err) => {
        console.log(err)
      })
    })
  }
}
