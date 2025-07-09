const ProductSkeleton = () => {
  return (
    <div className="bg-white rounded-xl h-[150px] shadow-sm animate-pulse p-2 flex gap-3">
      <div className="relative">
        <div className="w-24 h-full bg-gray-200 rounded-lg" />
        <div className="absolute top-1 left-1 h-5 w-5 bg-gray-300 rounded-full" />
      </div>

      <div className="flex flex-col justify-between flex-1 py-1 w-full">
        <div className="h-4 bg-gray-300 rounded w-3/4" />
        <div className="flex gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-gray-300 rounded" />
          ))}
        </div>
        <div className="flex items-center gap-3 mt-1">
          <div className="h-4 w-16 bg-gray-300 rounded" />
          <div className="h-4 w-12 bg-gray-300 rounded" />
        </div>
        <div className="h-5 w-20 bg-gray-300 rounded mt-2" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
