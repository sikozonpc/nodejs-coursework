const path = require('path')

// process.mainModule has acces to all module and the app.js (the root of the app)
module.exports = path.dirname(process.mainModule.filename)