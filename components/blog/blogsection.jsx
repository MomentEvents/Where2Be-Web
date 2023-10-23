import Link from "next/link";
import React from "react";
import blog_data from "../../data/_blogdata";
import BlogSidebarSection from "./blogSidebar";
import CalenderIcon from "../../utils/SVG/calenderIcon";
const Blogsection = () => {
  return (
    <section className="blog_section  dark_light_class section_space_lg">
      <div className="container">
        <div className="blog_grouped row justify-content-center">
          <div className="blog_responsive col-lg-8">
            <div className="blog_wrapper">
              <div className="row g-4">
                {blog_data.map((item) => (
                  <div className="col-md-6" key={item.id}>
                    <div className="blog_item">
                      <Link
                        href={`/blog-details/${item.id}`}
                        data-cursor-text="VIEW"
                      >
                        <a className="item_image">
                          <img
                            src={item.thumbnail.src}
                            alt="Blog Image"
                            style={{ height: "100%", width: "100%" }}
                          />
                        </a>
                      </Link>
                      <div className="item_content">
                        <div className="flex_wrap">
                          <ul className="category_list unordered_list">
                            <li>
                              <Link href={`/blog-details/${item.id}`}>
                                {item.blogCat}
                              </Link>
                            </li>
                          </ul>
                          <span className="post_date">
                            <span style={{ marginRight: "10px" }}>
                              <CalenderIcon />
                            </span>
                            {item.date}
                          </span>
                        </div>
                        <h3 className="item_title">
                          <Link href={`/blog-details/${item.id}`}>
                            {item.title.length >= 50
                              ? `${item.title.slice(0, 50)} ...`
                              : item.title}
                          </Link>
                        </h3>

                        <div className="header__btn">
                          <Link href={`/blog-details/${item.id}`}>
                            <a className="blog_custome_btn">
                              Read More
                              <i className="fa-regular fa-angle-right"></i>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-12">
                <div className="pagination mt-40 ex-mmb-60 d-flex justify-content-center">
                  <nav>
                    <ul>
                      <li>
                        <a href="#">01</a>
                      </li>
                      <li>
                        <span className="current">02</span>
                      </li>
                      <li>
                        <a href="#">03</a>
                      </li>
                      <li className="next">
                        <a href="#">
                          <i className="fa-light fa-arrow-right-long"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-lg-4">
            <BlogSidebarSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogsection;
