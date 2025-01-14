import KonceptAgency from '../assets/svg/Koncept-Logo.png';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="w-full" id="footer">
      <footer className="w-full text-gray-700 bg-gray-100 body-font">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description Column */}
            <div className="text-center md:text-left">
              <a className="flex items-center justify-center md:justify-start">
                <img src={KonceptAgency} alt="Koncept illustration logo" className="max-w-[80px] my-auto pb-2" />
              </a>
              <p className=" md:text-lg text-gray-500">
                Koncept Agency is a branding and advertising agency that focuses on corporate branding, digital illustration, social media marketing and content creation
              </p>
            </div>

            {/* Quick Links Column */}
            <div className="text-center md:text-left">
              <h2 className="text-base md:text-lg font-bold tracking-widest uppercase title-font mb-4">Quick Links</h2>
              <nav className="flex flex-col space-y-3">
                <Link to="/Services" className="text-base md:text-lg text-gray-500 hover:text-gray-900">Services</Link>
                <Link to="/projects" className="text-base md:text-lg text-gray-500 hover:text-gray-900">Projects</Link>
                <Link to="/howwework" className="text-base md:text-lg text-gray-500 hover:text-gray-900">How We Work</Link>
                <Link to="/AboutUs" className="text-base md:text-lg text-gray-500 hover:text-gray-900">About Us</Link>
              </nav>
            </div>

            {/* Services Column */}
            <div className="text-center md:text-left">
              <h2 className="text-base md:text-lg font-bold tracking-widest uppercase title-font mb-4">Services</h2>
              <nav className="flex flex-col space-y-3">
                <Link to="/Services" className="text-base md:text-lg text-gray-500 hover:text-gray-900">Branding & Design</Link>
                <Link to="/Services" className="text-base md:text-lg text-gray-500 hover:text-gray-900">Content Creation</Link>
                <Link to="/Services" className="text-base md:text-lg text-gray-500 hover:text-gray-900">Digital Illustration</Link>
                <Link to="/Services" className="text-base md:text-lg text-gray-500 hover:text-gray-900">Social Media Marketing</Link>
              </nav>
            </div>

            {/* Contact Column */}
            <div className="text-center md:text-left">
              <h2 className="text-base md:text-lg font-bold tracking-widest uppercase title-font mb-4">Contact</h2>
              <nav className="flex flex-col space-y-3">
                <a href="mailto:hello@konceptagency.co.za" 
                   className="flex items-center justify-center md:justify-start text-base md:text-lg text-gray-500 hover:text-gray-900">
                  <EmailRoundedIcon className="w-6 h-6 mr-2" />
                  hello@konceptagency.co.za
                </a>
                <a className="flex items-center justify-center md:justify-start text-base md:text-lg text-gray-500 hover:text-gray-900">
                  <CallRoundedIcon className="w-6 h-6 mr-2" />
                  +27 60 341 8550
                </a>
                <div className="flex justify-center md:justify-start space-x-4 mt-4">
                  <a href="http://www.facebook.com/konceptagency" 
                     target="_blank" 
                     className="text-gray-500 hover:text-gray-700">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-7 h-7" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a href="http://www.instagram.com/konceptagency" 
                     target="_blank" 
                     className="text-gray-500 hover:text-gray-700">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-7 h-7" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="bg-gray-600">
          <div className="container mx-auto px-4 py-4">
            <p className="text-base md:text-lg text-white text-center">
             © 2025  Developed by <span className=""><a href="https://portfolio-ecru-five-97.vercel.app/" >Hlobisile Lukhele</a></span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;