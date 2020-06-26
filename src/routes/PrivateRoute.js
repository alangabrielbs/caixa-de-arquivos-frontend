import React from 'react';
import { isBefore } from 'date-fns';
import { Route, Redirect } from 'react-router-dom';

import {
  getTokenLocalStorage,
  getExpiredTokenLocalStorage,
  removeTokenLocalStorage,
} from '../utils/localStorage';

import { decodeToken } from '../utils/jwt';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const expToken = getExpiredTokenLocalStorage();
  const isTokenValid = decodeToken();
  const isExpiredToken = isBefore(Date.parse(expToken), new Date());

  if (isExpiredToken) {
    removeTokenLocalStorage();
  }

  return (
    <Route
      {...rest}
      render={() => {
        if (isTokenValid && !isExpiredToken) {
          return <Component />;
        }

        return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
