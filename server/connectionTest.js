const mongoose = require('mongoose')

mongoose.connect(
  'mongodb://localhost/bloodBucket',
  { useNewUrlParser: true }
)

const connection = mongoose.connection

connection.on('connected', function() {
  console.log('Connected successfully!')
})
