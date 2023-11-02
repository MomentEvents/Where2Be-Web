import React, { useState } from "react";
import overlay_img from "../../../public/assets/img/blog/trailer/trailer.jpg";
import ModalVideo from "react-modal-video";

const TrailerArea = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="trailer__area dark_light_class pt-60">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="trailer__wrapper p-relative">
                <div
                  className="trailer__thumb include__bg"
                  style={{ backgroundImage: `url(${overlay_img.src})` }}
                >
                  <div className="trailer__play-btn">
                    <button
                      type="button"
                      className="video__play-btn popup-video"
                      onClick={() => {
                        openVideoModal();
                      }}
                    >
                      <i className="fa-solid fa-play"></i> PLAY TRAILER
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="IaL8CXDJCX8"
        onClose={() => {
          openVideoModal();
        }}
      />
    </>
  );
};

export default TrailerArea;
