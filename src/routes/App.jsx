import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

function App() {
  return (
    <div className="min-h-screen min-w-screen remove-scrollbar">
      <Header />
      <main className="mt-13">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
