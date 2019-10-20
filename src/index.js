import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import store from 'redux/store';
import Router from 'components/Routes';
import HandleInputEvents from 'utils/inputs';
import '@magnetis/astro';

render(
  <Provider store={store}>
    <Router />
    <HandleInputEvents />
  </Provider>,
  document.getElementById('root')
);
