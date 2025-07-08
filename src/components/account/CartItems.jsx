import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
const CartItems = ({ items, quantity, setQuantity }) => {
  return (
    <div className="flex-1 space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex relative items-center justify-evenly flex-wrap sm:flex-nowrap bg-gray-50 rounded-md p-3 sm:p-4"
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
            <h1>Quantity</h1>
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-1 sm:p-2 bg-gray-200 rounded hover:bg-gray-300">
              <FiMinus />
            </button>
            <span className="w-6 text-center text-sm sm:text-base">
              {quantity}
            </span>
            <button onClick={() => setQuantity(Math.min(4, quantity + 1))} className="p-1 sm:p-2 bg-gray-200 rounded hover:bg-gray-300">
              <FiPlus />
            </button>
          </div>

          <button className="p-2 absolute top-0 right-0 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-full">
            <FiTrash2 />
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
