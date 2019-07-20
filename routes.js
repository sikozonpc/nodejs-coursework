const fs = require('fs')

const requestHandler = (req, res) => {
  const url = req.url
  const method = req.method

  if (url === '/') {
    res.write('<html><body><p>Root</p></body></html>')
    return res.end()
  }
  if (url === '/auth') {
    res.write('<html><body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button><form></body></html>')
    return res.end()
  }
  if (url === '/message' && method === 'POST') {
    const body = []

    // Readble Stream
    req.on('data', (chunk) => {
      console.log('chunk', chunk)
      body.push(chunk)
    })

    // all chunks are stored
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      const message =  parsedBody.split('=')[1]
      fs.writeFile('message.txt', message, (err) => {
        res.writeHead(302, {
          'Location': '/',
        })
        return res.end()
      })
    })
  }
  else {
    res.write('<html><body><p>404</p></body></html>')
    return res.end()
  }
}

module.exports = requestHandler