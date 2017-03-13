import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

import * as weather from '../weather';
jest.mock('../weather');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('calls the api method', () =>{
  weather.makeCallAsync()
    .then(response => {
      expect(response.name).toEqual('Ypsilanti');
    });
});