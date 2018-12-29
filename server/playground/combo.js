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

const apiEndPoint = `http://localhost:8080/donor/register-donor`
db.settings({
  timestampsInSnapshots: true
})

const donor = {
  name: 'neha',
  age: 20,
  type: 'donor',
  weight: 60,
  bloogGroup: 'a+'
}

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

function donorRegistration(donorObject) {
  // firebase code here
  db.collection('users')
    .doc('AVidr3nHFsgDWxudc24C')
    .collection('donors')
    .add(donorObject)
    .then(docRef => {
      console.log('DOC added with the reference of: ', docRef)
    })
    .catch(err => console.log(err))
}

db.collection('users')
  .doc('AVidr3nHFsgDWxudc24C')
  .collection('donors')
  .onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
      if (change.type === 'added') {
        const data = change.doc.data()
        console.log('added fired', data)

        fetch(apiEndPoint, {
          method: 'POST',
          body: JSON.stringify({
            name: data.name,
            age: data.age,
            bloogGroup: data.bloogGroup,
            type: data.type,
            weight: data.weight
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => console.log(data))
          .catch(err => console.log(err))
      }
    })
  })

// patientRegistration(patient)
donorRegistration(donor)
