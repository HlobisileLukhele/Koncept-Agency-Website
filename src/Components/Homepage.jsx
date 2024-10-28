import { useEffect, useState } from 'react';
import Nandi from '../assets/Images/Nandi.png';
import BeadVodka from '../assets/Images/beadvodka-mockup.png';
import Delta from '../assets/Images/Delta-mockup.png';
import { Link } from 'react-router-dom';


const Homepage = () => {
  const images = [Nandi, BeadVodka, Delta];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto py-8 md:py-0 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Text Column */}
        <div className="flex flex-col justify-center items-start space-y-4 text-center md:text-left md:pl-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 md:pb-8">
            At <span className="title-font">Koncept Agency</span>, We Bring Your Ideas To Life
          </h2>
          <p className="text-gray-600 py-5">
            Our commitment to staying relevant and competitive ensures we meet all your requirements, regardless of the project size.
          </p>
          <Link to="../Contact" className="text-xl">
          <button className="bg-gray-700 text-white px-4 py-2 rounded font-medium hover:bg-gray-500">
            Get Free Quote
          </button>
          </Link>
        </div>

        {/* Image Carousel Column */}
        <div className="relative flex items-center justify-center md:mb-20">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] overflow-hidden">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-contain transition-all duration-500 ease-in-out transform ${
                  index === currentIndex
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-90'
                }`}
                style={{
                  zIndex: index === currentIndex ? 10 : 0,
                }}
              />
            ))}
          </div>

          {/* Carousel Dots */}
          <div className="absolute bottom-4 flex justify-center space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
