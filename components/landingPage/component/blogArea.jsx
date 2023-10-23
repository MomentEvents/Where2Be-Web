import React from "react";
import blog_data from "../../../data/_blogdata";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/pagination";
import InsideIcon from "../../../utils/SVG/insideIcon";
import CalenderIcon from "../../../utils/SVG/calenderIcon";
import CommentIcon from "../../../utils/SVG/commentIcon";
import { Pagination } from "swiper";

const BlogArea = ({ about_blog_space }) => {
  return (
    <section
      id="homeblog"
      className={`blog__area dark_light_class pb-120 ${
        about_blog_space ? about_blog_space : "pt-185"
      }`}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="blog__intro-innner mb-80">
              <div className="section__title-wrapper is-left">
                <span className="section__back-title">B</span>
                <span className="section__subtitle">LATEST NEWS FROM BLOG</span>
                <h2 className="section__title">
                  expovent{" "}
                  <span className="text__highlight">
                    {" "}
                    insight <InsideIcon />
                  </span>
                </h2>
              </div>
              <div className="blog__pagination">
                <div className="testimonial-slider-dot bd-swiper-dot"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog__slider-active">
          <div>
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              loop={true}
              pagination={{
                el: ".testimonial-slider-dot",
                clickable: true,
              }}
              breakpoints={{
                1200: {
                  slidesPerView: 3,
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
              {blog_data.length > 0 &&
                blog_data.slice(0, 3).map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="swipwe-slide">
                      <div className="blog__item-wrapper">
                        <div className="blog__item mb-30">
                          <div className="blog__thumb w-img">
                            <Link href={`/blog-details/${item.id}`}>
                              <a>
                                <img
                                  src={item.thumbnail.src}
                                  alt="image not found"
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="blog__content">
                            <h3>
                              <Link href={`/blog-details/${item.id}`}>
                                {item.title}
                              </Link>
                            </h3>
                          </div>
                          <div className="blog__meta">
                            <span>
                              <CalenderIcon />
                              {item.date}
                            </span>
                            <span>
                              <CommentIcon />
                              <Link href="#">{item.comment}</Link>
                            </span>
                          </div>
                          <div className="header__btn">
                            <Link href={`/blog-details/${item.id}`}>
                              <a className="blog_custome_btn">
                                View Details
                                <i className="fa-regular fa-angle-right"></i>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArea;
