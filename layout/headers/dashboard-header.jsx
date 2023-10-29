import React, { useEffect, useRef, useState } from "react";
import Scrollbar from "smooth-scrollbar";
import Zoomscreen from "../../utils/SVG/zoomscreen";
import English from "../../utils/SVG/language-icons/english";
import EmailIcon from "../../utils/SVG/emailIcon";
import Notificationicon from "../../utils/SVG/notificationicon";
import profile_pic from "../../public/assets/img/speaker/list/04.jpg"
import Languages from "./languages";
import Notifications from "./notifications";
import ProfileLinks from "./profileLinks";
import supabase from "../../lib/supabase";

export default function DashboardHeader ({ handleClick }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const [emailactive, setemailactive] = useState(false);
  const [notificationActive, setnotificationActive] = useState(false);
  const [userDropdown, setuserDropdown] = useState(false);
  const handleShowLanguage = () => {
    setCollapse(!collapse);
    setemailactive(false);
    setnotificationActive(false);
    setuserDropdown(false);
  };
  const handleShowEmail = () => {
    setemailactive(!emailactive);
    setnotificationActive(false);
    setuserDropdown(false);
    setCollapse(false);
  };
  const handleShowNotification = () => {
    setnotificationActive(!notificationActive);
    setuserDropdown(false);
    setemailactive(false);
    setCollapse(false);
  };
  const handleShowuserDrowdown = () => {
    setuserDropdown(!userDropdown);
    setemailactive(false);
    setnotificationActive(false);
    setCollapse(false);
  };

  const scrollContainerRef = useRef(null);
  const scrollContainerRef2 = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollbar = Scrollbar.init(scrollContainerRef.current);

      return () => {
        scrollbar.destroy(); // Cleanup when the component is unmounted
      };
    }
  }, []);
  useEffect(() => {
    if (scrollContainerRef2.current) {
      const scrollbar = Scrollbar.init(scrollContainerRef2.current);

      return () => {
        scrollbar.destroy(); // Cleanup when the component is unmounted
      };
    }
  }, []);

  const handleToggleFullScreen = () => {
    if (!isFullScreen) {
      enterFullScreen();
    } else {
      exitFullScreen();
    }
  };

  const enterFullScreen = () => {
    const docElement = document.documentElement;

    if (docElement.requestFullscreen) {
      docElement.requestFullscreen();
    } else if (docElement.mozRequestFullScreen) {
      docElement.mozRequestFullScreen();
    } else if (docElement.webkitRequestFullscreen) {
      docElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }

    setIsFullScreen(true);
  };

  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }

    setIsFullScreen(false);
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(
        document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement ||
          document.msFullscreenElement
      );
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener("mozfullscreenchange", handleFullScreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullScreenChange
      );
    };
  }, []);

  return (
    <div className="app__header__area">
      <div className="app__header-inner">
        <div className="app__header-left">
          <button onClick={handleClick} id="sidebar__active">
            <div className="bar-icon-2">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
        <div className="app__header-right">
          <div className="nav-item p-relative">
            <button id="userportfolio" onClick={handleShowuserDrowdown}>
              <div className="user__portfolio">
                <div className="user__portfolio-thumb">
                  <img src={profile_pic.src} alt="imge not found" />
                </div>
                <div className="user__content">
                  {/* <span>{user.email}</span> */}
                </div>
              </div>
            </button>

            <div
              className={`user__dropdown ${userDropdown ? "user-enable" : " "}`}
            >
              <ul>
                <ProfileLinks />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
