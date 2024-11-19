import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import KonceptLogo from '../assets/svg/Koncept-Logo.png';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="border-blue-500 border-2">
      <header className="bg-white shadow-md text-gray-600 text-lg">
        <nav className="container mx-auto px-4 flex justify-between items-center py-4 md:px-16 text-gray-600 text-lg ">
          <div className="hidden md:flex">
            <Link to="/home" className="text-2xl">
              <img src={KonceptLogo} className="nav__logo align-items-left h-20 w-22" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
            {showMenu ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>

          {/* Navigation Links (Desktop) */}
          <ul className="nav-items hidden md:flex space-x-8 text-gray-500 ">
            <li className=" title-font ">
              <Link to="./" className="text-2xl offer font-semibold">
                Home
              </Link>
            </li>
            <li className="hover:text-gray-700">
              <Link to="/AboutUs" className="text-2xl offer font-semibold">
                About
              </Link>
            </li>
            <li className="hover:text-gray-700">
              <Link to="/Services" className="text-2xl offer font-semibold">
                Services
              </Link>
            </li>
            <li className="hover:text-gray-700">
              <Link to="/howwework" className="text-2xl offer font-semibold">
                HowWeWork
              </Link>
            </li>
            <li className="hover:text-gray-700">
              <Link to="/projects" className="text-2xl offer font-semibold">
                Projects
              </Link>
            </li>
            <li className="hover:text-gray-700">
              <Link to="./Contact" className="text-2xl offer font-semibold">
                Contact
              </Link>
            </li>
          </ul>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <Link to="./Contact" className="offer">
              <button className="btn-contact px-4 py-2 bg-gray-600 text-white rounded-md focus:outline-none">
                Get In Touch
              </button>
            </Link>
          </div>

          {/* Mobile Navigation (Appears on click) */}
          <div className={`fixed top-0 left-0 w-full h-full bg-white z-50 transition-all duration-300 ease-in-out ${showMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'} md:hidden`}>
            <ul className="nav__list flex flex-col items-left space-y-4 mt-16 text-gray-500 text-6xl text-left">
              <li className="hover:text-gray-500">
                <Link to="./" className="text-4xl title-font offer font-semibold" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <hr />
              <li className="hover:text-gray-700">
                <Link to="/AboutUs" className="text-4xl offer" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <hr />
              <li className="hover:text-gray-700">
                <Link to="/Services" className="text-4xl offer" onClick={closeMenu}>
                  Services
                </Link>
              </li>
              <hr />
              <li className="hover:text-gray-700">
                <Link to="/HowWeWork" className="text-4xl offer" onClick={closeMenu}>
                  HowWeWork
                </Link>
              </li>
              <hr />
              <li className="hover:text-gray-700">
                <Link to="/Projects" className="text-4xl offer" onClick={closeMenu}>
                  Projects
                </Link>
              </li>
              <hr />
              <li className="hover:text-gray-700 pb-4">
                <Link to="/Contact" className="text-4xl offer" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
              <hr className="pb-4" />
            </ul>
            <button className="btn-contact px-4 py-2 text-2xl bg-gray-600 text-white rounded-md focus:outline-none hover:text-gray-200 mt-4 ml-6 offer" onClick={closeMenu}>
              Get In Touch
            </button>
          </div>
        </nav>
        <Outlet />
      </header>
      <Footer />
    </div>
  );
};

export default Navbar;
