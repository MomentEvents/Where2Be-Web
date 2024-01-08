import React from "react";
import LandingHeader from "./component/header";
import LandingFooter from "./component/footer";
import Features from "./component/features";
import LandingSidemenu from "../common/sidemenu-landing/landingSidemenu";
import { useContext } from "react";
import { DarkModeContext } from "../darkmode-provider/DarkModeProvider";
import CirclingLightsBackground from "../Styles/CirclingLightsBackground";

const LandingPageMain = () => {
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
