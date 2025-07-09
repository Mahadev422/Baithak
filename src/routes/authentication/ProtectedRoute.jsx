import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Spinner from "../../components/Spinner";

const ProtectedRoute = () => {
  const { user, loading } = useSelector(state => state.auth);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1000); // ⏱ 1 second delay

    return () => clearTimeout(timer);
  }, []);

  if (loading || showLoading) return <Spinner />;

  return user ? <Outlet /> : <Navigate to="/sign-in" replace />;
};

export default ProtectedRoute;
