const CartSummary = () => {
  return (
    <div className="w-full lg:w-1/3">
      <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
        <div className="flex justify-between mb-3">
          <span className="text-gray-700 text-sm sm:text-base">Subtotal</span>
          <span className="font-semibold">123</span>
        </div>
        <div className="flex justify-between mb-3">
          <span className="text-gray-700 text-sm sm:text-base">Shipping</span>
          <span className="font-semibold">$34</span>
        </div>
        <div className="flex justify-between text-base sm:text-lg font-bold border-t pt-4">
          <span>Total</span>
          <span>$123</span>
        </div>
        <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-semibold text-sm sm:text-base">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
