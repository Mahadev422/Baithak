import { createBrowserRouter } from "react-router-dom";
import App from "./routes/App";
import Home from "./routes/Home";
import UserDashboard from "./routes/account/UserDashboard";
import CartPage from "./routes/account/CartPage";
import Notifications from "./routes/Notifications";
import ProductProfile from "./routes/ProductProfile";
import Wishlists from "./routes/account/Wishlists";
import ProductForm from "./routes/admin/ProductForm";
import ProductLists from "./routes/product-list/ProductLists";
import Orders from "./routes/account/Orders";
import Profile from "./routes/account/Profile";
import SignIn from "./routes/authentication/SignIn";
import ProtectedRoute from "./routes/authentication/ProtectedRoute"; // ✅ import
import PaymentPage from "./routes/authentication/PaymentPage";
import CategoryPorducts from "./routes/product-list/CategoryProducts";
import Contact from "./routes/account/ContactUs";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },

      // 🔐 Protected Routes
      {
        element: <ProtectedRoute />, // ✅ Wrap protected
        children: [
          {
            path: "account",
            element: <UserDashboard />,
            children: [
              { index: true, element: <Profile /> },
              { path: "orders", element: <Orders /> },
            ],
          },
          { path: "cart", element: <CartPage /> },
          { path: "wishlists", element: <Wishlists /> },
          { path: "notifications", element: <Notifications /> },
          { path: "admin/payment", element: <PaymentPage /> },
          { path: "contact-us", element: <Contact /> },
        ],
      },

      

      { path: "/products/:category/:id", element: <ProductProfile /> },
      {
        path: "products",
        element: <ProductLists />,
        children: [
          { index: true, element: <CategoryPorducts /> },
          { path: ":category", element: <CategoryPorducts /> },
        ],
      },
    ],
  },

  // 🔓 Public Routes
  { path: "/sign-in", element: <SignIn /> },

  // 🔐 Optional: Admin Route Guard
  { path: "/admin/add-product", element: <ProductForm /> },
]);
