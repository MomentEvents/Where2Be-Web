import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import Link from 'next/link';
import logo_dark from "../../../public/assets/img/logo/logo-black.svg"
import logo from "../../../public/assets/img/index/logo.png";
import Menu2 from '../../landingPage/menu2';
import { useState } from 'react';
import { useEffect } from 'react';
const LandingSidemenu = () => {
    const {sideMenuOpen,toggleSideMenu} = useContext(AppContext)

    const [isSmallDevice, setIsSmallDevice] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsSmallDevice(window.innerWidth <= 1199); // Set the threshold width for small devices
      };
  
      // Add event listener for window resize
      window.addEventListener('resize', handleResize);
      handleResize(); // Initial check
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
        <>
             <div className="fix">
          <div
            className={`offcanvas__info ${sideMenuOpen ? "info-open" : " "}`}
          >
            <div className="offcanvas__wrapper">
              <div className="offcanvas__content">
                <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
                  <div className="offcanvas__close">
                    <button onClick={toggleSideMenu}>
                      <i className="fal fa-times" style={{ fontSize: '30px' }}></i>
                    </button>
                  </div>
                  <div className="offcanvas__logo">
                    <Link legacyBehavior href="/">
                     <a>
                     <img
                        src={logo.src}
                        alt="logo not found"
                      />
                     </a>
                    </Link>
                  </div>
                </div>
      
                <div className={`mobile-menu fix mb-40 ${isSmallDevice ? 'mean-container' : ''}`}>
                  {
                    isSmallDevice && <Menu2/>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={toggleSideMenu}
          className={`offcanvas__overlay ${
            sideMenuOpen ? "overlay-open" : " "
          }`}
        ></div>
        <div className="offcanvas__overlay-white"></div>
        </>
    );
};

export default LandingSidemenu;