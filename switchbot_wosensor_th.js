const Switchbot = require ('node-switchbot');

class SwitchBotWoSensorTH {
  constructor (ble_mac, callback) {
    const switchbot = new Switchbot();

    switchbot.onadvertisement = (ad) => {
      switchbot.stopScan ();
      callback(null, {"te": ad.serviceData.temperature.c, "hu": ad.serviceData.humidity, "bt": ad.serviceData.battery}, null);
      process.exit();
    };

    switchbot.startScan({
      model: 'T',
      id:    ble_mac,
    })

    .then (function () {
      return switchbot.wait(30000);
    })

    .then (function () {
      switchbot.stopScan();
      throw new Error('The device was not found within the specified time.');
    })

    .catch (function (error) {
      callback("Timeout Error", null, error)
      process.exit();
    });
  }
}

if (require.main === module) {
  new SwitchBotWoSensorTH (process.argv[2], function(error, value, stderr){
    console.log (value);
    console.log (error);
    console.log (stderr);
  });
}
else {
  module.exports = SwitchBotWoSensorTH;
}
