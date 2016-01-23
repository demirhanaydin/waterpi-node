var awsIot = require('aws-iot-device-sdk');

var device = awsIot.device({
  keyPath: 'PATH_TO_YOUR_KEY_FILE.key',
  certPath: 'PATH_TO_YOUR_CERTIFICATE_PEM_FILE.crt',
  caPath: 'PATH_TO_ROOT_CA_FILE.pem',
  host: "IOT_DEVICE_URL",
  port: 8883,
  clientId: "raspi-data-publisher",
  region: 'us-east-1'
});

//
// Device is an instance returned by mqtt.Client(), see mqtt.js for full
// documentation.
//
device.on('connect', function() {
  console.log('connect');
  device.subscribe('raspi-water-pump/data');
});

module.exports.device = device