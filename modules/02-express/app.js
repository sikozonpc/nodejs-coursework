const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const PORT = 3001
const app = express()

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

// External middleware
app.use(bodyParser.urlencoded({ extended: false }))
// serve static files - NOTE: to refrence them is just like they were in the root filesystem
app.use(express.static(path.join(__dirname, 'public')))

// Note: Requests are read from top to bottom of the file

// External routes
app.use('/admin', adminData.routes)
app.use(shopRoutes)

// Catch all
app.use((req, res) => {
  res.status(404).render('404', {
    pageTitle: 'Page does not exit',
  })
})


app.listen(PORT, () => {
  console.log('Server is listening at port', PORT)
})