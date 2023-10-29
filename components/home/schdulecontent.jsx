import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

const SmoothScrollableContent = ({ schedules }) => {
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
    <div ref={scrollContainerRef} className="scroll-w-1 card__scroll">
      <div className="card__inner">
        <div className="card-body">
          {schedules &&
            schedules.length > 0 &&
            schedules.map((schedule,index) => (
              <div key={index} className="news__item">
                <div className="news__item-inner">
                  <div className="news__thumb">
                    <Link legacyBehavior href={`/schdule-details/${schedule.id}`}>
                      <a>
                        <img src={schedule.userImg.src} alt="image not found" />
                      </a>
                    </Link>
                  </div>
                  <div className="news__content">
                    <h4 className="news__title">
                      <Link legacyBehavior href={`/schdule-details/${schedule.id}`}>
                        <a>{schedule.title}</a>
                      </Link>
                    </h4>
                    <div className="news__meta">
                      <div className="news__meta-status">
                        <span>
                          <i className={schedule.usericon}></i>
                        </span>
                        <span>{schedule.name}</span>
                      </div>
                      <div className="news__meta-status">
                        <span>
                          <i className={schedule.timeIcon}></i>
                        </span>
                        <span>{schedule.time}</span>
                      </div>
                      <div className="news__meta-status">
                        <span>
                          <i className={schedule.addressIcon}></i>
                        </span>
                        <span>{schedule.address}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SmoothScrollableContent;
