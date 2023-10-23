import React from "react";
import { useContext } from "react";
import { DarkModeContext } from "../darkmode-provider/DarkModeProvider";
import dynamic from "next/dynamic";
const EventSchdule = dynamic(() => import('../landingPage/component/evnetSchdule'), {
  ssr: false
})
import LandingSidemenu from "../common/sidemenu-landing/landingSidemenu";
import LandingHeader from "../landingPage/component/header";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import Footer from "../landingPage/component/footer";
import BackToTopCom from "../common/scroll-to-top";
import DarkMode from "../common/dark-mode";

const Index = () => {
  const { dark } = useContext(DarkModeContext);
  return (
    <>
      <main className={`body-area ${dark ? "bd-theme-dark" : "bd-theme-light"}`}>
        <LandingSidemenu />
        <LandingHeader breadcrumb_shadow="breadcrumb-shadow" />
        <Breadcrumb title="Event List" subTitle="Event List" />
        <EventSchdule />
        <DarkMode />
        <BackToTopCom />
        <Footer />
      </main>
    </>
  );
};

export default Index;
