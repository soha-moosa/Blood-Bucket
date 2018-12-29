const Donor = require('./donor-model.js')

function registerDonor(req, res) {
  const newDonor = new Donor(req.body)
  newDonor
    .save()
    .then(donor => {
      res.send({
        status: true,
        ...donor
      })
    })
    .catch(err => {
      res.send({
        status: false,
        err
      })
    })
}

function getAllDonors(req, res) {
  Donor.find({})
    .then(donors =>
      donors.length > 0
        ? res.send({
            status: true,
            totalDonors: donors.length,
            donors
          })
        : res.send({
            status: false,
            message: 'no donors'
          })
    )
    .catch(err => res.send({ status: false, err }))
}

module.exports = {
  registerDonor,
  getAllDonors
}
