import React, { useState } from "react";
import { Link } from "react-router-dom";

// Dummy data
const categories = [
  {
    id: 1,
    name: "Electronics",
    products: [
      { id: 101, name: "Smartphone", price: 299 },
      { id: 102, name: "Laptop", price: 799 },
      { id: 103, name: "Smartphone", price: 299 },
      { id: 104, name: "Laptop", price: 799 },
      { id: 105, name: "Smartphone", price: 299 },
      { id: 106, name: "Laptop", price: 799 },
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
    <div className="p-4">
      <div className="mb-8 flex gap-3 overflow-x-auto remove-scrollbar">
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
          <span className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-gray-700">{cat.name}</h2>
            <Link className="text-sm text-blue-600 p-1 px-2 rounded hover:bg-blue-200">
              View All
            </Link>
          </span>

          <div className="flex overflow-y-auto remove-scrollbar gap-3">
            {cat.products.map((prod) => (
              <div className="flex flex-1 min-w-[310px] border border-gray-200 rounded-lg shadow-md font-sans">
                <div className="p-1 items-center justify-center">
                  <img
                    src="https://lh6.googleusercontent.com/proxy/1o41SnAPq3W6JDr0tByD1Lg2zpp7x1ozBPwcXF9zi4YF0yHey3ha4Sn8wJnoYBp3AZ7CSF7bsodrfQcXDLFbcf2k8IF2zZ-tcPlnObgInCXwgmS1OSRPWVkYp79sHBaL0GfrqtNesq3-D5OCOQ"
                    alt="Product Image"
                    className="w-full"
                  />
                </div>

                <div className="flex-1 p-5 flex flex-col justify-between">
                  <div>
                    <h2 className="m-0 mb-2 font-semibold text-gray-800">
                      Premium Wireless Headphones
                    </h2>
                    <div className="flex items-center mb-2">
                      <span className="text-xl font-bold text-gray-900">
                        $199.99
                      </span>
                      <span className="ml-2 text-red-600 font-bold bg-red-100 px-2 py-0.5 rounded text-sm">
                        25% OFF
                      </span>
                    </div>
                  </div>

                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors duration-200 self-start">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
