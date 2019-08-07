const express = require('express')

const router = express.Router()

router.get('/', (req, res) => { // use get for the ROOT so it doesnt intercept the other middlewares
    res.send('<h1>Shop page</h1>')
})

module.exports = router