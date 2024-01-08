import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo_white from "../../../public/assets/img/logo/logo.svg";
import logo_dark from "../../../public/assets/img/logo/logo-dark.svg";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import Menus from "../menus";
import logo from "../../../public/assets/img/index/logo.png";
import LINKS from "../../../constants/links";
import { FaDiscord } from "react-icons/fa";

const LandingHeader = ({ breadcrumb_shadow, disableLogo }) => {
  const { toggleSideMenu } = useContext(AppContext);

  const handleHamburgerClick = (e) => {
    e.preventDefault();
    toggleSideMenu();
  };

  return (
    <>
      <header>
        <div
          id="header-sticky"
          className={`header__area header-1 header__transparent ${
            breadcrumb_shadow ? breadcrumb_shadow : ""
          } `}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 mt-4">
                <div className="mega__menu-wrapper p-relative">
                  <div className="header__navigation d-flex align-items-center justify-content-between">
                    <div className="header__logo">
                      {!disableLogo && (
                        <Link legacyBehavior href="/">
                          <a>
                            <img
                              className="logo__white"
                              src={logo.src}
                              alt="logo not found"
                            />
                            <img
                              className="logo__dark"
                              src={logo.src}
                              alt="logo not found"
                            />
                          </a>
                        </Link>
                      )}
                    </div>
                    <div className="header__right">
                      <div className="header__action-inner">
                        <div className="header__dashboard">
                          <Link legacyBehavior href={LINKS.Discord}>
                            <a className="dashboard__btn">
                              <FaDiscord size={36} />
                            </a>
                          </Link>
                        </div>
                        <div className="header__hamburger">
                          {/* <div className="sidebar__toggle">
                            <a
                              className="hamburger__btn"
                              onClick={handleHamburgerClick}
                            >
                              <i
                                className="fa-solid fa-bars"
                                style={{ color: "#CDCDCD", fontSize: "23px" }}
                              ></i>
                            </a>
                          </div> */}
                          <Link legacyBehavior href={LINKS.Discord}>
                            <a className="dashboard__btn">
                              <FaDiscord size={36} />
                            </a>
                          </Link>
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
