import React from "react";
import supabase from "../lib/supabase";
import { setCookie, deleteCookie } from 'cookies-next';



const Wrapper = ({ children }) => {
  return <>{children}</>;
};

export default Wrapper;
