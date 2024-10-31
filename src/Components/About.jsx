import CompanyLogos from "../assets/Images/Company-Structure.png";

const About = () => {
  return (
    <>
    <div className="container-fluid  py-10 px-5 pb-10  ">
    <h5 className="title-font font-semibold flex text-center justify-center text-3xl pb-10">Welcome to Koncept Agency</h5>
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6">
      {/* First Card */}
      <div className="w-full md:w-1/2 bg-gray-200 shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
      <p className="text-xl mt-8 sm:pt-2 text-black">
      <span className="company-name-1 font-bold ">Koncept Agency</span> is a branding and advertising agency that focuses on corporate branding, socila media marketing and content creation.
      Koncept Agency is a branding and advertising agency that focuses on corporate branding, socila media marketing and content creation.
      </p>
        <p className="text-xl text-black py-20 ">
        <span className="company-name-2 font-bold">Koncept illustration</span> is division of Koncept Agency focusing on digital illustrationwith specialisation in full color and black and white outline portraits.
        </p>
        </div>
      </div>

      {/* Second Card */}
        <div className="px-4 py-2 w-fullw-200 h-200 sm:w-full sm:h-full">
        <img src={CompanyLogos} className="img-fluid logo-structures  flex items-right max-w-20 h-20" />
        
      </div>
    </div>
    </div>
    </>
  )
}

export default About;
