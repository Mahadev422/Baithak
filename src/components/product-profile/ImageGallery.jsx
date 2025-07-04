import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ImageGallery = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const nextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };
  return (
    <div className="lg:w-1/2">
      <div className="relative">
        {/* Main Image */}
        <center>
          <img
            src={images[selectedImageIndex]}
            alt={`Image ${selectedImageIndex + 1}`}
            className="h-[400px] rounded-lg shadow-md"
          />
        </center>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white"
              aria-label="Previous image"
            >
              <IoIosArrowBack className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white"
              aria-label="Next image"
            >
              <IoIosArrowForward className="h-6 w-6" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2 mt-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`rounded-md overflow-hidden border-2 ${
                selectedImageIndex === index
                  ? "border-indigo-500"
                  : "border-transparent"
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-20"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
