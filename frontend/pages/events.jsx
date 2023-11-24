import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/seo";
import HostedEventsList from "../components/hostedEventsList";
import { mustBeLoggedInServer } from "../lib/authorization";
import { AppContext } from "../context/AppContext";

const index = (props) => {
  const { setCurrentUser } = useContext(AppContext);
  setCurrentUser(props.userData);

  return (
    <Wrapper>
      <SEO pageTitle={"Events"} />
      <HostedEventsList />
    </Wrapper>
  );
};

export const getServerSideProps = async (context) => {
  return mustBeLoggedInServer(context);
};

export default index;
