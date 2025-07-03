import React, { useState } from "react";

// Dummy data
const categories = [
  {
    id: 1,
    name: "Electronics",
    products: [
      { id: 101, name: "Smartphone", price: 299 },
      { id: 102, name: "Laptop", price: 799 },
    ],
  },
  {
    id: 2,
    name: "Clothing",
    products: [
      { id: 201, name: "T-Shirt", price: 19 },
      { id: 202, name: "Jeans", price: 49 },
    ],
  },
  {
    id: 3,
    name: "Books",
    products: [
      { id: 301, name: "Novel", price: 15 },
      { id: 302, name: "Comics", price: 8 },
    ],
  },
];

const AllProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (catId) => {
    setSelectedCategory(catId);
  };

  const displayedCategories = selectedCategory
    ? categories.filter((cat) => cat.id === selectedCategory)
    : categories;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="mb-8 flex gap-3 overflow-x-auto">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded ${
            selectedCategory === null
              ? "bg-blue-600 text-white font-semibold"
              : "bg-white border border-gray-300 text-gray-700 hover:bg-blue-100"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryClick(cat.id)}
            className={`px-4 py-2 rounded ${
              selectedCategory === cat.id
                ? "bg-blue-600 text-white font-semibold"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-blue-100"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
      {displayedCategories.map((cat) => (
        <div key={cat.id} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            {cat.name}
          </h2>
          <div className="flex overflow-y-auto remove-scrollbar gap-6">
            {cat.products.map((prod) => (
              <div
                key={prod.id}
                className="flex-1 bg-white rounded-lg shadow p-6 flex flex-col items-center hover:shadow-lg transition"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600 text-xl font-bold">
                  {prod.name[0]}
                </div>
                <div className="text-lg font-medium text-gray-800 mb-2">
                  {prod.name}
                </div>
                <div className="text-gray-500 mb-4">${prod.price}</div>
                <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
