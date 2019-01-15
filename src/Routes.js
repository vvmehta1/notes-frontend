import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import HomePage from './component/pages/HomePage';
import LoginPage from './component/pages/LoginPage';
import SignupPage from './component/pages/SignupPage';

const routes = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
    <Route path="/signup" exact component={SignupPage} />
  </Switch>
);

export default routes;
