const mongodb = require('mongodb')

/**
 * Connection to the MongoDB database function
 */

// Maybe move this to `.env`
const CONNECTION_KEY = 'mongodb+srv://adminuser:7dgo78JAdL8e6xQN@testingdb-ap3ue.mongodb.net/test?retryWrites=true&w=majority'

const MongoClient = mongodb.MongoClient

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

module.exports = mongoConnect = (callback) => {
  MongoClient.connect(CONNECTION_KEY, mongoOptions)
  .then(client => {
    console.log('\nConnected to MongoDB Database successfully !\n')
    callback()
  })
  .catch(err => {
    console.log(err)
    callback()
  })
}
