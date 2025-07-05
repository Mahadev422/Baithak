const Wishlists = () => (
  <div>
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Wishlist</h2>
    <p className="text-gray-600">Your saved items.</p>
    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {[1, 2, 3, 4].map(item => (
        <div>hii</div>
      ))}
    </div>
  </div>
);

export default Wishlists;
