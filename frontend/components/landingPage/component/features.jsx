import overlay_img from "../../../public/assets/img/bg/joinbg.jpg";
import Link from "next/link";
import TickArrow from "../../../utils/SVG/tickArrow";
import demo from "../../../public/assets/img/index/demo.png"
import Image from "next/image";

const Features = () => {
  return (
    <>
      <section className="features__container">
        <div className="features__left_container">
          <div className="features__title1">
            School Vibes,
          </div>
          <div className="features__title2">
            Digitalized
          </div>
          <div className="features__subtitle">
              Get involved with your campus community. By students. For students.
          </div>
          <div className="features__left_btn_container">
            <Link legacyBehavior href="/explore">
              <a className="explore__btn">
                Explore Events
              </a>
            </Link>
            <Link legacyBehavior href="/create">
              <a className="create__btn">
                Create An Event
              </a>
            </Link>
          </div>
        </div>
        <div className="features__right_container">
          <img
            src={demo.src}
            alt="image not found"
            width={'600px'}
          />
        </div>
      </section>
    </>
  );
};

export default Features;