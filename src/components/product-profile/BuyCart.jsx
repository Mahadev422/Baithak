import { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";

const BuyCart = ({ product }) => {
  //console.log(product);
  const { cartStore, load, user } = useSelector(state => state.auth);
  const [cart, setCart] = useState(false);
  return (
    <div className="flex flex-row gap-3">
      <span className="transition-all duration-300">
        {cart ? (
          <button
            type="button"
            onClick={() => setCart(false)}
            className="p-2 text-2xl rounded shadow-sm text-white
          bg-indigo-500 hover:rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <MdOutlineRemoveShoppingCart />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setCart(true)}
            className="p-2 text-2xl rounded shadow-sm text-white
          bg-indigo-600 hover:rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <MdOutlineShoppingCart />
          </button>
        )}
      </span>
      <button
        type="button"
        className="flex-auto transition-all p-2 hover:rounded-full shadow-sm text-sm font-medium rounded text-white 
            bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Buy now
      </button>
    </div>
  );
};

export default BuyCart;
