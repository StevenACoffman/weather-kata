import request from 'request';

const apiKey = '86697c546bf0731c7b39400822b055cc';
const zip = '48197';

export const makeCallAsync = function(zip) {
  let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=${apiKey}`;
  return new Promise(resolve => {
    request(url, function (error, response, body) {
      resolve( JSON.parse(body) );
    });
  });
};
