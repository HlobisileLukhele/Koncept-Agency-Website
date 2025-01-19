import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import KonceptLogo from "../assets/svg/Koncept-Logo.png";
import { Link } from "react-router-dom";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <>
      <header className="bg-white shadow-md text-gray-600">
        <nav className="mx-auto px-4 py-4 md:px-[100px]">
          {/* Navigation Bar */}
          <div className="flex justify-between items-center md:justify-between">
            {/* Logo */}
            <div className="block">
              <Link to="./" className="block">
                <img
                  src={KonceptLogo}
                  alt="Koncept Logo"
                  className="h-20 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Hamburger Menu for Mobile */}
            <button
              className="z-50 focus:outline-none md:hidden order-last"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {showMenu ? (
                <AiOutlineClose size={24} className="text-gray-600" />
              ) : (
                <AiOutlineMenu size={30} className="text-gray-600" />
              )}
            </button>

            {/* Desktop Navigation - Hidden on Mobile */}
            <div className="hidden md:flex items-center space-x-8">
              <ul className="flex space-x-8 text-gray-500">
                <li>
                  <Link to="./" className=" hover:text-gray-700">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/AboutUs" className=" hover:text-gray-700">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/Services" className=" hover:text-gray-700">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/howwework" className=" hover:text-gray-700">
                    HowWeWork
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className=" hover:text-gray-700">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="./Contact" className=" hover:text-gray-700">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
              showMenu ? "translate-x-0" : "-translate-x-full"
            } md:hidden`}
          >
            <div className="pt-[50px] px-6">
              <ul className="flex flex-col space-y-6 text-gray-500">
                <li>
                  <Link
                    to="./"
                    className="block text-[rgb(93, 139, 174)] title-font "
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                  <hr className="mt-4" />
                </li>
                <li>
                  <Link
                    to="/AboutUs"
                    className="block hover:text-gray-700"
                    onClick={closeMenu}
                  >
                    About Us
                  </Link>
                  <hr className="mt-4" />
                </li>
                <li>
                  <Link
                    to="/Services"
                    className="block hover:text-gray-700"
                    onClick={closeMenu}
                  >
                    Services
                  </Link>
                  <hr className="mt-4" />
                </li>
                <li>
                  <Link
                    to="/HowWeWork"
                    className="block hover:text-gray-700"
                    onClick={closeMenu}
                  >
                    HowWeWork
                  </Link>
                  <hr className="mt-4" />
                </li>
                <li>
                  <Link
                    to="/Projects"
                    className="block hover:text-gray-700"
                    onClick={closeMenu}
                  >
                    Projects
                  </Link>
                  <hr className="mt-4" />
                </li>
                <li>
                  <Link
                    to="./Contact"
                    className="block hover:text-gray-700"
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                  <hr className="mt-4" />
                </li>
              </ul>
              <button
                className="mt-8 px-6 py-3 bg-gray-600 text-white rounded-md focus:outline-none hover:bg-gray-700 transition-colors w-full"
                onClick={closeMenu}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </nav>
        <Outlet />
      </header>
      <Footer />
    </>
  );
};

export default Navbar;
