import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/seo";
import SignInPage from "../components/signin";
import {
  mustNotBeLoggedInClient,
  mustNotBeLoggedInServer,
} from "../lib/authorization";

const index = () => {
  mustNotBeLoggedInClient();
  return (
    <Wrapper>
      <SEO pageTitle={"Singin"} />
      <SignInPage />
    </Wrapper>
  );
};

export default index;
