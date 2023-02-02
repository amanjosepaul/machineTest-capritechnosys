import { useSelector } from "react-redux";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const auth = useSelector((state) => state.userAuth);
  return auth.isUserLoggedIn ? <Outlet /> : <Navigate to="/login-signup" />;
};

export default ProtectedRoutes;
