import { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addToUserArray, removeFromUserArray } from "../../store/fetch/auth";

const BuyCart = ({ id }) => {
  const { cartStore, load, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row gap-3">
      <span className="transition-all h-10 w-10 duration-300">
        {load ? '...' : cartStore.includes(id) ? (
          <button
            type="button"
            onClick={() =>
              dispatch(
                removeFromUserArray({ uid: user, field: "cartStore", item: id })
              )
            }
            className="p-2 text-2xl rounded shadow-sm text-white
          bg-indigo-500 hover:rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <MdOutlineRemoveShoppingCart />
          </button>
        ) : (
          <button
            type="button"
            onClick={() =>
              dispatch(
                addToUserArray({ uid: user, field: "cartStore", item: id })
              )
            }
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
