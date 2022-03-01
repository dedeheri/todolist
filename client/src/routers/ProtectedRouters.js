import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRouters({ authenticated }) {
  return authenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRouters;
