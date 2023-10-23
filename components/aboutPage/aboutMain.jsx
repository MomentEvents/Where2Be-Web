import React, { useContext } from "react";
import BackToTopCom from "../common/scroll-to-top";
import LandingHeader from "../landingPage/component/header";
import AboutMainArea from "./aboutMainArea";
import LandingSidemenu from "../common/sidemenu-landing/landingSidemenu";
import { DarkModeContext } from "../darkmode-provider/DarkModeProvider";
import DarkMode from "../common/dark-mode";
const AboutMain = () => {
const {dark} = useContext(DarkModeContext)
  return (
    <>
      <main className={`body-area ${dark ? "bd-theme-dark" : "bd-theme-light"}`}>
        <LandingSidemenu/>
        <LandingHeader breadcrumb_shadow="breadcrumb-shadow" />
        <AboutMainArea />
        <BackToTopCom />
      </main>
    </>
  );
};

export default AboutMain;
