const express = require('express')

const PORT = 3001

const app = express()

// will be executed on all requests
// Requests are read from top to bottom of the file
app.use('/home', (req, res, next) => {
  console.log('In 1 middleware')
  // next() goes to the next middleware (OF THE SAME ROUTE)
  res.send('<h1>Home</h1>')
})

app.use((req, res, next) => {
  console.log('In 2 middleware')
  res.send('<h1>Root</h1>')
})

app.use('*',(req, res) => res.send('<h1>404</h1>', 404))

app.listen(PORT, () => {
  console.log('Server is listening at port', PORT)
})