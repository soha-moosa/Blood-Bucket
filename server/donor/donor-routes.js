const router = require('express').Router()
const controller = require('./donor-controllers')

router.post('/register-donor', controller.registerDonor)

module.exports = router
