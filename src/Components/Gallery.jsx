import { useState } from 'react';
import Nandi from '../assets/Images/Nandi.png';
import Darktaste from '../assets/Images/Darktaste-mockup.jpg';
import Coverphoto from '../assets/Images/CoverPhoto-Mockup.jpg';
import Busankazi from '../assets/Images/Busankazi-mockup.jpg';
import cfeditsmockup from '../assets/Images/cfedit-mockup.jpg';
import Thembisa from '../assets/Images/Thembisa-mockup.jpg';
import Delta from '../assets/Images/Delta-mockup.png';
import Duduza from '../assets/Images/Duduza-mockup.jpg';
import Ecru from '../assets/Images/Ecru-mockup.jpg';
import Embeded from '../assets/Images/Embeded-mockup.jpg';
import Midaslogo from '../assets/Images/Midaslogo-mockup.jpg';
import GorogangLogo from '../assets/Images/Goroganglogo-mockup.jpg'


const Gallery = () => {
  // State to manage which tab is active
  const [activeTab, setActiveTab] = useState("Koncept Agency");

  // Images categorized by tabs
  const conceptAgencyImages = [
    { src: Delta, alt: "Delta logo design mockup" },
    { src: Nandi, alt: "Nandi Derma spf" },
    { src: Thembisa, alt: "Thembisa logo mockup design" },
    { src: Busankazi, alt: "Busankazi logo mockup design" },
    { src: Darktaste, alt: "Darktaste logo design mockup" },
    { src: Coverphoto, alt: "cfedits logo design mockup design" },
    { src: cfeditsmockup, alt: "cfedits logo design mockup design" },
    { src: Ecru, alt: "Ecru logo design mockup" },
    { src: Embeded, alt: "Embeded logo design mockup" },

  ];

  const collaborationImages = [
   
    { src: Duduza, alt: "Duduza logo design mockup" },
    { src: Midaslogo, alt: "Midas touch logo design mockup" },
    { src: GorogangLogo, alt: "Gorogang touch logo design mockup" },


  ];

  // Choose images based on active tab
  const displayedImages = activeTab === "Concept Agency" ? conceptAgencyImages : collaborationImages;

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Tab Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("Concept Agency")}
          className={`px-6 py-3 font-semibold text-sm md:text-base rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            activeTab === "Concept Agency" ? "bg-gray-600 text-white" : "bg-gray-200 text-gray-800"
          }`}
          style={{ minWidth: '120px' }}
        >
          Koncept Agency
        </button>
        <button
          onClick={() => setActiveTab("In Collaboration With")}
          className={`px-6 py-3 font-semibold text-sm md:text-base rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            activeTab === "In Collaboration With" ? "bg-gray-600 text-white" : "bg-gray-200 text-gray-800"
          }`}
          style={{ minWidth: '120px' }}
        >
          In Collaboration With DarkTaste
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {displayedImages.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              className="h-full w-full object-cover transition-transform duration-300 transform hover:scale-105"
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
