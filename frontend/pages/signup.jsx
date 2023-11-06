import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/seo";
import SingUpMain from "../components/signup";
import {
  mustNotBeLoggedInClient, mustNotBeLoggedInServer,
} from "../lib/authorization";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Signup"} />
      <SingUpMain />
    </Wrapper>
  );
};

export const getServerSideProps = (async (context) => {
  return mustNotBeLoggedInServer(context)
}) 
 

export default index;
