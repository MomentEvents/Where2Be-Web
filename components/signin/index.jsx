import Link from "next/link";
import overlay_img from "../../public/assets/img/sign/signin.jpg";
import DarkMode from "../common/dark-mode";
import OffCanvasArea from "../common/off-canvas";
import GoogleIcon from "../../utils/SVG/googleIcon";
import BackToTopCom from "../common/scroll-to-top";
import { useContext } from "react";
import { DarkModeContext } from "../darkmode-provider/DarkModeProvider";
import logo_dark from "../../public/assets/img/logo/color-logo.svg"
import logo_white from "../../public/assets/img/logo/color-logo-white.svg"
import { useRouter } from "next/router";

const SignInPage = () => {
  const { dark } = useContext(DarkModeContext);
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
                      src={logo_dark.src}
                      alt="image not found"
                    />
                    <img
                      className="logo-white"
                      src={logo_white.src}
                      alt="image not found"
                    />
                  </a>
                </Link>
              </div>
              <div className="sign__link custome_link">
                <Link className="sign__link-active" href="/signin">
                  Sign in
                </Link>
                <Link className="sign__link-text" href="/signup">
                  Sign Up
                </Link>
              </div>
            </div>
            <div className="sign__center-wrapper text-center mt-90">
              <div className="sign__title-wrapper mb-40">
                <h3 className="sign__title">Welcome To Expovent</h3>
                <p>The faster you fill up. the faster you get a ticket</p>
              </div>
              <div className="sign__input-form text-center">
                <form onSubmit={handleSubmit}>
                  <div className="sign__input">
                    <input type="text" placeholder="Username" />
                    <span>
                      <i className="flaticon-user-2"></i>
                    </span>
                  </div>
                  <div className="sign__input">
                    <input type="password" placeholder="Password"/>
                    <span>
                      <i className="flaticon-password"></i>
                    </span>
                  </div>
                  <div className="sign__action">
                    <div className="sign__check">
                      <input
                        className="e-check-input"
                        type="checkbox"
                        id="register"
                      />
                      <label className="sign__check-text" htmlFor="register">
                        <span>Remember Me</span>
                      </label>
                    </div>
                    <div className="sign__forget">
                      <span>
                        <Link href="#">Forgot Password?</Link>
                      </span>
                    </div>
                  </div>
                  <div className="sing__button mb-20">
                    <button className="input__btn w-100 mb-20" onClick={() => router.push('/dashboard')} type="submit">
                      Sign in
                    </button>
                    <button className="gamil__sign-btn w-100" type="submit">
                      <span>
                        <GoogleIcon />
                      </span>
                      Sign in With Google
                    </button>
                  </div>
                </form>
                <div className="if__account mt-85">
                  <p>
                    Don’t Have An Account?<Link href="/signup"> Sign up</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sign__right">
            <div
              className="sign__input-thumb"
              style={{ backgroundImage: `url(${overlay_img.src})` }}
            ></div>
          </div>
        </div>
      </section>
      
      <BackToTopCom />
    </main>
  );
};

export default SignInPage;
