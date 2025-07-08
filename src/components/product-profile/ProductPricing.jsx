const ProductPricing = ({ product }) => {
  const off =
    ((product.originalPrice - product.price) * 100) / product.originalPrice;
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-4">
        <p className="text-3xl font-bold text-gray-900">
          ₹{product.price.toFixed(2)}
        </p>
        {product.originalPrice && (
          <p className="text-lg text-gray-500 line-through">
            ₹{product.originalPrice.toFixed(2)}
          </p>
        )}
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          {Math.round(off)}% OFF
        </span>
      </div>

      {/* Delivery Info */}
      <div className="space-y-1 text-sm">
        {product.deliveryInfo.freeDelivery && (
          <p className="text-green-600 flex items-center gap-1">
            <span>FREE Delivery</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductPricing;
