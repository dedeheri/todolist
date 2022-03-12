import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedAuth() {
  const {
    login: { is_login },
  } = useSelector((state) => state.authorization);

  return !is_login ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedAuth;
