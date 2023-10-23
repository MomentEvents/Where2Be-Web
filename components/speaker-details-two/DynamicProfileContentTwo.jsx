import Router, { useRouter } from "next/router";
import React from "react";

const DynamicProfileContentTwo = ({speaker}) => {
  const router = useRouter()
  return (
    <div className="profile__main-wrapper pt-150 pb-150">
      <div className="container">
      <div className="row">
        <div className="col-xxl-4 col-xl-4">
          <div className="profile__left profile__left--two">
            <div className="padding__left-inner p-relative">
              <div className="profile__thumb mb-45">
                <img src={speaker.thubnail.src} alt="image not found" />
              </div>
              <div className="profile__user">
                <ul>
                  <li>
                    <div className="profile__user-item">
                      <div className="profile__user-tiitle">
                        <span>First Name:</span>
                      </div>
                      <div className="profile__user-info">
                        <span>{speaker.title} </span>
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
        <div className="col-xxl-8 col-xl-8">
          <div className="profile__right p-relative">
            <button type="button">
              <div className="profile__edit">
                <i className="flaticon-edit"></i>
              </div>
            </button>
            <div className="profile__about-info mb-30">
              <span className="profile__title">About Me</span>
              <div className="profile__text">
                <p className="mb-25">
                  When referring to Lorem ipsum, different expressions are used,
                  namely fill text , fictitious text , blind text or placeholder
                  text : in short, its meaning can also be zero, but its
                  usefulness is so clear as to go through the centuries and
                  resist the ironic and modern versions that came with the
                  arrival of the web.
                </p>
                <p>
                  consectetur adipisci elit, sed eiusmod tempor incidunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur. Quis aute iure
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint obcaecat cupiditat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </p>
              </div>
            </div>

            <span className="profile__title">Upcoming Events</span>
            <div className="schedule__accordion schedule__accordion-two">
              <div
                    className="tab-pane fade show active"
                    id="nav-day-one"
                    role="tabpanel"
                    aria-labelledby="nav-day-one-tab"
                    tabIndex="0"
                  >
                    <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <span
                            className="accordion-button collapsed collapseThree"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            <span className="accordion__heading">
                              <span className="accordion__meta accordion__meta-field">
                                <span className="accordion__meta-contet">
                                  <span className="accordion__meta-contet-wrap">
                                    <span className="title">$75</span>
                                    <button type="button" onClick={() => Router.push('/pricing')} className="accordion__meta-contet-url">Get Ticket Now</button>
                                  </span>
                                </span>
                              </span>
                              <span className="accordion__meta accordion-border">
                                <span className="accordion__meta-thumb">
                                  <img
                                    src={speaker.thubnail.src}
                                    alt="image not found"
                                  />
                                </span>
                                <span className="accordion__meta-contet">
                                  <span className="title">{speaker.title}</span>
                                  <span className="info">
                                    Technology Specialist
                                  </span>
                                </span>
                              </span>
                              <span className="accordion__title_inner">
                                <span className="accordion__title" onClick={() => Router.push('/event-details-two')}>
                                  Cyber Security Conference Meet up Japan - 2023
                                </span>
                              </span>
                            </span>
                          </span>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse collapseThree"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <div className="accordiong__inner">
                              <div className="accordion__title-inner mb-25">
                                <p>
                                  Lorem ipsum, dolor sit amet consectetur
                                  adipisicing elit. Quisquam, nulla. Veritatis
                                  magnam esse laboriosam aliquam sunt voluptate
                                  sequi nesciunt officia, sint culpa! Numquam,
                                  soluta commodi. Ex laborum natus iste nihil?
                                </p>
                              </div>
                              <div className="accordion__thumb w-img">
                                <img
                                  src="/assets/img/accordion/schedule-thumb.jpg"
                                  alt="image not found"
                                />
                              </div>
                              <div className="accordiong__meta">
                                <span className="info"><i className="fa-light fa-clock"></i> 6:00PM-8:30PM</span>
                                <span>
                                  <i className="flaticon-calendar"></i>
                                  November 9
                                </span>
                                <span>
                                  <i className="flaticon-placeholder-1"></i>
                                  Sand diego, Canada
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <span
                            className="accordion-button collapsed collapseTwo"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <span className="accordion__heading">
                              <span className="accordion__meta accordion__meta-field">
                                <span className="accordion__meta-contet">
                                  <span className="accordion__meta-contet-wrap">
                                    <span className="title">$65</span>
                                    <button type="button" onClick={() => Router.push('/pricing')} className="accordion__meta-contet-url">Get Ticket Now</button>
                                  </span>
                                </span>
                              </span>
                              <span className="accordion__meta accordion-border">
                                <span className="accordion__meta-thumb">
                                  <img
                                    src={speaker.thubnail.src}
                                    alt="image not found"
                                  />
                                </span>
                                <span className="accordion__meta-contet">
                                  <span className="title">{speaker.title}</span>
                                  <span className="info">Network Expert</span>
                                </span>
                              </span>
                              <span className="accordion__title_inner">
                                <span className="accordion__title" onClick={() => Router.push('/event-details-two')}>
                                  Business Conference Tokyo Meet up - 2023
                                </span>
                              </span>
                            </span>
                          </span>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse collapseTwo"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <div className="accordiong__inner">
                              <div className="accordion__title-inner mb-25">
                                <p>
                                  Lorem ipsum, dolor sit amet consectetur
                                  adipisicing elit. Quisquam, nulla. Veritatis
                                  magnam esse laboriosam aliquam sunt voluptate
                                  sequi nesciunt officia, sint culpa! Numquam,
                                  soluta commodi. Ex laborum natus iste nihil?
                                </p>
                              </div>
                              <div className="accordion__thumb w-img">
                                <img
                                  src="/assets/img/accordion/schedule-thumb.jpg"
                                  alt="image not found"
                                />
                              </div>
                              <div className="accordiong__meta">
                                <span className="info"><i className="fa-light fa-clock"></i> 4:00PM-5:30PM</span>
                                <span>
                                  <i className="flaticon-calendar"></i>
                                  November 9
                                </span>
                                <span>
                                  <i className="flaticon-placeholder-1"></i>
                                  Sand diego, Canada
                                </span>
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
      </div>
    </div>
  );
};

export default DynamicProfileContentTwo;
