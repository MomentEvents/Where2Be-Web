import Link from "next/link";
import React, { useRef } from "react";
import overlay_img from "../../public/assets/img/sign/signup.jpg";
import OffCanvasArea from "../common/off-canvas";
import DarkMode from "../common/dark-mode";
import black_logo from "../../public/assets/img/logo/color-logo.svg";
import white_logo from "../../public/assets/img/logo/color-logo-white.svg";
import GoogleIcon from "../../utils/SVG/googleIcon";
import BackToTopCom from "../common/scroll-to-top";
import { useContext } from "react";
import { DarkModeContext } from "../darkmode-provider/DarkModeProvider";
import supabase from "../../lib/supabase";
import showMessage from "../errorMessage/showMessage";
const SingUpMain = () => {
  const { dark } = useContext(DarkModeContext);

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const handleSubmit = async () => {
    console.log(nameRef.current)
    console.log(emailRef.current)
    console.log(passwordRef.current)
    console.log(confirmPasswordRef.current)
    const { user, error } = await supabase.auth.signUp({
      email: emailRef.current,
      password: passwordRef.current
    });
    console.log("USER:" + JSON.stringify(user))
    console.log("ERROR" + JSON.stringify(error))

    if(!nameRef.current || !emailRef.current || !passwordRef.current){
      showMessage("Please fill in all fields", true)
      return
    }
    if(passwordRef.current !== confirmPasswordRef.current){
      showMessage("Passwords do not match", true)
      return
    }
    // if error is undefined
    if(error){
      showMessage(error.message, true)
      return
    }

    if(user){
      showMessage(user)
    }

    const text = "user:" + JSON.stringify(user) + "error:" +JSON.stringify(error)

    showMessage(text)


  }
  
  supabase.auth.onAuthStateChange((event, session) => {
    const text = "EVENT:"+JSON.stringify(event) + "SESSION:"+JSON.stringify(session)

    showMessage(text)

  });

  const handleGoogleAuth = (e) => {
    e.preventDefault(); // This will prevent the form submission

  }

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
                <p>Host your events with free analytics and SMS reminders</p>
              </div>
              <div className="sign__input-form text-center">
                <form action="#" onSubmit={handleSubmit}>
                  <div className="sign__input">
                    <input
                      type="text"
                      placeholder="Name"
                      onChange={(e) => {nameRef.current = e.target.value}}
                    />
                    <span>
                      <i className="flaticon-user-2"></i>
                    </span>
                  </div>
                  <div className="sign__input">
                    <input
                      type="email"
                      placeholder="Email Address"
                      onChange={(e) => {emailRef.current = e.target.value}}
                    />
                    <span>
                      <i className="flaticon-email"></i>
                    </span>
                  </div>
                  <div className="sign__input">
                    <input
                      type="password"
                      placeholder="Enter Password"
                      onChange={(e) => {passwordRef.current = e.target.value}}
                    />
                    <span>
                      <i className="flaticon-password"></i>
                    </span>
                  </div>
                  <div className="sign__input">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      onChange={(e) => {confirmPasswordRef.current = e.target.value}}
                    />
                    <span>
                      <i className="flaticon-password"></i>
                    </span>
                  </div>
                  <div className="sing__button mb-20">
                    <button className="input__btn w-100 mb-20" type="submit">
                      Sign Up
                    </button>
                    <button className="gamil__sign-btn w-100" onClick={handleGoogleAuth}>
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
