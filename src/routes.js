import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import App from './App';
import UserAccount from './UserAccount';


const Routes = (props) => (
  <Router  >
    <div>
      <Route path="/" component={App} />
      <Route path="/userAccount" component={UserAccount} />
    </div>
  </Router>
);

export default Routes;
