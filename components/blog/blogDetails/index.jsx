import React from "react";
import LandingHeader from "../../landingPage/component/header";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import Footer from "../../landingPage/component/footer";
import BlogDetailsContent from "./blogDetailsContent";
import LandingSidemenu from "../../common/sidemenu-landing/landingSidemenu";
import DarkMode from "../../common/dark-mode";
import { useContext } from "react";
import { DarkModeContext } from "../../darkmode-provider/DarkModeProvider";
import BackToTopCom from "../../common/scroll-to-top";

const BlogDetalsArea = ({ blog }) => {
  const { dark } = useContext(DarkModeContext);
  return (
    <main className={`body-area ${dark ? "bd-theme-dark" : "bd-theme-light"}`}>
      <LandingSidemenu />
      <LandingHeader breadcrumb_shadow="breadcrumb-shadow" />
      <Breadcrumb title="Blog Details" subTitle="Blog Details" />
      <BlogDetailsContent blog={blog} />
      <BackToTopCom />
      <Footer />
    </main>
  );
};

export default BlogDetalsArea;
