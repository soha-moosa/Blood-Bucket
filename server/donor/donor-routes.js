const router = require('express').Router()
const controller = require('./donor-controllers')
const deletePreviouseDocumentsOfDonors = require('../middlewares/donor_Middleware')
router.post('/register-donor', controller.registerDonor)
router.get(
  '/all-donors',
  deletePreviouseDocumentsOfDonors,
  controller.getAllDonors
)
router.delete('/delte-donor/:mongo_id/:fb_id', controller.deleteDonor)

module.exports = router
