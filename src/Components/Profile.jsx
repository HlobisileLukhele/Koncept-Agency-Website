import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import portrait from "../assets/Images/portrait.jpg";

const ProfileSlider = () => {
  return (
    <div className="max-w-6xl mx-auto pb-10 px-4 grid grid-cols-1 md:grid-cols-6 gap-6">
      {/* Image & Icon Section */}
      <div className="md:col-span-2 flex items-start py-10">
        <img src={portrait} className="w-60 h-60 rounded-full object-cover mb-4" alt="Founder" />
        <div className="flex flex-col space-y-2 ml-6 pt-20">
          <a href="https://www.linkedin.com/in/lucky-malefu-346064a2" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon style={{ color: "gray", fontSize: "2.5rem" }} />
          </a>
          <a href="mailto:hello@konceptagency.co.za" target="_blank" rel="noopener noreferrer">
            <EmailIcon style={{ color: "gray", fontSize: "2.5rem" }} />
          </a>
        </div>
      </div>

      {/* Text Section */}
      <div className="md:col-span-4 w-full bg-gray-200 shadow-lg rounded-lg py-6 px-8">
        <h2 className="text-2xl font-bold title-font mb-4">Meet the Founder</h2>
        <p className="text-gray-700 text-xl mb-4">
          <span className="font-bold title-font">Lucky Malefo</span> is a marketing professional who started his career in 2017 as a freelancer in graphic design, copywriting, and social media management. He possesses skills and experience in Corporate Branding Design & strategy, Copywriting, Marketing Campaign Management, and Client Relationship Management. He was one of the co-founders of MMI & Associates, now Koncept Agency. Under the Koncept Agency umbrella, he also founded Koncept Illustrations, a division focused on digital illustrations.
        </p>
        <p className="text-gray-700 text-xl">
          When he is not crafting and bringing client ideas and brands to life, Lucky is an avid reader, chess player, tech enthusiast, and podcast host.
        </p>
      </div>
    </div>
  );
};

export default ProfileSlider;
