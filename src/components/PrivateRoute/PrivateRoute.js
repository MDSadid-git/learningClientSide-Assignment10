import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";

const PrivateRoute = ({ children }) => {
  const { user, loadin } = useContext(AuthContext);
  const location = useLocation();

  if (loadin) {
    return <Spinner animation="border" variant="primary" className="mt-5" />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
