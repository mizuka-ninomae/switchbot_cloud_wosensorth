const SwitchBotWoSensorTH = require('switchbot_wosensor_th');
let   ble_mac = "XX:XX:XX:XX:XX:XX";

let wosendor = new SwitchBotWoSensorTH(ble_mac, function(error, value, stderr){
  console.log (value);
  console.log (error);
  console.log (stderr);
});
