import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { removeFromUserArray } from "../../store/fetch/auth";
import { showNotification } from "../../store/slices/notificationSlice";

const CartItem = ({ item, updateQuantity, quantities }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div
      key={item.id}
      className="flex relative items-center justify-evenly flex-wrap sm:flex-nowrap bg-gray-50 dark:bg-gray-900 rounded-md p-3 sm:p-4"
    >
      <img
        src={item.images[0]}
        alt={item.name}
        className="w-16 h-16 object-cover rounded"
      />

      <div className="flex-1 m-5">
        <h3 className="font-semibold text-sm sm:text-base">{item.name}</h3>
        <p className="text-gray-500 font-bold">₹ {item.price.toFixed(2)}</p>
      </div>

      <div className="flex items-center gap-1 sm:gap-2 my-2 sm:my-0">
        <h1 className="text-xs sm:text-sm mr-2">Qty</h1>
        <button
          onClick={() => updateQuantity(item.id, -1)}
          className="p-1 sm:p-2 bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded hover:bg-gray-300"
        >
          <FiMinus />
        </button>
        <span className="w-6 text-center text-sm sm:text-base">
          {quantities[item.id] || 1}
        </span>
        <button
          onClick={() => updateQuantity(item.id, 1)}
          className="p-1 sm:p-2 bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded hover:bg-gray-300"
        >
          <FiPlus />
        </button>
      </div>

      <button
        onClick={() => {
          dispatch(
            removeFromUserArray({
              uid: user,
              field: "cartStore",
              item: item.id,
            })
          );
          dispatch(
            showNotification({
              message: "Removed from cart",
              type: "success",
            })
          );
        }}
        className="p-2 absolute top-0 right-0 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-full"
      >
        <FiTrash2 />
      </button>
    </div>
  );
};

export default CartItem;
