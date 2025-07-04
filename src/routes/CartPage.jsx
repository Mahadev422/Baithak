import React from "react";

const cartItems = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 99.99,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=200&q=80",
  },
];

const CartPage = () => {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500">Your cart is empty.</div>
        ) : (
          <>
            <div className="divide-y">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center py-4 gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-500">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
                    <span>{item.quantity}</span>
                    <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
                  </div>
                  <div className="w-24 text-right font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button className="ml-4 text-red-500 hover:underline">Remove</button>
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-8">
              <div className="w-full max-w-sm bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-700">Shipping</span>
                  <span className="font-semibold">$5.00</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t pt-4">
                  <span>Total</span>
                  <span>${(subtotal + 5).toFixed(2)}</span>
                </div>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-semibold">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;