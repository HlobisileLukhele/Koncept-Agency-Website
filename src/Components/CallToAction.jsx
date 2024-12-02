import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const CallToAction = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1500,  // Set default duration for all animations
      once: true, // Ensures animation happens only once when the element is in view
    });
  }, []);

  return (
    <div
      className="container-fluid text-center py-10 flex justify-center items-center"
      style={{ backgroundColor: '#4882b1' }}
    >
      <div className="text-center max-w-lg">
        <h2
          className="text-3xl font-semibold text-white mb-4 offer"
          data-aos="zoom-in"
          data-aos-delay="1000" // Delay the animation for the heading
        >
          Let us bring your ideas to life!
        </h2>
        <p
          className="text-2xl text-white mb-6 offer"
          data-aos="zoom-in"
          data-aos-delay="1200" // Delay the animation for the paragraph
        >
          Let’s have a chat about how we can creatively breathe life into your ideas and brands.
        </p>
        <Link to="../Contact">
          <button
            className="bg-gray-600 text-white px-6 py-2 rounded font-semibold hover:bg-gray-500"
            data-aos="zoom-in"
            data-aos-delay="1400" // Delay the animation for the button
          >
            Get In Touch
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
