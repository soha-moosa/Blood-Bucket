const mongoose = require('mongoose')
const Schema = mongoose.Schema

const patientSchema = new Schema({
  name: String,
  email: String,
  contact: String,
  age: Number,
  bloodGroup: String,
  desease: String,
  city: String,
  gender: String,
  address: String
})

module.exports = new mongoose.model('Patient', patientSchema)
