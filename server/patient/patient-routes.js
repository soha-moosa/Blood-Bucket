const router = require('express').Router()
const controller = require('./patient-controllers')

router.post('/register-patient', controller.registerPatient)
router.get('/all-patients', controller.getAllPatients)

module.exports = router
