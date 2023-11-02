import React from "react";
import dynamic from "next/dynamic";
const EventDetailsTwoContent = dynamic(() => import('./eventDetailsTwoContent'), {
  ssr: false
})
import DarkMode from "../common/dark-mode";
import BackToTopCom from "../common/scroll-to-top";
import { useContext } from "react";
import { DarkModeContext } from "../darkmode-provider/DarkModeProvider";
import LandingSidemenu from "../common/sidemenu-landing/landingSidemenu";
import LandingHeader from "../landingPage/component/header";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import Footer from "../landingPage/component/footer";

const Index = () => {
  const { dark } = useContext(DarkModeContext);
  return (
    <>
      <main className={`body-area ${dark ? "bd-theme-dark" : "bd-theme-light"}`}>
        <LandingSidemenu />
        <LandingHeader breadcrumb_shadow="breadcrumb-shadow" />
        <Breadcrumb title="Event Details" subTitle="Event Details" />
        <EventDetailsTwoContent />
        
        <BackToTopCom />
        <Footer />
      </main>
    </>
  );
};

export default Index;
