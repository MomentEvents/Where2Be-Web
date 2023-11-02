import React, { useRef, useState, useEffect } from "react";
import overlay_img from "../../../public/assets/img/bg/banner.png";
import Link from "next/link";
import RegisterNow from "../../../utils/SVG/registerNow";
import Batch from "../../../utils/SVG/batch";
import shape_One from "../../../public/assets/img/shape/slider/shape-1.png"
import shape_two from "../../../public/assets/img/shape/slider/shape-2.png"
import shape_three from "../../../public/assets/img/shape/slider/shape-3.png"
import shape_four from "../../../public/assets/img/shape/slider/shape-4.png"
import shape_five from "../../../public/assets/img/shape/slider/shape-5.png"
import shape_six from "../../../public/assets/img/shape/slider/shape-6.png"

const Banner = () => {

  /*
  Event:

  Title
  Description
  StartDate
  Image
  Status
  Location
  DoSMSReminder
  SMSMessage
  */

  /*
  User:

  Name
  Email
  PhoneNumber

  */

  const [remainingTime, setRemainingTime] = useState(null);
  const calculateRemainingTime = () => {
    const currentDate = new Date();
    const targetDate = new Date("2023-11-09T00:00:00");
    const difference = targetDate.getTime() - currentDate.getTime();
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    setRemainingTime({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  useEffect(() => {
    calculateRemainingTime();
    const intervalId = setInterval(calculateRemainingTime, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <section
        id="homeindex"
        className="banner__area banner__area-1 banner__height-1 d-flex align-items-center"
        style={{ backgroundImage: `url(${overlay_img.src})` }}
      >
        <div className="spotlight"></div>
        {/* Rest of your component code */}
        <div className="banner__meta-title">
          <span>Meet Up 2023</span>
        </div>
        <div className="banner__shape">
          <img
            className="banner__shape-1 parallaxed"
            src={shape_One.src}
            alt="imge not found"
          />
          <img
            className="banner__shape-2"
            src={shape_two.src}
            alt="imge not found"
          />
          <img
            className="banner__shape-3"
            src={shape_three.src}
            alt="imge not found"
          />
          <img
            className="banner__shape-4 parallaxed"
            src={shape_four.src}
            alt="imge not found"
          />
          <img
            className="banner__shape-5"
            src={shape_five.src}
            alt="imge not found"
          />
          <img
            className="banner__shape-6 parallaxed"
            src={shape_six.src}
            alt="imge not found"
          />
          <div className="banner-all-line">
            <div className="banner__line banner__line-1"></div>
            <div className="banner__line banner__line-2"></div>
          </div>
          <div className="container-fluid">
            <div className="row align-items-xl-end">
              <div className="col-xxl-7 col-xl-8 col-lg-6">
                <div className="banner__content">
                  <h2 className="banner__title">
                    Digital Thinkers{" "}
                    <span className="text__highlight"> Conference </span>
                  </h2>
                  <div className="slider__btdn">
                    {/* <Link legacyBehavior href="/signup">
                      <a>
                        Register Now
                        <RegisterNow />
                      </a>
                    </Link> */}

                    <Link legacyBehavior href="/signup">
                      <a className="fill__btn">
                        Register Now<i className="fa-regular fa-angle-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-4 col-lg-6">
                <div className="banner__right-content d-flex justify-content-lg-end">
                  <div className="banner__card-wrapper ">
                    <div className="banner__card-inner">
                      <span className="card__icon"></span>
                      <span className="shape">
                        <Batch />
                      </span>
                      <div className="banner__card-info">
                        <span>WHEN AND WHERE</span>
                        <h4>
                          November 9–10 <br /> The Midway SF
                        </h4>
                      </div>
                      <div className="pluse__status">
                        <span className="dot"></span>
                        <span className="text">Online</span>
                      </div>
                    </div>
                    {/* show dynamic time  */}
                    <div className="banner__time">
                      <div className="count-down">
                        {remainingTime && remainingTime.days}
                        <span>Day</span>
                      </div>
                      <div className="count-down">
                        {remainingTime && remainingTime.hours}
                        <span>Hour</span>
                      </div>
                      <div className="count-down">
                        {remainingTime && remainingTime.minutes}
                        <span>Min</span>
                      </div>
                      <div className="count-down">
                        {remainingTime && remainingTime.seconds}
                        <span>Sec</span>
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

export default Banner;
