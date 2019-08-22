import React from 'react';
import ReactDOM from 'react-dom';
import UserPage from './containers/UserPage';
import { Provider } from 'react-redux';
import { Store } from './store';

ReactDOM.render(
  <Provider store={Store}>
    <UserPage />
  </Provider>, document.getElementById('root'));
