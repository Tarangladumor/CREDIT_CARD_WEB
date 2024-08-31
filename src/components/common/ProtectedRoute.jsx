import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');

  console.log('Token from URL:', token);
  console.log('Expected Token:', process.env.REACT_APP_AUTH_TOKEN);

  if (token === process.env.REACT_APP_AUTH_TOKEN) {
    return <Component {...rest} />;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
