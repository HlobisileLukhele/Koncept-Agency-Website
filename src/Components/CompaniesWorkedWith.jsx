import { useEffect, useRef } from 'react';
import BeadVodka from '../assets/svg/Bead-Vodka.png';
import BotGoods from '../assets/svg/BotGoods.png';
import darktest from '../assets/svg/darktest.png';
import Delta from '../assets/svg/Delta.png';
import White from '../assets/svg/White.png';
import CFLogo from '../assets/svg/CF-Logo.png';
import LACCLogo from '../assets/svg/LACCLogo-FullColour.png';
import HaywoodLogo from '../assets/svg/HaywoodLogo -FullColour.png';

const CompaniesWorkedWith = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    const logos = logosRef.current;
    let scrollAmount = 0;

    const animationInterval = setInterval(() => {
      if (logos) {
        scrollAmount += 1; // Adjust this value for speed
        logos.scrollLeft = scrollAmount;
        if (scrollAmount >= logos.scrollWidth / 2) {
          scrollAmount = 0; // Reset scroll position to loop
        }
      }
    }, 20); // Speed of the slide

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <>
      <h1 className="text-3xl font-semibold title-font pb-5 flex justify-center offer ">
      Companies We’ve Worked With
      </h1>
      <section id="companiesworkedwith" className="bg-gray-200 py-10">
        <div className="w-full overflow-hidden relative">
          <div
            ref={logosRef}
            className="flex w-full items-center justify-center gap-8 overflow-hidden animate-slide"
          >
            {[BeadVodka, BotGoods, darktest, Delta, White, CFLogo,LACCLogo,HaywoodLogo].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Company logo ${index}`}
                className="h-16 md:h-20 object-contain transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            ))}
            {/* Repeat logos for continuous effect */}
            {[BeadVodka, BotGoods, darktest, Delta, White, CFLogo,LACCLogo,HaywoodLogo].map((logo, index) => (
              <img
                key={`repeat-${index}`}
                src={logo}
                alt={`Company logo repeat ${index}`}
                className="h-16 md:h-20 object-contain transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CompaniesWorkedWith;
