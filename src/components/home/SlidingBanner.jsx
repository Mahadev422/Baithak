import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { slides } from '../../data';

const SlidingBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="w-full ">
      {/* Banner Container */}
      <div className="relative overflow-hidden h-[350px]">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`min-w-full h-full ${slide.bgColor} ${slide.textColor} flex flex-col md:flex-row items-center justify-between px-6 py-8 md:px-16 md:py-12 relative`}
            >
              {/* Background Icon */}
              <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                <slide.icon className="w-full h-full text-white opacity-20 object-cover" />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left z-10">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight drop-shadow-md">
                  {slide.title}
                </h2>
                <p className="text-base md:text-lg lg:text-xl mb-5 max-w-xl mx-auto md:mx-0 opacity-90">
                  {slide.subtitle}
                </p>
                <button
                  className={`${slide.buttonColor} px-6 py-3 md:px-8 md:py-3 rounded-full font-semibold transition duration-300 shadow-md hover:scale-105`}
                >
                  {slide.buttonText}
                </button>
              </div>

              {/* Image */}
              <div className="w-3/4 md:w-1/2 lg:w-1/3 mt-6 md:mt-0 z-10">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full max-h-48 md:max-h-64 lg:max-h-80 object-contain transform rotate-6 hover:rotate-0 transition-transform duration-300 ease-in-out mx-auto"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="hidden sm:flex items-center justify-center absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 shadow-md backdrop-blur-md transition"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="hidden sm:flex items-center justify-center absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 shadow-md backdrop-blur-md transition"
          aria-label="Next slide"
        >
          <FaChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-gray-900 scale-125'
                : 'bg-gray-400 hover:bg-gray-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlidingBanner;