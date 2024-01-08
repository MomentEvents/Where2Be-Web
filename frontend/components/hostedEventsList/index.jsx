import React from "react";
import dynamic from "next/dynamic";
import HostedEvents from "./HostedEvents";

import Sidebar from "../common/sidebar";
import HeaderOne from "../../layout/headers/header";
import { useState } from "react";
import DarkMode from "../common/dark-mode";
import BackToTopCom from "../common/scroll-to-top";
import { useContext } from "react";
import { DarkModeContext } from "../darkmode-provider/DarkModeProvider";

const HostedEventsList = ({ user }) => {
  const [collapse, setCollapse] = useState(false);
  const dark = true;
  const setDark = (input) => {};
  const handleClick = () => {
    setCollapse(!collapse);
  };
  return (
    <main className={`body-area ${dark ? "bd-theme-dark" : "bd-theme-light"}`}>
      <div className="page__full-wrapper">
        <Sidebar handleClick={handleClick} collapse={collapse} />
        <div className="page__body-wrapper">
          <HeaderOne handleClick={handleClick} />
          <HostedEvents user={user} />
        </div>
      </div>

      <BackToTopCom />
    </main>
  );
};

export default HostedEventsList;
