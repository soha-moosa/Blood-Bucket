const express = require('express')
const app = express()
const User = require('./playground/Model')
const port = 8080
require('./playground/mongoDB')
app.listen(port, err => {
  if (err) {
    console.log(`Error while starting server: ${err}`)
    return
  }
  console.log(`server started on port: ${port}`)
})

// user addition

app.get('/', (req, res, next) => {
  const user = new User({
    name: 'Rehan',
    age: 19
  })

  user
    .save()
    .then(user => {
      res.send(user)
    })
    .catch(err => {
      console.log('error: ', err)
      res.send({ status: false })
    })
})
