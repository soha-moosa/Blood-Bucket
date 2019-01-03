const mongoose = require('mongoose')

mongoose.connect(
  'mongodb://localhost/blood-bucket',
  { useNewUrlParser: true }
)

const db = mongoose.connection

db.on('connected', function() {
  console.log('Connected successfully!')
})

module.exports = db
