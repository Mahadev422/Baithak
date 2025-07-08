import { useState } from "react";
import CartSummary from "../../components/account/CartSummary";
import CartItems from "../../components/account/CartItems";
import { useSelector } from "react-redux";

// const cartItems = [
//   {
//     id: 1,
//     name: "Wireless Headphones",
//     price: 59.99,
//     quantity: 2,
//     image:
//       "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=200&q=80",
//   },
//   {
//     id: 2,
//     name: "Smart Watch",
//     price: 99.99,
//     quantity: 1,
//     image:
//       "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=200&q=80",
//   },
// ];

const CartPage = () => {
  const { cartStore } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.addProduct);
  const [quantity, setQuantity] = useState(1);

  //console.log(cartStore, products);

  const cartItems = products.filter((item) => cartStore.includes(item.id));
  if (!cartItems) return <p>Loading</p>;

  return (
    <div className="px-4 py-6 md:px-8 md:py-10">
      <div className="mx-auto max-w-6xl bg-white rounded-lg shadow-md p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-6">Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            Your cart is empty.
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Cart Items */}

            <CartItems
              items={cartItems}
              quantity={quantity}
              setQuantity={setQuantity}
            />

            {/* Summary Section */}
            <CartSummary items={cartItems} quantity={quantity} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
