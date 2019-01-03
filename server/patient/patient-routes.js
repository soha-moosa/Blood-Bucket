const router = require('express').Router()
const controller = require('./patient-controllers')
const deletePreviouseDocumentsOfPatients = require('../middlewares/patient _Middleware')
router.post('/register-patient', controller.registerPatient)
router.get(
  '/all-patients',
  deletePreviouseDocumentsOfPatients,
  controller.getAllPatients
)
router.delete('/delete-patient/:id', controller.deletePatient)
module.exports = router
