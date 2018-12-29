console.log('running register patient')

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

document
  .getElementById('patientForm')
  .addEventListener('submit', registerPatient)

function registerPatient(e) {
  e.preventDefault()
  // elements gathering
  let name = document.getElementById('name').value
  let email = document.getElementById('email').value
  let contact = document.getElementById('cellnum').value
  let age = document.getElementById('age').value
  let bloodGroup = document.getElementById('bloodtype').value
  let desease = document.getElementById('disease').value
  let city = document.getElementById('city').value
  let address = document.getElementById('address').value

  // getting the radio buttons
  let maleFlag = document.getElementById('inlineRadio1').checked
  let femaleFlag = document.getElementById('inlineRadio2').checked
  let gender = !maleFlag ? 'male' : 'female'
  const patient = {
    email,
    contact,
    age,
    bloodGroup,
    desease,
    city,
    gender,
    address
  }
  patientRegistration(patient)
    .then(docRef => {
      console.log('DOC added with the reference of: ', docRef)
    })
    .catch(err => console.log(err))
}
function patientRegistration(patient) {
  // firebase code here
  return db
    .collection('users')
    .doc('AVidr3nHFsgDWxudc24C')
    .collection('patients')
    .add(patient)
}
