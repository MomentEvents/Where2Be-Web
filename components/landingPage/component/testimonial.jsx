import React, { useRef } from "react";
import testimonialSlider from "../../../data/_testimonialData";
import Slider from "react-slick";
import TitleUnderLineIcon from "../../../utils/SVG/titleUnderLineIcon";

const Testimonial = () => {
  const sliderRef = useRef(null);

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const settings = {
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        slidesToShow: 1,
      },
      {
        breakpoint: 1200,
        slidesToShow: 1,
      },
      {
        breakpoint: 992,
        slidesToShow: 1,
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="testimonial__area fix dark_light_class p-relative pt-175 pb-135">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6">
              <div className="section__title-wrapper is-center text-center mb-110">
                <span className="section__back-title">t</span>
                <span className="section__subtitle">PARTICIPANTS REVIEW</span>
                <h2 className="section__title">
                  PEOPLES <span className="text__highlight"> TESTIMONIAL <TitleUnderLineIcon/>
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="tetimonial__inner-main p-relative">
          <div className="container p-relative">
            <div className="testimonial__all-user">
              <img
                className="author__user-1 user__shadow"
                src="/assets/img/testimonial/author/01.png"
                alt="image not found"
              />
              <img
                className="author__user-2 user__shadow"
                src="/assets/img/testimonial/author/02.png"
                alt="image not found"
              />
              <img
                className="author__user-3 user__shadow"
                src="/assets/img/testimonial/author/03.png"
                alt="image not found"
              />
              <img
                className="author__user-4 user__shadow"
                src="/assets/img/testimonial/author/04.png"
                alt="image not found"
              />
              <img
                className="author__user-5 user__shadow"
                src="/assets/img/testimonial/author/05.png"
                alt="image not found"
              />
              <img
                className="author__user-6 user__shadow"
                src="/assets/img/testimonial/author/06.png"
                alt="image not found"
              />
              <div className="testimonial__navigation">
                <button
                  onClick={handlePrevClick}
                  type="button"
                  className="slick-prev"
                >
                  <i className="fa-regular fa-chevron-left"></i>
                </button>
                <button
                  onClick={handleNextClick}
                  type="button"
                  className="slick-next"
                >
                  <i className="fa-regular fa-chevron-right"></i>
                </button>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xxl-8 col-xl-8 col-lg-8 text-center">
                <div className="testimonial__activation">
                  <Slider {...settings} ref={sliderRef}>
                    {testimonialSlider.length > 0 &&
                      testimonialSlider.map((item,index) => (
                        <div key={index} className="testimonial__item">
                          <div className="testimonial__thumb">
                            <img
                              src={item.thumbnail.src}
                              alt="image not found"
                            />
                            <div className="testimonial__quote">
                              <i className="flaticon-quotation-1"></i>
                            </div>
                          </div>

                          <div className="testimonial__content">
                            <p>{item.content}</p>
                            <div className="testimonial__content-name">
                              <span> {item.contactName} </span> {item.title}
                            </div>
                          </div>
                        </div>
                      ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
