import { Link } from "react-router-dom";
import { categories } from "../../data";
import Category from "./Category";

const AllProducts = () => {

  return (
    <div className="p-4">
      {categories.map((cat, idx) => (
        <div key={idx} className="mb-10">
          <span className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-gray-700">{cat.name}</h2>
            <Link to={`products/${cat.name.toLocaleLowerCase()}`} className="text-sm text-blue-600 p-1 px-2 rounded hover:bg-blue-200">
              View All
            </Link>
          </span>

          <div className="flex flex-row overflow-x-auto remove-scrollbar gap-3">
            <Category cat={cat.name} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
