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

module.exports = {
  registerPatient
}
