import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../store/fetch/addProduct";
import { checkAuthStatus, getUserDetails } from "../store/fetch/auth";

function App() {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuthStatus());
    dispatch(getProducts());
  }, []);
  useEffect(() => {
    if(user) dispatch(getUserDetails(user));
  },[user])
  return (
    <div className="min-h-screen min-w-screen bg-gray-100 remove-scrollbar">
      <Header />
      <main className="mt-15">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
