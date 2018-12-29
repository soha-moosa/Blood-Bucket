console.log('Register Donor Running!')

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCTDknW5W5NVTs0necuGBmCNFzQkzDpR0w',
  authDomain: 'blood-bucket.firebaseapp.com',
  databaseURL: 'https://blood-bucket.firebaseio.com',
  projectId: 'blood-bucket',
  storageBucket: 'blood-bucket.appspot.com',
  messagingSenderId: '629147239690'
}
firebase.initializeApp(config)
const db = firebase.firestore()

db.settings({
  timestampsInSnapshots: true
})

document.getElementById('donorForm').addEventListener('submit', registerDonor)

function registerDonor(e) {
  e.preventDefault()
  // elements gathering
  let firstName = document.getElementById('firstName').value
  let lastName = document.getElementById('lastName').value
  let email = document.getElementById('email').value
  let contact = document.getElementById('cellnum').value
  let age = document.getElementById('age').value
  let bloodGroup = document.getElementById('bloodtype').value
  let city = document.getElementById('city').value
  let address = document.getElementById('address').value

  // getting the radio buttons
  let maleFlag = document.getElementById('inlineRadio1').checked
  let femaleFlag = document.getElementById('inlineRadio2').checked
  let gender = !maleFlag ? 'male' : 'female'
  const donor = {
    firstName,
    lastName,
    email,
    contact,
    age,
    bloodGroup,
    city,
    gender,
    address
  }
  donorRegistration(donor)
    .then(docRef => {
      console.log('Document added with the reference of: ', docRef)
    })
    .catch(err => {
      console.log('err', err)
    })
}

function donorRegistration(donor) {
  // firebase code here
  return db
    .collection('users')
    .doc('AVidr3nHFsgDWxudc24C')
    .collection('donors')
    .add(donor)
}
