import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../store/fetch/addProduct";

function App() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.addProduct);
  useEffect(() => {
    dispatch(getProducts());
    console.log(products);
  }, []);
  return (
    <div className="min-h-screen min-w-screen remove-scrollbar">
      <Header />
      <main className="mt-15">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
