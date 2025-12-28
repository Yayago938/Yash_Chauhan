import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "./auth";

const ProtectedRoute = () => {

  if (!isAuthenticated()) {
    return <Navigate to="/login"/>;
  }

  return <Outlet/>;
};

export default ProtectedRoute;