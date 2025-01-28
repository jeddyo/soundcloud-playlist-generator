import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext'; // Import AuthContext

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AuthContext);

  // If the user is not authenticated, redirect to the login page
  if (!token) {
    return <Navigate to="/login" />;
  }

  // If the user is authenticated, render the protected component
  return children;
};

export default ProtectedRoute;