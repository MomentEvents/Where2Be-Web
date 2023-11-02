import overlay_img from "../../../public/assets/img/bg/joinbg.jpg";
import Link from "next/link";
import TickArrow from "../../../utils/SVG/tickArrow";

const JoinArea = () => {
  return (
    <>
      <section
        className="join__area p-relative  z-index-1 fix"
        style={{ backgroundImage: `url(${overlay_img.src})` }}
      >
        <div className="join__all-shape p-relative">
          <img
            className="join__shape-1"
            src="/assets/img/shape/join-shape-1.png"
            alt="image not found"
          />
          <img
            className="join__shape-2"
            src="/assets/img/shape/join-shape-2.png"
            alt="image not found"
          />
          <div className="container">
            <div className="join__main-wrapper pt-150 pb-90">
              <div className="row align-items-sm-start">
                <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="join__features-wrapper mb-60">
                    <div className="join__features-grid">
                      <div className="join__features-item text-center">
                        <div className="join__features-icon">
                          <span>
                            <i className="flaticon-network"></i>
                          </span>
                        </div>
                        <h3 className="join__features-title">
                          Build Networking
                        </h3>
                      </div>
                      <div className="join__features-item text-center">
                        <div className="join__features-icon">
                          <span>
                            <i className="flaticon-teamwork"></i>
                          </span>
                        </div>
                        <h3 className="join__features-title">
                          Meet New People
                        </h3>
                      </div>
                      <div className="join__features-item text-center">
                        <div className="join__features-icon">
                          <span>
                            <i className="flaticon-speech"></i>
                          </span>
                        </div>
                        <h3 className="join__features-title">
                          Experience Speakers
                        </h3>
                      </div>
                      <div className="join__features-item text-center">
                        <div className="join__features-icon">
                          <span>
                            <i className="flaticon-confetti"></i>
                          </span>
                        </div>
                        <h3 className="join__features-title">Lot’s Of Fun</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="join__content-wrapper mb-60">
                    <div className="section__title-wrapper is-white mb-40">
                      <span className="section__back-title">w</span>
                      <span className="section__subtitle">WHY JOIN EVENT</span>
                      <h2 className="section__title">
                        WHY YOU SHOULD <span className="text__highlight"> JOIN THIS <TickArrow /> </span> EVENT
                      </h2>
                    </div>
                    <div className="join__content mb-70">
                      <p>
                        Velit auctor aliquet. Aenean sollicitudin, lorem quis
                        bibendum auctor, nisi elit consequat ipsum, nec sagittis
                        sem nibh.
                      </p>
                      <p className="mt-30">
                        Lorem ipsum proin gravida nibh vel velit auctor aliquet.
                        Aeneansollicitudin, lorem quis bibendum auctonisi elit
                        consequat ipsum nec sagittis sem nibh id elit. Duis sed
                        odio sit amet nibh vulputate cursusa sit amet mauris.
                        Morbi accumsan ipsum velit.” Nam nec tellus a odio
                        tincidunt.
                      </p>
                    </div>
                    <Link legacyBehavior href="/event-list-two">
                      <a className="fill__btn fill_btn_new">
                        Join Now<i className="fa-regular fa-angle-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinArea;
