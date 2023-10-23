import React, { useContext } from "react";
import dynamic from "next/dynamic";
const WrapAttendence = dynamic(() => import("./wrapattendence"), {
  ssr: false,
});
import Sidebar from "../common/sidebar";
import HeaderOne from "../../layout/headers/header";
import { useState } from "react";
import DarkMode from "../common/dark-mode";
import BackToTopCom from "../common/scroll-to-top";
import ModalAttendence from "./modal-attendence";
import { DarkModeContext } from "../darkmode-provider/DarkModeProvider";
const AttendenceMain = () => {
  const { dark } = useContext(DarkModeContext);
  const [collapse, setCollapse] = useState(false);
  const [openModal, setopenModal] = useState(false);

  const handleClick = () => {
    setCollapse(!collapse);
  };
  const handleopenModal = (e) => {
    e.preventDefault();
    setopenModal(!openModal);
  };
  return (
    <main className={`body-area ${dark ? "bd-theme-dark" : "bd-theme-light"}`}>
      <ModalAttendence
        openModal={openModal}
        handleopenModal={handleopenModal}
      />
      <div className="page__full-wrapper">
        <Sidebar handleClick={handleClick} collapse={collapse} />
        <div className="page__body-wrapper">
          <HeaderOne handleClick={handleClick} />
          <WrapAttendence handleopenModal={handleopenModal} />
        </div>
      </div>
      <DarkMode />
      <BackToTopCom />
    </main>
  );
};

export default AttendenceMain;
