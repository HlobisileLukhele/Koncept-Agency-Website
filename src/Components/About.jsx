import CompanyLogos from "../assets/Images/Company-Structure.png";

const About = () => {
  return (
    <>
      <div className="container-fluid py-10 px-5 pb-10">
        <h5 className="title-font font-semibold flex text-center justify-center text-3xl pb-10 offer">
          Welcome to Koncept Agency
        </h5>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6">
          {/* First Card */}
          <div className="w-full md:w-1/2 bg-gray-200 shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <p className="text-2xl mt-8 sm:pt-2 text-black offer">
                <span className="company-name-1 font-bold offer">Koncept Agency</span> is a branding and advertising agency that focuses on corporate branding, social media marketing, and content creation.
              </p>
              <p className="text-2xl text-black py-20 offer ">
                <span className="company-name-2 font-bold offer">Koncept Illustration</span> is a division of Koncept Agency focusing on digital illustration, with specialization in full color and black and white outline portraits.
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="px-4 py-2 md:w-1/2 sm:w-full">
            <img
              src={CompanyLogos}
              alt="Company Logos"
              className="w-full h-auto object-cover md:max-w-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
