import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import ImageUpload from "../../components/add-product/ImageUpload";
import Rating from "../../components/add-product/Rating";
import Pricing from "../../components/add-product/Pricing";
import Basic from "../../components/add-product/Basic";

const ProductForm = ({ onSubmit }) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    originalPrice: "",
    images: [],
    category: "",
    rating: "",
    reviews: "",
    stock: "",
  });
  const [errors, setErrors] = useState({});
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!product.name.trim()) newErrors.name = "Product name is required";
    if (!product.description.trim())
      newErrors.description = "Description is required";
    if (!product.price || isNaN(product.price))
      newErrors.price = "Valid price is required";
    if (!product.category) newErrors.category = "Category is required";
    if (product.images.length === 0)
      newErrors.images = "At least one image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formattedProduct = {
        ...product,
        price: parseFloat(product.price),
        originalPrice:
          parseFloat(product.originalPrice) || parseFloat(product.price),
        rating: parseFloat(product.rating) || 0,
        reviews: parseInt(product.reviews) || 0,
        stock: parseInt(product.stock) || 0,
      };

      onSubmit(formattedProduct);
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-5 p-8 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-2xl border border-blue-100">
      <h1 className="text-3xl font-extrabold mb-8 text-blue-900 tracking-tight text-center">
        Add New Product
      </h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
       <Basic
          product={product}
          handleChange={handleChange}
          errors={errors}
        />

        {/* Pricing */}
        <Pricing product={product} handleChange={handleChange} errors={errors}
        />

        {/* Description */}
        <section>
          <h2 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
            Description
          </h2>
          <label className="block text-sm font-medium text-blue-900 mb-1">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            rows={4}
            className={`w-full px-4 py-2 border ${
              errors.description ? "border-red-500" : "border-blue-200"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white shadow-sm transition`}
            placeholder="Detailed product description..."
          />
          {errors.description && (
            <p className="mt-1 text-xs text-red-500">{errors.description}</p>
          )}
        </section>

        {/* Image Upload */}
        <ImageUpload product={product} setProduct={setProduct} />

        {/* Ratings */}
        <Rating product={product} handleChange={handleChange} />

        {/* Submit Button */}
        <div className="flex justify-center pt-8 border-t border-blue-100">
          <button
            type="submit"
            disabled={isUploading}
            className={`px-8 py-3 text-lg font-semibold rounded-lg shadow transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${
              isUploading
                ? "bg-blue-300 text-white cursor-not-allowed"
                : "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600"
            }`}
          >
            {isUploading ? "Uploading..." : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
