import React, { useEffect, useState } from "react";
import { FaBoxOpen, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Product from "../../components/home/Product";

const mockProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    image: "https://via.placeholder.com/100",
    description: "High quality wireless headphones with noise cancellation.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 129.99,
    image: "https://via.placeholder.com/100",
    description: "Track your fitness and notifications on the go.",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 39.99,
    image: "https://via.placeholder.com/100",
    description: "Portable speaker with deep bass and long battery life.",
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 24.99,
    image: "https://via.placeholder.com/100",
    description: "Ergonomic mouse with customizable buttons.",
  },
];

const categories = [
  {
    name: "Books",
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=facearea&w=100&q=80",
  },
  {
    name: "Shorts",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=100&q=80",
  },
  {
    name: "Trouser",
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=facearea&w=100&q=80",
  },
  {
    name: "Caps",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=100&q=80",
  },
  {
    name: "GYM",
    img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=facearea&w=100&q=80",
  },
  {
    name: "Shoes",
    img: "https://images.unsplash.com/photo-1517260911205-8a3b5aee43a0?auto=format&fit=facearea&w=100&q=80",
  },
  {
    name: "Sports",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=100&q=80",
  },
];

const ProductLists = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState(null);

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <div className="flex mb-8 gap-4 overflow-x-auto h-32 remove-scrollbar pb-2">
        {categories.map((cat) => (
          <Link
            to={`/products/${cat.name.toLowerCase()}`}
            key={cat.name}
            className={`flex flex-col items-center px-4 py-2 min-w-28 rounded-xl shadow-sm transition-all duration-200 border
                            ${
                              activeCat === cat.name
                                ? "bg-blue-600 text-white border-blue-600 scale-105"
                                : "bg-white text-gray-700 border-gray-200 hover:bg-blue-100"
                            }`}
            onClick={() => setActiveCat(cat.name)}
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
            className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProducts.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 py-12 bg-white rounded-lg shadow">
            No products found.
          </div>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-200 p-4 flex"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 object-cover rounded-lg mr-4 border"
              />
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h2>
                  <p className="text-gray-500 text-sm mb-2">
                    {product.description}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-blue-600 font-bold text-lg">
                    ${product.price}
                  </span>
                  <button className="bg-blue-600 text-white px-4 py-1 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductLists;
