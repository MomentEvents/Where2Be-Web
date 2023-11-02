import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/seo";
import SingUpMain from "../components/signup";
import {
  mustNotBeLoggedInClient,
} from "../lib/authorization";

const index = () => {
  mustNotBeLoggedInClient();
  return (
    <Wrapper>
      <SEO pageTitle={"Signup"} />
      <SingUpMain />
    </Wrapper>
  );
};

export default index;
