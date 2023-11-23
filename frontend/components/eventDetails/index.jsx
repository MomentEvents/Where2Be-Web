import React, { useState, useEffect } from "react";
import DesktopView from "./DesktopEventDetails";
import MobileView from "./MobileEventDetails";
import LandingSidemenu from "../common/sidemenu-landing/landingSidemenu";
import LandingHeader from "../landingPage/component/header";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";

const EventDetailsMain = ({ event, host }) => {
  const { isDesktop } = useContext(AppContext);

  // Render based on the state
  return (
    <div>
      <LandingSidemenu />
      <LandingHeader />
      {isDesktop ? <DesktopView event={event} host={host}/> : <MobileView event={event} host={host} />}
    </div>
  );
};

export default EventDetailsMain;
