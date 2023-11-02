import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/seo";
import VenuMain from "../components/venu";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Venue"} />
      <VenuMain />
    </Wrapper>
  );
};

export default index;
