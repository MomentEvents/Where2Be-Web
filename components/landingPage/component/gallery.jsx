import React, { useRef } from "react";
import Slider from "react-slick";
import gallary1 from "../../../data/_gallary1";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Gallery = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    speed: 1000,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <PhotoProvider>
      <div className="gallery__area dark_light_class fix">
        <div className="gallery-wrap gallery-slider-activation1">
          <Slider {...settings} ref={sliderRef}>
            {gallary1.slice(0, 13).map((item, index) => (
              <PhotoView key={index} src={item.thubmnail.src}>
                <div className="col carousel_item">
                  <div className="gallery-item">
                    <button type="button" className="gallery-icon popup-image">
                      <i className="flaticon-plus"></i>
                    </button>
                    <img src={item.thubmnail.src} alt="image not found" />
                  </div>
                </div>
              </PhotoView>
            ))}
          </Slider>
        </div>
      </div>
    </PhotoProvider>
  );
};

export default Gallery;
