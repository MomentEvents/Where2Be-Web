import overlay_img from "../../../public/assets/img/bg/joinbg.jpg";
import Link from "next/link";
import TickArrow from "../../../utils/SVG/tickArrow";
import demo from "../../../public/assets/img/index/demo.png";
import Image from "next/image";
import showMessage from "../../errorMessage/showMessage";

const Features = () => {
  return (
    <>
      <section className="features__container">
        <div className="features__left_container">
          <div className="features__title1">Every Event</div>
          <div className="features__title2">In One Place</div>
          <div className="features__subtitle">
            Tired of figuring out what's happening on campus? We compile event data across 100+ school Instagrams and Discord servers.
          </div>
          {/* <div className="features__left_btn_container">
            <button
              className="explore__btn"
              onClick={() => {
                showMessage("Coming Soon!", false);
              }}
            >
              Explore Events
            </button>

            <Link legacyBehavior href="/dashboard/create-event">
              <a className="create__btn">Create An Event</a>
            </Link>
          </div> */}
        </div>
        <div className="features__right_container">
          <img
            src={demo.src}
            alt="image not found"
            style={{
              maxHeight: "72vh",
              width: "auto" /* Maintain aspect ratio */,
              objectFit: "contain" /* Ensures the image is fully visible */,
            }}
          />
        </div>
      </section>
    </>
  );
};

export default Features;
