import React from "react";

const Rating = ({ product, handleChange}) => {
  return (
    <section>
      <h2 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
        Ratings & Reviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-blue-900 mb-1">
            Rating (0-5)
          </label>
          <input
            type="number"
            name="rating"
            value={product.rating}
            onChange={handleChange}
            min="0"
            max="5"
            step="0.1"
            className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white shadow-sm transition"
            placeholder="4.7"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-900 mb-1">
            Number of Reviews
          </label>
          <input
            type="number"
            name="reviews"
            value={product.reviews}
            onChange={handleChange}
            min="0"
            className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white shadow-sm transition"
            placeholder="328"
          />
        </div>
      </div>
    </section>
  );
};

export default Rating;
