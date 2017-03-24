import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import * as weather from './weather';

ReactDOM.render(
  <App weather={weather}/>,
  document.getElementById('root')
);
