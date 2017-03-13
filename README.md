# Weather Service Kata

## To Do
This basic react app will make a service call to openweathermap.org when
the button on the homepage is pressed, it then displays the city from the response data

* should read the value in the input field to pass that to the service call (there is a hard coded zip in there now)
* determine the rules for the kata
* rules should have instructions for basic jest and react syntax

## About
All code lives in `/src/App.js` and `/src/weather.js`  
All tests live in `/src/__tests__/App.test.js`  
All mocks live in `/src/__mocks__/`

## Basic info about mocking

We need to create a method that mocks exactly how the app expects the function it is testing to behave. 
Because javascript is asynchronous, and our api call is asynchronous, our mocked method must also be async.
 
So we mimic the behavior of our `makeCallAsync()` method (except for calling an external service), and we
 place it in the `__mocks__` directory. Inside of our testing file, we import real method as usual, 
 but then right below that we add our mocking:
 
 ```javascript
 import * as weather from '../weather';
 jest.mock('../weather');
 ```
this second line lets jest know to look in `__mocks__` for the method that it should ***actually*** call

now when we get the response back from our async call, it's actually just returning the mocked data we
previously defined in `__mocks__`


## Up and Running
```bash
$ cd weather-kata
$ npm install
$ npm run start
```

It should then launch your browser to localhost:3000

All changes made to the javascript will automatically reload the DOM

## Run Tests
This react app uses the [jest](https://facebook.github.io/jest/) testing framework

```bash
$ npm run test
```

This will leave the test suite running, and will automatically run all relevant tests
when it detects a change

## Etc

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find the guide on using a `create-react-app` [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
