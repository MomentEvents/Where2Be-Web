// import SEO from "../components/seo";
// import Wrapper from "../layout/wrapper";
// import HomeMain from "../components/home";
// import supabase from "../lib/supabase";
// import {
//   mustBeLoggedInClient,
//   mustBeLoggedInServer,
// } from "../lib/authorization";
// import { useContext } from "react";
// import { AppContext } from "../context/AppContext";
// import showMessage from "../components/errorMessage/showMessage";

// const index = (props) => {
//   const { setCurrentUser } = useContext(AppContext);
//   setCurrentUser(props.userData)

//   return (
//     <Wrapper>
//       <SEO pageTitle={"Dashboard"} />
//       <HomeMain />
//     </Wrapper>
//   );
// };

// export const getServerSideProps = async (context) => {
//   return mustBeLoggedInServer(context);
// };

// export default index;

import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/seo";
import HostedEventsList from "../components/hostedEventsList";
import { mustBeLoggedInServer } from "../lib/authorization";
import { AppContext } from "../context/AppContext";
import LINKS from "../constants/links";

const index = (props) => {
  const { setCurrentUser } = useContext(AppContext);
  setCurrentUser(props.userData);

  return (
    <Wrapper>
      <SEO pageTitle={"Events"} pageImage={LINKS.PageImage} />
      <HostedEventsList user={props.userData} />
    </Wrapper>
  );
};

export const getServerSideProps = async (context) => {
  return mustBeLoggedInServer(context);
};

export default index;
