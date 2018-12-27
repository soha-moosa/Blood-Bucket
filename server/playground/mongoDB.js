const mongoose = require('mongoose')

// connecting to local database

mongoose.connect(
  'mongodb://localhost/testDatabase',
  { useNewUrlParser: true }
)

const connection = mongoose.connection
connection.on('connected', function() {
  console.log('connected to database')
})
