const Patient = require('./patient-model.js')
const firestore = require('../fbConfig')
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
  let patientPromises = []
  // fetching donors from firebase
  firestore
    .collection('users')
    .doc('AVidr3nHFsgDWxudc24C')
    .collection('patients')
    .get()
    .then(querySnapshot => {
      // creating a local array
      querySnapshot.forEach(doc => {
        // setting all documents in a  promised chain array!
        let newPatient = new Patient(doc.data())
        patientPromises.push(newPatient.save())
      })

      Promise.all(patientPromises)
        .then(flag => {
          // finding patients locally..!!
          if (flag) {
            Patient.find({})
              .then(patients =>
                patients.length > 0
                  ? res.send({
                      status: true,
                      totalPatient: patients.length,
                      patients
                    })
                  : res.send({
                      status: false,
                      message: 'no patients'
                    })
              )
              .catch(err => res.send({ status: false, err }))
          }
        })
        .catch(err => res.send({ status: false, err }))
    })
}

function deletePatient(req, res) {
  const id = req.params.mongo_id
  const fb_id = req.params.fb_id
  firestore
    .collection('users')
    .doc('AVidr3nHFsgDWxudc24C')
    .collection('patients')
    .doc(fb_id)
    .delete()
    .then(() => {
      Patient.findByIdAndDelete(id, { new: true })
        .then(deletedPatient =>
          res.send({
            stauts: true,
            deletedPatient
          })
        )
        .catch(err =>
          res.send({
            status: false,
            err
          })
        )
    })
    .catch(err =>
      res.send({
        status: false,
        err
      })
    )
}

module.exports = {
  registerPatient,
  getAllPatients,
  deletePatient
}
