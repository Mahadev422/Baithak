import { FaPlus, FaMinus  } from "react-icons/fa";

const QuantitySelect = ({ setQuantity, quantity}) => {
  return (
    <div className="border-t border-gray-200 pt-4">
      <label
        htmlFor="quantity"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Quantity
      </label>
      <div className="flex items-center gap-4">
        <div className="flex items-center border border-gray-300 rounded-md">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-2 bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-l-md hover:bg-gray-200"
            disabled={quantity <= 1}
          >
            <FaMinus className="h-full" />
          </button>
          <input
            type="number"
            id="quantity"
            min="1"
            readOnly
            value={quantity}
            className="w-12 pl-3 text-2xl text-center border-0 focus:ring-0"
          />
          <button
            onClick={() =>
              setQuantity(Math.min(4,quantity + 1))
            }
            className="p-2 bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-r-md hover:bg-gray-200"
          >
            <FaPlus className="h-full" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuantitySelect;
