import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import renderer from 'react-test-renderer';


import * as mockedWeather from '../__mocks__/weather';




it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('calls the mocked api method', () => {
  mockedWeather.makeCallAsync(48197)
    .then(response => {
      expect(response.name).toEqual('Ypsilanti');
    });
});

it('can inject the mock into the App component', () => {
  const div = document.createElement('div');
  const component = renderer.create(<App weather={mockedWeather}/>, div);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot(); //first snapshot for this test

  tree.children[2].props.onClick(); //manually trigger the button, which is nested
  tree = component.toJSON();
  expect(tree).toMatchSnapshot(); //second snapshot for this test
});

it('uses the other mock syntax', () => {
  const makeCallAsync = jest.fn();
  makeCallAsync.mockReturnValue(new Promise((resolve) => resolve({name: 'South Lyon'})));

  const otherWeather = { makeCallAsync };

  const div = document.createElement('div');
  const component = renderer.create(<App weather={otherWeather}/>, div);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot(); //first snapshot for this test

  tree.children[2].props.onClick(); //manually trigger the button, which is nested
  tree = component.toJSON();
  expect(tree).toMatchSnapshot(); //second snapshot for this test

});

