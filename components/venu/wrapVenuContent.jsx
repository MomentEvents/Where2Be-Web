import React from "react";
import venus from "../../data/_venuData";
import BreadcamMenu from "../common/breadcamMenu";

const WrapVenuContent = () => {
  return (
    <>
      <div className="body__overlay"></div>
      <div className="app__slide-wrapper">
        <div className="breadcrumb__area">
          <div className="breadcrumb__wrapper mb-35">
            <div className="breadcrumb__main">
              <div className="breadcrumb__inner">
                <div className="breadcrumb__icon">
                  <i className="flaticon-home"></i>
                </div>
                <BreadcamMenu title="Event Venue" />
              </div>
            </div>
          </div>
        </div>
        <div className="event__venue-area">
          <div className="row">
            {venus.length > 0 &&
              venus.map((data, index) => (
                <div
                  key={index}
                  className="col-xxl-4 col-xl-4 col-lg-6 col-md-6"
                >
                  <div className="event__venue-card mb-20">
                    <div className="event__venue-inner">
                      <div className="event__venue-content">
                        <div className="event__venue-meta">
                          <div className="news__meta-status">
                            <span>
                              <i className="flaticon-calendar-1"></i>
                            </span>
                            <span>{data.data}</span>
                          </div>
                          <div className="news__meta-status">
                            <span>
                              <i className="flaticon-clock"></i>
                            </span>
                            <span>{data.time}</span>
                          </div>
                        </div>
                        <h4 className="event__venue-title"> {data.title} </h4>
                        <p>{data.subTitle}</p>
                      </div>
                      <div className="event__venue-thumb">
                        <a href="#">
                          <img src={data.thubnail.src} alt="image not found" />
                        </a>
                        <div className="event__tag-post">
                          <div className="event__tag-item">
                            <span>
                              <a href="#">{data.overlytext1}</a>
                            </span>
                          </div>
                          <div className="event__tag-item">
                            <span>
                              <a href="#">{data.overlytext2}</a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WrapVenuContent;
