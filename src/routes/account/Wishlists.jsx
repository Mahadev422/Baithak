import { useSelector } from "react-redux";
import Product from "../../components/Product";
import ProductSkeleton from "../../components/loader/ProductSkeleton";
const Wishlists = () => {
  const { products } = useSelector((state) => state.addProduct);
  const { wishlists } = useSelector((state) => state.auth);

  const wishlistItems = products.filter((item) => wishlists.includes(item.id));
  console.log(products, wishlists);
  if (!wishlistItems) return <ProductSkeleton />;
  return (
    <div className="px-2 sm:px-4 md:px-8">
      <h2 className="text-xl font-semibold mb-4">Wishlist</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {wishlistItems.map((item) => (
          <Product key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Wishlists;
