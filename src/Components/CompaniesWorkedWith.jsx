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
    const [isAnimating, setIsAnimating] = useState(false);
  
    useEffect(() => {
      const logos = logosRef.current;
      const duplicate = logos.cloneNode(true);
      logos.parentNode.insertBefore(duplicate, logos.nextSibling);
      duplicate.classList.add('hidden');
  
      const animationFrame = () => {
        logos.scrollLeft += 1; // Adjust for desired scroll speed
        if (logos.scrollLeft + logos.offsetWidth >= logos.scrollWidth) {
          logos.scrollLeft = 0;
        }
        setIsAnimating(true); // This line might be misplaced
        requestAnimationFrame(animationFrame);
      };
  
      // Call animationFrame only when isAnimating is true
      if (isAnimating) {
        requestAnimationFrame(animationFrame);
      }
  
      return () => {
        cancelAnimationFrame(animationFrame);
      };
    }, [isAnimating]); // Include isAnimating in dependency array
  
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)">
      <ul ref={logosRef} className="flex items-center justify-center md:justify-start list-none px-8 animate">
        <li className="mr-8">
          <img className='image-fluid' src={BeadVodka} alt="BeadVodka logo" />
        </li>
        <li className="mr-8">
          <img src={BotGoods} alt="BotGoods logo" />
        </li>
        <li className="mr-8">
          <img src={darktest} alt="darktest logo" />
        </li>
        <li className="mr-8">
          <img src={Delta} alt="Delta logo" />
        </li>
        <li className="mr-8">
          <img src={Konceptillustration} alt="Koncept illustration logo" />
        </li>
        <li className="mr-8">
          <img src={White} alt="White logo" />
        </li>
        <li className="mr-8">
          <img src={CFLogo} alt="CF logo" />
        </li>
      </ul>
      {isAnimating && (
        <ul className=" items-center justify-center md:justify-start list-none px-8 hidden">
          <li className="mr-8">
            <img src={BeadVodka} alt="BeadVodka logo" />
          </li>
          <li className="mr-8">
            <img src={BotGoods} alt="BotGoods logo" />
          </li>
          <li className="mr-8">
            <img src={darktest} alt="darktest logo" />
          </li>
          <li className="mr-8">
            <img src={Delta} alt="Delta logo" />
          </li>
          <li className="mr-8">
            <img src={Konceptillustration} alt="Koncept illustration logo" />
          </li>
          <li className="mr-8">
            <img src={White} alt="White logo" />
          </li>
          <li className="mr-8">
            <img src={CFLogo} alt="CF logo" />
          </li>
        </ul>
      )}
    </div>
  );
};

export default CompaniesWorkedWith;
