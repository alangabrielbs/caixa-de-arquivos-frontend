import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Login from '../pages/Login';
import Home from '../pages/Home';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
