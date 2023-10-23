import React from "react";
import CalendarComponent from "./calenderBox";
import MapSection from "./mapSection";
import Link from "next/link";

const WrapCalender = () => {
  return (
    <>
      <div className="body__overlay"></div>
      <div className="app__slide-wrapper ">
        <div className="breadcrumb__area">
          <div className="breadcrumb__wrapper mb-35">
            <div className="breadcrumb__main">
              <div className="breadcrumb__inner">
                <div className="breadcrumb__icon">
                  <i className="flaticon-home"></i>
                </div>
                <div className="breadcrumb__menu">
                  <nav>
                    <ul>
                      <li>
                        <span>
                          <Link href="/dashboard"><a>Home</a></Link>
                        </span>
                      </li>
                      <li className="active">
                        <span>Event Calendar</span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-6">
            <CalendarComponent />
          </div>
          <div className="col-xxl-6 col-xl-6">
            <MapSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default WrapCalender;
