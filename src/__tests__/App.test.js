import React from 'react';
import {shallow, render, mount} from 'enzyme';

import App from '../App';


jest.mock("../App.css", () => jest.fn());  //need to mock the css to get jest to ignore it

describe("some simple tests for our App component", () => {

  it('renders without crashing', () => {
    expect(shallow(<App />).contains(<h2>Weather Kata</h2>)).toBe(true);
  });


  it('uses an inline mock syntax', () => {
    const makeCallAsync = jest.fn();  //could simply define this as a function, but this lets us spy (see later tests)
    makeCallAsync.mockReturnValue(Promise.resolve({name: 'Ypsilanti'}));

    const otherWeather = {makeCallAsync};

    expect(shallow(<App weather={otherWeather}/>)).toMatchSnapshot(); //first snapshot for this test

  });

  it('calls for the weather when the button is clicked', () => {
    const makeCallAsync = jest.fn();
    makeCallAsync.mockReturnValue(Promise.resolve({name: 'Ypsilanti'}));

    const otherWeather = {makeCallAsync};

    const component = shallow(<App weather={otherWeather}/>);
    component.find('input').simulate('change', {target: {value: '48197'}});
    component.find('button').simulate('click');
    expect(makeCallAsync.mock.calls.length).toEqual(1);
    expect(makeCallAsync.mock.calls[0][0]).toBe('48197');


    return makeCallAsync().then(() => {
      expect(component.find('#city-name').text()).toEqual('Ypsilanti');
      expect(component).toMatchSnapshot();        //second snapshot for this test
    })
  });
});
