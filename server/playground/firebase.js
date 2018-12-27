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

// signup

// firebase
//   .auth()
//   .createUserWithEmailAndPassword('rehan@gmail.com', '12345678')
//   .then(res => console.log(res))
//   .catch(err => console.log(err))

// login

// firebase
//   .auth()
//   .signInWithEmailAndPassword('rehan@gmail.com', '12345678')
//   .then(res => console.log(res))
//   .catch(err => console.log(err))

// auth status check

// firebase.auth().onAuthStateChanged(user => {
//   if (user) {
//     console.log('user loggin')
//   } else {
//     console.log('user logout')
//   }
// })

// signout code

// firebase.auth().signOut()

// firestore work with collections

// const db = firebase.firestore()

// db.settings({
//   timestampsInSnapshots: true
// })

// const donor = {
//   name: 'rehan',
//   age: 19,
//   type: 'donor',
//   bloogGroup: 'o+'
// }

// const patient = {
//   name: 'abc',
//   age: 20,
//   type: 'patient',
//   bloogGroup: 'o+'
// }

// function patientRegistration(patientObject) {
//   // firebase code here
//   db.collection('users')
//     .doc('AVidr3nHFsgDWxudc24C')
//     .collection('patients')
//     .add(patientObject)
//     .then(docRef => {
//       console.log('DOC added with the reference of: ', docRef)
//     })
//     .catch(err => console.log(err))
// }

// function donorRegistration(donorObject) {
//   // firebase code here
//   db.collection('users')
//     .doc('AVidr3nHFsgDWxudc24C')
//     .collection('donors')
//     .add(donorObject)
//     .then(docRef => {
//       console.log('DOC added with the reference of: ', docRef)
//     })
//     .catch(err => console.log(err))
// }

// patientRegistration(patient)
// donorRegistration(donor)
