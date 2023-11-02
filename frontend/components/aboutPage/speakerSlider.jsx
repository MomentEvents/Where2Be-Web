import React from "react";
import speakerData from "../../data/speakercontentdata/speakerdata";
import SpeakerSliderCards from "./SpeakerSliderCards";
import TitleUnderLineIcon from "../../utils/SVG/titleUnderLineIcon";

const SpeakerSlider = ({speaker_space}) => {
  return (
    <>
        <div className={`speaker__area pb-60 ${speaker_space ? speaker_space : ""}`}>
          <div className="schedule__content container-fluid">
          <div className="row justify-content-center">
            <div className="col-xxl-6">
              <div className="section__title-wrapper is-center text-center mb-110">
                <h2 className="section__title">
                  TALENTED <span className="text__highlight"> SPEAKERS <TitleUnderLineIcon/></span>
                </h2>
              </div>
            </div>
          </div>
            <div className="rows">
              <SpeakerSliderCards speakerData={speakerData} />
            </div>
          </div>
        </div>
    </>
  );
};

export default SpeakerSlider;
