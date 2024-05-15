import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { IoClose, IoMenu } from 'react-icons/io5';
import './Navbar.css'
import KonceptLogo from '../assets/svg/Koncept-Logo.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };
  return (
    <div className='container-fluid'>  
    <header className="header">
      <nav className="nav navbar-expand-lg container-fluid">
        <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
        <img src={KonceptLogo} className="nav__logo align-items-left"></img>
          <ul className="nav__list align-items-center ">
            <li className="nav__item">
              <Link to="#about"  className="nav__link" onClick={closeMenuOnMobile}>
               Home 
              </Link>
            </li>
            <li className="nav__item">
              <Link to="#Technical Skills" className="nav__link" onClick={closeMenuOnMobile}>
                Services
              </Link>
            </li>
            <li className="nav__item">
              <Link to="#Projects" className="nav__link" onClick={closeMenuOnMobile}>
                About Us
              </Link>
            </li>
            <li className="nav__item">
              <Link to="#Contact" className="nav__link" onClick={closeMenuOnMobile}>
                HowWeWork
              </Link>
            </li>
            <li className="nav__item">
              <Link to="#Contact" className="nav__link" onClick={closeMenuOnMobile}>
                Work
              </Link>
            </li>
            <li className="nav__item">
              <Link to="#Contact" className="nav__link" onClick={closeMenuOnMobile}>
                Contact Us
              </Link>
            </li>
            <div className="d-flex flex-end ">
            <button className="btn-contact  d-flex flex-end">Get In Touch</button>
          </div>
          </ul>
          
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>
        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
    </div>
  );
};

export default Navbar;