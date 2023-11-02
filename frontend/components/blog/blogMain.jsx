import React from 'react';
import LandingHeader from '../landingPage/component/header';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import Blogsection from './blogsection';
import Footer from '../landingPage/component/footer';
import LandingSidemenu from '../common/sidemenu-landing/landingSidemenu';
import DarkMode from '../common/dark-mode';
import { useContext } from 'react';
import { DarkModeContext } from '../darkmode-provider/DarkModeProvider';
import BackToTopCom from '../common/scroll-to-top';

const BlogMain = () => {
    const {dark} = useContext(DarkModeContext)
    return (
        <main className={`body-area ${dark ? "bd-theme-dark" : "bd-theme-light"}`}>
            <LandingSidemenu/>
            <LandingHeader breadcrumb_shadow="breadcrumb-shadow" />
            <Breadcrumb title='Blog Grid with Sidebar' subTitle='Expovents Bolgs' />
            <Blogsection/>
            <BackToTopCom />
            <Footer/>
        </main>
    );
};

export default BlogMain;