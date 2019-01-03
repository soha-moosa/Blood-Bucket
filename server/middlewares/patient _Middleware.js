const db = require('../dbConnection')
function deletePreviouseDocumentsOfPatients(req, res, next) {
  db.dropCollection('patients', function(error, result) {
    if (error) {
      console.log('There is an error in droping the collection!!!')
    } else {
      console.log('Patients Collection removed Successfully!')
      next()
    }
  })
}

module.exports = deletePreviouseDocumentsOfPatients
