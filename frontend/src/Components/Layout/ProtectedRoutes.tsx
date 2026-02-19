import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth.context.tsx";

const ProtectedRoute = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
