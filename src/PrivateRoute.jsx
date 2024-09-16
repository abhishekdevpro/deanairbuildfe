import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ element: Element }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Check if the user is authenticated
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Element />;
};

PrivateRoute.propTypes = {
  element: PropTypes.elementType.isRequired, // Ensure `element` is a React component
};

export default PrivateRoute;
