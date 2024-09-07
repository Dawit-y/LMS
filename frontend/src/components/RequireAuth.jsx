import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  //   if (allowedRoles && !allowedRoles.includes(user.role)) {
  //     return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  //   }

  return <Outlet />;
};

export default RequireAuth;
