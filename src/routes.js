import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import App from './App';
import UserAccount from './UserAccount';
import RegisterForm from './RegisterForm';


const Routes = (props) => (
  <Router {...props}>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/userAccount" component={UserAccount} />
      <Route path="/register" component={RegisterForm} />
    </div>
  </Router>
);

export default Routes;
