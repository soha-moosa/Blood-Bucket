const Patient = require('./patient-model.js')

function registerPatient(req, res) {
  const newPatient = new Patient(req.body)
  newPatient
    .save()
    .then(patient => {
      res.send({
        status: true,
        ...patient
      })
    })
    .catch(err => {
      res.send({
        status: false,
        err
      })
    })
}

function getAllPatients(req, res) {
  Patient.find({})
    .then(patients =>
      patients.length > 0
        ? res.send({
            status: true,
            totalPatients: patients.length,
            patients
          })
        : res.send({
            status: false,
            message: 'no patients'
          })
    )
    .catch(err => res.send({ status: false, err }))
}

module.exports = {
  registerPatient,
  getAllPatients
}
