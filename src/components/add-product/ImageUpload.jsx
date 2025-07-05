import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

const ImageUpload = ({ product, setProduct, errors, setErrors }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "Baithak"); // Replace with your upload preset

    return new Promise(async (resolve, reject) => {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open(
          "POST",
          "https://api.cloudinary.com/v1_1/dpbwgyew7/image/upload"
        ); // Replace with your cloud name

        xhr.upload.onprogress = (event) => {
          if (event.lengthComputable) {
            setUploadProgress(Math.round((event.loaded / event.total) * 100));
          }
        };

        xhr.onload = () => {
          if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            resolve(data.secure_url);
          } else {
            reject(new Error("Upload failed"));
          }
        };

        xhr.onerror = () => reject(new Error("Upload failed"));
        xhr.send(formData);
      } catch (error) {
        reject(error);
      }
    });
  };

  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles.length === 0) return;

    setIsUploading(true);
    setUploadProgress(0);
    try {
      const uploadPromises = acceptedFiles.map((file) =>
        uploadToCloudinary(file)
      );
      const imageUrls = await Promise.all(uploadPromises);

      setProduct((prev) => ({
        ...prev,
        images: [...prev.images, ...imageUrls],
      }));

      setErrors((prev) => ({ ...prev, images: "" }));
    } catch (error) {
      setErrors((prev) => ({ ...prev, images: "Failed to upload images" }));
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".webp"],
    },
    maxFiles: 10,
    multiple: true,
  });

  const handleRemoveImage = (index) => {
    setProduct((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  return (
    <section>
      <h2 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
        Product Images
      </h2>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
          isDragActive
            ? "border-blue-500 bg-blue-50"
            : "border-blue-200 hover:border-blue-400 bg-white"
        }`}
      >
        <input {...getInputProps()} />
        {isUploading ? (
          <div className="flex flex-col items-center">
            <svg
              className="animate-spin h-8 w-8 text-blue-500 mb-2"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              ></path>
            </svg>
            <p className="text-blue-700">Uploading images...</p>
            <div className="w-full bg-blue-100 rounded-full h-2 mt-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          </div>
        ) : (
          <>
            <svg
              className="mx-auto h-12 w-12 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            <p className="mt-1 text-sm text-blue-700">
              {isDragActive ? (
                "Drop the images here"
              ) : (
                <>
                  Drag and drop images here, or{" "}
                  <span className="underline text-blue-600">
                    click to select files
                  </span>
                  <br />
                  <span className="text-xs text-blue-400">
                    Supports JPEG, PNG, WEBP (max 10 images)
                  </span>
                </>
              )}
            </p>
          </>
        )}
      </div>

      {errors.images && (
        <p className="mt-2 text-xs text-red-500">{errors.images}</p>
      )}

      {product.images.length > 0 && (
        <div className="mt-6">
          <h3 className="text-md font-medium text-blue-800 mb-2">
            Uploaded Images ({product.images.length})
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.images.map((img, index) => (
              <div
                key={index}
                className="relative group rounded-lg overflow-hidden shadow border border-blue-100 bg-white"
              >
                <img
                  src={img}
                  alt={`Product preview ${index + 1}`}
                  className="w-full h-32 object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/150?text=Image+Not+Found";
                  }}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  title="Remove image"
                  className="absolute top-2 right-2 bg-white bg-opacity-80 hover:bg-red-500 hover:text-white text-red-500 rounded-full w-7 h-7 flex items-center justify-center shadow transition-all"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageUpload;
