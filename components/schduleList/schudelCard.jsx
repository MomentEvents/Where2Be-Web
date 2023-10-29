import React from "react";
import metImg1 from "../../public/assets/img/meta/schedule/01.png";
import metImg2 from "../../public/assets/img/meta/schedule/02.png";
import metImg3 from "../../public/assets/img/meta/schedule/03.png";
import metImg4 from "../../public/assets/img/meta/schedule/04.png";
import Link from "next/link";
const SchduleCard = ({ pageOne }) => {
  return (
    <>
      {pageOne.length > 0 &&
        pageOne.map((data, index) => (
          <div key={index} className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
            <div className="schedule__blog-item mb-30">
              <div className="schedule__content">
                <div className="schedule__blog-meta">
                  <div className="news__meta-status">
                    <span>
                      <i className={data.userIcon}></i>
                    </span>
                    <span> {data.Name} </span>
                  </div>
                  <div className="news__meta-status">
                    <span>
                      <i className={data.clockIcon}></i>
                    </span>
                    <span>{data.time}</span>
                  </div>
                </div>
                <h5 className="schedule__blog-title">
                  <Link legacyBehavior href={`/schdule-details/${data.id}`}>
                    <a>{data.title}</a>
                  </Link>
                </h5>
                <div className="schedule__blog-location">
                  <div className="news__meta-status">
                    <span>
                      <i className={data.locationIcon}></i>
                    </span>
                    <span>{data.location}</span>
                  </div>
                </div>
              </div>
              <div className="schedule__blog-thumb w-img">
                <div className="schedule__tag-post">
                  <div className="event__tag-item">
                    <span>
                      <Link legacyBehavior href={`/schdule-details/${data.id}`}>
                        <a>{data.imgLink1}</a>
                      </Link>
                    </span>
                  </div>
                  <div className="event__tag-item">
                    <span>
                      <Link legacyBehavior href={`/schdule-details/${data.id}`}>
                        <a>{data.imgLink2}</a>
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="schedule__meta-thumb">
                  <img src={metImg1.src} alt="image not found" />
                  <img src={metImg2.src} alt="image not found" />
                  <img src={metImg3.src} alt="image not found" />
                  <img src={metImg4.src} alt="image not found" />
                  <div className="">
                    <span className="schedule__meta-count">02+</span>
                  </div>
                </div>
                <Link legacyBehavior href={`/schdule-details/${data.id}`}>
                  <a>
                    <img src={data.thumbnail.src} alt="image not found" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default SchduleCard;
