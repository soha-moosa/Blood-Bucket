// ===== Event Listener ===== //

document.getElementById('adminForm').addEventListener('submit', admin)

// ===== Function ===== //

// Admin

function admin(event) {
  event.preventDefault()

  let email = document.getElementById('email').value
  let macAddress = document.getElementById('macAddress').value

  let patientAdmin = 'soha.moosa@yahoo.com'
  let donorAdmin = 'nehaejaz29@gmail.com'
  let masterAdmin = 'rehansattar117@gmail.com'

  let patientAdminMacAddress = 'soha12345'
  let donorAdminMacAddress = 'neha12345'
  let masterAdminMacAddress = 'rehan12345'

  if (email === masterAdmin && macAddress === masterAdminMacAddress) {
    window.location.href = '../adminViews/masterView.html'
    localStorage.setItem('MasterAdmin', masterAdminMacAddress)
  } else if (email === patientAdmin && macAddress === patientAdminMacAddress) {
    window.location.href = '../adminViews/patientsViews.html'
    localStorage.setItem('PatientAdmin', patientAdminMacAddress)
  } else if (email === donorAdmin && macAddress === donorAdminMacAddress) {
    window.location.href = '../adminViews/donorViews.html'
    localStorage.setItem('DonorAdmin', donorAdminMacAddress)
  } else {
    swal('Invalid email or mac address')
  }
}
