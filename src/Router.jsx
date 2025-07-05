import { createBrowserRouter } from "react-router-dom";
import App from "./routes/App";
import Home from "./routes/Home";
import UserDashboard from "./routes/account/UserDashboard";
import CartPage from "./routes/CartPage";
import Settings from "./routes/account/Settings";
import Notifications from "./routes/Notifications";
import LoginPage from "./routes/LoginPage";
import Signup from "./routes/Signup";
import ProductProfile from "./routes/ProductProfile";
import Wishlist from "./routes/account/Wishlist";
import ProductForm from "./routes/admin/ProductForm";
import ProductLists from "./routes/product-list/ProductLists";
import OrderHistory from "./routes/account/OrderHistory";
import Profile from "./routes/account/Profile";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "account",
        element: <UserDashboard />,
        children: [
          { index: true, element: <Profile /> },
          { path: "profile", element: <Profile /> },
          { path: "wishlist", element: <Wishlist /> },
          { path: "orders", element: <OrderHistory /> },
          { path: "settings", element: <Settings /> },
        ],
      },
      { path: "cart", element: <CartPage /> },
      { path: "notifications", element: <Notifications /> },
      { path: "/products/:category/:id", element: <ProductProfile /> },
      {
        path: "products",
        element: <ProductLists />,
        children: [
          { index: true, element: <div>All</div> },
          { path: ":category", element: <div>Category</div> },
        ],
      },
    ],
  },
  { path: "login", element: <LoginPage /> },
  { path: "signup", element: <Signup /> },
  { path: "add-product", element: <ProductForm /> },
]);
