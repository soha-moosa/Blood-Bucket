const router = require('express').Router()
const controller = require('./patient-controllers')

router.post('/register-patient', controller.registerPatient)

module.exports = router
