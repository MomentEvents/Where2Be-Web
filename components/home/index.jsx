import React, { useState } from "react";
import HeaderOne from "../../layout/headers/header";

import Sidebar from "../common/sidebar";
import WrapContent from "./wrapcontent";
import OffCanvasArea from "../common/off-canvas";
import DarkMode from "../common/dark-mode";
import BackToTopCom from "../common/scroll-to-top";
import { useContext } from "react";
import { DarkModeContext } from "../darkmode-provider/DarkModeProvider";

const Index = () => {
  const { dark } = useContext(DarkModeContext);
  const [collapse, setCollapse] = useState(false);
  const handleClick = () => {
    setCollapse(!collapse);
  };
  return (
    <main className={`body-area ${dark ? "bd-theme-dark" : "bd-theme-light"}`}>
      <OffCanvasArea handleClick={handleClick} />
      <div className="page__full-wrapper">
        <Sidebar handleClick={handleClick} collapse={collapse} />
        <div className="page__body-wrapper">
          <HeaderOne handleClick={handleClick} />
          <WrapContent />
        </div>
      </div>
      
      <BackToTopCom />
    </main>
  );
};

export default Index;
