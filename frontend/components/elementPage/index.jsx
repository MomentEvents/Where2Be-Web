import React from "react";
import Sidebar from "../common/sidebar";
import HeaderOne from "../../layout/headers/header";
import WrapElementContent from "./wrapElementContent";
import { useState } from "react";
import DarkMode from "../common/dark-mode";
import BackToTopCom from "../common/scroll-to-top";
import { useContext } from "react";
import { DarkModeContext } from "../darkmode-provider/DarkModeProvider";

const UiElementMain = () => {
  const [collapse, setCollapse] = useState(false);
  const {dark} = useContext(DarkModeContext)
  const handleClick = () => {
    setCollapse(!collapse);
  };
  return (
    <main className={`body-area ${dark ? "bd-theme-dark" : "bd-theme-light"}`}>
      <div className="page__full-wrapper">
        <Sidebar handleClick={handleClick} collapse={collapse} />
        <div className="page__body-wrapper">
          <HeaderOne handleClick={handleClick} />
          <WrapElementContent />
        </div>
      </div>
      
      <BackToTopCom />
    </main>
  );
};

export default UiElementMain;