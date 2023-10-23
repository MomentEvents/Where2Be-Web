import Link from "next/link";
import React from "react";
import footer1 from "../../../public/assets/img/shape/footer/footer-1.png";
import footer2 from "../../../public/assets/img/shape/footer/footer-2.png";
import footer3 from "../../../public/assets/img/shape/footer/footer-3.png";
import footer4 from "../../../public/assets/img/shape/footer/footer-4.png";
import footer_logo from "../../../public/assets/img/logo/logo.svg";
const Footer = () => {
  return (
    <>
      <footer>
        <section className="footer__area footer-bg fix p-relative pt-145">
          <div className="footer__shape">
            <img
              className="footer__shape-1"
              src={footer1.src}
              alt="image not found"
            />
            <img
              className="footer__shape-2"
              src={footer2.src}
              alt="image not found"
            />
            <img
              className="footer__shape-3"
              src={footer3.src}
              alt="image not found"
            />
            <img
              className="footer__shape-4"
              src={footer4.src}
              alt="image not found"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                <div className="footer__widget-1 mb-70">
                  <div className="footer__logo mb-30">
                    <img src={footer_logo.src} alt="image bnot found" />
                  </div>
                  <div className="footer__content">
                    <p>
                      Velit auctor aliquet. Aenean sollicitudin, lorem quis
                      bibendum auctor, nisi elit consequat ipsum, nec sagittis
                      sem nibh. aliquam purus sit amet magna elemen facilisis.
                      Enim praesent elementum facilisis.
                    </p>
                    <div className="footer__social">
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
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                <div className="footer__widget-2 mb-70">
                  <div className="footer__widget-title">
                    <h4>Useful Links</h4>
                  </div>
                  <div className="footer__link">
                    <ul>
                      <li>
                        <Link href="/speaker-list-two"><a>Speakers</a></Link>
                      </li>
                      <li>
                        <Link href="/pricing"><a>Pricing Info</a></Link>
                      </li>
                      <li>
                        <Link href="#"><a>Our Partners</a></Link>
                      </li>
                      <li>
                        <Link href="/contact"><a>Contact Support</a></Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                <div className="footer__widget-3 mb-70">
                  <div className="footer__widget-title">
                    <h4>Useful Links</h4>
                  </div>
                  <div className="footer__link">
                    <ul>
                      <li>
                        <Link href="/event-list-two"><a>Business Conference</a></Link>
                      </li>
                      <li>
                        <Link href="/event-list-two"><a>Design Conference</a></Link>
                      </li>
                      <li>
                        <Link href="/event-list-two"><a>Web Design Seminar</a></Link>
                      </li>
                      <li>
                        <Link href="/event-list-two"><a>Global Conference</a></Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                <div className="footer__widget-4 mb-70">
                  <div className="footer__widget-title">
                    <h4>Subscribe us</h4>
                  </div>
                  <div className="footer__contact">
                    <p>
                      Subscribe Our Newsletter To Get Latest Update And News
                    </p>
                    <div className="footer__input">
                      <form action="#">
                        <span>
                          <i className="fa-solid fa-envelope-open"></i>
                        </span>
                        <input type="text" placeholder="Enter mail" />
                        <button className="input__btn w-100" type="submit">
                          Subscribe Now
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div
                  className="footer__copyright text-center"
                >
                  <p>
                    Copyright & design by
                    <Link
                      target="_blank"
                      href="https://themeforest.net/user/bdevs"
                    >
                      @Bdevs
                    </Link>
                    - 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
