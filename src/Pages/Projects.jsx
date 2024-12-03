import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Gallery from "../Components/Gallery";
import Testimonial from "../Components/Testimonial";

const Work = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 3000,  // Set default duration for all animations
      once: true, // Ensures animation happens only once when the element is in view
    });
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center py-6 px-6 text-center">
        <h1
          className="title-font font-semibold text-2xl py-4 offer"
          data-aos="fade-in"  // Fade-in effect for the heading
          data-aos-delay="500" // Add delay for staggered effect
        >
          HAVE A LOOK AT SOME WORK DONE FOR CLIENTS
        </h1>
        <p
          className="text-gray-600 text-lg offer text-xl"
          data-aos="fade-in"  // Fade-in effect for the paragraph
          data-aos-delay="800" // Delay the animation slightly after the heading
        >
          You think it, we bring it to life. Our work is a clear visual representation of our clients' vision into reality.
        </p>
      </div>

      <Gallery />
      <Testimonial />
    </>
  );
};

export default Work;
