import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';

const ClientPrivate = ({ children, ...rest }) => {
  const user = useState(JSON.parse(localStorage.getItem('userInfo')))[0]
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

export default ClientPrivate;