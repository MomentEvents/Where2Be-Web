import React, { useEffect } from "react";
import CardHeaderDropdown from "./cardheaderdropdown";
import notificationList from "../../data/dashboardData/_notificationItems";
import { useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import Notificationicon from "../../utils/SVG/notificationicon";
import Link from "next/link";

const NotificationSection = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollbar = Scrollbar.init(scrollContainerRef.current);

      return () => {
        scrollbar.destroy();
      };
    }
  }, []);
  return (
    <>
      <div className="col-xxl-4 col-xl-4 col-lg-6">
        <div className="card__wrapper">
          <div className="card__header">
            <div className="card__header-top mb-30">
              <div className="card__title-inner">
                <div className="card__header-icon">
                  <Notificationicon />
                </div>
                <div className="card__header-title">
                  <h4>Notifications List</h4>
                </div>
              </div>

              <CardHeaderDropdown />
            </div>
          </div>
          <div ref={scrollContainerRef} className="scroll-w-3 card__scroll">
            <div className="card__inner">
              <div className="notifaction__wrapper">
                {notificationList.length > 0 &&
                  notificationList.map((item,index) => (
                    <div key={index} className="notification__item">
                      <div className="notification__thumb">
                        <Link href="/profile">
                          <a>
                            <img
                              src={item.thumbnail.src}
                              alt="image not found"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="notification__content">
                        <p> {item.content} </p>
                        <div className="notification__time">
                          <span> {item.time} </span>
                          <span className="status"> {item.status} </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationSection;
