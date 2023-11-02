import React from "react";
import Breadcamtab from "../common/breadCamTab";
import envetList from "../../data/_eventlistdata";
import SingleTableData from "./singleTableData";
import BreadcamMenu from "../common/breadcamMenu";

const WrapperEventList = ({ handleopenModal }) => {
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
                <BreadcamMenu title="Upcoming Event List" />
              </div>
              <Breadcamtab />
              <div className="breadcrum__button">
                <button
                  onClick={handleopenModal}
                  type="button"
                  className="breadcrum__btn event__popup-active"
                >
                  Create Event<i className="fa-regular fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="event__list-area pb-20">
          <div className="event__content-inner">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="day-tab-1-pane"
                role="tabpanel"
                aria-labelledby="day-tab-1"
                tabIndex="0"
              >
                <div className="body__card-wrapper">
                  <h4 className="event__information-title mb-25">
                    Event Information
                  </h4>
                  <div className="attendant__wrapper mb-35">
                    <table>
                      <thead>
                        <tr>
                          <th>ID No</th>
                          <th>Event Name</th>
                          <th>Speakers</th>
                          <th>Time</th>
                          <th>Date</th>
                          <th>Location</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <SingleTableData envetList={envetList} />
                      </tbody>
                    </table>
                  </div>
                  <div className="basic__pagination d-flex align-items-center justify-content-end">
                    <nav>
                      <ul>
                        <li>
                          <a href="#">1</a>
                        </li>
                        <li>
                          <span className="current">2</span>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-regular fa-arrow-right-long"></i>
                          </a>
                        </li>
                      </ul>
                    </nav>
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
                <div className="body__card-wrapper">
                  <h4 className="event__information-title mb-25">
                    Event Information
                  </h4>
                  <div className="attendant__wrapper mb-35">
                    <table>
                      <thead>
                        <tr>
                          <th>ID No</th>
                          <th>Event Name</th>
                          <th>Speakers</th>
                          <th>Time</th>
                          <th>Date</th>
                          <th>Location</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <SingleTableData envetList={envetList} />
                      </tbody>
                    </table>
                  </div>
                  <div className="basic__pagination d-flex align-items-center justify-content-end">
                    <nav>
                      <ul>
                        <li>
                          <a href="#">1</a>
                        </li>
                        <li>
                          <span className="current">2</span>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-regular fa-arrow-right-long"></i>
                          </a>
                        </li>
                      </ul>
                    </nav>
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
                <div className="body__card-wrapper">
                  <h4 className="event__information-title mb-25">
                    Event Information
                  </h4>
                  <div className="attendant__wrapper mb-35">
                    <table>
                      <thead>
                        <tr>
                          <th>ID No</th>
                          <th>Event Name</th>
                          <th>Speakers</th>
                          <th>Time</th>
                          <th>Date</th>
                          <th>Location</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <SingleTableData envetList={envetList} />
                      </tbody>
                    </table>
                  </div>
                  <div className="basic__pagination d-flex align-items-center justify-content-end">
                    <nav>
                      <ul>
                        <li>
                          <a href="#">1</a>
                        </li>
                        <li>
                          <span className="current">2</span>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-regular fa-arrow-right-long"></i>
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
    </>
  );
};

export default WrapperEventList;
