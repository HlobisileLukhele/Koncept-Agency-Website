import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
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
import GorogangLogo from '../assets/Images/Goroganglogo-mockup.jpg';

const Gallery = () => {
  // State to manage which tab is active
  const [activeTab, setActiveTab] = useState("Concept Agency");

  // For Koncept agency
  const conceptAgencyImages = [
    { src: Delta, alt: "Delta logo design mockup" },
    { src: Nandi, alt: "Nandi Derma SPF" },
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

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Trigger animation only once
    });
  }, []);

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Tab Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("Concept Agency")}
          className={`px-6 py-3 font-semibold text-sm md:text-base rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 offer ${
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
          DarkTaste
        </button>
      </div>

      {/* Conditional Paragraph */}
      {activeTab === "In Collaboration With" && (
        <p className="text-center mb-6 text-gray-600 mx-10 offer text-xl">
          The following projects were executed in a joint partnership with Dark Taste. All projects assets are the joint intellectual property of Koncept Agency and Dark Taste
        </p>
      )}

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {/* First Row */}
        {displayedImages.slice(0, 3).map((image, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={`${100 * (index + 1)}`}>
            <img
              className="h-full w-full object-cover transition-transform duration-300 transform hover:scale-105"
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}

        {/* Second Row */}
        {displayedImages.slice(3, 6).map((image, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={`${100 * (index + 4)}`}>
            <img
              className="h-full w-full object-cover transition-transform duration-300 transform hover:scale-105"
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}

        {/* Third Row */}
        {displayedImages.slice(6, 9).map((image, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={`${100 * (index + 7)}`}>
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
