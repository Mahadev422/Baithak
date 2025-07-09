
const CartSummary = ({handleCheckout, subtotal, total, shipping}) => {
  return (
    <div className="w-full lg:w-1/3">
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 sm:p-6">
        <div className="flex justify-between mb-3">
          <span className="text-sm sm:text-base">Subtotal</span>
          <span className="font-semibold">₹ {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-3">
          <span className="text-sm sm:text-base">Shipping</span>
          <span className="font-semibold">₹ {shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-3">
          <span className="text-sm sm:text-base">Delivery</span>
          <span className="font-semibold">₹ 0.00</span>
        </div>
        <div className="flex justify-between mb-3">
          <span className="text-sm sm:text-base">Donate</span>
          <span className="font-semibold">₹ 0.00</span>
        </div>
        <div className="flex justify-between text-base sm:text-lg font-bold border-t pt-4">
          <span>Total</span>
          <span>₹ {total.toFixed(2)}</span>
        </div>

        <button
          onClick={handleCheckout}
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-semibold text-sm sm:text-base"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
