import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getDataUsers } from "../redux/action/authorization";

function ProtectedRouters() {
  const dispatch = useDispatch();

  const {
    success: { message },
  } = useSelector((state) => state.authorization);

  console.log(message);

  useEffect(() => {
    dispatch(getDataUsers());
  }, []);
  const [authenticated, setAuthenticated] = useState(true);

  useEffect(() => {
    if (Cookies.get("Token")) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, [message]);

  return authenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRouters;
