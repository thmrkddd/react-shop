import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  function isAllowed() {
    if (user.email === "admin@gmail.com") return true;
    return false;
  }
  return isAllowed() ? <Outlet /> : navigate("/login");
};
