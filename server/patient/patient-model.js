const mongoose = require('mongoose')
const Schema = mongoose.Schema

const patientSchema = new Schema({
  name: String,
  age: Number,
  bloodGroup: String,
  contactNumber: String
})

module.exports = new mongoose.model('Patient', patientSchema)
