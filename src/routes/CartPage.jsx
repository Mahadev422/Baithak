import { useState } from 'react';
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';

const cartItems = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 99.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=200&q=80",
  },
];

const CartPage = () => {
  const [items, setItems] = useState(cartItems);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5.00;
  const total = subtotal + shipping;

  const handleRemoveItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  return (
    <div className="px-4 py-6 md:px-8 md:py-10">
      <div className="mx-auto max-w-6xl bg-white rounded-lg shadow-md p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-6">Shopping Cart</h2>

        {items.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            Your cart is empty.
            <button
              className="mt-4 block mx-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => setItems(cartItems)} // Reset for demo
            >
              Reset Demo
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Cart Items */}
            <div className="flex-1 space-y-4 overflow-auto max-h-[70vh] pr-1">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between flex-wrap sm:flex-nowrap bg-gray-50 rounded-md p-3 sm:p-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded"
                  />

                  <div className="flex-1 min-w-[140px] sm:min-w-0 sm:ml-4">
                    <h3 className="font-semibold text-sm sm:text-base">{item.name}</h3>
                    <p className="text-gray-500 text-sm">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center gap-1 sm:gap-2 my-2 sm:my-0">
                    <button
                      className="p-1 sm:p-2 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    >
                      <FiMinus />
                    </button>
                    <span className="w-6 text-center text-sm sm:text-base">{item.quantity}</span>
                    <button
                      className="p-1 sm:p-2 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      <FiPlus />
                    </button>
                  </div>

                  <button
                    className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-full"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <FiTrash2 />
                  </button>
                </div>
              ))}
            </div>

            {/* Summary Section */}
            <div className="w-full lg:w-1/3">
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                <div className="flex justify-between mb-3">
                  <span className="text-gray-700 text-sm sm:text-base">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-3">
                  <span className="text-gray-700 text-sm sm:text-base">Shipping</span>
                  <span className="font-semibold">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base sm:text-lg font-bold border-t pt-4">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-semibold text-sm sm:text-base">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
