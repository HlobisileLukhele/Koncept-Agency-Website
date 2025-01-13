import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Nandi from '../assets/Images/Nandi.png';
import Darktaste from '../assets/Images/Darktaste-mockup.jpg';
import Busankazi from '../assets/Images/Busankazi-mockup.jpg';
import cfeditsmockup from '../assets/Images/cfedit-mockup.jpg';
import Thembisa from '../assets/Images/Thembisa-mockup.jpg';
import Delta from '../assets/Images/Delta-mockup.png';
import Duduza from '../assets/Images/Duduza-mockup.jpg';
import Ecru from '../assets/Images/Ecru-mockup.jpg';
import Embeded from '../assets/Images/Embeded-mockup.jpg';
import Midaslogo from '../assets/Images/Midaslogo-mockup.jpg';
import GorogangLogo from '../assets/Images/Goroganglogo-mockup.jpg';
import LACCLogo from "../assets/Images/LACC-Logo.jpg";
import OAHLOGO from "../assets/Images/OAH-Logo.jpg";
import KananeloLogo from "../assets/Images/Kananelo-Logo.jpg";
import HaywoodLogo from "../assets/Images/HaywoodLog.jpg";
import BCMockup from "../assets/Images/BC-MockUp.jpg";
import A5Poster from "../assets/Images/A5-poster.jpg";
import EasyGLow from "../assets/Images/EasyGlow-Logo.jpg";
import beadvodka1 from '../assets/Images/1.jpg';
import beadvodka2 from '../assets/Images/1.1.jpg';
import LACCLetterhead1 from "../assets/Images/LACC-Arts-Letterhead.jpg";
import LACCLetterhead2 from "../assets/Images/LACC-Sports-Letterhead.jpg";
import Algo2 from "../assets/Images/Algo2-mockup.jpg";
import ALG from "../assets/Images/Alg- Letterhead.jpg";
import KananeloLetterhead from "../assets/Images/Kananelo-Letterhead.jpg";
import FolderConcept from "../assets/Images/Folder-Concept.jpg";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("Concept Agency");

  const conceptAgencyImages = [
    { src: Delta, alt: "Delta logo design mockup" },
    { src: Nandi, alt: "Nandi Derma SPF" },
    { src: LACCLogo, alt: "LACC logo design mockup" },
    { src: LACCLetterhead1, alt: "A5 Poster mockup" },
    { src: LACCLetterhead2, alt: "A5 Poster mockup" },
    { src: KananeloLetterhead, alt: "A5 Poster mockup" },
    { src: OAHLOGO, alt: "OAH logo design mockup" },
    { src: KananeloLogo, alt: "Kananelo logo design mockup" },
    { src: Embeded, alt: "Embeded logo design mockup" },
    { src: Darktaste, alt: "Darktaste logo design mockup" },
    { src: HaywoodLogo, alt: "Haywood logo design mockup" },
    { src: EasyGLow, alt: "EasyGlow logo design mockup" },
    { src: Thembisa, alt: "Thembisa logo mockup design" },
    { src: cfeditsmockup, alt: "cfedits logo design mockup design" },
    { src: Busankazi, alt: "Busankazi logo mockup design" },
    { src: BCMockup, alt: "BC mockup design" },
    { src: A5Poster, alt: "A5 Poster mockup" },
    { src: FolderConcept, alt: "A5 Poster mockup" },
    { src: Algo2, alt: "Algo2 mockup design" },
    { src: beadvodka1, alt: "Products mockup" },
    { src: beadvodka2, alt: "Products mockup" },



  ];

  const collaborationImages = [
    { src: Duduza, alt: "Duduza logo design mockup" },
    { src: Midaslogo, alt: "Midas touch logo design mockup" },
    { src: GorogangLogo, alt: "Gorogang touch logo design mockup" },
  ];

  const displayedImages = activeTab === "Concept Agency" ? conceptAgencyImages : collaborationImages;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

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
          DarkTaste
        </button>
      </div>

      {activeTab === "In Collaboration With" && (
        <p className="text-center mb-6 text-gray-600 mx-10 text-xl">
          The following projects were executed in a joint partnership with Dark Taste. All project assets are the joint intellectual property of Koncept Agency and Dark Taste.
        </p>
      )}

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedImages.map((image, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={`${100 * (index % 4 + 1)}`}>
            <div className="relative">
              <img
                className="h-full w-full object-cover transition-transform duration-300 transform hover:scale-105"
                src={image.src}
                alt={image.alt}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
