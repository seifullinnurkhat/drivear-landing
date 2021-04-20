import React, { useEffect } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

function PrivateRoute({ component, path, exact }) {
 const performValidationHere = () => {
  const accessToken = localStorage.getItem("userToken");
  if (!accessToken) {
   return false;
  }
  const decodedToken = jwt_decode(accessToken);
  let currentDate = new Date();

  if (decodedToken.exp * 1000 < currentDate.getTime()) {
   return false;
  } else {
   return true;
  }
 };

 const condition = performValidationHere();
 return condition ? (
  <Route path={path} exact={exact} component={component} />
 ) : (
  <Redirect to="/login" />
 );
}
export default PrivateRoute;
