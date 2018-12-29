function fetchAllPatients() {
  fetch('http://localhost:8080/patient/all-patients')
    .then(res => res.json())
    .then(data => {
      if (data.status) {
        console.log(data.patients)
      } else {
        document.getElementById('err-message').innerText =
          'No patients till now'
      }
    })
    .catch(err => console.log(err))
}

function fetchAllDonors() {
  fetch('http://localhost:8080/donor/all-donors')
    .then(res => res.json())
    .then(data => {
      if (data.status) {
        console.log(data.donors)
      } else {
        document.getElementById('err-message').innerText = 'No donors till now'
      }
    })
    .catch(err => console.log(err))
}

function fetchData() {
  fetchAllDonors()
  fetchAllPatients()
}
