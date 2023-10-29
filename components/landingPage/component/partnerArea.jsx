import React from "react";
import partners from "../../../data/_partnerThumb";
import Link from "next/link";
import TitleUnderLineIcon from "../../../utils/SVG/titleUnderLineIcon";

const PartnerArea = () => {
  return (
    <>
      <div className="partner__area grey-bg pt-175 pb-150">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-6">
              <div className="section__title-wrapper is-center text-center mb-110">
                <span className="section__back-title">P</span>
                <span className="section__subtitle">EVENT SPONSORS</span>
                <h2 className="section__title">
                  Organize <span className="text__highlight"> Partner <TitleUnderLineIcon />
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="partner__grid-wrapper">
                {partners.length > 0 &&
                  partners.map((item, index) => (
                    <div key={index} className="partner__item">
                      <div className="partner__thumb">
                        <Link legacyBehavior href="#">
                          <img src={item.thubmnail.src} alt="image not found" />
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerArea;
