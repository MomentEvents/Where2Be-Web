import React from "react";
import speakerData from "../../data/speakercontentdata/speakerdata";
import SpeakerCard from "./speakerCard";
import Breadcamtab from "../common/breadCamTab";
import BreadcamMenu from "../common/breadcamMenu";

const WrapSpeakerContent = ({ handleopenModal }) => {
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
                <BreadcamMenu title="Speaker List" />
              </div>
              <Breadcamtab />
              <div className="breadcrum__button">
                <button
                  onClick={handleopenModal}
                  className="breadcrum__btn speaker__popup-active"
                >
                  Add Speaker<i className="fa-regular fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="speaker__area pb-60">
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
                  <SpeakerCard speakerData={speakerData} />

                  <div className="col-xxl-12">
                    <div className="pagination mt-30 d-flex justify-content-center">
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
                  <SpeakerCard speakerData={speakerData} />

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
                  <SpeakerCard speakerData={speakerData} />

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

export default WrapSpeakerContent;
