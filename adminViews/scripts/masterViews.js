function fetchAllPatients() {
  fetch('http://localhost:8080/patient/all-patients')
    .then(res => res.json())
    .then(data => {
      if (data.status) {
        console.log(data)
        displayAllpatients(data.patients)
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
        displayAllDonors(data.donors)
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

function displayAllpatients(patietns) {
  let tableBody = document.getElementById('patient-table-body')
  tableBody.innerHTML = ''
  patietns.forEach(patient => {
    tableBody.innerHTML += `
              <tr>
                  <td>${patient.name}</td>
                  <td>${patient.bloodGroup}</td>
                  <td>${patient.contact}</td>
                  <td>
                      <a class="btn btn-danger text-white"}>View Details</a>
                  </td>
              </tr>
          `
  })
}

function displayAllDonors(donors) {
  let tableBody = document.getElementById('donor-table-body')

  tableBody.innerHTML = ''
  donors.forEach(donor => {
    tableBody.innerHTML += `
            <tr>
                <td>${donor.firstName} ${donor.lastName}</td>
                <td>${donor.bloodGroup.toUpperCase()}</td>
                <td>${donor.contact}</td>
                <td>
                    <a class="btn btn-danger text-white"}>View Details</a>
                </td>
            </tr>
        `
  })
}

document
  .getElementById('patient-list-btn')
  .addEventListener('click', function() {
    document.getElementById('patient-table-body').style.display = 'table'
    document.getElementById('donor-table-body').style.display = 'none'
  })

document.getElementById('donor-list-btn').addEventListener('click', function() {
  document.getElementById('donor-table-body').style.display = 'table'
  document.getElementById('patient-table-body').style.display = 'none'
})
