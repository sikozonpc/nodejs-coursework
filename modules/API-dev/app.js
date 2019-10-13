const express = require('express')
const bodyParser = require('body-parser')
const mongoConnect = require('./util/database')
const feedRoutes = require('./routes/feed')

const app = express()

const PORT = 3001

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json())

mongoConnect(client => {
  app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT)
  })
}) 

// CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})

app.use('/feed', feedRoutes)

