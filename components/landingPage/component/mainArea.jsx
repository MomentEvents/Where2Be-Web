import React from "react";
import dynamic from "next/dynamic";
const EventSchdule = dynamic(() => import('./evnetSchdule'), {
  ssr: false
})
const Gallery = dynamic(() => import('./gallery'), {
  ssr: false
})
const SpeakerSlider = dynamic(() => import('../../aboutPage/speakerSlider'), {
  ssr: false
})
const BlogArea = dynamic(() => import('./blogArea'), {
  ssr: false
})
const Testimonial = dynamic(() => import('./testimonial'), {
  ssr: false
})
import Banner from "./banner";
import About from "./about";
import JoinArea from "./joinnArea";
import CounterArea from "./counterArea";
import PricingArea from "./pricingArea";
import PartnerArea from "./partnerArea";
import TrailerArea from "./trailerArea";
import Footer from "./footer";

const MainAria = () => {
  return (
    <>
        <Banner />
        <About pb="pb-90"/>
        <JoinArea />
        <EventSchdule />
        <CounterArea />
        <Testimonial />
        <Gallery />
        <PricingArea />
        <PartnerArea />
        <SpeakerSlider speaker_space="pt-150 dark_light_class speaker-bg-white" />
        <TrailerArea />
        <BlogArea />
      <Footer />
    </>
  );
};

export default MainAria;
