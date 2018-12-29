let allPatients = []
function fetchAllPatients() {
  fetch('http://localhost:8080/patient/all-patients')
    .then(res => res.json())
    .then(data => {
      if (data.status) {
        allPatients = data.patients
        displayAllpatients(data.patients)
      } else {
        document.getElementById('err-message').innerText =
          'No patients till now'
      }
    })
    .catch(err => console.log(err))
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

document.getElementById('bloodtype').addEventListener('change', function(e) {
  if (event.target.value === 'select') {
    if (allPatients.length > 0) {
      displayAllpatients(allPatients)
    } else {
      document.getElementById('err-message').innerText = 'No donors till now'
    }

    return
  }
  const filteredPatients = allPatients.filter(function(patient, index) {
    return (
      patient.bloodGroup.trim().toLowerCase() ===
      e.target.value.trim().toLowerCase()
    )
  })

  if (filteredPatients.length > 0) {
    displayAllpatients(filteredPatients)
    document.getElementById('err-message').innerText = ''
  } else {
    document.getElementById('patient-table-body').innerHTML = ''
    document.getElementById('err-message').innerText = 'No patient till now'
  }
})
