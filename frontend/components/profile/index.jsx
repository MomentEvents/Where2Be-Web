import React from "react";
import Sidebar from "../common/sidebar";
import HeaderOne from "../../layout/headers/header";
import ProfileContent from "./profileContent";
import { useState } from "react";
import DarkMode from "../common/dark-mode";
import BackToTopCom from "../common/scroll-to-top";
import { useContext } from "react";
import { DarkModeContext } from "../darkmode-provider/DarkModeProvider";

const ProfileMain = () => {
  const [collapse, setCollapse] = useState(false);
  const dark = true;
  const handleClick = () => {
    setCollapse(!collapse);
  };
  return (
    <main className={`body-area ${dark ? "bd-theme-dark" : "bd-theme-light"}`}>
      <div className="page__full-wrapper">
        <Sidebar handleClick={handleClick} collapse={collapse} />
        <div className="page__body-wrapper">
          <HeaderOne handleClick={handleClick} />
          <ProfileContent />
        </div>
      </div>

      <BackToTopCom />
    </main>
  );
};

export default ProfileMain;
