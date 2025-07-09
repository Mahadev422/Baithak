import { Link } from "react-router-dom";

const CartSummary = ({ items, quantity }) => {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * quantity,
    0
  );
  const shipping = 5.0;
  const total = subtotal + shipping;

  return (
    <div className="w-full lg:w-1/3">
      <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
        <div className="flex justify-between mb-3">
          <span className="text-gray-700 text-sm sm:text-base">Subtotal</span>
          <span className="font-semibold">₹ {subtotal}</span>
        </div>
        <div className="flex justify-between mb-3">
          <span className="text-gray-700 text-sm sm:text-base">Shipping</span>
          <span className="font-semibold">₹ 5</span>
        </div>
        <div className="flex justify-between mb-3">
          <span className="text-gray-700 text-sm sm:text-base">
            Delivery
          </span>
          <span className="font-semibold">₹ 0</span>
        </div>

        <div className="flex justify-between mb-3">
          <span className="text-gray-700 text-sm sm:text-base">Donate</span>
          <span className="font-semibold">₹ 0</span>
        </div>
        <div className="flex justify-between text-base sm:text-lg font-bold border-t pt-4">
          <span>Total</span>
          <span>₹ {total}</span>
        </div>
        <Link to='/admin/payment' className="mt-6 flex justify-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-semibold text-sm sm:text-base">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartSummary;
