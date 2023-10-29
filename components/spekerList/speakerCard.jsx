import Link from "next/link";
import React from "react";

const SpeakerCard = ({ speakerData }) => {
  return (
    <>
      {speakerData.length > 0 &&
        speakerData.map((speaker, index) => (
          <div key={index} className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
            <div className="speaker__list-item mb-30">
              <div className="speaker__list-thumb">
                <Link legacyBehavior href={`/speaker-details/${speaker.id}`}>
                  <a>
                    <img src={speaker.thubnail.src} alt="image not found" />
                  </a>
                </Link>
              </div>
              <div className="speaker__list-content-inner">
                <div className="speaker__list-content">
                  <h5 className="speaker__author-title">
                    <Link legacyBehavior href={`/speaker-details/${speaker.id}`}>
                      <a>{speaker.title}</a>
                    </Link>
                  </h5>
                  <span className="speaker__author-info">
                    {speaker.authorInfo}
                  </span>
                </div>
                <div className="speaker__list-social">
                  <Link legacyBehavior href="https://www.facebook.com/" target="_blank">
                    <a>
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </Link>
                  <Link legacyBehavior href="https://twitter.com/" target="_blank">
                    <a>
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </Link>
                  <Link legacyBehavior href="https://bd.linkedin.com/" target="_blank">
                    <a>
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </Link>
                  <Link legacyBehavior href="https://www.youtube.com/" target="_blank">
                    <a>
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default SpeakerCard;
