import Icon1 from "../assets/svg/Icons-01.png";
import Icon2 from "../assets/svg/Icons-02.png";
import Icon3 from "../assets/svg/Icons-03.png";
import Icon4 from "../assets/svg/Icons-04.png";
import CallToAction from "../Components/CallToAction";
import Footer from "../Components/Footer";

const Services = () => {
  return (
    <>
    <h2 className="services flex justify-center text-gray-700 text-2xl mb-10 mt-5"> Our Services</h2>
    <div className="grid grid-cols-1 sm:grid-rows-4 md:grid-cols-4 md:mx-auto items-center">
    <img src={Icon1} className="w-80 h-80  sm:mb-8  sm:mx-auto" />
    <img src={Icon2} className="w-80 h-80  sm:mb-8 sm:mx-auto" />
    <img src={Icon3} className="w-80 h-80  sm:mb-8 sm:mx-auto" />
    <img src={Icon4} className="w-80 h-80 sm:mx-auto" />
    </div>
    <CallToAction  />
    <Footer />
    </> 
  )
}

export default Services;
