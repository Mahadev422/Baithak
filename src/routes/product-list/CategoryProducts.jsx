import { useEffect, useState } from "react";
import Product from "../../components/Product";
import { mockProducts } from "../../data";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CategoryPorducts = () => {
  const { products, loading } = useSelector((state) => state.addProduct);
  const { category } = useParams();

  if (loading) return <p>Loading...</p>;
  
  const filteredProducts = !category
    ? products
    : products.filter((product) => product.category.toLowerCase() === category);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
