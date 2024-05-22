import CompanyLogos from "../assets/Images/Company-Structure.png";

const AboutUs = () => {
  return (
    <div className="container-fluid company-container ">
    <h1 className="about-company text-gray-600 flex text-center mt-10 justify-center text-lg pb-0">About Us</h1>
    <div className="grid grid-cols-2">
    <div className="col-span-1 border-gray-50">
    <img src={CompanyLogos}   className="logo-structures  flex items-right  " />
    </div>
    <div className="col-span-1 ">
      <div className="items-right pr-10 pt-20">
      <p className="company-par pb-5 pt-20 text-gray-600">
      <span className="company-name-1">Koncept Agency</span> is a branding and advertising agency that focuses on corporate branding, socila media marketing and content creation.
      Koncept Agency is a branding and advertising agency that focuses on corporate branding, socila media marketing and content creation.

      </p>

        <p className="company-par pb-5 pt-20 text-gray-600">
        <span className="company-name-2">Koncept illustration</span> is convincing to prospects clients to convince them to buy your services, you can include expertise in certain factors and outline how your clients best benefited from that.
        Write up something convincing to prospects clients to convince them to buy your services, you can include expertise in certain factors and outline how your clients best benefited from that.
        </p>
      </div>
    </div>
  </div>
    </div>
  )
}

export default AboutUs