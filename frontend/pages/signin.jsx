import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/seo";
import SignInPage from "../components/signin";
import {
  mustNotBeLoggedInClient,
  mustNotBeLoggedInServer,
} from "../lib/authorization";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Sign In"} />
      <SignInPage />
    </Wrapper>
  );
};

export const getServerSideProps = (async (context) => {
  return mustNotBeLoggedInServer(context)
}) 
 

export default index;
