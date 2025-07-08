// src/routes/ProtectedRoute.jsx
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { user, loading } = useSelector(state => state.auth);

  return loading ? <p>Loading...</p> : user ? <Outlet /> : <Navigate to="/sign-in" replace />;
};

export default ProtectedRoute;
