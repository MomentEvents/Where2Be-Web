import Link from "next/link";
import React from "react";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import TitleUnderLineIcon from "../../../utils/SVG/titleUnderLineIcon";
const About = ({pb}) => {
  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => setIsOpen(!isOpen);
  return (
    <>
      <section id="homeabout" className={`about__area p-relative pt-150 dark_light_class ${pb}`}>
        <div className="about__shape-1">
          <img src="/assets/img/shape/about-1.png" alt="image not found" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="about__content-wrapper mb-60">
                <div className="section__title-wrapper mb-80">
                  <span className="section__back-title">A</span>
                  <span className="section__subtitle">ABOUT THIS EVENT</span>
                  <h2 className="section__title">
                    EXPERIENCE A TRUE DIGITAL <span className="text__highlight">CONFERENCE<TitleUnderLineIcon/></span>
                  </h2>
                </div>
                <div className="about__content">
                  <div className="about__text">
                    <h4>
                      How you transform your business as technology, consumer
                      habits industry dynamic
                    </h4>
                    <p className="mb-30">
                      Velit auctor aliquet. Aenean sollicitudin, lorem quis
                      bibendum auctor, nisi elit consequat ipsum, nec sagittis
                      sem nibh.
                    </p>
                    <p>
                      Lorem ipsum proin gravida nibh vel velit auctor aliquet.
                      Aeneansollicitudin, lorem quis bibendum auctonisi elit
                      consequat ipsum nec sagittis sem nibh id elit. Duis sed
                      odio sit amet nibh vulputate cursusa sit amet mauris.
                      Morbi accumsan ipsum velit.” Nam nec tellus a odio
                      tincidunt.
                    </p>
                  </div>
                  <div className="about__location-info mb-80">
                    <div className="about__location-inner">
                      <div className="about__location-icon">
                        <a href="#">
                          <i className="fa-solid fa-location-dot"></i>
                        </a>
                      </div>
                      <div className="about__location-address">
                        <h5>WHEN AND WHERE</h5>
                        <span>
                          November 9–10 <br />
                          The Midway SF, Zoom
                        </span>
                      </div>
                    </div>
                    <div className="pluse__status">
                      <span className="dot"></span>
                      <span className="text">Online</span>
                    </div>
                  </div>
                </div>
                <Link href="/event-list-two">
                  <a className="fill__btn">
                    Join Now<i className="fa-regular fa-angle-right"></i>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="about__thumb-wrapper mb-60 p-relative">
                <div className="about__thumb-1 text-end w-img">
                  <img src="/assets/img/about/img1.jpg" alt="image not found" />
                  <div className="panel wow"></div>
                </div>
                <div className="about__thumb-2 w-img">
                  <img src="/assets/img/about/img2.jpg" alt="image not found" />
                  <div className="panel wow"></div>
                </div>

                <span className="about__play-btn">
                  <button type="button"
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
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="2wuEOEFGSF4"
        onClose={() => {
          openVideoModal();
        }}
      />
    </>
  );
};

export default About;
