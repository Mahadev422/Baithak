const categories = [
  "Electronics",
  "Clothing",
  "Home & Kitchen",
  "Books",
  "Beauty",
  "Sports",
  "Toys",
  "Other",
];
const Basic = ({ product, handleChange, errors }) => {
  return (
    <section>
      <h2 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
        Basic Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-blue-900 mb-1">
            Product Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${
              errors.name ? "border-red-500" : "border-blue-200"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white shadow-sm transition`}
            placeholder="e.g., Wireless Headphones"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-900 mb-1">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${
              errors.category ? "border-red-500" : "border-blue-200"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white shadow-sm transition`}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="mt-1 text-xs text-red-500">{errors.category}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Basic;
