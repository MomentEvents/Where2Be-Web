import React, { useEffect, useRef } from "react";
import CardHeaderDropdown from "./cardheaderdropdown";
import notices from "../../data/dashboardData/_notice";
import schedules from "../../data/dashboardData/schduleEvent";
import Scrollbar from "smooth-scrollbar";
import Link from "next/link";
import NoticeIcon from "../../utils/SVG/noticeIcon";

const NoticeandUpcomingEvent = () => {
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
      <div className="row">
        {/* notice area */}
        <div className="col-xxl-6 col-xl-6">
          <div className="card__wrapper">
            <div className="card__header">
              <div className="card__header-top">
                <div className="card__title-inner">
                  <div className="card__header-icon">
                    <NoticeIcon />
                  </div>
                  <div className="card__header-title">
                    <h4>Notice Board</h4>
                  </div>
                </div>
                <CardHeaderDropdown />
              </div>
            </div>
            <div className="notice__wrapper">
              {notices.length > 0 &&
                notices.map((notice,index) => (
                  <div key={index} className="notice__item">
                    <div className="notice__meta">
                      <div className="news__meta-status">
                        <span>
                          <i className="flaticon-user"></i>
                        </span>
                        <span> {notice.name} </span>
                      </div>
                      <div className="news__meta-status">
                        <span>
                          <i className="flaticon-clock"></i>
                        </span>
                        <span> {notice.time} </span>
                      </div>
                      <div className="news__meta-status">
                        <span>
                          <i className="flaticon-placeholder-1"></i>
                        </span>
                        <span> {notice.location} </span>
                      </div>
                    </div>
                    <div className="notice__title">
                      <p>{notice.content}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6">
          <div className="card__wrapper">
            <div className="card__header">
              <div className="card__header-top">
                <div className="card__title-inner">
                  <div className="card__header-icon">
                    <i className="flaticon-calendar-3"></i>
                  </div>
                  <div className="card__header-title">
                    <h4>Upcoming Events</h4>
                  </div>
                </div>
                <div className="card__header-right">
                  <div className="card__btn">
                    <Link href="/event-details">
                      <a>view all Event</a>
                    </Link>
                  </div>
                  <CardHeaderDropdown />
                </div>
              </div>
            </div>
            <div className="card-body">
              <div ref={scrollContainerRef} className="scroll-w-4 card__scroll">
                <div className="card__inner">
                  {schedules.length > 0 &&
                    schedules.map((event,index) => (
                      <div key={index} className="news__item">
                        <div className="news__item-inner">
                          <div className="news__thumb">
                            <Link href={`/event-details/${event.id}`}>
                              <a>
                                <img
                                  src={event.userImg.src}
                                  alt="image not found"
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="news__content">
                            <h4 className="news__title">
                              <Link href={`/event-details/${event.id}`}>
                                <a> {event.title} </a>
                              </Link>
                            </h4>
                            <div className="news__meta">
                              <div className="news__meta-status">
                                <span>
                                  <i className="flaticon-user"></i>
                                </span>
                                <span> {event.name} </span>
                              </div>
                              <div className="news__meta-status">
                                <span>
                                  <i className="flaticon-clock"></i>
                                </span>
                                <span> {event.time} </span>
                              </div>
                              <div className="news__meta-status">
                                <span>
                                  <i className="flaticon-placeholder-1"></i>
                                </span>
                                <span> {event.address} </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoticeandUpcomingEvent;
