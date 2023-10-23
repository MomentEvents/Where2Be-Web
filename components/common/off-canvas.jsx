import Link from "next/link";
import React from "react";

const OffCanvasArea = ({ handleClick}) => {
  return (
    <>
      <div className="fix">
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <a>
                      <img
                        src="/assets/img/logo/logo-black.svg"
                        alt="logo not found"
                      />
                    </a>
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button>
                    <i className="fal fa-times"></i>
                  </button>
                </div>
              </div>
              <div className="offcanvas__search mb-25">
                <form action="#">
                  <input
                    type="text"
                    placeholder="What are you searching for?"
                  />
                  <button type="submit">
                    <i className="far fa-search"></i>
                  </button>
                </form>
              </div>
              <div className="mobile-menu fix mb-40"></div>
              <div className="offcanvas__contact mt-30 mb-20">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link
                        target="_blank"
                        href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873"
                      >
                        12/A, Mirnada City Tower, NYC
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+088889797697">+088889797697</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+012-345-6789">
                        <span className="mailto:support@mail.com">
                          support@mail.com
                        </span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="offcanvas__social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay"></div>
      <div className="offcanvas__overlay-white"></div>

      <section className="speaker__popup-area">
        <div className="popup__wrapper">
          <div className="popup__title-wrapper">
            <h3 className="popup__title">Add Event Speaker</h3>
          </div>
          <div className="popup__input-wrapper">
            <form action="#">
              <div className="singel__input-field mb-15">
                <label className="input__field-text">Speaker Name</label>
                <input type="text" />
              </div>
              <div className="singel__input-field mb-15">
                <label className="input__field-text">Email</label>
                <input type="text" />
              </div>
              <div className="singel__input-field mb-15">
                <label className="input__field-text">Phone Number</label>
                <input type="text" />
              </div>
              <div className="singel__input-field mb-15">
                <label className="input__field-text">Organization Name</label>
                <input type="text" />
              </div>
              <div className="singel__input-field mb-15">
                <label className="input__field-text">Designation</label>
                <input type="text" />
              </div>
              <div className="popup__update mb-15">
                <label className="input__field-text">
                  Upload Image ( 200x200px )
                </label>
                <input type="file" />
              </div>
              <button className="input__btn w-100" type="submit">
                <i className="fa-regular fa-plus"></i>Add Speaker
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="event__popup-area">
        <div className="popup__wrapper">
          <div className="popup__title-wrapper">
            <h3 className="popup__title">Add Event Attendant</h3>
          </div>
          <div className="popup__input-wrapper">
            <form action="#">
              <div className="singel__input-field mb-15">
                <label className="input__field-text">Name</label>
                <input type="text" />
              </div>
              <div className="singel__input-field mb-15">
                <label className="input__field-text">Email</label>
                <input type="email" />
              </div>
              <div className="singel__input-field mb-15">
                <label className="input__field-text">Phone Number</label>
                <input type="text" />
              </div>
              <div className="singel__input-field mb-15">
                <label className="input__field-text">Organization Name</label>
                <input type="text" />
              </div>
              <div className="singel__input-field mb-15">
                <label className="input__field-text">Ticket ID No</label>
                <input type="text" />
              </div>
              <div className="popup__update">
                <label className="input__field-text">
                  Upload Image ( 200x200px )
                </label>
                <input type="file" name="img" accept="image/*" />
              </div>
              <button className="input__btn w-100" type="submit">
                <i className="fa-regular fa-plus"></i>Add Attendant
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default OffCanvasArea;
