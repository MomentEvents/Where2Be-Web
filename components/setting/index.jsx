import React, { useState } from "react";
import WrapSetting from "./wrapSetting";
import Sidebar from "../common/sidebar";
import HeaderOne from "../../layout/headers/header";
import DarkMode from "../common/dark-mode";
import BackToTopCom from "../common/scroll-to-top";
import { useContext } from "react";
import { DarkModeContext } from "../darkmode-provider/DarkModeProvider";

const SettingMain = () => {
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
          <WrapSetting />
        </div>
      </div>
      <DarkMode />
      <BackToTopCom />
    </main>
  );
};

export default SettingMain;
