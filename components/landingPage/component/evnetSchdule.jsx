import React from "react";
import UnderTitlearrow from "../../../utils/SVG/underTitlearrow";
import Router, { useRouter } from "next/router";

const EventSchdule = () => {
  const router = useRouter()
  return (
    <>
      <section
        id="homeschedule"
        className="event__schedule-area dark_light_class pt-185 pb-150"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-7 col-xl-7 col-lg-6">
              <div className="section__title-wrapper is-left mb-110">
                <span className="section__back-title">S</span>
                <span className="section__subtitle">SCHEDULE OF EVENT</span>
                <h2 className="section__title">
                  Conference <span className="text__highlight"> Schedule<UnderTitlearrow />
                  </span>
                </h2>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-6">
              <div className="accordion__tab">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link active"
                      id="nav-day-one-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-day-one"
                      type="button"
                      role="tab"
                      aria-controls="nav-day-one"
                      aria-selected="true"
                    >
                      day one
                    </button>
                    <button
                      className="nav-link"
                      id="nav-day-tow-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-day-tow"
                      type="button"
                      role="tab"
                      aria-controls="nav-day-tow"
                      aria-selected="false"
                    >
                      day two
                    </button>
                    <button
                      className="nav-link"
                      id="nav-day-three-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-day-three"
                      type="button"
                      role="tab"
                      aria-controls="nav-day-three"
                      aria-selected="false"
                    >
                      day three
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="schedule__accordion">
                <div className="tab-content" id="nav-tabContent">
                  {/* according 1st data */}
                  <div
                    className="tab-pane fade show active"
                    id="nav-day-one"
                    role="tabpanel"
                    aria-labelledby="nav-day-one-tab"
                    tabIndex="0"
                  >
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <span
                            className="accordion-button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
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
                                    src="/assets/img/accordion/meta-02.png"
                                    alt="image not found"
                                  />
                                </span>
                                <span className="accordion__meta-contet">
                                  <span className="title">Fredric Martin</span>
                                  <span className="info">Digital Marketer</span>
                                </span>
                              </span>
                              <span className="accordion__title_inner accordion-border">
                                <span className="accordion__title" onClick={() => Router.push('/event-details-two')}>
                                  BITPA Conference Dhaka Meet up 2023
                                </span>
                              </span>
                            </span>
                          </span>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
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
                                <span className="info"><i className="fa-light fa-clock"></i> 3:00PM-4:30PM</span>
                                <span>
                                  <i className="flaticon-calendar"></i>
                                  November 09
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
                                    src="/assets/img/accordion/meta-01.png"
                                    alt="image not found"
                                  />
                                </span>
                                <span className="accordion__meta-contet">
                                  <span className="title">Betty D. Lucas</span>
                                  <span className="info">Network Expert</span>
                                </span>
                              </span>
                              <span className="accordion__title_inner accordion-border">
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
                                    src="/assets/img/accordion/meta-03.png"
                                    alt="image not found"
                                  />
                                </span>
                                <span className="accordion__meta-contet">
                                  <span className="title">Drew P. Bad</span>
                                  <span className="info">
                                    Technology Specialist
                                  </span>
                                </span>
                              </span>
                              <span className="accordion__title_inner accordion-border">
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
                        <h2 className="accordion-header" id="headingFour">
                          <span
                            className="accordion-button collapsed collapseFour"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            <span className="accordion__heading">
                              <span className="accordion__meta accordion__meta-field">
                                <span className="accordion__meta-contet">
                                  <span className="accordion__meta-contet-wrap">
                                    <span className="title">$85</span>
                                    <button type="button" onClick={() => Router.push('/pricing')} className="accordion__meta-contet-url">Get Ticket Now</button>
                                  </span>
                                </span>
                              </span>
                              <span className="accordion__meta accordion-border">
                                <span className="accordion__meta-thumb">
                                  <img
                                    src="/assets/img/accordion/meta-03.png"
                                    alt="image not found"
                                  />
                                </span>
                                <span className="accordion__meta-contet">
                                  <span className="title">Drew P. Bad</span>
                                  <span className="info">
                                    Technology Specialist
                                  </span>
                                </span>
                              </span>
                              <span className="accordion__title_inner accordion-border">
                                <span className="accordion__title" onClick={() => Router.push('/event-details-two')}>
                                  Cyber Security Conference Meet up Japan - 2023
                                </span>
                              </span>
                            </span>
                          </span>
                        </h2>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse collapseFour"
                          aria-labelledby="headingFour"
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
                                <span className="info"><i className="fa-light fa-clock"></i> 3:00PM-5:30PM</span>
                                <span>
                                  <i className="flaticon-calendar"></i>
                                  November 09
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
                  {/* end according 1st data */}
                  <div
                    className="tab-pane fade"
                    id="nav-day-tow"
                    role="tabpanel"
                    aria-labelledby="nav-day-tow-tab"
                    tabIndex="0"
                  >
                    <div className="accordion" id="accordionExample-p">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne-p">
                          <span
                            className="accordion-button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne-p"
                            aria-expanded="true"
                            aria-controls="collapseOne-p"
                          >
                            <span className="accordion__heading">
                              <span className="accordion__meta accordion__meta-field">
                                <span className="accordion__meta-contet">
                                  <span className="accordion__meta-contet-wrap">
                                    <span className="title">$95</span>
                                    <button type="button" onClick={() => Router.push('/pricing')} className="accordion__meta-contet-url">Get Ticket Now</button>
                                  </span>
                                </span>
                              </span>
                              <span className="accordion__meta accordion-border">
                                <span className="accordion__meta-thumb">
                                  <img
                                    src="/assets/img/accordion/meta-02.png"
                                    alt="image not found"
                                  />
                                </span>
                                <span className="accordion__meta-contet">
                                  <span className="title">Fredric Martin</span>
                                  <span className="info">Digital Marketer</span>
                                </span>
                              </span>
                              <span className="accordion__title_inner accordion-border">
                                <span className="accordion__title" onClick={() => Router.push('/event-details-two')}>
                                  BITPA Conference Dhaka Meet up 2023
                                </span>
                              </span>
                            </span>
                          </span>
                        </h2>
                        <div
                          id="collapseOne-p"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne-p"
                          data-bs-parent="#accordionExample-p"
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
                                <span className="info"><i className="fa-light fa-clock"></i> 2:00PM-4:30PM</span>
                                <span>
                                  <i className="flaticon-calendar"></i>
                                  November 10
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
                        <h2 className="accordion-header" id="headingTwo-p">
                          <span
                            className="accordion-button collapsed collapseTwo"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo-p"
                            aria-expanded="false"
                            aria-controls="collapseTwo-p"
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
                                    src="/assets/img/accordion/meta-01.png"
                                    alt="image not found"
                                  />
                                </span>
                                <span className="accordion__meta-contet">
                                  <span className="title">Betty D. Lucas</span>
                                  <span className="info">Network Expert</span>
                                </span>
                              </span>
                              <span className="accordion__title_inner accordion-border" onClick={() => Router.push('/event-details-two')}>
                                <span className="accordion__title">
                                  Business Conference Tokyo Meet up - 2023
                                </span>
                              </span>
                            </span>
                          </span>
                        </h2>
                        <div
                          id="collapseTwo-p"
                          className="accordion-collapse collapse collapseTwo"
                          aria-labelledby="headingTwo-p"
                          data-bs-parent="#accordionExample-p"
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
                                <span className="info"><i className="fa-light fa-clock"></i> 6:00PM-7:30PM</span>
                                <span>
                                  <i className="flaticon-calendar"></i>
                                  November 10
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
                        <h2 className="accordion-header" id="headingThree-p">
                          <span
                            className="accordion-button collapsed collapseThree"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree-p"
                            aria-expanded="false"
                            aria-controls="collapseThree-p"
                          >
                            <span className="accordion__heading">
                              <span className="accordion__meta accordion__meta-field">
                                <span className="accordion__meta-contet">
                                  <span className="accordion__meta-contet-wrap">
                                    <span className="title">$55</span>
                                    <button type="button" onClick={() => Router.push('/pricing')} className="accordion__meta-contet-url">Get Ticket Now</button>
                                  </span>
                                </span>
                              </span>
                              <span className="accordion__meta accordion-border">
                                <span className="accordion__meta-thumb">
                                  <img
                                    src="/assets/img/accordion/meta-03.png"
                                    alt="image not found"
                                  />
                                </span>
                                <span className="accordion__meta-contet">
                                  <span className="title">Drew P. Bad</span>
                                  <span className="info">
                                    Technology Specialist
                                  </span>
                                </span>
                              </span>
                              <span className="accordion__title_inner accordion-border" onClick={() => Router.push('/event-details-two')}>
                                <span className="accordion__title">
                                  Cyber Security Conference Meet up Japan - 2023
                                </span>
                              </span>
                            </span>
                          </span>
                        </h2>
                        <div
                          id="collapseThree-p"
                          className="accordion-collapse collapse collapseThree"
                          aria-labelledby="headingThree-p"
                          data-bs-parent="#accordionExample-p"
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
                                <span className="info"><i className="fa-light fa-clock"></i> 5:00PM-6:30PM</span>
                                <span>
                                  <i className="flaticon-calendar"></i>
                                  November 10
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
                        <h2 className="accordion-header" id="headingFour-p">
                          <span
                            className="accordion-button collapsed collapseFour"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour-p"
                            aria-expanded="false"
                            aria-controls="collapseFour-p"
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
                                    src="/assets/img/accordion/meta-03.png"
                                    alt="image not found"
                                  />
                                </span>
                                <span className="accordion__meta-contet">
                                  <span className="title">Drew P. Bad</span>
                                  <span className="info">
                                    Technology Specialist
                                  </span>
                                </span>
                              </span>
                              <span className="accordion__title_inner accordion-border">
                                <span className="accordion__title" onClick={() => Router.push('/event-details-two')}>
                                  Cyber Security Conference Meet up Japan - 2023
                                </span>
                              </span>
                            </span>
                          </span>
                        </h2>
                        <div
                          id="collapseFour-p"
                          className="accordion-collapse collapse collapseFour"
                          aria-labelledby="headingFour-p"
                          data-bs-parent="#accordionExample-p"
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
                                  November 10
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
                  <div
                    className="tab-pane fade"
                    id="nav-day-three"
                    role="tabpanel"
                    aria-labelledby="nav-day-three-tab"
                    tabIndex="0"
                  >
                    <div className="accordion" id="accordionExample-c">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne-c">
                          <span
                            className="accordion-button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne-c"
                            aria-expanded="true"
                            aria-controls="collapseOne-c"
                          >
                            <span className="accordion__heading">
                              <span className="accordion__meta accordion__meta-field">
                                <span className="accordion__meta-contet">
                                  <span className="accordion__meta-contet-wrap">
                                    <span className="title">$85</span>
                                    <button type="button" onClick={() => Router.push('/pricing')} className="accordion__meta-contet-url">Get Ticket Now</button>
                                  </span>
                                </span>
                              </span>
                              <span className="accordion__meta accordion-border">
                                <span className="accordion__meta-thumb">
                                  <img
                                    src="/assets/img/accordion/meta-02.png"
                                    alt="image not found"
                                  />
                                </span>
                                <span className="accordion__meta-contet">
                                  <span className="title">Fredric Martin</span>
                                  <span className="info">Digital Marketer</span>
                                </span>
                              </span>
                              <span className="accordion__title_inner accordion-border">
                                <span className="accordion__title" onClick={() => Router.push('/event-details-two')}>
                                  BITPA Conference Dhaka Meet up 2023
                                </span>
                              </span>
                            </span>
                          </span>
                        </h2>
                        <div
                          id="collapseOne-c"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne-c"
                          data-bs-parent="#accordionExample-c"
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
                                <span className="info"><i className="fa-light fa-clock"></i> 2:00PM-4:30PM</span>
                                <span>
                                  <i className="flaticon-calendar"></i>
                                  November 11
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
                        <h2 className="accordion-header" id="headingTwo-c">
                          <span
                            className="accordion-button collapsed collapseTwo"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo-c"
                            aria-expanded="false"
                            aria-controls="collapseTwo-c"
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
                                    src="/assets/img/accordion/meta-01.png"
                                    alt="image not found"
                                  />
                                </span>
                                <span className="accordion__meta-contet">
                                  <span className="title">Betty D. Lucas</span>
                                  <span className="info">Network Expert</span>
                                </span>
                              </span>
                              <span className="accordion__title_inner accordion-border">
                                <span className="accordion__title" onClick={() => Router.push('/event-details-two')}>
                                  Business Conference Tokyo Meet up - 2023
                                </span>
                              </span>
                            </span>
                          </span>
                        </h2>
                        <div
                          id="collapseTwo-c"
                          className="accordion-collapse collapse collapseTwo"
                          aria-labelledby="headingTwo-c"
                          data-bs-parent="#accordionExample-c"
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
                                <span className="info"><i className="fa-light fa-clock"></i> 3:00PM-4:30PM</span>
                                <span>
                                  <i className="flaticon-calendar"></i>
                                  November 11
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
                        <h2 className="accordion-header" id="headingThree-c">
                          <span
                            className="accordion-button collapsed collapseThree"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree-c"
                            aria-expanded="false"
                            aria-controls="collapseThree-c"
                          >
                            <span className="accordion__heading">
                              <span className="accordion__meta accordion__meta-field">
                                <span className="accordion__meta-contet">
                                  <span className="accordion__meta-contet-wrap">
                                    <span className="title">$95</span>
                                    <button type="button" onClick={() => Router.push('/pricing')} className="accordion__meta-contet-url">Get Ticket Now</button>
                                  </span>
                                </span>
                              </span>
                              <span className="accordion__meta accordion-border">
                                <span className="accordion__meta-thumb">
                                  <img
                                    src="/assets/img/accordion/meta-03.png"
                                    alt="image not found"
                                  />
                                </span>
                                <span className="accordion__meta-contet">
                                  <span className="title">Drew P. Bad</span>
                                  <span className="info">
                                    Technology Specialist
                                  </span>
                                </span>
                              </span>
                              <span className="accordion__title_inner accordion-border">
                                <span className="accordion__title" onClick={() => Router.push('/event-details-two')}>
                                  Cyber Security Conference Meet up Japan - 2023
                                </span>
                              </span>
                            </span>
                          </span>
                        </h2>
                        <div
                          id="collapseThree-c"
                          className="accordion-collapse collapse collapseThree"
                          aria-labelledby="headingThree-c"
                          data-bs-parent="#accordionExample-c"
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
                                <span className="info"><i className="fa-light fa-clock"></i> 5:00PM-7:30PM</span>
                                <span>
                                  <i className="flaticon-calendar"></i>
                                  November 11
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
                        <h2 className="accordion-header" id="headingFour-c">
                          <span
                            className="accordion-button collapsed collapseFour"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour-c"
                            aria-expanded="false"
                            aria-controls="collapseFour-c"
                          >
                            <span className="accordion__heading">
                              <span className="accordion__meta accordion__meta-field">
                                <span className="accordion__meta-contet">
                                  <span className="accordion__meta-contet-wrap">
                                    <span className="title">$55</span>
                                    <button type="button" onClick={() => Router.push('/pricing')} className="accordion__meta-contet-url">Get Ticket Now</button>
                                  </span>
                                </span>
                              </span>
                              <span className="accordion__meta accordion-border">
                                <span className="accordion__meta-thumb">
                                  <img
                                    src="/assets/img/accordion/meta-03.png"
                                    alt="image not found"
                                  />
                                </span>
                                <span className="accordion__meta-contet">
                                  <span className="title">Drew P. Bad</span>
                                  <span className="info">
                                    Technology Specialist
                                  </span>
                                </span>
                              </span>
                              <span className="accordion__title_inner accordion-border">
                                <span className="accordion__title" onClick={() => Router.push('/event-details-two')}>
                                  Cyber Security Conference Meet up Japan - 2023
                                </span>
                              </span>
                            </span>
                          </span>
                        </h2>
                        <div
                          id="collapseFour-c"
                          className="accordion-collapse collapse collapseFour"
                          aria-labelledby="headingFour-c"
                          data-bs-parent="#accordionExample-c"
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
                                <span className="info"><i className="fa-light fa-clock"></i> 2:00PM-4:30PM</span>
                                <span>
                                  <i className="flaticon-calendar"></i>
                                  November 11
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
      </section>
    </>
  );
};

export default EventSchdule;
