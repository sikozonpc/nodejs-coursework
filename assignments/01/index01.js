const http = require('http')

const requestHandler = require('./routes')

const app = http.createServer(requestHandler)

app.listen(3000, () => {
  console.log('Server is listenning on PORT 3000')
})