import React from "react";
import LandingHeader from "./component/header";
import LandingFooter from "./component/footer";
import Features from "./component/features";
import MainAria from "./component/mainArea";
import BackToTopCom from "../common/scroll-to-top";
import LandingSidemenu from "../common/sidemenu-landing/landingSidemenu";
import DarkMode from "../common/dark-mode";
import { useContext } from "react";
import { DarkModeContext } from "../darkmode-provider/DarkModeProvider";
import background from "../../public/assets/img/index/background.png";
import CirclingLightsBackground from "../Styles/CirclingLightsBackground";

const LandingPageMain = () => {
  const { dark } = useContext(DarkModeContext);
  return (
    <main
      // className={`body-area ${dark ? "bd-theme-dark" : "bd-theme-light"}`}
      // style={{ backgroundImage: `url(${background.src})` }}
    >
      <CirclingLightsBackground>
        <LandingSidemenu />
        <LandingHeader />
        <Features />
        <LandingFooter />
      </CirclingLightsBackground>
    </main>
  );
};

export default LandingPageMain;
