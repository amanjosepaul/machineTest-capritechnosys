import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginAndSignUp from "./components/LoginAndSignUp/LoginAndSignUp";
import Home from "./components/home/Home";
import ProtectedRoutes from "./utils/ProtectedRouts";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login-signup" />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="/login-signup" element={<LoginAndSignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
