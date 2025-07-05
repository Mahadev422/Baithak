import { useEffect, useState } from "react";
import Product from "../../components/home/Product";
import { mockProducts } from "../../data";
import { useParams } from "react-router-dom";

const CategoryPorducts = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  console.log("Category from URL:", category);

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase()
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProducts.length === 0 ? (
        <div className="col-span-full text-center text-gray-500 py-12 bg-white rounded-lg shadow">
          No products found.
        </div>
      ) : (
        filteredProducts.map((product) => (
          <div key={product.id}>
            <Product product={product} />
          </div>
        ))
      )}
    </div>
  );
};

export default CategoryPorducts;
