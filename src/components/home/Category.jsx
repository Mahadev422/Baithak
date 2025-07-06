import Product from "../Product";
import { useSelector } from "react-redux";

const Category = ({ cat }) => {
  const { products, loading } = useSelector((state) => state.addProduct);

  if (loading) return <p>Loading...</p>;
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === cat
  );

  return (
    <div className="flex overflow-x-auto remove-scrollbar gap-3">
      {filteredProducts.length === 0 ? (
        <p className="font-bold text-center text-blue-500">Not Available</p>
      ) : (
        filteredProducts.map((product, idx) => (
          <div key={idx} className="flex-shrink-0 min-w-[310px] flex-1">
            <Product key={idx} product={product} />
          </div>
        ))
      )}
    </div>
  );
};

export default Category;
