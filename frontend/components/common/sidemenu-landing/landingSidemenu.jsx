import React from "react";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import Link from "next/link";
import logo_dark from "../../../public/assets/img/logo/logo-black.svg";
import logo from "../../../public/assets/img/index/logo.png";
import Menu2 from "../../landingPage/menu2";
import { useState } from "react";
import { useEffect } from "react";
const LandingSidemenu = () => {
  const { sideMenuOpen, toggleSideMenu } = useContext(AppContext);

  const { isDesktop } = useContext(AppContext);

  return (
    <>
      <div className="fix">
        <div className={`offcanvas__info ${sideMenuOpen ? "info-open" : " "}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
                <div className="offcanvas__close">
                  <button onClick={toggleSideMenu}>
                    <i
                      className="fal fa-times"
                      style={{ fontSize: "30px" }}
                    ></i>
                  </button>
                </div>
                <div className="offcanvas__logo">
                  <Link legacyBehavior href="/">
                    <a>
                      <img src={logo.src} alt="logo not found" />
                    </a>
                  </Link>
                </div>
              </div>

              <div
                className={`mobile-menu fix mb-40 ${
                  isDesktop ? "mean-container" : ""
                }`}
              >
                <Menu2 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={toggleSideMenu}
        className={`offcanvas__overlay ${sideMenuOpen ? "overlay-open" : " "}`}
      ></div>
      <div className="offcanvas__overlay-white"></div>
    </>
  );
};

export default LandingSidemenu;
