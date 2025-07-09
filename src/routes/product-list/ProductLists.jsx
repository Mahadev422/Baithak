import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, Outlet, useParams } from "react-router-dom";
import { categories } from "../../data";

const ProductLists = () => {
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState(null);
  const { category } = useParams();

  useEffect(() => {
    setActiveCat(category || "all");
  }, [category]);

  return (
    <div className="p-3 md:p-5 lg:p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="flex mb-8 gap-4 overflow-x-auto h-32 remove-scrollbar pb-2">
        <Link
          to={`/products/`}
          className={`flex hover:rounded-full flex-col items-center p-2 min-w-28 rounded-xl shadow-sm transition-all duration-200                            ${
                              activeCat === "all"
                                ? "bg-blue-600 dark:bg-gray-700 text-white border-blue-600 scale-105"
                                : "bg-white text-gray-700 dark:bg-gray-800 border-gray-200 dark:text-white"
                            }`}
          onClick={() => setActiveCat("all")}
        >
          <img
            className="rounded-full h-16 w-16 object-cover mb-2"
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=facearea&w=100&q=80"
            alt="All Products"
          />
          <span className="text-sm font-medium">All</span>
        </Link>
        {categories.map((cat) => (
          <Link
            to={`/products/${cat.name.toLowerCase()}`}
            key={cat.name}
            className={`flex flex-col items-center p-2 hover:rounded-full min-w-28 rounded-xl shadow-sm transition-all duration-200                         ${
                              activeCat === cat.name.toLocaleLowerCase()
                                ? "bg-blue-600 dark:bg-gray-700 text-white border-blue-600 scale-105"
                                : "bg-white text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-white"
                            }`}
            onClick={() => setActiveCat(cat.name.toLocaleLowerCase())}
          >
            <img
              className="rounded-full h-16 w-16 object-cover mb-2 border"
              src={cat.img}
              alt={cat.name}
            />
            <span className="text-sm font-medium">{cat.name}</span>
          </Link>
        ))}
      </div>
      <div className="flex items-center mb-6">
        <div className="relative w-full">
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 bg-white"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default ProductLists;
