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
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="w-full">
      {/* Main Banner Container */}
      <div className="relative h-64 md:h-80 lg:h-96">
        {/* Slides */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`min-w-full h-full ${slide.bgColor} ${slide.textColor} flex flex-col md:flex-row items-center justify-between p-8 md:p-12 lg:p-16 relative overflow-hidden`}
            >
              {/* Background Icon */}
              {slide.icon}
              
              {/* Content */}
              <div className="flex-1 z-10 mb-6 md:mb-0">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 lg:mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl opacity-80 mb-6 lg:mb-8">
                  {slide.subtitle}
                </p>
                <button className={`${slide.buttonColor} px-8 py-3 lg:px-10 lg:py-4 rounded-full font-semibold text-base lg:text-lg transition-all duration-300 hover:shadow-lg hover:scale-105`}>
                  {slide.buttonText}
                </button>
              </div>
              
              {/* Product Image */}
              <div className="flex-shrink-0 md:ml-12 w-1/2 md:w-1/3">
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="w-full h-auto max-h-48 md:max-h-64 lg:max-h-80 object-contain transform rotate-12 hover:rotate-0 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="hidden sm:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 transition-all duration-300 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <button
          onClick={nextSlide}
          className="hidden sm:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 transition-all duration-300 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <FaChevronRight className="w-6 h-6 text-white" />
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
                ? 'bg-gray-800 scale-125' 
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