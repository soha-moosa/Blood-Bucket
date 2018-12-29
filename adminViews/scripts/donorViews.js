function fetchAllDonors() {
  fetch('http://localhost:8080/donor/all-donors')
    .then(res => res.json())
    .then(data => {
      if (data.status) {
        console.log(data)
        displayAllDonors(data.donors)
      } else {
        document.getElementById('err-message').innerText = 'No donors till now'
      }
    })
    .catch(err => console.log(err))
}

function displayAllDonors(donors) {
  let tableBody = document.getElementById('donor-table-body')
  donors.forEach(donor => {
    tableBody.innerHTML += `
            <tr>
                <td>${donor.firstName} ${donor.lastName}</td>
                <td>${donor.bloodGroup}</td>
                <td>${donor.contact}</td>
                <td>
                    <a class="btn btn-danger text-white"}>View Details</a>
                </td>
            </tr>
        `
  })
}
