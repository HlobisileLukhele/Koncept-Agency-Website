import step1 from "../assets/Images/Step-1.png"
import step2 from "../assets/Images/Step-2.png"
import step3 from "../assets/Images/Step-3.png"
import step4 from "../assets/Images/Step-4.png"
import step5 from "../assets/Images/Step-5.png"

const Proceedure = () => {
  return (
    <>
      <h2 className="services flex justify-center title-font font-semibold text-2xl py-8">
        How We Work
      </h2>
      
      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-4 md:mx-auto items-center">
        {/* First Row: 3 Images */}
        <img src={step1} alt="step 1 proceedure" className="h-auto w-full sm:mx-auto"/>
        <img src={step2} alt="step 2 proceedure" className="h-auto w-full sm:mx-auto"/>
        <img src={step3} alt="step 3 proceedure" className="h-auto w-full sm:mx-auto"/>

        {/* Second Row: 2 Images (spanning 2 columns) */}
        <img src={step4} alt="step 4 proceedure" className="h-auto w-full 2 sm:mx-auto"/>
        <img src={step5} alt="step 5 proceedure" className="h-auto w-full  sm:mx-auto"/>
      </div>
    </>
  );
}

export default Proceedure;
