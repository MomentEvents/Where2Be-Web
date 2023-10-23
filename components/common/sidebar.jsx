import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import overlay_img from "../../public/assets/img/bg/dropdown-bg.png";
import DashboardCollapseMenu from './subcomponent/dashboardcollapsmenu';
import UpcommingEvents from './subcomponent/upcomingEvents';
import Profile from './subcomponent/profile';
import small_logo from "../../public/assets/img/logo/logo-small.svg"
import logo_two from "../../public/assets/img/logo/logo.svg"
import sidebar_img from "../../public/assets/img/sidebar/sidebar.jpg"

const Sidebar = ({collapse,handleClick}) => {
  const [deviceWidth, setDeviceWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };

    handleResize(); // Set initial device width

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [deviceWidth]);
    return (
      <>
        {deviceWidth && deviceWidth <= 991 ? (
          <div
            className={`expovent__sidebar ${collapse ? "open" : " "}`}
            style={{ backgroundImage: `url(${overlay_img.src})` }}
          >
            <div className="logo-details">
              <span>
                <Link href="/dashboard">
                  <a>
                    <img
                      className="logo__white"
                      src={small_logo.src}
                      alt="logo not found"
                    />
                  </a>
                </Link>
              </span>
              <span>
                <Link href="/dashboard">
                  <a>
                    <img
                      className="log__smnall"
                      src={logo_two.src}
                      alt="logo not found"
                    />
                  </a>
                </Link>
              </span>
            </div>
            <div className="sidebar__inner simple-bar">
              <div className="dlabnav">
                <ul className="metismenu" id="menu">
                  {/* modify code  */}

                  {/* dashboard li  */}
                  <DashboardCollapseMenu />
                  <li>
                    <Link href="/schedule-list">
                      <a>
                        <i className="flaticon-calendar-1"></i>
                        <span className="nav-text">Schedule List</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/speaker-list">
                      <a>
                        <i className="flaticon-speaker"></i>
                        <span className="nav-text">Speaker List</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/attendant-list">
                      <a>
                        <i className="flaticon-user-1"></i>
                        <span className="nav-text">Attendant List</span>
                      </a>
                    </Link>
                  </li>
                  {/* upcomming Events */}
                  <UpcommingEvents />
                  <li>
                    <Link href="/calendar" aria-expanded="false">
                      <a>
                        <i className="flaticon-calendar"></i>
                        <span className="nav-text">Calendar</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/venue" aria-expanded="false">
                      <a>
                        <i className="flaticon-map-2"></i>
                        <span className="nav-text">Venue</span>
                      </a>
                    </Link>
                  </li>
                  {/* profile */}
                  <Profile />
                </ul>
                <div className="sidebar__thumb mb-60 mt-50">
                    <img src={sidebar_img.src} alt="image not found" />
                </div>
                <div className="sidebar__profile mb-50">
                  <Link href="/signin">
                    <a>
                      <i className="flaticon-log-out-3"></i>
                      <span className="links_name">Log out</span>
                    </a>
                  </Link>
                </div>
                <div className="sidebar__copyright">
                  <p>Copyright @ Expovent 2023</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`expovent__sidebar ${collapse ? "collapsed" : " "}`}
            style={{ backgroundImage: `url(${overlay_img.src})` }}
          >
            <div className="logo-details">
              <span>
                <Link href="/dashboard">
                  <a>
                    <img
                      className="logo__white"
                      src={small_logo.src}
                      alt="logo not found"
                    />
                  </a>
                </Link>
              </span>
              <span>
                <Link href="/dashboard">
                  <a>
                    <img
                      className="log__smnall"
                      src={logo_two.src}
                      alt="logo not found"
                    />
                  </a>
                </Link>
              </span>
            </div>
            <div className="sidebar__inner simple-bar">
              <div className="dlabnav">
                <ul className="metismenu" id="menu">
                  {/* modify code  */}

                  {/* dashboard li  */}
                  <DashboardCollapseMenu />
                  <li>
                    <Link href="/schedule-list">
                      <a>
                        <i className="flaticon-calendar-1"></i>
                        <span className="nav-text">Schedule List</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/speaker-list">
                      <a>
                        <i className="flaticon-speaker"></i>
                        <span className="nav-text">Speaker List</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/attendant-list">
                      <a>
                        <i className="flaticon-user-1"></i>
                        <span className="nav-text">Attendant List</span>
                      </a>
                    </Link>
                  </li>
                  {/* upcomming Events */}
                  <UpcommingEvents />
                  <li>
                    <Link href="/calendar" aria-expanded="false">
                      <a>
                        <i className="flaticon-calendar"></i>
                        <span className="nav-text">Calendar</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/venue" aria-expanded="false">
                      <a>
                        <i className="flaticon-map-2"></i>
                        <span className="nav-text">Venue</span>
                      </a>
                    </Link>
                  </li>
                  {/* profile */}
                  <Profile />
                </ul>
                <div className="sidebar__thumb mb-60 mt-50">
                    <img src={sidebar_img.src} alt="image not found" />
                </div>
                <div className="sidebar__profile mb-50">
                  <Link href="/signin">
                    <a>
                      <i className="flaticon-log-out-3"></i>
                      <span className="links_name">Log out</span>
                    </a>
                  </Link>
                </div>
                <div className="sidebar__copyright">
                  <p>Copyright @ Expovent 2023</p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div
          onClick={handleClick}
          className={`app__offcanvas-overlay ${
            collapse ? "overlay-open" : " "
          }`}
        ></div>
        {/* overlay-open */}
      </>
    );
};

export default Sidebar;