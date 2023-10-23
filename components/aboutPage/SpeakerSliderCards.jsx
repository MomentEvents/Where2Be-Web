import Link from "next/link";
import React from "react";

//swiper style
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

const SpeakerSliderCards = ({ speakerData }) => {
  return (
    <Swiper
      spaceBetween={30}
      loop={true}
      observeParents={true}
      observer={true}
      autoplay={{ delay: 3000 }} // Autoplay with a 3-second delay
      speed={3000} // Transition speed of 3 seconds
      breakpoints={{
        1200: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        },
      }}
    >
      {speakerData.length > 0 &&
        speakerData.map((speaker, index) => (
          <SwiperSlide key={index}>
            <div className="speaker__list-item p-0 mb-30">
              <div className="speaker__list-thumb">
                <Link href={`/speaker-details-two/${speaker.id}`}>
                  <a>
                    <img src={speaker.thubnail.src} alt="image not found" />
                  </a>
                </Link>
              </div>
              <div className="speaker__list-content-inner">
                <div className="speaker__list-content">
                  <h5 className="speaker__author-title">
                    <Link href={`/speaker-details-two/${speaker.id}`}>
                      <a>{speaker.title}</a>
                    </Link>
                  </h5>
                  <span className="speaker__author-info">
                    {speaker.authorInfo}
                  </span>
                </div>
                <div className="speaker__list-social">
                  <Link href="https://www.facebook.com/" target="_blank">
                    <a>
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </Link>
                  <Link href="https://twitter.com/" target="_blank">
                    <a>
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </Link>
                  <Link href="https://bd.linkedin.com/" target="_blank">
                    <a>
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </Link>
                  <Link href="https://www.youtube.com/" target="_blank">
                    <a>
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SpeakerSliderCards;
