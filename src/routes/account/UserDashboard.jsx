// routes: /account/*
import { Link, Outlet, useLocation } from "react-router-dom";

const UserDashboard = () => {
  const { pathname } = useLocation();

  const menu = [
    { name: "Profile", path: "/account/profile" },
    { name: "Orders", path: "/account/orders" },
    { name: "Wishlist", path: "/account/wishlist" },
    { name: "Settings", path: "/account/settings" },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-8 flex flex-col lg:flex-row gap-6 px-4">
      <aside className="w-full lg:w-1/4 bg-white p-4 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">My Account</h2>
        <ul className="space-y-2">
          {menu.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`block px-3 py-2 rounded ${
                  pathname === item.path
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <main className="flex-1 bg-white p-6 rounded shadow-md">
        <Outlet />
      </main>
    </div>
  );
};

export default UserDashboard;
