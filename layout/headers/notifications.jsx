import Link from "next/link";
import React from "react";
import notifications from "../../data/_notification";

const Notifications = () => {
  return (
    <>
      {notifications.length > 0 &&
        notifications.map((notify) => (
          <div key={notify.id} className="notification__item">
            <div className="notification__thumb">
              <Link href="/profile">
                <a>
                  <img src={notify.thumbnail.src} alt="Notification img not found" />
                </a>
              </Link>
            </div>
            <div className="notification__content">
              <p>
                <Link href="/chat"> consectetur adipisci elit, sed eiusmod  </Link>
              </p>
              <div className="notification__time">
                <span> {notify.time} </span>
                <span className="status"> {notify.subtitle} </span>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Notifications;
