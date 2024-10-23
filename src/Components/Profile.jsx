import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import portrait from "../assets/Images/portrait.jpg";

const ProfileSlider = () => {
  return (

    <div className="max-w-6xl mx-auto pb-10 p-4 grid grid-cols-2 md:grid-cols-6  ">
    {/* Image Section - 40% */}
    <div className="md:col-span-2">
    <img src={portrait} className="lucky-shot flex justify-center w-80 h-65 mt-10"/>
    </div>

    {/* Text Section - 60%, with gray background */}
    <div className="md:col-span-4 max-w-500   bg-gray-200 shadow-lg rounded-lg  py-5 px-10 flex flex-col justify-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-600">Meet the Founder</h2>
      <p className="text-gray-700 text-base mb-4">
    Lucky Malefo is a marketing professional who started his career in 2017 
          as a freelancer in graphic design, copywriting & social media management. He was one of the co-founders 
          of MMI & Associates now Koncept Agency. He possesses skills and experience in Corporate Branding Design & strategy,
          Copywriting, Marketing Campaign Management Client Relationship Management. Under the Koncept Agency umbrella, he also 
          founded Koncept Illustrations, a division focused on digital illustrations      </p>
      <p className="text-gray-700 text-base">
      When he is not crafting and bringing client ideas and brands to life, Lucky is an avid reader,
      chess player, tech enthusiast and podcast host.       
      </p>
      <div className="icons-container w-400 h-400 justify-center py-5"> 
        <span className=" flex align-middle connect text-gray-600 mr-2 pb-4 "> Lets Connect</span>

        <a href="https://www.linkedin.com/in/lucky-malefu-346064a2 " target="_blank">
        <LinkedInIcon style={{color: "blue", fontSize: "2rem"}} />
        </a>

        <a href="mailto:hello@konceptagency.co.za" target="_blank " >        
         <EmailIcon style={{color: "blue", fontSize: "2rem"}} /> 
        </a>
      </div>
    </div>
    

      </div>
  );
}

export default ProfileSlider