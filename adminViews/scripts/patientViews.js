function fetchAllPatients() {
  fetch('http://localhost:8080/patient/all-patients')
    .then(res => res.json())
    .then(data => {
      if (data.status) {
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
  patietns.forEach(patient => {
    tableBody.innerHTML += `
              <tr>
                  <td>${patient.firstName} ${patient.lastName}</td>
                  <td>${patient.bloodGroup}</td>
                  <td>${patient.contact}</td>
                  <td>
                      <a class="btn btn-danger text-white"}>View Details</a>
                  </td>
              </tr>
          `
  })
}
