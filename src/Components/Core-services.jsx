import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CoreServices = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div>
      <div
        className="flex mx-auto justify-center gap-5 pb-10 mt-6 mb-8 sm:grid-cols-2 text-xl flex-wrap"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-once="true"
        data-aos-easing="ease-in-out"
      >
        <button className="border rounded-md text-base text-gray-500 bg-white p-4  border-[#5d8bae] hover:bg-[#5d8bae] hover:text-white hover:border-2 hover:border-gray-500 transition-all duration-[10ms] ease-in-out">
          <Link to="/Services">
            <p className="offer text-xl">Design & Branding</p>
          </Link>
        </button>
        <button className="border rounded-md text-base text-gray-500 bg-white p-4  border-[#5d8bae] hover:bg-[#5d8bae] hover:text-white hover:border-2 hover:border-gray-500 transition-all duration-[10ms] ease-in-out">
          <Link to="/Services">
            <p className="offer text-xl">Content Creation</p>
          </Link>
        </button>
        <button className="border rounded-md text-base text-gray-500 bg-white p-4  border-[#5d8bae] hover:bg-[#5d8bae] hover:text-white hover:border-2 hover:border-gray-500 transition-all duration-[10ms] ease-in-out sm:text-sm">
          <Link to="/Services">
            <p className="offer text-xl">Social Media Marketing</p>
          </Link>
        </button>
        <button className="border rounded-md text-base text-gray-500 bg-white p-4  border-[#5d8bae] hover:bg-[#5d8bae] hover:text-white hover:border-2 hover:border-gray-500 transition-all duration-[10ms] ease-in-out">
          <Link to="/Services">
            <p className="offer text-xl">Digital Illustration</p>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CoreServices;
