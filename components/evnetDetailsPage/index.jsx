import React from "react";
import dynamic from "next/dynamic";
const WrapEvenDetailsContent = dynamic(() => import("./wrapEvenDetails"), {
  ssr: false,
});
import Sidebar from "../common/sidebar";
import HeaderOne from "../../layout/headers/header";
import { useState } from "react";
import BackToTopCom from "../common/scroll-to-top";
import DarkMode from "../common/dark-mode";
import { useContext } from "react";
import { DarkModeContext } from "../darkmode-provider/DarkModeProvider";

const EvenDetailsMain = () => {
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
          <WrapEvenDetailsContent />
        </div>
      </div>
      <DarkMode />
      <BackToTopCom />
    </main>
  );
};

export default EvenDetailsMain;
