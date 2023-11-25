import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/seo";
import LandingPageMain from "../components/landingPage";
import LINKS from "../constants/links";

const index = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle={"Landing Page"} pageImage={"https://i.imgur.com/QxtpgIP.png"}
      />
      <LandingPageMain />
    </Wrapper>
  );
};

export default index;
