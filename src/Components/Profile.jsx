import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import portrait from "../assets/Images/portrait.jpg";

const ProfileSlider = () => {
  return (
    <div className="container-fluid">
    <h2 className="profile text-2xl text-gray-600 flex justify-center pb-5">About the Founder</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 md:mx-auto">
    <div className="col-span-1  pb-4 ">
    <img src={portrait} className="lucky-shot flex justify-center w-50 h-60 mt-8 ml-20" />
    </div>
    <div className="col-span-1 mx-auto pl-4 pb-6 pr-2">
        <p className="first-paragraph pt-4 pb-4 text-lg"><span className="name text-gray-600">Lucky Malefu</span>  is a marketing professional who started his career in 2017 
        as a freelancer in graphic design, copywriting & social media management. He was one of the co-founders 
        of MMI & Associates now Koncept Agency. He possesses skills and experience in Corporate Branding Design & strategy,
        Copywriting, Marketing Campaign Management Client Relationship Management. Under the Koncept Agency umbrella, he also 
        founded Koncept Illustrations, a division focused on digital illustrations.</p>
        <p className="first-paragraph pb-4 text-lg">
        When he is not crafting and bringing client ideas and brands to life, Lucky is an avid reader,
       chess player, tech enthusiast and podcast hos
        </p>
        <div className="icons-container"> 
        <span className="connect text-gray-600 mr-2 "> Get In Touch</span>
            <a href="mailto@hello@konceptagency.co.za text-2xl" target="_blank " ><LinkedInIcon className='icon w-36 h-20'/></a>
            <a href="https://www.linkedin.com/in/lucky-malefu-346064a2 fontSize large " target="_blank"><EmailIcon className='icon w-20 h-20 fontSize large'/></a>
      </div>
      </div>
    </div>
    </div>
  );
}

export default ProfileSlider