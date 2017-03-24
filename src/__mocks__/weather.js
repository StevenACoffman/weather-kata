const mockedResponse = {
  "coord": {"lon": -83.61, "lat": 42.24},
  "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13d"}, {
    "id": 701,
    "main": "Mist",
    "description": "mist",
    "icon": "50d"
  }],
  "base": "stations",
  "main": {"temp": 22.64, "pressure": 1023, "humidity": 85, "temp_min": 21.2, "temp_max": 24.8},
  "visibility": 2414,
  "wind": {"speed": 12.75, "deg": 40, "gust": 9.8},
  "clouds": {"all": 90},
  "dt": 1489443300,
  "sys": {"type": 1, "id": 1382, "message": 0.0071, "country": "US", "sunrise": 1489405660, "sunset": 1489448402},
  "id": 5015688,
  "name": "Ypsilanti",
  "cod": 200
};

export const makeCallAsync = function () {
  return new Promise(resolve => {
    resolve(mockedResponse);
  });
};