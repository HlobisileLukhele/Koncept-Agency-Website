import  { useState } from 'react';

const images = [
  { src: '../assets/Images/Nandi.png', alt: 'Slide 1' },
  { src: '../assets/Images/Flyer.jpg', alt: 'Slide 2' },
  // Add more image objects here (up to 4)
];

const ProjectsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="container-fluid">
      <div className="bg-gray-600 h-auto flex-grow flex items-center sm:auto justify-center "></div>
      <div className="carousel w-6 flex flex-col overflow-hidden">
        <div className="carousel-inner flex">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item w-full transition ease-linear duration-300 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img className="object-cover h-full w-full" src={images.src} alt={image.alt} />
            </div>
          ))}
        </div>
        <button onClick={handlePrev} className="text-white hover:text-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white absolute left-0 top-1/2 -translate-y-1/2 p-2">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 8L8.5 12.5L15 17L16.5 15.5L10 9L16.5 2.5L15 1Z" fill="currentColor" />
          </svg>
        </button>
        <button onClick={handleNext} className="text-white hover:text-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white absolute right-0 top-1/2 -translate-y-1/2 p-2">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 5L15.5 9.5L9 14L7.5 12.5L14 6L7.5 0.5L9 2Z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
