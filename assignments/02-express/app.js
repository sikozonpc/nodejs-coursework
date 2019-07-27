const express = require('express')

const app = express()

// creating the 1st middleware
app.use('/private', (req, res, next) => {
  console.log('PRIVATE middleware route')
  next()
})

app.use('/private', (req, res) => {
  console.log('{Redirecting to -->} PUBLIC middleware route')
  res.redirect('/public')
})

app.use('/public', (req, res) => {
  console.log('PUBLIC middlwere route')
  res.send('<h1>You are in a PUBLIC route.</h1>')
})

app.listen(3001, () => {
  console.log('Server is listening at port 3001')
})