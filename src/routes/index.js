import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import Home from '../pages/Home';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/registrar" component={Register} />
        <Route path="/recuperar-senha" component={ForgotPassword} />
        <Route path="/reset" component={ResetPassword} />
        <PrivateRoute path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
