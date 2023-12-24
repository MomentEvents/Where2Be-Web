import React from "react";
import Wrapper from "../../layout/wrapper";
import SEO from "../../components/seo";
import ExplorePageMain from "../../components/explorePage";
import LINKS from "../../constants/links";

const index = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle={"Explore Page"} pageImage={"https://i.imgur.com/QxtpgIP.png"}
      />
      <ExplorePageMain />
    </Wrapper>
  );
};

export default index;