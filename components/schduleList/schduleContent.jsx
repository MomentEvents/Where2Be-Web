import Link from "next/link";
import React from "react";
import pageOne from "../../data/schduleContentData/pageOne";
import SchduleCard from "./schudelCard";
import BreadcamMenu from "../common/breadcamMenu";

const WrapSchduleContent = () => {
    
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
                <BreadcamMenu title="Schedule List"/> 
              </div>
              <div className="breadcrumb__tab">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="day-tab-1"
                      data-bs-toggle="tab"
                      data-bs-target="#day-tab-1-pane"
                      type="button"
                      role="tab"
                      aria-controls="day-tab-1-pane"
                      aria-selected="true"
                    >
                      day one
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="day-tab-2"
                      data-bs-toggle="tab"
                      data-bs-target="#day-tab-2-pane"
                      type="button"
                      role="tab"
                      aria-controls="day-tab-2-pane"
                      aria-selected="false"
                    >
                      day two
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="day-tab-3"
                      data-bs-toggle="tab"
                      data-bs-target="#day-tab-3-pane"
                      type="button"
                      role="tab"
                      aria-controls="day-tab-3-pane"
                      aria-selected="false"
                    >
                      day three
                    </button>
                  </li>
                </ul>
              </div>
              <div className="breadcrum__button">
                <Link href="/create-event">
                  <a className="breadcrum__btn">
                    Create Event
                    <i className="fa-regular fa-plus"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="schedule__list-area pb-60">
          <div className="schedule__content">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="day-tab-1-pane"
                role="tabpanel"
                aria-labelledby="day-tab-1"
                tabIndex="0"
              >
                <div className="row">
                 <SchduleCard pageOne={pageOne}/>
                  <div className="col-xxl-12">
                    <div className="pagination mt-40 d-flex justify-content-center">
                      <nav>
                        <ul>
                          <li>
                            <a href="#">01</a>
                          </li>
                          <li>
                            <span className="current">02</span>
                          </li>
                          <li>
                            <a href="#">03</a>
                          </li>
                          <li className="next">
                            <a href="#">
                              <i className="fa-light fa-arrow-right-long"></i>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="day-tab-2-pane"
                role="tabpanel"
                aria-labelledby="day-tab-2"
                tabIndex="0"
              >
                <div className="row">
                <SchduleCard pageOne={pageOne}/>
                  <div className="col-xxl-12">
                    <div className="pagination mt-40 d-flex justify-content-center">
                      <nav>
                        <ul>
                          <li>
                            <a href="#">01</a>
                          </li>
                          <li>
                            <span className="current">02</span>
                          </li>
                          <li>
                            <a href="#">03</a>
                          </li>
                          <li className="next">
                            <a href="#">
                              <i className="fa-light fa-arrow-right-long"></i>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="day-tab-3-pane"
                role="tabpanel"
                aria-labelledby="day-tab-3"
                tabIndex="0"
              >
                <div className="row">
                <SchduleCard pageOne={pageOne}/>
                  <div className="col-xxl-12">
                    <div className="pagination mt-40 d-flex justify-content-center">
                      <nav>
                        <ul>
                          <li>
                            <a href="#">01</a>
                          </li>
                          <li>
                            <span className="current">02</span>
                          </li>
                          <li>
                            <a href="#">03</a>
                          </li>
                          <li className="next">
                            <a href="#">
                              <i className="fa-light fa-arrow-right-long"></i>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WrapSchduleContent;
