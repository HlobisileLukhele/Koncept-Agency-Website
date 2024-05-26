import {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import KonceptLogo from '../assets/svg/Koncept-Logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-white shadow-md text-gray-600 text-lg ">
      <nav className="container mx-auto px-4 flex justify-between items-center py-4 md:px-16 text-gray-600 text-lg">
        <div className="hidden md:flex">
        <img src={KonceptLogo} className="nav__logo align-items-left h-20 w-22" />
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          {showMenu ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>

        {/* Navigation Links (Desktop) */}
        <ul className=" nav-items hidden md:flex space-x-8 text-gray-500 hover:text-gray-700">
          <li className="hover:text-gray-underlined-500">
            <Link to="/home" className="text-2xl">
              Home
            </Link>
          </li>
          <li className="hover:text-gray-500">
            <Link to="/AboutUs" className="text-2xl">
              About
            </Link>
          </li>
          <li className="hover:text-gray-500">
            <Link to="/Services" className="text-2xl">
              Services
            </Link>
          </li>
          <li className="hover:text-gray-500">
            <Link to="/howwework" className="text-2xl">
              How We Work
            </Link>
          </li>
          <li className="hover:text-gray-500">
            <Link to="/projects" className="text-2xl">
              Projects
            </Link>
          </li>
          <li className="hover:text-gray-500">
            <Link to="./ContactUs" className="text-2xl">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <button className="btn-contact px-4 py-2 bg-gray-600 text-white rounded-md focus:outline-none">
            Get In Touch
          </button>
        </div>

        {/* Mobile Navigation (Appears on click) */}
        <div className={`fixed top-10 pt-0 left-1 items-right w-full h-full items-center bg-white z-50 transition-all duration-300 ease-in-out ${showMenu ? 'opacity-100' : 'opacity-0'} md:hidden`}>
          <div className="nav__close absolute top-4 right-4 text-2xl cursor-pointer flex items-right" onClick={toggleMenu}>
          </div>
          <ul className="nav__list flex flex-col items-left space-y-4 mt-16 text-gray-500 text-6xl text-left">
            <li className="hover:text-gray-500">
              <Link to="/" className="text-2xl text-blue-600">
                Home
              </Link>
            </li>
            <hr/>
            <li className="hover:text-gray-700 ">
              <Link to="/AboutUs" className="text-2xl">
                About 
              </Link>
            </li>
            <hr/>

            <li className="hover:text-gray-700">
              <Link to="/Services" className="text-2xl">
                Services
              </Link>
            </li>
            <hr/>

            <li className="hover:text-gray-700">
              <Link to="/HowWeWork" className="text-2xl">
                HowWeWork
              </Link>
            </li>
            <hr/>

            <li className="hover:text-gray-700">
              <Link to="/Projects" className="text-2xl">
                Projects
              </Link>
            </li>
            <hr/>
            <li className="hover:text-gray-700 pb-4">
              <Link to="/ContactUs" className="text-2xl">
                Contact Us
              </Link>
            </li>
            <hr className='pb-4'/>
          </ul>
          <button className="btn-contact px-4 py-2 bg-gray-600 text-white rounded-md focus:outline-none hover:text-gray-200  ">
            Get In Touch
          </button>
        </div>
      </nav>
      </header>
  );
};
export default Navbar;