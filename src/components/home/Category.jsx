import Product from "./Product";
import { mockProducts } from "../../data";

const Category = ({ cat }) => {
  const products = mockProducts.filter((product) => product.category === cat);
  return (
    <div className="flex overflow-x-auto remove-scrollbar gap-3">
      {products.length === 0 ? (
        <p className="font-bold text-center text-blue-500">Not Available</p>
      ) : (
        products.map((product, idx) => (
          <div key={idx} className="flex-shrink-0 min-w-[310px] flex-1">
            <Product key={idx} product={product} />
          </div>
        ))
      )}
    </div>
  );
};

export default Category;
