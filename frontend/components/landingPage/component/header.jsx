import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo_white from "../../../public/assets/img/logo/logo.svg"
import logo_dark from "../../../public/assets/img/logo/logo-dark.svg"
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import Menus from "../menus";
import logo from "../../../public/assets/img/index/logo.png";

const LandingHeader = ({breadcrumb_shadow}) => {
  
  return (
    <>
      <header>
        <div
          id="header-sticky"
          className={`header__area header-1 header__transparent ${breadcrumb_shadow ? breadcrumb_shadow : ""} `}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="mega__menu-wrapper p-relative">
                  <div className="header__navigation d-flex align-items-center justify-content-between">
                    <div className="header__logo">
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
                    </div>
                    <div className="header__right">
                      <div className="header__action-inner">
                        <div className="header__btn d-none d-xl-block">
                          <Link legacyBehavior href="/dashboard">
                            <a className="dashboard__btn">
                              Dashboard
                              <i className="fa-regular fa-angle-right"></i>
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
