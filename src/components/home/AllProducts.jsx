import React, { useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

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
      {displayedCategories.map((cat) => (
        <div key={cat.id} className="mb-10">
          <span className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-gray-700">{cat.name}</h2>
            <Link to={`products/${cat.name.toLocaleLowerCase()}`} className="text-sm text-blue-600 p-1 px-2 rounded hover:bg-blue-200">
              View All
            </Link>
          </span>

          <div className="flex overflow-y-auto remove-scrollbar gap-3">
            {cat.products.map((prod) => (
              <div key={prod.id}>    
              <Product />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
