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
const DashboardHeader = ({ handleClick }) => {
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

          <div className="app__herader-input p-relative">
            <input type="search" placeholder="Search Here . . ." />
            <button>
              <i className="flaticon-loupe"></i>
            </button>
          </div>
        </div>
        <div className="app__header-right">
          <div className="app__header-action">
            <ul>
              <li>
                <div className="nav-item p-relative">
                  <button
                    onClick={handleShowLanguage}
                    id="langdropdown"
                    className="langdropdown"
                  >
                    <span>
                      <English />
                    </span>
                    <span className="language-text">English</span>
                  </button>
                  {/* dropdown content */}
                  <div
                    className={`lang__dropdown ${
                      collapse ? "lang-enable" : " "
                    }`}
                  >
                    <ul onClick={handleShowLanguage}>
                      <Languages />
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <button onClick={handleToggleFullScreen}>
                  <div className="nav-item">
                    <div className="notification__icon">
                      <Zoomscreen />
                    </div>
                  </div>
                </button>
              </li>
              <li>
                <div className="nav-item p-relative">
                  <button id="emaildropdown" onClick={handleShowEmail}>
                    <div className="notification__icon">
                      <EmailIcon />
                    </div>
                  </button>
                  <div
                    className={`email__dropdown ${
                      emailactive ? "email-enable" : " "
                    }`}
                  >
                    <div
                      ref={scrollContainerRef}
                      className="notification__card card__scroll"
                    >
                      <div className="notification__header">
                        <div className="notification__inner">
                          <h5>Email Notifications</h5>
                          <span>(14)</span>
                        </div>
                      </div>

                      <Notifications />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="nav-item p-relative">
                  <button id="notifydropdown" onClick={handleShowNotification}>
                    <div className="notification__icon">
                      <Notificationicon />
                    </div>
                  </button>
                  {/* notifydropdown-enable */}
                  <div
                    className={`notification__dropdown ${
                      notificationActive ? "notifydropdown-enable" : " "
                    }`}
                  >
                    <div
                      ref={scrollContainerRef2}
                      className="notification__card card__scroll"
                    >
                      <div className="notification__header">
                        <div className="notification__inner">
                          <h5>Notifications</h5>
                          <span>(10)</span>
                        </div>
                      </div>
                      <Notifications />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="nav-item p-relative">
            <button id="userportfolio" onClick={handleShowuserDrowdown}>
              <div className="user__portfolio">
                <div className="user__portfolio-thumb">
                  <img src={profile_pic.src} alt="imge not found" />
                </div>
                <div className="user__content">
                  <span>Jhon Smith</span>
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

export default DashboardHeader;
