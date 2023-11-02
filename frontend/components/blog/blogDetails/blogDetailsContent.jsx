import React from "react";
import blog_details_image_2 from "../../../public/assets/img/blog/blog-details/blog_details_image_2.jpg";
import blog_details_image_3 from "../../../public/assets/img/blog/blog-details/blog_details_image_3.jpg";
import avatar_5 from "../../../public/assets/img/meta/chatbox/chat-1.png";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import BlogSidebarSection from "../blogSidebar";
const BlogDetailsContent = ({blog}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openVideoModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setIsOpen(false)}
      />
      <section className="details_section dark_light_class blog_details section_space_lg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="blog_responsive col col-lg-8">
              <div className="details_image">
                {blog.thumbnail && (
                  <img
                    src={blog.thumbnail.src}
                    width={1170}
                    height={751}
                    style={{ width: "400", height: "100%" }}
                    alt="Paradox Blog Details Image"
                  />
                )}
              </div>
              <div className="details_content">
                <div className="blog_post_meta">
                  <ul className="category_list unordered_list">
                    <li>
                      <Link legacyBehavior href="/blog">{blog.blogCat}</Link>
                    </li>
                  </ul>
                  <span className="post_date">{blog.date}</span>
                </div>
                <h2 className="details_item_title">{blog.title}</h2>
                <p>
                  Some mistakenly believe that because you’re offering a
                  certification it must be generalized and meant to give anyone
                  a wide range of digital skills. But the benefits of continuous
                  This is also a flexible form of learning. You may have a suite
                  of microlearning courses. employees who feel that their skills
                  are not being put to good use in their current job Choose
                  which ones are important for any specific role within your
                  company. For example, marketers may need social media training
                  so they can use.
                </p>
                <p>
                  Investing in offering those paths early on can help you retain
                  staff instead of letting them go. After all, this is the era
                  of hybrid and remote working so flexibility and career
                  advancement. employees who feel that their skills are not
                  being put to good use in their current job
                </p>
                <blockquote cite="/blog">
                  <h3 className="blockquote_content">
                    “You have to be burning with an idea, or a problem, or a
                    wrong that you want to right. If you’re not passionate
                    enough from the start,never stick it out.”
                  </h3>
                  <span className="author_name">Steve Jobs</span>
                </blockquote>
                <p>
                  Some of the employees in your workforce are already
                  digitally-savvy and actively pursue new training and in-demand
                  skills on their own. These employees are valuable, but
                  research demonstrates that you may lose them if you don’t
                  allow them the opportunity to improve their skills further.
                  Should be possible as long as the training is available to
                  upskill employees in the required skills.
                </p>
                <h3 className="details_item_info_title">
                  Update Your Experts Marketing Tools
                </h3>
                <p>
                  Reskilling and digital upskilling While you may be focusing on
                  updating employees who are behind, your HR or L&D team needs
                  to make sure to nurture your most expert staff as well. This
                  will help boost loyalty and sharpen skills for any specific
                  role.
                </p>
                <p>
                  Skills are not being put to good use in their current job
                  Choose which ones are important for any specific role within
                  your company. For example, marketers may need social media
                  training so they can use.
                </p>
                <ul className="icon_list unordered_list_block">
                  <li>
                    <span className="list_item_icon">
                      <i className="fas fa-check"></i>
                    </span>
                    <span className="list_item_text">
                      The {"company’s"} training initiatives reached 210,000
                      employees in 2023
                    </span>
                  </li>
                  <li>
                    <span className="list_item_icon">
                      <i className="fas fa-check"></i>
                    </span>
                    <span className="list_item_text">
                      Created a culture of continuous learning and skills
                      development
                    </span>
                  </li>
                  <li>
                    <span className="list_item_icon">
                      <i className="fas fa-check"></i>
                    </span>
                    <span className="list_item_text">
                      Mature digital organization is essential in {"today’s"}
                      technologically driven world.
                    </span>
                  </li>
                </ul>
                <div className="row mb-4">
                  <div className="col col-lg-6">
                    <div className="video_widget">
                      <img
                        src={blog_details_image_2.src}
                        style={{ width: "100%", height: "100%" }}
                        alt="Paradox Video Poster Image"
                      />
                      <button
                        type="submit"
                        className="video_play_icon popup_video"
                        onClick={openVideoModal}
                      >
                        <span className="icon_wrap" data-magnetic>
                          <i className="fas fa-play"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="col col-lg-6">
                    <div className="image_wrap">
                      <img
                        src={blog_details_image_3.src}
                        style={{ width: "100%", height: "100%" }}
                        alt="Paradox Blog Details Image"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="details_item_info_title">
                  workforce to drive loyalty
                </h3>
                <p>
                  10 times more likely to be looking for a new job than those
                  who feel that their skills are being put to good use. This
                  shows how important valuing your staff is to drive retention
                  and keep talent within your business. The same report found
                  that the top three focus areas of learning and development
                  (L&D) programs in 2022 are leadership and development,
                  upskilling.
                </p>
                <p>
                  Reskilling and digital upskilling While you may be focusing on
                  updating employees who are behind, your HR or L&D team needs
                  to make sure to nurture your most expert staff as well. This
                  will help boost loyalty and sharpen skills.
                </p>
                <div className="social_actions">
                  <ul className="tags_list unordered_list">
                    <li>
                      <Link legacyBehavior href="/blog">UI/UX</Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/blog">Development</Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/blog">Design</Link>
                    </li>
                  </ul>

                  <div className="footer__social">
                    <Link legacyBehavior href="https://www.facebook.com/" target="_blank">
                      <a>
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                    </Link>
                    <Link legacyBehavior href="https://twitter.com/" target="_blank">
                      <a>
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </Link>
                    <Link legacyBehavior href="https://bd.linkedin.com/" target="_blank">
                      <a>
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </Link>
                    <Link legacyBehavior href="https://www.youtube.com/" target="_blank">
                      <a>
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="post_admin">
                <div className="admin_image">
                  <img
                    src={avatar_5.src}
                    style={{ width: "auto", height: "auto" }}
                    alt="Paradox Blog Post Admin Image"
                  />
                </div>
                <div className="admin_content">
                  <h3 className="admin_name">Karen L. Head</h3>
                  <span className="admin_designation">Digital Marketer</span>
                  <p className="mb-0">
                    A Content Writer is a professional who writes informative
                    and engaging articles to help brands showcase their
                    products.
                  </p>
                </div>
              </div>

              <h3 className="details_item_title">Leave a comment</h3>
              <div className="contact_form ex-mmb-60">
                <form onClick={handleSubmit} action="#">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="firstname"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="lastname"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="comment"
                          placeholder="Write your Comment"
                        ></textarea>
                      </div>

                      <div className="header__btn d-xl-block">
                        <Link legacyBehavior href="/">
                          <a className="fill__btn blog_custome_btn">
                            Leave comment
                            <i className="fa-regular fa-angle-right"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col col-lg-4">
              <BlogSidebarSection />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsContent;
