const router = require('express').Router()
const controller = require('./patient-controllers')

router.post('/register-patient', controller.registerPatient)
router.get('/all-patients', controller.getAllPatients)
router.delete('/delete-patient/:id', controller.deletePatient)
module.exports = router
