import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToUserArray, removeFromUserArray } from "../../store/fetch/auth";
import { showNotification } from "../../store/slices/notificationSlice";

const ImageGallery = ({ images, id }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const dispatch = useDispatch();
  const { user, wishlists, load } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);

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
  const handleLoading = () => {
    setLoading(true);
  }
  return (
    <div className="lg:w-1/2">
      <div className="relative">
        {/* Main Image */}
        <center className="relative">
          <img
            src={images[selectedImageIndex]}
            alt={`Image ${selectedImageIndex + 1}`}
            className="h-[400px] rounded-lg"
          />
          <div onClick={handleLoading} className="absolute top-2 right-4 text-3xl p-2 rounded-full">
            {load && loading ? (
              "..."
            ) : wishlists.includes(id) ? (
              <button
                onClick={() => {
                  dispatch(
                    removeFromUserArray({
                      uid: user,
                      field: "wishlists",
                      item: id,
                    })
                  );
                  dispatch(
                    showNotification({
                      message: "Removed from wishlist",
                      type: "success",
                    })
                  );
                }}
                className="h-5 w-5 text-red-500"
              >
                <FaHeart />
              </button>
            ) : (
              <button
                onClick={() =>{
                  dispatch(
                    addToUserArray({
                      uid: user,
                      field: "wishlists",
                      item: id,
                    })
                  );
                  dispatch(showNotification({message: 'Added to wishlist', type: 'success'}))
                }
                }
                className="h-5 w-5"
              >
                <FaRegHeart />
              </button>
            )}
          </div>
        </center>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
  <button
    onClick={prevImage}
    className="absolute left-2 top-1/2 -translate-y-1/2 
               transition-all duration-300 ease-in-out 
               bg-gray-100/80 dark:bg-gray-800 
               rounded p-2 shadow-md hover:rounded-full"
    aria-label="Previous image"
  >
    <IoIosArrowBack className="h-6 w-6" />
  </button>

  <button
    onClick={nextImage}
    className="absolute right-2 top-1/2 -translate-y-1/2 
               transition-all duration-300 ease-in-out 
               bg-gray-100/80 dark:bg-gray-800 
               rounded p-2 shadow-md hover:rounded-full"
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
