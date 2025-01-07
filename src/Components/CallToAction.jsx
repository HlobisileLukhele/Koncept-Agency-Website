import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const CallToAction = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1500, // Set default duration for all animations
      once: true, // Ensures animation happens only once when the element is in view
    });
  }, []);

  return (
    <div
      className="bg-[#4882b1] text-white flex items-center max-w-[2200px] max-h-[500px] mx-auto py-10 justify-center"
    >
      <div className="text-center max-w-lg">
        <h2
          className="md:text-[2rem] text-[1.5rem] font-sans leading-[1rem] font-bold mb-4"
          data-aos="zoom-in"
          data-aos-delay="1000"
        >
          Let us bring your ideas to life!
        </h2>
        <p
          className="text-[1.4rem] my-12"
          data-aos="zoom-in"
          data-aos-delay="1200"
        >
          Let’s have a chat about how we can creatively breathe life into your ideas and brands.
        </p>
        <Link to="../Contact">
          <button
            className="bg-gray-600 text-white px-6 py-2 rounded font-semibold hover:bg-gray-500"
            data-aos="zoom-in"
            data-aos-delay="1400"
          >
            Get In Touch
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
