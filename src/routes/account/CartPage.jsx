import { useState } from "react";
import CartSummary from "../../components/account/CartSummary";
import CartItems from "../../components/account/CartItems";

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
  const [items, setItems] = useState(cartItems);

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 5.0;
  const total = subtotal + shipping;

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
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

           <CartItems items={items} />

            {/* Summary Section */}
            <CartSummary />
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
