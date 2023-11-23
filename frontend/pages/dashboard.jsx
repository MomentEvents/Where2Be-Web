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
import SchduleListMain from "../components/schduleList";
import { mustBeLoggedInServer } from "../lib/authorization";
import { AppContext } from "../context/AppContext";

const index = (props) => {
  const { setCurrentUser } = useContext(AppContext);
  setCurrentUser(props.userData);

  return (
    <Wrapper>
      <SEO pageTitle={"Events"} />
      <SchduleListMain />
    </Wrapper>
  );
};

export const getServerSideProps = async (context) => {
  return mustBeLoggedInServer(context);
};

export default index;
