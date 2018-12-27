const assert = require('assert')
const User = require('../playground/Model.js')
const mongoose = require('mongoose')
describe('Connection && CRUD Tests', function() {
  it('should connect to database', function(done) {
    let db = null
    mongoose.connect('mongodb://localhost/tests')
    db = mongoose.connection
    db.once('open', function() {
      assert(true)
      done()
    })
  })
})

describe('Saving local database tests', function() {
  it('should save a test user in mongoDB', function(done) {
    const rehan = new User({
      name: 'rehan',
      age: 19
    })
    rehan.save().then(function() {
      assert(rehan.isNew === false)
      done()
    })
  })
})
