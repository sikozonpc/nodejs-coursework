const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/', (req, res) => { // use get for the ROOT so it doesnt intercept the other middlewares
    res.sendFile(path.join(__dirname, '..' ,'views', 'shop.html'))
})

module.exports = router