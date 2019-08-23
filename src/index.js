import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './reset.css'
import UserPage from './containers/UserPage';
import { Store } from './store';

ReactDOM.render(
  <Provider store={Store}>
    <UserPage />
  </Provider>, document.getElementById('root'));
