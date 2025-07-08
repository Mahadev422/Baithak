import { useEffect, useState } from "react";
import ImageGallery from "../components/product-profile/ImageGallery";
import QuantitySelect from "../components/product-profile/QuantitySelect";
import SizeSelect from "../components/product-profile/SizeSelect";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import BuyCart from "../components/product-profile/BuyCart";
import ProductPricing from "../components/product-profile/ProductPricing";

const ProductProfile = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const { products } = useSelector(state => state.addProduct);

  useEffect(() => {
    const data = products.find(p => p.id == id);
    setProduct(data)
  },[products]);

  if(!product) return <p>Loading...</p>

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Images */}
        <ImageGallery images={product.images} id={id} />

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
            <ProductPricing product={product} />
            {/* Description */}
            <p className="text-gray-700">{product.description}</p>

            {/* Size Selector */}
            <SizeSelect sizes={product.sizes} />

            {/* Quantity Selector */}
            <QuantitySelect setQuantity={setQuantity} quantity={quantity} />

            {/* Action Buttons */}
            <BuyCart id={product.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductProfile;
