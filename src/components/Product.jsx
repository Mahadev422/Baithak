import { Link } from "react-router-dom";

const Product = ({ product }) => {

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-200 p-4 flex">
      <img
        src={product.images[0]}
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
            className="bg-green-600 text-white px-4 py-1 rounded-lg text-sm font-medium hover:bg-green-700 transition"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
