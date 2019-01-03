const firebase = require('firebase')

const configObject = {
  apiKey: 'AIzaSyCTDknW5W5NVTs0necuGBmCNFzQkzDpR0w',
  authDomain: 'blood-bucket.firebaseapp.com',
  databaseURL: 'https://blood-bucket.firebaseio.com',
  projectId: 'blood-bucket',
  storageBucket: 'blood-bucket.appspot.com',
  messagingSenderId: '629147239690'
}

var app = firebase.initializeApp(configObject)
var db = app.firestore()

db.settings({
  timestampsInSnapshots: true
})
module.exports = db
