import Link from "next/link";
import React from "react";
import overlay_img from "../../public/assets/img/sign/signup.jpg";
import OffCanvasArea from "../common/off-canvas";
import DarkMode from "../common/dark-mode";
import black_logo from "../../public/assets/img/logo/color-logo.svg"
import white_logo from "../../public/assets/img/logo/color-logo-white.svg"
import GoogleIcon from "../../utils/SVG/googleIcon";
import BackToTopCom from "../common/scroll-to-top";
import { useContext } from "react";
import { DarkModeContext } from "../darkmode-provider/DarkModeProvider";
const SingUpMain = () => {
  const { dark } = useContext(DarkModeContext);
  return (
    <main className={`body-area ${dark ? "bd-theme-dark" : "bd-theme-light"}`}>
      <OffCanvasArea />
      <section className="signin__area">
        <div className="sign__main-wrapper">
          <div className="sign__left">
            <div className="sign__header">
              <div className="sign__logo">
                <Link href="/">
                  <a>
                    <img
                      className="logo-black"
                      src={black_logo.src}
                      alt="image not found"
                    />
                    <img
                      className="logo-white"
                      src={white_logo.src}
                      alt="image not found"
                    />
                  </a>
                </Link>
              </div>
              <div className="sign__link custome_link">
                <Link className="sign__link-text" href="/signin">
                  <a>Sign in</a>
                </Link>
                <Link className="sign__link-active" href="/signup">
                  <a>Sign Up</a>
                </Link>
              </div>
            </div>
            <div className="sign__center-wrapper text-center mt-80">
              <div className="sign__title-wrapper mb-40">
                <h3 className="sign__title">Create An Account</h3>
                <p>The faster you fill up. the faster you get a ticket</p>
              </div>
              <div className="sign__input-form text-center">
                <form action="#">
                  <div className="sign__input">
                    <input type="text" placeholder="User Name" />
                    <span>
                      <i className="flaticon-user-2"></i>
                    </span>
                  </div>
                  <div className="sign__input">
                    <input type="email" placeholder="Email Address" />
                    <span>
                      <i className="flaticon-user-2"></i>
                    </span>
                  </div>
                  <div className="sign__input">
                    <input type="password" placeholder="Enter Password" />
                    <span>
                      <i className="flaticon-password"></i>
                    </span>
                  </div>
                  <div className="sign__input">
                    <input type="password" placeholder="Confirm Password" />
                    <span>
                      <i className="flaticon-password"></i>
                    </span>
                  </div>
                  <div className="sing__button mb-20">
                    <button className="input__btn w-100 mb-20" type="submit">
                      Sign Up
                    </button>
                    <button className="gamil__sign-btn w-100" type="submit">
                      <span>
                        <GoogleIcon />
                      </span>
                      Sign Up With Google
                    </button>
                  </div>
                </form>
                <div className="if__account mt-90">
                  <p>
                    Already have an account?
                    <Link href="/signin">
                      <a>Sign in</a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sign__right">
            <div
              className="sign__input-thumb include__bg w-img"
              style={{ backgroundImage: `url(${overlay_img.src})` }}
            ></div>
          </div>
        </div>
      </section>
      
      <BackToTopCom />
    </main>
  );
};

export default SingUpMain;
