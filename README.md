# Weather Service Kata

## To Do
This basic react app will make a service call to openweathermap.org when
the button on the homepage is pressed, it then displays the city from the response data

* setup mocking in jest
* should read the value in the input field to pass that to the service call (there is a hard coded zip in there now)
* determine the rules for the kata
* rules should have instructions for basic jest and react syntax

## About
All code lives in `/src/App.js`  
All tests live in `/src/App.test.js`

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
