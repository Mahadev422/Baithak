import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartSummary from "../../components/account/CartSummary";
import CartItem from "../../components/account/CartItem";
import { storeOrder } from "../../store/slices/orderSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartStore, user } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.addProduct);

  const [quantities, setQuantities] = useState({});

  const cartItems = products.filter((item) => cartStore.includes(item.id));

  const updateQuantity = (id, delta) => {
    setQuantities((prev) => {
      const newQty = Math.min(4, Math.max(1, (prev[id] || 1) + delta));
      return { ...prev, [id]: newQty };
    });
  };

  const subtotal = cartItems.reduce((acc, item) => {
    const qty = quantities[item.id] || 1;
    return acc + item.price * qty;
  }, 0);

  const shipping = 0;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    const orderItem = {
      userId: user,
      date: new Date().toISOString().split("T")[0],
      status: "Processing",
      total: total.toFixed(2),
      items: cartItems.map((item) => ({
        productId: item.id,
        name: item.name,
        quantity: quantities[item.id] || 1,
        price: item.price.toFixed(2),
      })),
      tracking: `TRACK-${Math.floor(1000000000 + Math.random() * 9000000000)}`,
      deliveryDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
    };
    dispatch(storeOrder(orderItem));
    navigate("/admin/payment");
  };

  if (!cartItems) return <p>Loading...</p>;

  return (
    <div className="px-4 py-6 md:px-8 md:py-10">
      <div className="mx-auto max-w-6xl bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-6">Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            Your cart is empty.
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Cart Items */}
            <div className="flex-1 space-y-4">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} updateQuantity={updateQuantity} quantities={quantities} />
              ))}
            </div>

            {/* Summary Section */}
            <CartSummary
              handleCheckout={handleCheckout}
              subtotal={subtotal}
              shipping={shipping}
              total={total}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
