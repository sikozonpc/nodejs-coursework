const http = require('http')

const requestHandler = require('./routes')

// Server development PORT, because the production one is default 80
const PORT = 3001

const app = http.createServer(requestHandler)

app.listen(PORT, () => {
  console.log('Server is listening at port', PORT)
})