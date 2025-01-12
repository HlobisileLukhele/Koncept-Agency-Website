import step1 from "../assets/Images/HowWeWork-01.png";
import step2 from "../assets/Images/HowWeWork-02.png";
import step3 from "../assets/Images/HowWeWork-03.png";
import step4 from "../assets/Images/HowWeWork-04.png";
import step5 from "../assets/Images/HowWeWork-05.png";
import step6 from "../assets/Images/HowWeWork-06.png"

const Proceedure = () => {
  return (
    <>
      <h2 className="services flex justify-center title-font font-semibold text-2xl py-8 offer text-4xl">
        How We Work
      </h2>
      
      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-4 md:mx-auto items-center">
        {/* First Row: 3 Images */}
        <img 
          src={step1} 
          alt="step 1 proceedure" 
          className="h-auto w-full sm:mx-auto"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="0"
        />
        <img 
          src={step2} 
          alt="step 2 proceedure" 
          className="h-auto w-full sm:mx-auto"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="100"
        />
        <img 
          src={step3} 
          alt="step 3 proceedure" 
          className="h-auto w-full sm:mx-auto"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="200"
        />

        {/* Second Row: 2 Images (spanning 2 columns) */}
        <img 
          src={step4} 
          alt="step 4 proceedure" 
          className="h-auto w-full sm:mx-auto"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="300"
        />
        <img 
          src={step5} 
          alt="step 5 proceedure" 
          className="h-auto w-full sm:mx-auto"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="400"
        />
        <img 
          src={step6} 
          alt="step 6 HowWeWork" 
          className="h-auto w-full sm:mx-auto"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="400"
        />
      </div>
    </>
  );
};

export default Proceedure;
