const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/e59ea8bfd13035ff238cda4fe72818d7/${lat},${lng}`,
    json: true
  }, (error,response,body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch the weather.');
    }
  });
};

module.exports.getWeather = getWeather ;
