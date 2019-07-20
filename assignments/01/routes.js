const requestHandler = (req, res) => {
  const url = req.url
  const method = req.method

  // ROOT route
  if (url === '/') {
    res.write('<html><form action="/create-user" method="POST" ><input type="text" name="name"><button type="submit">Add</button></form></html>')
    return res.end()
  }
  // USERS route
  if (url === '/users') {
    res.write('<html><ul><li>Tiago Taquelim</li><li>Liliana Silva</li></ul></html>')
    return res.end()
  }
  // CREATE-USER route
  if (url === '/create-user' && method === 'POST') {
    const body = []

    // Readable stream parsing
    req.on('data', (chunk) => {
      console.log('CHUNK ', chunk)
      body.push(chunk)
    })

    return req.on('end', () => {
      const parsedData = Buffer.concat(body).toString()
      console.log('Parsed data ', parsedData)
      res.writeHead(302, {
        'Location': '/',
      })
      return res.end()
    })
  }
}


module.exports = requestHandler