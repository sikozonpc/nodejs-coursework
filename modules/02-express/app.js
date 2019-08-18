const express = require('express')
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const PORT = 3001

const app = express()

// External middleware
app.use(bodyParser.urlencoded({ extended: false }))

// Note: Requests are read from top to bottom of the file

// External routes
app.use('/admin', adminRoutes)
app.use(shopRoutes)

// Catch all
app.use((req, res) => {
  res.status(404).send('<h1>Page not found</h1>')
})


app.listen(PORT, () => {
  console.log('Server is listening at port', PORT)
})