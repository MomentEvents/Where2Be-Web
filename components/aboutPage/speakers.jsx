import React from "react";
import dynamic from "next/dynamic";
const SpeakerSlider = dynamic(() => import('./speakerSlider'), {
  ssr: false
})

const Speakers = () => {
  return (
    <>
      <SpeakerSlider />
    </>
  );
};

export default Speakers;
