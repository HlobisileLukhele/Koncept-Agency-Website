import Nandi from '../assets/Images/Nandi.png';
import Gorogangmockup from '../assets/Images/Gorogang-mockup.jpg';
import beadvodka from '../assets/Images/beadvodka-mockup.jpg';
import Coverphoto from '../assets/Images/CoverPhoto-Mockup.jpg';
import cfedits from '../assets/Images/cfedits-Poster1.jpg';
import Delta from '../assets/Images/Delta-mockup.jpg';
import Duduza from '../assets/Images/Duduza-mockup.jpg';
import Ecru from '../assets/Images/Ecru-mockup.jpg';



const ProjectsGrid = () => {
  return (
    <div className="container pb-8 py-10 px-4">
      {/* Heading and Description */}
      <h2 className="text-center text-gray-700 text-2xl mt-8 ">
        HAVE A LOOK AT WHAT WE CAN DO FOR YOUR BRAND
      </h2>
      <p className="text-center text-gray-500 mt-4">
        Let us meet and exceed your expectations. The sky is the limit and the ideas are endless.
      </p>

      {/* CTA Button */}
      <div className="flex justify-center mt-6">
        <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition">
         <a href="./Projects">
         OUR WORK
          </a> 
        </button>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4  mt-10 gap-2 items-center">
        {/* Image 1 */}
        <div className="relative group">
          <img
             src={Duduza} 
            alt="Project 5"
            className="object-cover w-full h-48 md:h-64 group-hover:brightness-75 transition"
          />
        </div>
        {/* Image 2 */}
        <div className="relative group">
          <img
            src={Nandi}
            alt="Project 1"
            className="object-cover w-full h-48 md:h-64 group-hover:brightness-75 transition"
          />
        </div>
        {/* Image 3 */}
        <div className="relative group">
          <img
             src={Ecru} 
            alt="Project 5"
            className="object-cover w-full h-48 md:h-64 group-hover:brightness-75 transition"
          />
        </div>
        {/* Image 4 */}
        <div className="relative group">
          <img
            src={beadvodka}
            alt="Project 4"
            className="object-cover w-full h-48 md:h-64 group-hover:brightness-75 transition"
          />
        </div>
        {/* Image 5 */}
        <div className="relative group">
          <img
            src={cfedits}
            alt="Project 5"
            className="object-cover w-full h-48 md:h-64 group-hover:brightness-75 transition"
          />
        </div>
        {/* Image 6 */}

        <div className="relative group">
          <img
             src={Delta} 
            alt="Project 5"
            className="object-cover w-full h-48 md:h-64 group-hover:brightness-75 transition"
          />
        </div>
        {/* Image 7 */}
        <div className="relative group">
          <img
            src={Gorogangmockup}
            alt="Project 2"
            className="object-cover w-full h-48 md:h-64 group-hover:brightness-75 transition"
          />
        </div>
        {/* Image 8 */}
        <div className="relative group">
          <img
            src={Coverphoto}
            alt="Project 3"
            className="object-cover w-full h-48 md:h-64 group-hover:brightness-75 transition"
          />
        </div>
      </div>
     
    </div>
  );
};

export default ProjectsGrid;
