import Link from "next/link";
import React from "react";
import CardHeaderDropdown from "../home/cardheaderdropdown";
import BreadcamMenu from "../common/breadcamMenu";
import envetList from "../../data/_eventlistdata";

const DynamicProfileContent = ({ speaker }) => {
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
                <BreadcamMenu title="Profile" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12">
            <div className="profile__area">
              <div className="body__card-wrapper mb-20">
                <div className="card__header-top">
                  <div className="card__title-inner">
                    <h4 className="event__information-title">
                      Profile Information
                    </h4>
                  </div>
                  <CardHeaderDropdown />
                </div>
                <div className="profile__main-wrapper mt-35">
                  <div className="row">
                    <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
                      <div className="profile__left">
                        <div className="padding__left-inner p-relative">
                          <div className="profile__thumb mb-45">
                            <img
                              src={speaker.thubnail.src}
                              alt="image not found"
                            />
                          </div>
                          <div className="profile__user">
                            <ul>
                              <li>
                                <div className="profile__user-item">
                                  <div className="profile__user-tiitle">
                                    <span>First Name:</span>
                                  </div>
                                  <div className="profile__user-info">
                                    <span> {speaker.title} </span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="profile__user-item">
                                  <div className="profile__user-tiitle">
                                    <span>Email Address:</span>
                                  </div>
                                  <div className="profile__user-info">
                                    <span>info@email.com</span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="profile__user-item">
                                  <div className="profile__user-tiitle">
                                    <span>Phone Number:</span>
                                  </div>
                                  <div className="profile__user-info">
                                    <span>+91 0365 2369 02</span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="profile__user-item">
                                  <div className="profile__user-tiitle">
                                    <span>Gendar:</span>
                                  </div>
                                  <div className="profile__user-info">
                                    <span>Male</span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="profile__user-item">
                                  <div className="profile__user-tiitle">
                                    <span>Language:</span>
                                  </div>
                                  <div className="profile__user-info">
                                    <span>English</span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="profile__user-item">
                                  <div className="profile__user-tiitle">
                                    <span>Address:</span>
                                  </div>
                                  <div className="profile__user-info">
                                    <span>Srednja ulica 54, Čabar 83565</span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
                      <div className="profile__right p-relative">
                        <Link href="/setting">
                          <div className="profile__edit">
                            <i className="flaticon-edit"></i>
                          </div>
                        </Link>
                        <div className="profile__about-info mb-30">
                          <span className="profile__title">About Me</span>
                          <div className="profile__text">
                            <p className="mb-25">
                              When referring to Lorem ipsum, different
                              expressions are used, namely fill text ,
                              fictitious text , blind text or placeholder text :
                              in short, its meaning can also be zero, but its
                              usefulness is so clear as to go through the
                              centuries and resist the ironic and modern
                              versions that came with the arrival of the web.
                            </p>
                            <p>
                              consectetur adipisci elit, sed eiusmod tempor
                              incidunt ut labore et dolore magna aliqua. Ut enim
                              ad minim veniam, quis nostrum exercitationem ullam
                              corporis suscipit laboriosam, nisi ut aliquid ex
                              ea commodi consequatur. Quis aute iure
                              reprehenderit in voluptate velit esse cillum
                              dolore eu fugiat nulla pariatur. Excepteur sint
                              obcaecat cupiditat non proident, sunt in culpa qui
                              officia deserunt mollit anim id est laborum.
                            </p>
                          </div>
                        </div>

                        <div className="body__card-wrapper p-0">
                          <span className="profile__title">
                            Upcoming Events
                          </span>
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
                                {envetList.length > 0 &&
                                  envetList.slice(0,5).map((data, index) => (
                                    <tr key={index}>
                                      <td>
                                        <div className="attendant__serial">
                                          <span>{data.idNo}</span>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="attendant__seminer">
                                          <span>
                                            <Link href="/event-details">
                                              <a>{data.envetName}</a>
                                            </Link>
                                          </span>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="attendant__speakers">
                                          <div className="attendant__speakers-thumb">
                                            <img
                                              src="/assets/img/meta/01.png"
                                              alt="image not found"
                                            />
                                            <img
                                              src="/assets/img/meta/02.png"
                                              alt="image not found"
                                            />
                                            <img
                                              src="/assets/img/meta/03.png"
                                              alt="image not found"
                                            />
                                            <img
                                              src="/assets/img/meta/04.png"
                                              alt="image not found"
                                            />
                                            <div className="attendant__count-inner">
                                              <span className="attendant__meta-count">
                                                02+
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="attendant__time">
                                          <span>{data.time}</span>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="attendant__date">
                                          <span>{data.date}</span>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="attendant__location">
                                          <span>{data.location}</span>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="attendant__action">
                                          <CardHeaderDropdown />
                                        </div>
                                      </td>
                                    </tr>
                                  ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
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

export default DynamicProfileContent;
