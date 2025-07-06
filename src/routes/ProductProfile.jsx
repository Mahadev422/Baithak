import { useEffect, useState } from "react";
import ImageGallery from "../components/product-profile/ImageGallery";
import QuantitySelect from "../components/product-profile/QuantitySelect";
import SizeSelect from "../components/product-profile/SizeSelect";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductProfile = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const { products } = useSelector(state => state.addProduct);

  const handleAddToCart = () => {
    alert(
      `Added ${quantity} ${selectedSize.name} ${selectedColor.name} ${mockProduct.name} to cart!`
    );
  };

  const handleBuyNow = () => {
    alert(
      `Proceeding to checkout with ${quantity} ${selectedSize.name} ${selectedColor.name} ${mockProduct.name}!`
    );
  };
  useEffect(() => {
    const data = products.find(p => p.id == id);
    setProduct(data)
  },[products]);

  if(!product) return <p>Loading...</p>

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Images */}
        <ImageGallery images={product.images} />

        {/* Product Details */}
        <div className="lg:w-1/2">
          <div className="space-y-6">
            {/* Product Title */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                {product.name}
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                {product.category}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <svg
                    key={rating}
                    className={`h-5 w-5 ${
                      rating < product.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </p>
            </div>

            {/* Price & Delivery */}
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
                  {Math.round(
                    ((product.originalPrice - product.price) * 100) /
                      product.originalPrice
                  )}
                  % OFF
                </span>
              </div>

              {/* Delivery Info */}
              <div className="space-y-1 text-sm">
                {product.deliveryInfo.freeDelivery && (
                  <p className="text-green-600 flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>FREE Delivery</span>
                  </p>
                )}
              </div>
            </div>
            {/* Description */}
            <p className="text-gray-700">{product.description}</p>

            {/* Size Selector */}
            <SizeSelect sizes={product.sizes} />

            {/* Quantity Selector */}
            <QuantitySelect setQuantity={setQuantity} quantity={quantity} />

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                disabled={product.stock === 0}
                onClick={handleAddToCart}
                className={`flex-1 py-3 px-8 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  product.stock === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700"
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                Add to cart
              </button>
              <button
                type="button"
                disabled={product.stock === 0}
                onClick={handleBuyNow}
                className={`flex-1 py-3 px-8 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  product.stock === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700"
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductProfile;
