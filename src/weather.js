import request from 'request';

const apiKey = '3a3d115c9f51da324ecfb8a1ad1b7017';
const zip = '48197';

export const makeCallAsync = function() {
  let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=${apiKey}`;
  return new Promise(resolve => {
    request(url, function (error, response, body) {
      resolve( JSON.parse(body) );
    });
  });
};