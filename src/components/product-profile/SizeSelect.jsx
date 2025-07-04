import { useState } from "react";

const SizeSelect = ({ sizes }) => {
    
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium text-gray-900">Size</h3>
        <a href="#" className="text-sm text-blue-600 hover:underline">
          Size Guide
        </a>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-3">
        {sizes.map((size) => (
          <button
            key={size.name}
            type="button"
            disabled={!size.inStock}
            className={`py-2 px-3 border rounded-md text-sm font-medium ${
              selectedSize.name === size.name
                ? "bg-indigo-600 text-white hover:bg-indigo-700 border-indigo-600"
                : "bg-white hover:bg-gray-50 text-gray-900 border-gray-300"
            } ${
              !size.inStock
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={() => setSelectedSize(size)}
          >
            {size.name}
            {!size.inStock && <span className="sr-only"> (Out of stock)</span>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelect;
