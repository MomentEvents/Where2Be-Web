import React, { useRef } from "react";
import dynamic from "next/dynamic";
const WrapperEventList = dynamic(() => import('./wrapperEventList'), {
  ssr: false
})
import Sidebar from "../common/sidebar";
import HeaderOne from "../../layout/headers/header";
import { useState } from "react";
import DarkMode from "../common/dark-mode";
import BackToTopCom from "../common/scroll-to-top";
import ModalEventPage from "./modal-eventPage";
import { useContext } from "react";
import { DarkModeContext } from "../darkmode-provider/DarkModeProvider";

const EventListMain = () => {
  const [collapse, setCollapse] = useState(false);
  const { dark } = useContext(DarkModeContext);
  const [openModal, setopenModal] = useState(false);
  const modalRef = useRef(null);
  const handleClick = () => {
    setCollapse(!collapse);
  };
  const handleopenModal = (e) => {
    e.preventDefault();
    setopenModal(!openModal);
  };

  return (
    <main className={`body-area ${dark ? "bd-theme-dark" : "bd-theme-light"}`}>
      <ModalEventPage openModal={openModal} handleopenModal={handleopenModal} />
      <div className="page__full-wrapper">
        <Sidebar handleClick={handleClick} collapse={collapse} />
        <div className="page__body-wrapper">
          <HeaderOne handleClick={handleClick} />
          <WrapperEventList handleopenModal={handleopenModal} />
        </div>
      </div>
      
      <BackToTopCom />
    </main>
  );
};

export default EventListMain;
