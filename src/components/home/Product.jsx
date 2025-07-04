import { Link } from "react-router-dom";

const Product = () => {
  const product = {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    category: "Electronics",
    rating: 4.5,
    discountPrice: 149.99,
    description:
      "Experience high-quality sound with our premium wireless headphones. Perfect for music lovers and audiophiles.",
    imageUrl:
      "https://i.ibb.co/tTcYZwh2/Whats-App-Image-2025-07-04-at-09-50-43-c4e4c9ed.jpg",
  };

  // Calculate discount percent
  const discountPercent = Math.round(
    ((product.price - product.discountPrice) * 100) / product.price
  );

  return (
    <div className="flex-1 min-w-[310px] max-w-xs border border-gray-200 rounded-xl font-sans hover:shadow-xl transition-shadow duration-300">
      <div className="p-2 flex items-center justify-center">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-50 object-cover rounded-lg"
        />
      </div>
      <div className="px-5 pt-3 pb-5 flex flex-col gap-2">
        <div className="flex items-center gap-1 mb-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className={`text-2xl ${
                i <= Math.floor(product.rating)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
          <span className="ml-2 text-xs text-gray-500">{product.rating}</span>
        </div>
        <h2 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h2>
        <div className="flex items-center gap-2 mb-2">
          <span className="font-bold text-lg text-green-600">
            ₹ {product.discountPrice}
          </span>
          <span className="text-red-600 font-semibold bg-red-100 px-2 py-0.5 rounded text-xs">
            {discountPercent}% OFF
          </span>
          <span className="text-gray-400 line-through text-base">
            ₹ {product.price}
          </span>
        </div>
        <Link
          to="1"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold p-2 text-center rounded-lg transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Product;
