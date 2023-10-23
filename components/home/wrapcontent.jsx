import React from "react";
import overlay_img from "../../public/assets/img/bg/count-bg.png";
import months from "../../data/dashboardData/month";
import days from "../../data/dashboardData/days";
import years from "../../data/dashboardData/year";
import schedules from "../../data/dashboardData/schduleEvent";
import SmoothScrollableContent from "./schdulecontent";
import AreaChart from "./areaChart";
import CardHeaderDropdown from "./cardheaderdropdown";
import TicketSolds from "./ticketsolds";
import ToalSeats from "./totalsets";
import VisitebySorce from "./visitebySorce";
import CalenderSection from "./calenderSection";
import NotificationSection from "./notificationSection";
import EventSpeakerList from "./eventSpeakerList";
import RegisterUserList from "./registerUserList";
import NoticeandUpcomingEvent from "./noticeandUpcomingEvent";
import BreadcamMenu from "../common/breadcamMenu";

const WrapContent = () => {
  return (
    <>
      <div className="body__overlay"></div>
      <div className="app__slide-wrapper">
        <div className="row">
          <div className="col-xl-12">
            <div className="breadcrumb__wrapper mb-35">
              <div className="breadcrumb__inner">
                <div className="breadcrumb__icon">
                  <i className="flaticon-home"></i>
                </div>
                <BreadcamMenu title="Dashboard" />
              </div>
            </div>
          </div>
        </div>

        <div className="row g-20">
          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6">
            <div className="expovent__count-item mb-20">
              <div
                className="expovent__count-thumb include__bg transition-3"
                style={{ backgroundImage: `url(${overlay_img.src})` }}
              ></div>
              <div className="expovent__count-content">
                <h3 className="expovent__count-number">1250+</h3>
                <span className="expovent__count-text">Total Registration</span>
              </div>
              <div className="expovent__count-icon">
                <i className="flaticon-group"></i>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6">
            <div className="expovent__count-item mb-20">
              <div
                className="expovent__count-thumb include__bg transition-3"
                style={{ backgroundImage: `url(${overlay_img.src})` }}
              ></div>
              <div className="expovent__count-content">
                <h3 className="expovent__count-number">125+</h3>
                <span className="expovent__count-text">Total Speakers</span>
              </div>
              <div className="expovent__count-icon">
                <i className="flaticon-speaker"></i>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6">
            <div className="expovent__count-item mb-20">
              <div
                className="expovent__count-thumb include__bg transition-3"
                style={{ backgroundImage: `url(${overlay_img.src})` }}
              ></div>
              <div className="expovent__count-content">
                <h3 className="expovent__count-number">35</h3>
                <span className="expovent__count-text">New Events</span>
              </div>
              <div className="expovent__count-icon">
                <i className="flaticon-reminder"></i>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6">
            <div className="expovent__count-item mb-20">
              <div
                className="expovent__count-thumb include__bg transition-3"
                style={{ backgroundImage: `url(${overlay_img.src})` }}
              ></div>
              <div className="expovent__count-content">
                <h3 className="expovent__count-number">2560+</h3>
                <span className="expovent__count-text">Total Ticket Sold</span>
              </div>
              <div className="expovent__count-icon">
                <i className="flaticon-ticket-1"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-20">
          <div className="col-xxl-6 col-xl-6">
            <div className="card__wrapper pb-0">
              <div className="card__header">
                <div className="card__header-top">
                  <div className="card__title-inner">
                    <div className="card__header-icon">
                      <i className="flaticon-group"></i>
                    </div>
                    <div className="card__header-title">
                      <h4>Web Traffic</h4>
                    </div>
                  </div>
                  <div className="card__header-right">
                    <div className="card__header-calendar">
                      <form action="#">
                        <span>
                          <select name="month">
                            {months &&
                              months.length > 0 &&
                              months.map((month, index) => (
                                <option key={index} defaultValue={month.id}>
                                  {month.month}
                                </option>
                              ))}
                          </select>
                        </span>
                        <span>
                          <select name="day">
                            {days &&
                              days.length > 0 &&
                              days.map((day, index) => (
                                <option key={index} defaultValue={day.id}>
                                  {day.id}
                                </option>
                              ))}
                          </select>
                        </span>
                        <span>
                          <select name="year">
                            {years &&
                              years.length > 0 &&
                              years.map((year, index) => (
                                <option key={index} defaultValue={year.year}>
                                  {year.year}
                                </option>
                              ))}
                          </select>
                        </span>
                      </form>
                    </div>
                    <CardHeaderDropdown />
                  </div>
                </div>
                <div className="Card__line-chart">
                  <div id="lineChart">
                    <AreaChart />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-6 col-xl-6">
            <div className="card__wrapper">
              <div className="card__header">
                <div className="card__header-top">
                  <div className="card__title-inner">
                    <div className="card__header-icon">
                      <i className="flaticon-reminder"></i>
                    </div>
                    <div className="card__header-title">
                      <h4>Schedule Events</h4>
                    </div>
                  </div>
                  <CardHeaderDropdown />
                </div>
              </div>
              <SmoothScrollableContent schedules={schedules} />
            </div>
          </div>
        </div>
        <div className="row g-20">
          <TicketSolds />
          <ToalSeats />
          <VisitebySorce />
        </div>
        <div className="row g-20">
          <CalenderSection />
          <NotificationSection />
          <EventSpeakerList />
        </div>
        <RegisterUserList />
        <NoticeandUpcomingEvent />
      </div>
    </>
  );
};

export default WrapContent;
