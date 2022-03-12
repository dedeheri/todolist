import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function ProtectedRouters({ children }) {
  const {
    login: { is_login },
  } = useSelector((state) => state.authorization);

  const location = useLocation();

  return is_login ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}

export default ProtectedRouters;
