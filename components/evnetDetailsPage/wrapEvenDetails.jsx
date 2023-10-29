import React, { useState } from "react";
import CardHeaderDropdown from "../home/cardheaderdropdown";
import authorthumb from "../../public/assets/img/meta/01.png";
import eventDetails from "../../public/assets/img/event/event-details-2.jpg";
import thubm1 from "../../public/assets/img/meta/chatbox/chat2.png";
import thubm2 from "../../public/assets/img/meta/chatbox/chat-4.png";
import thubm3 from "../../public/assets/img/meta/chatbox/chat-7.png";
import ModalVideo from "react-modal-video";
import CheckListIcon from "../../utils/SVG/checkListIcon";
import BreadcamMenu from "../common/breadcamMenu";
import Link from "next/link";
const WrapEvenDetailsContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => setIsOpen(!isOpen);

  const lernTopics = [
    {
      id: 1,
      topics: "Basic Programming",
    },
    {
      id: 2,
      topics: "Wireframe",
    },
    {
      id: 3,
      topics: "Create a Website",
    },
    {
      id: 4,
      topics: "User Interface Design",
    },
    {
      id: 5,
      topics: "Basic HTML & CSS",
    },
    {
      id: 6,
      topics: "Create Responsive Website",
    },
  ];

  const startIcons = [
    {
      id: 7,
      icon: "fa-solid fa-star",
    },
    {
      id: 8,
      icon: "fa-solid fa-star",
    },
    {
      id: 9,
      icon: "fa-solid fa-star",
    },
    {
      id: 10,
      icon: "fa-solid fa-star",
    },
  ];

  //   review items

  const reviewItems = [
    {
      id: 11,
      thumbnail: thubm1,
      className: "review__item mt-35",
      name: "David Warner",
      reviewTime: "23 Days Ago",
      reviwContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolor modi quos commodi quam facere, quas tempore eius ab neque tempora nihil culpa voluptatem nesciunt a amet deserunt asperiores ea consequuntur sequi consequatur. Alias, quis.",
    },
    {
      id: 12,
      thumbnail: thubm2,
      className: "review__item mt-40",
      name: "David Warner",
      reviewTime: "1 Month Ago",
      reviwContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolor modi quos commodi quam facere, quas tempore eius ab neque tempora nihil culpa voluptatem nesciunt a amet deserunt asperiores ea consequuntur sequi consequatur. Alias, quis.",
    },
    {
      id: 13,
      thumbnail: thubm3,
      className: "review__item mt-40",
      name: "David Warner",
      reviewTime: "2 Month Agoo",
      reviwContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolor modi quos commodi quam facere, quas tempore eius ab neque tempora nihil culpa voluptatem nesciunt a amet deserunt asperiores ea consequuntur sequi consequatur. Alias, quis.",
    },
  ];

  return (
    <>
      <div className="body__overlay"></div>
      <div className="app__slide-wrapper">
        <div className="row">
          <div className="col-xl-12">
            <div className="breadcrumb__wrapper mb-35">
              <div className="breadcrumb__inner">
                <div className="breadcrumb__icon">
                  <i className="flaticon-home"></i>
                </div>
                <BreadcamMenu title="event details" />
              </div>
            </div>
          </div>
        </div>
        <div className="event__details-area">
          <div className="row">
            <div className="col-xxl-7 col-xl-6">
              <div className="event__details-left">
                <div className="body__card-wrapper mb-20">
                  <div className="card__header-top">
                    <div className="card__title-inner">
                      <h4 className="event__information-title">
                        Event news and updates
                      </h4>
                    </div>
                     
                  </div>
                  <div className="review__main-wrapper pt-25">
                    <div className="review__meta mb-25">
                      <ul>
                        <li>
                          <span>5.0</span>
                          {startIcons.map((icon, index) => (
                            <i key={index} className={icon.icon}></i>
                          ))}
                        </li>
                        <li>Review (1k)</li>
                        <li>10k Attendant</li>
                      </ul>
                    </div>
                    <div className="review__author-meta mb-15">
                      <div className="review__author-thumb">
                        <img src={authorthumb.src} alt="image not found" />
                      </div>
                      <div className="review__author-name">
                        <h4>David Warner</h4>
                      </div>
                    </div>
                    <div className="review__tab">
                      <nav>
                        <div
                          className="nav nav-tabs"
                          id="nav-tab"
                          role="tablist"
                        >
                          <button
                            className="nav-link active"
                            id="nav-home-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-home"
                            type="button"
                            role="tab"
                            aria-controls="nav-home"
                            aria-selected="true"
                          >
                            about
                          </button>
                          <button
                            className="nav-link"
                            id="nav-profile-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-profile"
                            type="button"
                            role="tab"
                            aria-controls="nav-profile"
                            aria-selected="false"
                          >
                            review
                          </button>
                        </div>
                      </nav>
                      <div className="tab-content" id="nav-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="nav-home"
                          role="tabpanel"
                          aria-labelledby="nav-home-tab"
                          tabIndex="0"
                        >
                          <div className="about__event-thumb w-img mt-40">
                            <img src={eventDetails.src} alt="image not found" />
                          </div>
                          <div className="about__content mt-30">
                            <h4>About This Event</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Suscipit dolor modi quos commodi quam
                              facere, quas tempore eius ab neque tempora nihil
                              culpa voluptatem nesciunt a amet deserunt
                              asperiores ea consequuntur sequi consequatur.
                              Alias, quis.
                            </p>
                          </div>
                          <div className="about__content mt-30">
                            <h4>Event’s Objectives</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Aliquam mollitia autem numquam obcaecati
                              ullam at earum? Mollitia deleniti quia odit eius,
                              ratione omnis, asperiores, ex dolores voluptatum
                              itaque sint numquam.
                            </p>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="nav-profile"
                          role="tabpanel"
                          aria-labelledby="nav-profile-tab"
                          tabIndex="0"
                        >
                          {/* review item loop */}

                          {reviewItems.map((review, index) => (
                            <div key={index} className={review.className}>
                              <div className="review__item-inner">
                                <div className="review__item-thumb">
                                  <img
                                    src={review.thumbnail.src}
                                    alt="image not found"
                                  />
                                </div>
                                <div className="review__item-content">
                                  <h4> {review.name} </h4>
                                  <ul>
                                    <li>
                                      <span>5.0</span>
                                      {startIcons.map((icon, index) => (
                                        <i
                                          key={index}
                                          className={icon.icon}
                                        ></i>
                                      ))}
                                    </li>
                                    <li> {review.reviewTime} </li>
                                  </ul>
                                </div>
                              </div>
                              <p>{review.reviwContent}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* right side content */}

            <div className="col-xxl-5 col-xl-6">
              <div className="event__details-right">
                <div className="body__card-wrapper mb-20">
                  <div className="review__demo-wrapper">
                    <div className="review__demo-thumb w-img mb-25">
                      <img
                        src="/assets/img/event/event-details.jpg"
                        alt="image not found"
                      />
                      <span className="review__play-btn">
                        <button
                          type="button"
                          className="video__play-btn popup-video"
                          onClick={() => {
                            openVideoModal();
                          }}
                        >
                          <i className="fa-solid fa-play"></i>PLAY TRAILER
                        </button>
                      </span>
                    </div>
                  </div>
                  <div className="review__learn">
                    <h4>What will you learn:</h4>
                    <ul>
                      {lernTopics.map((topic, index) => (
                        <li key={index}>
                          <span>
                            <CheckListIcon />
                          </span>
                          <span> {topic.topics} </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="body__card-wrapper mb-20">
                  <div className="event__meta-time">
                    <ul>
                      <li>
                        <span> Date : </span>
                        January 1, 2024 - January 1, 2025
                      </li>
                      <li>
                        <span>Time :</span>
                        3:00 pm - 6:00 pm (UTC)
                      </li>
                      <li>
                        <span>Reg. Deadline : </span>
                        June 1, 2023
                      </li>
                      <li>
                        <span>Venue : </span>
                        Alaska
                      </li>
                    </ul>
                    <div className="ticket__purchase-btn mt-30 text-center">
                      <Link legacyBehavior href="/pricing">
                        <a className="fill__btn">
                          BUY TICKETS{" "}
                          <i className="fa-regular fa-angle-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="cRXm1p-CNyk"
        onClose={() => {
          openVideoModal();
        }}
      />
    </>
  );
};

export default WrapEvenDetailsContent;
