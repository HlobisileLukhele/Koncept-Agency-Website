import step1 from "../assets/Images/Step-1.png"
import step2 from "../assets/Images/Step-2.png"
import step3 from "../assets/Images/Step-3.png"
import step4 from "../assets/Images/Step-4.png"
import step5 from "../assets/Images/Step-5.png"
const Proceedure = () => {
  return (
    <>
      <h2 className="services flex justify-center text-gray-700 text-2xl mt-5"> How We Work</h2>
      <div className="grid grid-cols-1 sm:grid-rows-4 md:grid-cols-4 md:mx-auto items-center">
      <img src={step1} alt="step 1 proceedure " className="h-auto w40  sm:mx-auto"/>
      <img src={step2} alt="step 2 proceedure " className="h-auto w40 sm:mx-auto"/>
      <img src={step3} alt="step 3 proceedure " className="h-auto w40 :sm:mx-auto"/>
      <img src={step4} alt="step 4 proceedure " className="h-auto w40 :sm:mx-auto"/>
      <img src={step5} alt="step 5 proceedure " className="h-auto w40 sm:mx-auto"/>
      </div>
      </>
  )
}
export default Proceedure
