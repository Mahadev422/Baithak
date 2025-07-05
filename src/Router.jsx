import { createBrowserRouter } from "react-router-dom";
import App from "./routes/App";
import Home from "./routes/Home";
import UserProfile from "./routes/UserProfile";
import CartPage from "./routes/CartPage";
import Orders from "./routes/Orders";
import Settings from "./routes/Settings";
import Notifications from "./routes/Notifications";
import LoginPage from "./routes/LoginPage";
import Signup from "./routes/Signup";
import ProductProfile from "./routes/ProductProfile";
import Wishlist from "./routes/Wishlist";
import ProductForm from "./routes/admin/ProductForm";
import ProductLists from "./routes/product-list/ProductLists";

export const Router = createBrowserRouter([
  { path: "/", element: <App />, children: [
      { index: true, element: <Home /> },
      { path: "profile", element: <UserProfile /> },
      { path: "cart", element: <CartPage /> },
      { path: "orders", element: <Orders /> },
      { path: "settings", element: <Settings /> },
      { path: "notifications", element: <Notifications /> },
      { path: "/1", element: <ProductProfile />},
      { path: "wishlists", element: <Wishlist /> },
      { path: "products", element: <ProductLists />, children: [
        { index: true, element: <div>All</div> },
        { path: ':category', element: <div>Category</div> },
      ]}
    ]},
    { path: 'login', element: <LoginPage />},
    { path: 'signup', element: <Signup />},
    { path: 'add-product', element: <ProductForm /> }
]);
