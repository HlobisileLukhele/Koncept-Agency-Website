import Iconsvg1 from "../assets/svg/Icons-01.svg";
import Iconsvg2 from "../assets/svg/Icons-02.svg";
import Iconsvg3 from "../assets/svg/Icons-03.svg";
import Iconsvg4 from "../assets/svg/Icons-04.svg";

const WhatWeOffer = () => {
  return (
    <>
    <h2 className="services flex justify-center text-gray-700 text-2xl mt-5"> Our Services</h2>
    <div className="grid grid-cols-1 sm:grid-rows-4 md:grid-cols-4 md:mx-auto items-center mt-8 ">
    <img src={Iconsvg1} alt={Iconsvg1} className="sm:mx-auto"/>
    <img src={Iconsvg2} alt={Iconsvg2}  className="sm:mx-auto" />
    <img src={Iconsvg3} alt={Iconsvg3}  className="sm:mx-auto" />
    <img src={Iconsvg4} alt={Iconsvg4}  className="sm:mx-auto" />
    </div>
    </>
  )
}

export default WhatWeOffer
