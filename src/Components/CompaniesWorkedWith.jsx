import  { useState, useEffect, useRef } from 'react';
import BeadVodka from '../assets/svg/Bead-Vodka.png';
import BotGoods from '../assets/svg/BotGoods.png';
import darktest from '../assets/svg/darktest.png';
import Delta from '../assets/svg/Delta.png';
import Konceptillustration from '../assets/svg/Koncept-illustration.png';
import White from '../assets/svg/White.png';
import CFLogo from '../assets/svg/CF-Logo.png';


const CompaniesWorkedWith = () => {
  const logosRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(true); // Start animation by default

  useEffect(() => {
    const logos = logosRef.current;
    const animationFrame = () => {
      const scrollPosition = logos.scrollLeft;
      // Adjust scroll amount for desired speed (e.g., 1)
      logos.scrollLeft = scrollPosition + 1; // Update scroll position
      if (scrollPosition + logos.offsetWidth >= logos.scrollWidth) {
        logos.scrollLeft = 0; // Reset scroll when reaching the end
      }
      requestAnimationFrame(animationFrame);
    };

    if (isAnimating) { // Only call animation if animating
      requestAnimationFrame(animationFrame);
    }

    return () => {
      cancelAnimationFrame(animationFrame); // Cleanup on unmount
    };
  }, [isAnimating]); // Include isAnimating in dependency array

  return (
    <>
    <div className='campanies-section'>  
    <div className="companies-text mb-4 px-4"> <h1 className='heading'>Companied Worked With</h1></div>
    <div className="wrapper w-full inline-flex flex-nowrap ">
        <div ref={logosRef} className="logos-motion flex items-center justify-center md:justify-start list-none px-8 marquee">
          <img  src={BeadVodka} alt="BeadVodka logo" className="logos  beadvodka mr-4 image-fluid" />
          <img src={BotGoods} alt="BotGoods log" className="logos mr-4 image-fluid" />
          <img src={darktest} alt="darktest logo" className="logos mr-4 image-fluid" />
          <img src={Delta} alt="Delta logo" className="logos delta mr-4 image-fluid" />
          <img src={Konceptillustration} alt="Koncept illustration logo" className="logos mr-4 image-fluid" />
          <img src={White} alt="White logo" className="logos mr-4 image-fluid" />
          <img src={CFLogo} alt="CF logo" className="logos mr-4 image-fluid" />
          <img  src={BeadVodka} alt="BeadVodka logo" className="logos  beadvodka mr-4 image-fluid" />
          <img src={BotGoods} alt="BotGoods log" className="logos mr-4 image-fluid" />
          <img src={darktest} alt="darktest logo" className="logos mr-4 image-fluid" />
          <img src={Delta} alt="Delta logo" className="logos delta mr-4 image-fluid" />
          <img src={Konceptillustration} alt="Koncept illustration logo" className="logos mr-4 image-fluid" />
          <img src={White} alt="White logo" className="logos mr-4 image-fluid" />
          <img src={CFLogo} alt="CF logo" className="logos mr-4 image-fluid" />
      </div>
      </div>
    </div>
    </>
  );
};
export default CompaniesWorkedWith;
