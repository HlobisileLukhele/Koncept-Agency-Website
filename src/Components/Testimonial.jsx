import { useState, useEffect } from 'react';

const testimonials = [
  {
    text: "Koncept Agency is one of the best design agencies one has ever worked with. The professionalism, response rate, and quality of work produced by the agency are unmatched. Our brand's look and feel can compete on an international level.",
    author: "Banele Tshabalala",
    position: "MD: Dark Taste",
  },
  {
    text: "Working with Koncept Agency on my logo design was a fantastic experience. They delivered a clean, professional logo that perfectly captures my vision, and they did so on time. I highly recommend them for outstanding service and creativity.",
    author: "Tshega Mampshika",
    position: "Chief Technology Officer: AlgoAtWork",
  },
  {
    text: "I provided Koncept Agency with a sample of how I would like my logo to be like. We did a few edits, and they delivered on what I wanted and, most importantly, they delivered on time.",
    author: "Desmond Lavisa",
    position: "MD: Lavisa Technologies",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white py-5 px-2">
      <div className="max-w-6xl mx-auto p-6 text-center">
        <div className="bg-gray-200 shadow-lg rounded-lg p-8 transition-all duration-500 ease-in-out">
          <p className="text-lg italic text-gray-800 mb-4">"{testimonials[currentIndex].text}"</p>
          <h5 className="text-xl font-semibold text-black">{testimonials[currentIndex].author}</h5>
          <p className="text-gray-600">{testimonials[currentIndex].position}</p>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
