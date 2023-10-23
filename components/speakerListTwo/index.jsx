import React from "react";
import { useContext } from "react";
import { DarkModeContext } from "../darkmode-provider/DarkModeProvider";
import LandingSidemenu from "../common/sidemenu-landing/landingSidemenu";
import LandingHeader from "../landingPage/component/header";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import Footer from "../landingPage/component/footer";
import BackToTopCom from "../common/scroll-to-top";
import DarkMode from "../common/dark-mode";
import SpeakerBox from "./speakerBox";
import speakerData from "../../data/speakercontentdata/speakerdata";

const Index = () => {
  const { dark } = useContext(DarkModeContext);
  return (
    <>
      <main className={`body-area ${dark ? "bd-theme-dark" : "bd-theme-light"}`}>
        <LandingSidemenu />
        <LandingHeader breadcrumb_shadow="breadcrumb-shadow" />
        <Breadcrumb title="Speaker List" subTitle="Speaker List" />
        <SpeakerBox speakerData={speakerData} />
        <DarkMode />
        <BackToTopCom />
        <Footer />
      </main>
    </>
  );
};

export default Index;