import Nandi from '../assets/Images/Nandi.png';
import beadvodka2 from '../assets/Images/1.jpg';
import KananeloLogo from "../assets/Images/Kananelo-Logo.jpg";
import HaywoodLogo from "../assets/Images/HaywoodLog.jpg";
import BCMockup from "../assets/Images/BC-MockUp.jpg";
import A5Poster from "../assets/Images/A5-poster.jpg";
import Delta from '../assets/Images/Delta-mockup.png';
import Duduza from '../assets/Images/Duduza-mockup.jpg';

const ProjectsCarousel = () => {
  return (
    <div className="container pb-8 py-10 px-4 mx-auto">
      {/* Heading and Description */}
      <h2 className="text-center text-2xl font-semibold mt-8 offer">
        HAVE A LOOK AT WHAT WE CAN DO FOR YOUR BRAND
      </h2>
      <p className="text-center text-gray-500 mt-4 offer">
        Let us meet and exceed your expectations. The sky is the limit and the ideas are endless.
      </p>

      {/* CTA Button */}
      <div className="flex justify-center mt-6">
        <button className="bg-gray-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-500 transition offer">
          <a href="./Projects">
            OUR WORK
          </a>
        </button>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-10 gap-4 items-center justify-center">
        {/* Image 1 */}
        <div className="relative group" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="0">
          <img
            src={Duduza}
            alt="Project 5"
            className="object-cover w-full h-48 md:h-64 group-hover:brightness-75 transition"
          />
        </div>

        {/* Image 2 */}
        <div className="relative group" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="0">
          <img
            src={Nandi}
            alt="Project 1"
            className="object-cover w-full h-48 md:h-64 group-hover:brightness-75 transition"
          />
        </div>

        {/* Image 3 */}
        <div className="relative group" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
          <img
            src={KananeloLogo}
            alt="Project 2"
            className="object-cover w-full h-48 md:h-64 group-hover:brightness-75 transition"
          />
        </div>

        {/* Image 4 */}
        <div className="relative group" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
          <img
            src={beadvodka2}
            alt="Project 4"
            className="object-cover w-full h-48 md:h-64 group-hover:brightness-75 transition"
          />
        </div>

        {/* Image 5 */}
        <div className="relative group" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
          <img
            src={HaywoodLogo}
            alt="Project 3"
            className="object-cover w-full h-48 md:h-64 group-hover:brightness-75 transition"
          />
        </div>

        

        {/* Image 6 */}
        <div className="relative group" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
          <img
            src={Delta}
            alt="Project 5"
            className="object-cover w-full h-48 md:h-64 group-hover:brightness-75 transition"
          />
        </div>

        {/* Image 7 */}
        <div className="relative group" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
          <img
            src={BCMockup}
            alt="Project 5"
            className="object-cover w-full h-48 md:h-64 group-hover:brightness-75 transition"
          />
        </div>
       

        {/* Image 8 */}
        <div className="relative group" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
          <img
            src={A5Poster}
            alt="Project 5"
            className="object-cover w-full h-48 md:h-64 group-hover:brightness-75 transition"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
