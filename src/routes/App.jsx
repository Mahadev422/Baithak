import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../store/fetch/addProduct";
import { checkAuthStatus, getUserDetails } from "../store/fetch/auth";
import Spinner from "../components/Spinner";
import NotificationBanner from "../components/loader/NotificationBanner";

function App() {
  const { user, loading } = useSelector((state) => state.auth);
  const { show } = useSelector((state) => state.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuthStatus());
    dispatch(getProducts());
  }, []);
  useEffect(() => {
    if (user) dispatch(getUserDetails(user));
  }, [user]);

  if (loading) return <Spinner />;
  return (
    <div className="min-h-screen min-w-screen dark:bg-gray-900 text-black dark:text-white bg-gray-100 remove-scrollbar">
      <Header />
      <main className="mt-14">
        {show && <NotificationBanner />}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
