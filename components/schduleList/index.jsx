import React from "react";
import dynamic from "next/dynamic";
const WrapSchduleContent = dynamic(() => import('./schduleContent'), {
  ssr: false
})
import Sidebar from "../common/sidebar";
import HeaderOne from "../../layout/headers/header";
import { useState } from "react";
import DarkMode from "../common/dark-mode";
import BackToTopCom from "../common/scroll-to-top";
import { useContext } from "react";
import { DarkModeContext } from "../darkmode-provider/DarkModeProvider";

const SchduleListMain = () => {
  const [collapse, setCollapse] = useState(false);
  const { dark } = useContext(DarkModeContext);
  const handleClick = () => {
    setCollapse(!collapse);
  };
  return (
    <main className={`body-area ${dark ? "bd-theme-dark" : "bd-theme-light"}`}>
      <div className="page__full-wrapper">
        <Sidebar handleClick={handleClick} collapse={collapse} />
        <div className="page__body-wrapper">
          <HeaderOne handleClick={handleClick} />
          <WrapSchduleContent />
        </div>
      </div>
      
      <BackToTopCom />
    </main>
  );
};

export default SchduleListMain;
