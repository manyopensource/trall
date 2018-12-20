import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import App from './App';
import Store from './store';
import './index.scss';

render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
