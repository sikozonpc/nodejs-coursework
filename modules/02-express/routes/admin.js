const express = require('express')

const router = express.Router()

router.get('/add-product', (req, res) => {
    res.send('<input type="text" placeholder="Product name"> <button action="POST" method="/" type="submit">Add</button>')
})

router.post('/product', (req, res) => {
    res.redirect('/')
})

module.exports = router