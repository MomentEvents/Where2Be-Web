import React from "react";
import supabase from "../lib/supabase";
import { setCookie, deleteCookie } from 'cookies-next';



const Wrapper = ({ children }) => {
  // supabase.auth.onAuthStateChange((event, session) => {
  //   if (event === "SIGNED_OUT" || event === "USER_DELETED") {
  //     console.log("SUPABASE SIGNING OUT")
  //     deleteCookie('supabase-access-token')
  //     deleteCookie('supabase-refresh-token')
  //   } else if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
  //     console.log("SUPABASE SIGNED IN");
  //     setCookie('supabase-access-token', session.access_token);
  //     setCookie('supabase-refresh-token', session.refresh_token);
  //   }
  // });
  return <>{children}</>;
};

export default Wrapper;
