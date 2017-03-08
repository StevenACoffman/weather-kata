import React, { Component } from 'react';
import './App.css';

import request from 'request';

const apiKey = '3a3d115c9f51da324ecfb8a1ad1b7017';

class App extends Component {
  constructor() {
    super();
    this.getWeather = this.getWeather.bind(this);

    this.state = {
      weatherBody: '',
    };
  }

  getWeather = () => {
    let url = `http://api.openweathermap.org/data/2.5/weather?zip=48197,us&units=imperial&appid=${apiKey}`;
    request(url, function (error, response, body) {
      this.setState({ weatherBody: JSON.parse(body) });
    }.bind(this));
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Weather Kata</h2>
        </div>
        <input placeholder="zip code" />
        <button
          onClick={this.getWeather}
        >Get Weather</button>
        <p>{ this.state.weatherBody.name }</p>
      </div>
    );
  }
}

export default App;
