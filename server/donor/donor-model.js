const mongoose = require('mongoose')
const Schema = mongoose.Schema

const donorSchema = new Schema({
  name: String,
  age: Number,
  bloodGroup: String,
  weight: Number,
  contactNumber: String
})

module.exports = new mongoose.model('Donor', donorSchema)
