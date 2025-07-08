import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToUserArray, removeFromUserArray } from "../store/fetch/auth";

const Product = ({ product }) => {
  const { wishlists, load, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  //console.log(wishlists, product.id)

  const off =
    ((product.originalPrice - product.price) * 100) / product.originalPrice;

  return (
    <div className="bg-white rounded-xl h-[150px] hover:shadow-lg transition-all relative duration-200 p-2 flex gap-3">
      <div className="absolute m-1 text-xl text-gray-800 hover:scale-[1.2] rounded-full p-1">
        {load ? (
          "..."
        ) : wishlists.includes(product.id) ? (
          <button
            onClick={() =>
              dispatch(
                removeFromUserArray({
                  uid: user,
                  field: "wishlists",
                  item: product.id,
                })
              )
            }
            className="h-5 w-5 text-red-500"
          >
            <FaHeart />
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch(
                addToUserArray({ uid: user, field: "wishlists", item: product.id })
              )
            }
            className="h-5 w-5"
          >
            <FaRegHeart />
          </button>
        )}
      </div>
      <Link to={`/products/${product.category.toLowerCase()}/${product.id}`}>
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-24 h-full flex-1 object-cover rounded-lg mr-4"
        />
      </Link>
      <div className="flex flex-col justify-between flex-2">
        <div>
          <h2 className="text-lg truncate font-semibold text-gray-800">
            {product.name}
          </h2>
        </div>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className={`${
                i <= Math.floor(product.rating || 0)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>
        <div className="flex gap-3 items-center">
          <span className="text-gray-400 line-through text-base">
            ₹ {product.originalPrice}
          </span>
          <span className="text-red-600 font-semibold bg-red-100 px-2 py-0.5 rounded text-xs">
            {off.toFixed()}% OFF
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-blue-600 font-bold text-lg">
            ₹ {product.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
