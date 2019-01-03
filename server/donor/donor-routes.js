const router = require('express').Router()
const controller = require('./donor-controllers')

router.post('/register-donor', controller.registerDonor)
router.get('/all-donors', controller.getAllDonors)
router.delete('/delte-donor/:id', controller.deleteDonor)

module.exports = router
