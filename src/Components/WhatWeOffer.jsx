import Iconsvg1 from "../assets/svg/Icons-01.svg";
import Iconsvg2 from "../assets/svg/Icons-02.svg";
import Iconsvg3 from "../assets/svg/Icons-03.svg";
import Iconsvg4 from "../assets/svg/Icons-04.svg";

const WhatWeOffer = () => {
  return (
    <>
      <h2 className="flex justify-center text-gray-700 text-2xl mt-5 border-orange-800 uppercase">What we offer</h2>

      {/* Grid container for large screens (4 columns) and small screens (1 column) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-5 mt-8 py-5 px-4">

        {/* First item */}
        <div className="flex flex-col md:flex-col text-center md:text-center items-center md:items-center">
          <img src={Iconsvg1} alt="Icon1" className="w-100 h-00 mb-4 md:mb-6" />
          <p className="text-2xl md:text-lg p-2">CI Development, Branding, Product Packaging, Social Media Templates, etc.</p>
        </div>

        {/* Second item */}
        <div className="flex flex-col md:flex-col text-center md:text-center items-center md:items-center">
          <img src={Iconsvg2} alt="Icon2" className="w-100 h-100 mb-4 md:mb-6" />
          <p className="text-2xl md:text-lg p-2">Social Media Management, Paid Advertising, Social Media Strategy, Analytics Tracking and Reporting</p>
        </div>

        {/* Third item */}
        <div className="flex flex-col md:flex-col text-center md:text-center items-center md:items-center">
          <img src={Iconsvg3} alt="Icon3" className="w-100 h-100 mb-4 md:mb-6" />
          <p className="text-2xl md:text-lg p-2">Copywriting, Content Strategy, Email Marketing, Blogs</p>
        </div>

        {/* Fourth item */}
        <div className="flex flex-col md:flex-col text-center md:text-center items-center md:items-center">
          <img src={Iconsvg4} alt="Icon4" className="w-50 h-50 mb-4 md:mb-6" />
          <p className="text-2xl  md:text-lg p-2">Illustrations (Black & White & Full Color)</p>
        </div>

      </div>
    </>
  );
}

export default WhatWeOffer;
