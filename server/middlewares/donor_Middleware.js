const db = require('../dbConnection')
function deletePreviouseDocumentsOfDonors(req, res, next) {
  db.dropCollection('donors', function(error, result) {
    if (error) {
      console.log('There is an error in droping the collection!!!')
    } else {
      console.log('Donor Collection removed Successfully!')
      next()
    }
  })
}

module.exports = deletePreviouseDocumentsOfDonors
