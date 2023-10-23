import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo_white from "../../../public/assets/img/logo/logo.svg"
import logo_dark from "../../../public/assets/img/logo/logo-dark.svg"
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import Menus from "../menus";
const LandingHeader = ({breadcrumb_shadow}) => {
  const {toggleSideMenu} = useContext(AppContext)
  const [scrollDirection, setScrollDirection] = useState("down");

  // Sticky Menu Area start
  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > prevScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      prevScrollY = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header>
        <div
          id="header-sticky"
          className={`header__area header-1 header__transparent menu-sticky dark_light_class ${scrollDirection === "up" ? "sticky" : ""} ${breadcrumb_shadow ? breadcrumb_shadow : ""} `}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="mega__menu-wrapper p-relative">
                  <div className="header__navigation d-flex align-items-center justify-content-between">
                    <div className="header__logo">
                      <Link href="/">
                        <a>
                          <img
                            className="logo__white"
                            src={logo_white.src}
                            alt="logo not found"
                          />
                          <img
                            className="logo__dark"
                            src={logo_dark.src}
                            alt="logo not found"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="header__right">
                      <div className="main-menu smooth d-none d-none d-xl-block">
                        <nav id="mobile-menu">
                         <Menus/>
                        </nav>
                      </div>
                      <div className="header__action-inner">
                        <div className="header__btn d-none d-xl-block">
                          <Link href="/signin">
                            <a className="fill__btn">
                              SignIn
                              <i className="fa-regular fa-angle-right"></i>
                            </a>
                          </Link>
                        </div>
                        <div className="header__hamburger">
                          <div className="sidebar__toggle">
                              <button type="button" onClick={toggleSideMenu} className="bar-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                              </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default LandingHeader;
