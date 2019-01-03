const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const donorRoutes = require('./donor/donor-routes')
const patientRoutes = require('./patient/patient-routes')
const db = require('./dbConnection')

app.use(cors())
// parsing the request data
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/donor', donorRoutes)
app.use('/patient', patientRoutes)

require('./fbConfig')

const port = 8080

app.listen(port, err => {
  if (err) {
    console.log(`Error while starting server: ${err}`)
    return
  }
  console.log(`server started on port: ${port}`)
})
