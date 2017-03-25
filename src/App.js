import React, {Component} from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.getWeather = this.getWeather.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.weather = this.props.weather;
    this.state = {
      weatherBody: '',
    };
  }

  getWeather() {
    this.weather.makeCallAsync(this.state.input)
        .then((response) => {
          this.setState({weatherBody: response});
        });
  }

  handleChange(e) {
    this.setState({input: e.target.value});
  }

  render() {
    return (
        <div className="App">
          <div className="App-header">
            <h2>Weather Kata</h2>
          </div>
          <input placeholder="zip code" onChange={ this.handleChange }/>
          <button onClick={this.getWeather}>
            Get Weather
          </button>
          <p id="city-name">{ this.state.weatherBody.name }</p>
        </div>
    );
  }
}

export default App;
