// AppRoutes.js
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login_main from "../Components/Login/Login_main";
import PrivateRoute from "./PrivateRoute";
import ProtectedApproute from "./ProtectedApproute";


const AppRoutes = ({ access_token, userType }) => {
  console.log("AppRoutes with token >>> ", access_token, userType);

  return (
    <Routes>
      <Route path="/" element={<Login_main />} />
      {access_token && userType === "Admin" && (
        <>
          <Route
            path="/dashboard"
            element={<PrivateRoute element={<div>RMC Home</div>} />}
          />          
        </>
      )}
      {access_token && userType === "TC" && (
        <>
          <Route
            path="/conductor_dashboard"
            element={<ProtectedApproute element={<div>Conductor Home</div>} />}
          />
        </>
      )}
    </Routes>
  );
};

export default AppRoutes;
