import React, { Component } from 'react';
import './App.css';

import * as weather from './weather';

class App extends Component {
  constructor() {
    super();
    this.getWeather = this.getWeather.bind(this);

    this.state = {
      weatherBody: '',
    };
  }

  getWeather = () => {
    weather.makeCallAsync()
      .then( (response) => {
        this.setState({ weatherBody: response });
      });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Weather Kata</h2>
        </div>
        <input placeholder="zip code" />
        <button onClick={this.getWeather}>
          Get Weather
        </button>
        <p>{ this.state.weatherBody.name }</p>
      </div>
    );
  }
}

export default App;
