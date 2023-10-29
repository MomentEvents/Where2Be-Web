import Link from "next/link";
import React from "react";
import TitleUnderLineIcon from "../../utils/SVG/titleUnderLineIcon";
import NiceSelect from "../../lib/niceSelect";

const ContactArea = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const selectHandler = e => {}

  return (
    <section className="contact_section dark_light_class section_space_lg">
      <div className="container">
        <div className="section_heading">
          <h3 className="heading_title mb-0">
            Feel Free 
            <span className="text__highlight ml-15">
              Contact Us
              <TitleUnderLineIcon />
            </span>
          </h3>
        </div>
        <div className="row g-4">
          <div className=" col-12 col-lg-6">
            <div className="contact_form">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className=" col-12 col-md-6 contact_div">
                    <div className="form-group m-0">
                      <input
                        className="form-control"
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className=" col-12 col-md-6 contact_div">
                    <div className="form-group m-0">
                      <input
                        className="form-control"
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className=" col-12 col-md-6 contact_div">
                    <div className="form-group m-0">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className=" col-12 col-md-6 contact_div">
                    <div className="select_option m-0">
                      <NiceSelect
                        options={[
                          {value: "Select Subject", text: "Select Subject" },
                          {value: "Website Development",text: "Website Development"},
                          {value: "UX/UI Design", text: "UX/UI Design" },
                          {value: "App Development", text: "App Development" },
                          {value: "Video Editing", text: "Video Editing" },
                          {value: "Programming & Tech",text: "Programming & Tech"},
                          {value: "Business Consuting",text: "Business Consuting"},
                        ]}
                        defaultCurrent={0}
                        onChange={selectHandler}
                        name="Select Subject"
                      />
                    </div>
                  </div>
                  <div className="col contact_div">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        placeholder="Write your Message"
                      ></textarea>
                    </div>
                    <div className="header__btn">
                      <button type="button" className="blog_custome_btn">
                          Send Message <i className="fa-regular fa-angle-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <ul className="contact_info_list style_2 ps-lg-4 unordered_list_block">
              <li>
                <strong>Loaction:</strong>
                <span>1989 Timber Ridge Road Sacramento CA, California</span>
              </li>
              <li>
                <strong>Phone:</strong>
                <span>+1-202-555-0149</span>
              </li>
              <li>
                <strong>Email:</strong>
                <span>contact@paradox.com</span>
              </li>
              <li>
                <strong>Opening:</strong>
                <span>10am - 6pm, Friday Close</span>
              </li>
              <li>
                <strong>Follow Us:</strong>
                <div className="social_icon unordered_list">
                  <div className="footer__social">
                    <Link legacyBehavior href="https://www.facebook.com/" target="_blank">
                      <a><i className="fa-brands fa-facebook"></i></a>
                    </Link>
                    <Link legacyBehavior href="https://twitter.com/" target="_blank">
                    <a><i className="fa-brands fa-twitter"></i></a>
                    </Link>
                    <Link legacyBehavior href="https://bd.linkedin.com/" target="_blank">
                    <a><i className="fa-brands fa-linkedin"></i></a>
                    </Link>
                    <Link legacyBehavior href="https://www.youtube.com/" target="_blank">
                    <a><i className="fa-brands fa-youtube"></i></a>
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactArea;
