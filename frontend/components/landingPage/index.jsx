import React from "react";
import LandingHeader from "./component/header";
import MainAria from "./component/mainArea";
import BackToTopCom from "../common/scroll-to-top";
import LandingSidemenu from "../common/sidemenu-landing/landingSidemenu";
import DarkMode from "../common/dark-mode";
import { useContext } from "react";
import { DarkModeContext } from "../darkmode-provider/DarkModeProvider";
const LandingPageMain = () => { 
  const {dark} =  useContext(DarkModeContext)
  return (
    <> 
      <main className={`body-area ${dark ? "bd-theme-dark" : "bd-theme-light"}`}>
        <LandingSidemenu/>
        <LandingHeader />
        <MainAria />
        
        <BackToTopCom />
      </main>
    </>
  );
};

export default LandingPageMain;
