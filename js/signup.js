// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCTDknW5W5NVTs0necuGBmCNFzQkzDpR0w',
  authDomain: 'blood-bucket.firebaseapp.com',
  databaseURL: 'https://blood-bucket.firebaseio.com',
  projectId: 'blood-bucket',
  storageBucket: 'blood-bucket.appspot.com',
  messagingSenderId: '629147239690'
};

var firebase = firebase.initializeApp(config);

// ===== Event Listeners ===== //

document.getElementById('signupForm').addEventListener('submit', signup);

// ===== Functions ===== //

// Signup

let auth = firebase.auth();

function signup(event) {
  event.preventDefault();
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  auth
    .createUserWithEmailAndPassword(email, password)
    .then(data => localStorage.setItem('User', JSON.stringify(data.user)))
    .catch(error => console.log(error));
}

auth.onAuthStateChanged(user => {
  if (user) {
    window.location.href = '../dashboard/dashboard.html';
  } else {
    console.log('Login first');
  }
});
