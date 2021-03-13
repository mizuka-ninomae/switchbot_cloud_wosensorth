const exec = require ("child_process").exec;
let   te_val, hu_val, bt_val;

class SwitchBotWoSensorTH {
  constructor (access_token, dev_id, callback) {
    let device_id = dev_id.toUpperCase().replace(/:/g,"");
    let url       = `"https://api.switch-bot.com/v1.0/devices/${device_id}/status"`;
    let cmd       = `curl GET -H "Authorization: ${access_token}" ${url}`;

    exec (cmd, function (error, stdout, stderr) {
      let obj   = JSON.parse (stdout);
      te_val    = obj.body.temperature;
      hu_val    = obj.body.humidity;
      bt_val    = null;
      let value = {te: te_val, hu: hu_val, bt: bt_val};
      callback (error, value, stderr);
      return;
    })
  }
}

if (require.main === module) {
  new SwitchBotWoSensorTH (process.argv[2], process.argv[3], function(error, value, stderr) {
    console.log (value);
    console.log (error);
    console.log (stderr);
  });
}
else {
  module.exports = SwitchBotWoSensorTH;
}
