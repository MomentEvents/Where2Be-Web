import React from 'react';
import { useContext } from 'react';
import { DarkModeContext } from '../darkmode-provider/DarkModeProvider';
import LandingSidemenu from '../common/sidemenu-landing/landingSidemenu';
import LandingHeader from '../landingPage/component/header';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import DarkMode from '../common/dark-mode';
import BackToTopCom from '../common/scroll-to-top';
import Footer from '../landingPage/component/footer';
import DynamicProfileContentTwo from './DynamicProfileContentTwo';

const Index = ({speaker}) => {
    const { dark } = useContext(DarkModeContext);
  return (
    <>
      <main className={`body-area ${dark ? "bd-theme-dark" : "bd-theme-light"}`}>
        <LandingSidemenu />
        <LandingHeader breadcrumb_shadow="breadcrumb-shadow" />
        <Breadcrumb title="Speaker Details" subTitle="Speaker Details" />
        <DynamicProfileContentTwo speaker={speaker} />
        <DarkMode />
        <BackToTopCom />
        <Footer />
      </main>
    </>
  );
};

export default Index;