import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import store from 'redux/store';
import Router from 'components/Routes';
import '@magnetis/astro';

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
