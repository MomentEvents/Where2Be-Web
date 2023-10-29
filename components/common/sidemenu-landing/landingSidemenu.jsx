import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import Link from 'next/link';
import logo_dark from "../../../public/assets/img/logo/logo-black.svg"
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
                  <div className="offcanvas__logo">
                    <Link legacyBehavior href="/">
                     <a>
                     <img
                        src={logo_dark.src}
                        alt="logo not found"
                      />
                     </a>
                    </Link>
                  </div>
                  <div className="offcanvas__close">
                    <button onClick={toggleSideMenu}>
                      <i className="fal fa-times"></i>
                    </button>
                  </div>
                </div>
                <div className="offcanvas__search mb-25">
                  <form action="#">
                    <input
                      type="text"
                      placeholder="What are you searching for?"
                    />
                    <button type="submit">
                      <i className="far fa-search"></i>
                    </button>
                  </form>
                </div>

      
                <div className={`mobile-menu fix mb-40 ${isSmallDevice ? 'mean-container' : ''}`}>
                  {
                    isSmallDevice && <Menu2/>
                  }
                </div>
                <div className="offcanvas__contact mt-30 mb-20">
                  <h4>Contact Info</h4>
                  <ul>
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon mr-15">
                        <i className="fal fa-map-marker-alt"></i>
                      </div>
                      <div className="offcanvas__contact-text">
                        <Link legacyBehavior
                          target="_blank"
                          href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873"
                        >
                          12/A, Mirnada City Tower, NYC
                        </Link>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon mr-15">
                        <i className="far fa-phone"></i>
                      </div>
                      <div className="offcanvas__contact-text">
                        <a href="tel:+088889797697">+088889797697</a>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon mr-15">
                        <i className="fal fa-envelope"></i>
                      </div>
                      <div className="offcanvas__contact-text">
                        <a href="tel:+012-345-6789">
                          <span className="mailto:support@mail.com">
                            support@mail.com
                          </span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="offcanvas__social">
                  <ul>
                    <li>
                    <Link legacyBehavior href="https://www.facebook.com/" target="_blank">
                        <a>
                          <i className="fa-brands fa-facebook"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                    <Link legacyBehavior href="https://twitter.com/" target="_blank">
                        <a>
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                    <Link legacyBehavior href="https://bd.linkedin.com/" target="_blank">
                        <a>
                          <i className="fa-brands fa-linkedin"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                    <Link legacyBehavior href="https://www.youtube.com/" target="_blank">
                        <a>
                          <i className="fa-brands fa-youtube"></i>
                        </a>
                      </Link>
                    </li>
                  </ul>
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