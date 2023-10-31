import Link from "next/link";
import overlay_img from "../../public/assets/img/sign/signin.jpg";
import DarkMode from "../common/dark-mode";
import OffCanvasArea from "../common/off-canvas";
import GoogleIcon from "../../utils/SVG/googleIcon";
import BackToTopCom from "../common/scroll-to-top";
import { useContext, useRef } from "react";
import { DarkModeContext } from "../darkmode-provider/DarkModeProvider";
import logo_dark from "../../public/assets/img/logo/color-logo.svg";
import logo_white from "../../public/assets/img/logo/color-logo-white.svg";
import { useRouter } from "next/router";
import supabase from "../../lib/supabase";
import showMessage from "../errorMessage/showMessage";
import { mustNotBeLoggedInServer } from "../../lib/authorization";

const SignInPage = () => {
  const { dark } = useContext(DarkModeContext);
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(emailRef.current);
    console.log(passwordRef.current);
    if (!emailRef.current || !passwordRef.current) {
      showMessage("Please fill in all fields", true);
      return;
    }
    try {
      const response = await supabase.auth.signInWithPassword({
        email: emailRef.current,
        password: passwordRef.current,
      });

      console.log(response);

      if (response.error) {
        showMessage(response.error.message, true);
        return;
      }

      router.push("/dashboard");
    } catch (e) {
      showMessage(
        "An error occurred when signing in. Check the console for details.",
        true
      );
      console.warn(e);
    }
  };

  return (
    <main className={`body-area ${dark ? "bd-theme-dark" : "bd-theme-light"}`}>
      <OffCanvasArea />
      <section className="signin__area">
        <div className="sign__main-wrapper">
          <div className="sign__left">
            <div className="sign__header">
              <div className="sign__logo">
                <Link legacyBehavior href="/">
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
                <Link
                  legacyBehavior
                  className="sign__link-active"
                  href="/signin"
                >
                  Sign in
                </Link>
                <Link legacyBehavior className="sign__link-text" href="/signup">
                  Sign Up
                </Link>
              </div>
            </div>
            <div className="sign__center-wrapper text-center mt-90">
              <div className="sign__title-wrapper mb-40">
                <h3 className="sign__title">Sign In To Your Account</h3>
                <p>Connect with your campus through event experiences</p>
              </div>
              <div className="sign__input-form text-center">
                <form onSubmit={handleSubmit}>
                  <div className="sign__input">
                    <input
                      onChange={(e) => {
                        emailRef.current = e.target.value;
                      }}
                      type="text"
                      placeholder="Email"
                    />
                    <span>
                      <i className="flaticon-email"></i>
                    </span>
                  </div>
                  <div className="sign__input">
                    <input
                      type="password"
                      onChange={(e) => {
                        passwordRef.current = e.target.value;
                      }}
                      placeholder="Password"
                    />
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
                        <Link legacyBehavior href="#">
                          Forgot Password?
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="sing__button mb-20">
                    <button
                      className="input__btn w-100 mb-20"
                      onClick={handleSubmit}
                      type="submit"
                    >
                      Sign in
                    </button>
                    {/* <button className="gamil__sign-btn w-100" type="submit">
                      <span>
                        <GoogleIcon />
                      </span>
                      Sign in With Google
                    </button> */}
                  </div>
                </form>
                <div className="if__account mt-85">
                  <p>
                    Don’t Have An Account?{" "}
                    <Link legacyBehavior href="/signup">
                      Sign up
                    </Link>
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

// Server side checks
export async function getServerSideProps(context) {
  return mustNotBeLoggedInServer(context)
}

export default SignInPage;
