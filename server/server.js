const express = require('express')
const app = express()
const port = 8080

app.listen(port, err => {
  if (err) {
    console.log(`Error while starting server: ${err}`)
    return
  }
  console.log(`server started on port: ${port}`)
})

app.get('/', (req, res, next) => {
  res.send('Welcome to Express || Blood Bucket Application')
})
