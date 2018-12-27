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

module.exports = {
  registerDonor
}
