import React,{ useContext } from 'react';
import LandingSidemenu from '../common/sidemenu-landing/landingSidemenu';
import LandingHeader from '../landingPage/component/header';
import BackToTopCom from '../common/scroll-to-top';
import ContactArea from './ContactArea';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import DarkMode from '../common/dark-mode';
import { DarkModeContext } from '../darkmode-provider/DarkModeProvider';
import Footer from "../landingPage/component/footer"
const ContactMain = () => {
  const {dark} = useContext(DarkModeContext)
    return (
        <>
        <main className={`body-area ${dark ? "bd-theme-dark" : "bd-theme-light"}`}>
          <LandingSidemenu/>
          <LandingHeader breadcrumb_shadow="breadcrumb-shadow" />
           <Breadcrumb title='Contact Us' subTitle='Contact Us'/>
           <ContactArea/>
           <DarkMode/>
          <BackToTopCom />
          <Footer/>
        </main>
      </>
    );
};

export default ContactMain;