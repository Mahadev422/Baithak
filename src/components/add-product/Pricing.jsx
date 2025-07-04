
const Pricing = ({ product, handleChange, errors}) => {
  return (
    <section>
      <h2 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
        Pricing & Stock
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-blue-900 mb-1">
            Current Price ($) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            step="0.01"
            min="0"
            className={`w-full px-4 py-2 border ${
              errors.price ? "border-red-500" : "border-blue-200"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white shadow-sm transition`}
            placeholder="199.99"
          />
          {errors.price && (
            <p className="mt-1 text-xs text-red-500">{errors.price}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-900 mb-1">
            Original Price ($)
          </label>
          <input
            type="number"
            name="originalPrice"
            value={product.originalPrice}
            onChange={handleChange}
            step="0.01"
            min="0"
            className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white shadow-sm transition"
            placeholder="249.99"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-900 mb-1">
            Stock Quantity
          </label>
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            min="0"
            className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white shadow-sm transition"
            placeholder="15"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
