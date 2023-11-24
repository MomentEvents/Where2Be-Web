import Link from "next/link";
import React, { useEffect, useState } from "react";
import overlay_img from "../../public/assets/img/bg/dropdown-bg.png";
import DashboardCollapseMenu from "./subcomponent/dashboardcollapsmenu";
import UpcommingEvents from "./subcomponent/upcomingEvents";
import Profile from "./subcomponent/profile";
import small_logo from "../../public/assets/img/logo/logo-small.svg";
import logo_two from "../../public/assets/img/logo/logo.svg";
import sidebar_img from "../../public/assets/img/sidebar/sidebar.jpg";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import supabase from "../../lib/supabase";
import { useRouter } from "next/router";
import showMessage from "../errorMessage/showMessage";
import Image from "next/image";
import Where2BeLogo from "../../public/assets/img/logo/where2be.svg";
import w2bLogo from "../../public/assets/img/logo/w2b.svg";

import { deleteSupabaseCookies } from "../../lib/cookies";

const Sidebar = ({ collapse, handleClick }) => {
  const [deviceWidth, setDeviceWidth] = useState(null);
  const router = useRouter();

  const handleSignOut = async (e) => {
    e.preventDefault(); // Prevent default action
    const { error } = await supabase.auth.signOut();
    if (error) {
      showMessage(error);
      return;
    }

    deleteSupabaseCookies();

    router.push("/");
  };

  const SidebarButtons = () => {
    return (
      <>
        <div className="logo-details">
          <span>
            <Link legacyBehavior href="/dashboard">
              <a>
                {collapse && deviceWidth > 991 ? (
                  <Image
                    src={w2bLogo}
                    alt="Where2Be"
                    width={50}
                  />
                ) : (
                  <Image
                    src={Where2BeLogo}
                    alt="Where2Be"
                    width={200}
                  />
                )}
              </a>
            </Link>
          </span>
        </div>
        <div className="sidebar__inner simple-bar">
          <div className="dlabnav">
            <ul className="metismenu" id="menu">
              {/* modify code  */}

              {/* dashboard li  */}
              {/* <li>
                <Link legacyBehavior href="/dashboard">
                  <a>
                    <i className="flaticon-home"></i>
                    <span className="nav-text">Dashboard</span>
                  </a>
                </Link>
              </li> */}
              <li>
                <Link legacyBehavior href="/dashboard">
                  <a>
                    <i className="flaticon-calendar-1"></i>
                    <span className="nav-text">Events</span>
                  </a>
                </Link>
              </li>
              {/* <li>
                <Link legacyBehavior href="/outreach">
                  <a>
                    <i className="flaticon">
                      <NotificationsActiveIcon
                        sx={{
                          fontSize: 20,
                          color: "white",
                        }}
                      />
                    </i>
                    <span className="nav-text">SMS Blast</span>
                  </a>
                </Link>
              </li> */}
              <li>
                <Link legacyBehavior href="/profile">
                  <a>
                    <i className="flaticon-user-1"></i>
                    <span className="nav-text">Profile</span>
                  </a>
                </Link>
              </li>

              <li>
                <Link legacyBehavior href="">
                  <a onClick={handleSignOut}>
                    <i className="flaticon-log-out-3"></i>
                    <span className="nav-text">Log out</span>
                  </a>
                </Link>
              </li>
            </ul>
            <div className="sidebar__copyright">
              <p>Copyright @ Where2Be</p>
            </div>
          </div>
        </div>
      </>
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };

    handleResize(); // Set initial device width

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [deviceWidth]);
  return (
    <>
      {deviceWidth && deviceWidth <= 991 ? (
        <div
          className={`expovent__sidebar ${collapse ? "open" : " "}`}
          style={{ backgroundImage: `url(${overlay_img.src})` }}
        >
          <SidebarButtons />
        </div>
      ) : (
        <div
          className={`expovent__sidebar ${collapse ? "collapsed" : " "}`}
          style={{ backgroundImage: `url(${overlay_img.src})` }}
        >
          <SidebarButtons />
        </div>
      )}
      <div
        onClick={handleClick}
        className={`app__offcanvas-overlay ${collapse ? "overlay-open" : " "}`}
      ></div>
      {/* overlay-open */}
    </>
  );
};

export default Sidebar;
