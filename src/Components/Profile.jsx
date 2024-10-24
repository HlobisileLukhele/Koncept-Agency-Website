import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import portrait from "../assets/Images/portrait.jpg";

const ProfileSlider = () => {
  return (

    <div className="max-w-6xl mx-auto pb-10 p-4 grid grid-cols-2 md:grid-cols-6  ">
    {/* Image Section - 40% */}
    
    <div className="md:col-span-2">
    
      <div className="flex ">
      <div className="inline w-400 h-400 justify-right py-20 px-2 space-y-40 mt-4"> 
  <a href="https://www.linkedin.com/in/lucky-malefu-346064a2" target="_blank" rel="noopener noreferrer">
    <LinkedInIcon style={{ color: "gray", fontSize: "2.5rem" }} />
  </a>

  <a href="mailto:hello@konceptagency.co.za" target="_blank" rel="noopener noreferrer">        
    <EmailIcon style={{ color: "gray", fontSize: "2.5rem" }} /> 
  </a>

  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">        
    <InstagramIcon style={{ color: "gray", fontSize: "2.5rem" }} /> 
  </a>

  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">        
    <FacebookIcon style={{ color: "gray", fontSize: "2.5rem" }} /> 
  </a>
</div>


        <img src={portrait} className="lucky-shot flex justify-center w-80 h-65 mt-10 px-5"/>
      </div>
    </div>

    {/* Text Section - 60%, with gray background */}
    <div className="md:col-span-4 w-full  bg-gray-200 shadow-lg rounded-lg py-5 px-5  flex-col justify-center">
      <h2 className="text-2xl font-bold text-gray-600 p-2">Meet the Founder</h2>
      <p className="text-gray-700 text-lg py-4 text-wrap p-2">
          <span className="font-bold">Lucky Malefo</span> is a marketing professional who started his career in 2017 
          as a freelancer in graphic design, copywriting & social media management.He possesses skills and experience in Corporate Branding Design & strategy,
          Copywriting, Marketing Campaign Management Client Relationship Management.He was one of the co-founders 
      of MMI & Associates now Koncept Agency. . Under the Koncept Agency umbrella, he also 
      founded Koncept Illustrations, a division focused on digital illustrations.
      </p>
      <p className="text-gray-700 text-lg py-4">
      When he is not crafting and bringing client ideas and brands to life, Lucky is an avid reader,
      chess player, tech enthusiast and podcast host. 
      </p>
    </div>

    

      </div>
  );
}

export default ProfileSlider