import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ admin, children }) {
  return admin === true ? children : <Navigate to="/" />;
}

export default PrivateRoute;
