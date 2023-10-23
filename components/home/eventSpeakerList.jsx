import React, { useEffect, useRef } from "react";
import CardHeaderDropdown from "./cardheaderdropdown";
import speakerList from "../../data/dashboardData/_speakerList";
import Scrollbar from "smooth-scrollbar";
import Link from "next/link";
const EventSpeakerList = () => {
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
                  <i className="flaticon-speaker"></i>
                </div>
                <div className="card__header-title">
                  <h4>Event Speaker List</h4>
                </div>
              </div>
              <div className="card__header-right">
                <div className="card__btn">
                  <Link href="/speaker-list">view all Speaker</Link>
                </div>
                <CardHeaderDropdown />
              </div>
            </div>
          </div>

          <div ref={scrollContainerRef} className="scroll-w-3 card__scroll">
            <div className="card__inner">
              <div className="speaker__wrapper">
                {speakerList.length > 0 &&
                  speakerList.map((speaker, index) => (
                    <div key={index} className="speaker__item">
                      <div className="speaker__inner">
                        <div className="speaker__info">
                          <div className="speaker__thumb">
                            <Link href="/event-details">
                              <a>
                                <img
                                  src={speaker.thumbnail.src}
                                  style={{height:"100%", width:"100%"}}
                                  alt="image not found"
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="speaker__content">
                            <h5 className="speaker__title">
                              <Link href="/event-details">
                                <a>{speaker.speakerName}</a>
                              </Link>
                            </h5>
                            <span className="speaker__status">
                              {speaker.speakerTitle}
                            </span>
                          </div>
                        </div>
                        <div className="speaker__button">
                          <Link href="/event-details">
                            <a>
                              <i className="fa-regular fa-angle-right"></i>
                            </a>
                          </Link>
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

export default EventSpeakerList;
