const Request = require ("request");
let   te_val, hu_val, bt_val;

class CloudWoSensorTH {
  constructor (access_token, device_id, callback) {
    let dev_id    = device_id.toUpperCase ().replace (/:/g,"");
    const options = {
      url: `https://api.switch-bot.com/v1.0/devices/${dev_id}/status`,
      method: `GET`,
      headers: {
        Authorization: `${access_token}`
      }
    }

    Request (options, function (error, response, body) {
      let obj   = JSON.parse (body);
      te_val    = obj.body.temperature;
      hu_val    = obj.body.humidity;
      bt_val    = null;
      let value = {te: te_val, hu: hu_val, bt: bt_val};
      callback (error, value, response);
      return;
    })
  }
}

if (require.main === module) {
  new CloudWoSensorTH (process.argv[2], process.argv[3], function(error, value, response) {
    console.log (error);
//    console.log (response);
    console.log (value);
  });
}
else {
  module.exports = CloudWoSensorTH;
}
