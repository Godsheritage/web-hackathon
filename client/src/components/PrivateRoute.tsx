import React from 'react'

import { useNavigate, Route } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
const PrivateRoute = ({ component: Component, ...rest }) => {
  const navigate = useNavigate()
  const { isLoggedIn } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : navigate("/") 
      }
    />
  );
};
export default PrivateRoute;