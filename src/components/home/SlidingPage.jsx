import { useState } from "react";
import { useEffect } from "react";
import { DummyPages } from "../../data"; 

const SlidingPage = ({ pages = DummyPages }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1 < pages.length ? prev + 1 : 0));
    }, 2000);
    return () => clearTimeout(timer);
  }, [current, pages.length]);


  const nextPage = () => {
    setCurrent((prev) => (prev + 1 < pages.length ? prev + 1 : 0));
  };

  const prevPage = () => {
    setCurrent((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  return (
    <div className="w-full">
      <div className="relative flex items-center justify-center">
        <button
          className="absolute left-0 z-10 p-2 m-2 rounded-full bg-white shadow hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={prevPage}
          disabled={current === 0}
          aria-label="Previous"
        >
          &#8592;
        </button>
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {pages.map((PageComponent, idx) => (
              <div key={idx} className="min-w-full flex-shrink-0 px-2">
                {PageComponent}
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute right-0 z-10 p-2 m-2 rounded-full bg-white shadow hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={nextPage}
          aria-label="Next"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default SlidingPage;
