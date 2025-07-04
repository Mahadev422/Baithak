import { FaHeart, FaTrashAlt } from "react-icons/fa";

const wishlistItems = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$99.99",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$199.99",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
  },
];

const Wishlist = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <FaHeart className="text-pink-500" /> Wishlist
      </h1>
      {wishlistItems.length === 0 ? (
        <div className="text-center text-gray-500 py-16">
          <FaHeart className="mx-auto text-6xl mb-4 text-pink-200" />
          <p>Your wishlist is empty.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-white rounded-lg shadow p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg mr-4"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">{item.price}</p>
              </div>
              <button
                className="ml-4 text-red-500 hover:text-red-700 transition"
                title="Remove from wishlist"
              >
                <FaTrashAlt size={20} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
