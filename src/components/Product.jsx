import { Link } from "react-router-dom";

const Product = ({ product }) => {
  // const product = {
  //   id: 1,
  //   name: "Premium Wireless Headphones",
  //   price: 199.99,
  //   category: "Electronics",
  //   rating: 4.5,
  //   discountPrice: 149.99,
  //   description:
  //     "Experience high-quality sound with our premium wireless headphones. Perfect for music lovers and audiophiles.",
  //   imageUrl:
  //     "https://i.ibb.co/tTcYZwh2/Whats-App-Image-2025-07-04-at-09-50-43-c4e4c9ed.jpg",
  // };

  // // Calculate discount percent
  // const discountPercent = Math.round(
  //   ((product.price - product.discountPrice) * 100) / product.price
  // );

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-200 p-4 flex">
      <img
        src={product.image}
        alt={product.name}
        className="w-24 h-24 object-cover rounded-lg mr-4"
      />
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            {product.name}
          </h2>
        </div>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className={`${
                i <= Math.floor(4) ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>
        <div className="flex gap-3 items-center">
          <span className="text-gray-400 line-through text-base">₹ {299}</span>
          <span className="text-red-600 font-semibold bg-red-100 px-2 py-0.5 rounded text-xs">
            {"20"}% OFF
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-blue-600 font-bold text-lg">
            ${product.price}
          </span>
          <Link
            to={`/products/${product.category.toLowerCase()}/${product.id}`}
            className="bg-green-600 text-white px-4 py-1 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
