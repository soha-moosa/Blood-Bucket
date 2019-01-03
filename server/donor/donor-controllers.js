const Donor = require('./donor-model.js')
const firestore = require('../fbConfig')
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
  let donorPromises = []
  // fetching donors from firebase
  firestore
    .collection('users')
    .doc('AVidr3nHFsgDWxudc24C')
    .collection('donors')
    .get()
    .then(querySnapshot => {
      // creating a local array
      querySnapshot.forEach(doc => {
        // setting all documents in a  promised chain array!
        let newDonor = new Donor(doc.data())
        donorPromises.push(newDonor.save())
      })

      Promise.all(donorPromises)
        .then(flag => {
          // finding donors locally..!!
          if (flag) {
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
        })
        .catch(err => res.send({ status: false, err }))
    })
}

function deleteDonor(req, res) {
  const id = req.params.mongo_id
  const fb_id = req.params.fb_id
  firestore
    .collection('users')
    .doc('AVidr3nHFsgDWxudc24C')
    .collection('donors')
    .doc(fb_id)
    .delete()
    .then(() => {
      Donor.findByIdAndRemove(id).then(deletedDonor =>
        res
          .send({
            status: true,
            deletedDonor
          })
          .catch(err =>
            res.send({
              status: false,
              err
            })
          )
      )
    })
    .catch(err => res.send(err))
}
module.exports = {
  registerDonor,
  getAllDonors,
  deleteDonor
}
