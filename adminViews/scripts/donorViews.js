let allDonors = []
function fetchAllDonors() {
  fetch('http://localhost:8080/donor/all-donors')
    .then(res => res.json())
    .then(data => {
      if (data.status) {
        console.log(data)
        allDonors = data.donors
        displayAllDonors(data.donors)
      } else {
        document.getElementById('err-message').innerText = 'No donors till now'
      }
    })
    .catch(err => console.log(err))
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

document.getElementById('bloodtype').addEventListener('change', function(e) {
  if (event.target.value === 'select') {
    if (allDonors.length > 0) {
      displayAllDonors(allDonors)
    } else {
      document.getElementById('err-message').innerText = 'No donors till now'
    }

    return
  }
  const filteredDonors = allDonors.filter(function(donor, index) {
    return (
      donor.bloodGroup.trim().toLowerCase() ===
      e.target.value.trim().toLowerCase()
    )
  })

  if (filteredDonors.length > 0) {
    displayAllDonors(filteredDonors)
    document.getElementById('err-message').innerText = ''
  } else {
    document.getElementById('donor-table-body').innerHTML = ''
    document.getElementById('err-message').innerText = 'No donors till now'
  }
})
