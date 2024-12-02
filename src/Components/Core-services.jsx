import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CoreServices = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      once: true,     // Ensure animations occur only once
    });
  }, []);

  return (
    <div>
      <div
        className="button-services sm:grid-cols-2 mx-auto text-xl flex flex-wrap"
        data-aos="fade-up"
        data-aos-duration="3000"  // Set individual duration to 3 seconds
        data-aos-once="true"     // Only animate once
        data-aos-easing="ease-in-out" // Smooth easing
      >
        <button className="btn btn-service offer text-xl">
          <Link to="/Services offer">
            <p className="offer text-xl">Design & Branding</p>
          </Link>
        </button>
        <button className="btn btn-service offer text-xl">
          <Link to="/Services ">
            <p className="offer text-xl">Content Creation</p>
          </Link>
        </button>
        <button className="btn btn-service sm:text-sm offer text-xl">
          <Link to="/Services ">
            <p className="offer text-xl">Social Media Marketing</p>
          </Link>
        </button>
        <button className="btn btn-service offer text-xl">
          <Link to="/Services">
            <p className="offer text-xl">Digital illustration</p>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CoreServices;
