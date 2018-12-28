// const getmac = require('getmac')

// getmac.getMac(function(err, macAddress) {
//   console.log(macAddress)
// })

require('getmac').getMac(function(err, macAddress) {
  if (err) throw err
  console.log('My mac address: ', macAddress)
})
