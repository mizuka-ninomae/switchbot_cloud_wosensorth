const SwitchBotWoSensorTH = require('switchbot_cloud_wosensorth');
let access_token = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
let dev_id       = "XX:XX:XX:XX:XX:XX";

let wosendor = new SwitchBotWoSensorTH(access_token, dev_id, function(error, value, stderr){
  console.log (value);
  console.log (error);
  console.log (stderr);
});
