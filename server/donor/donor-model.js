const mongoose = require('mongoose')
const Schema = mongoose.Schema

const donorSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  gender: String,
  city: String,
  address: String,
  postalCode: String,
  age: Number,
  bloodGroup: String,
  contact: String
})

module.exports = new mongoose.model('Donor', donorSchema)
