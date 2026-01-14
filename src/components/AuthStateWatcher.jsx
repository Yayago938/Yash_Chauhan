import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const AuthWatcher = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkToken = () => {
      const token = Cookies.get("token");

      const publicRoutes = ["/", "/login", "/register"];

      if (!token && !publicRoutes.includes(location.pathname)) {
        navigate("/", { replace: true });
      }
    };

    // Run once on mount
    checkToken();

    // Keep watching for deletion/expiry
    const interval = setInterval(checkToken, 1000);

    return () => clearInterval(interval);
  }, [navigate, location.pathname]);

  return null;
};

export default AuthWatcher;
