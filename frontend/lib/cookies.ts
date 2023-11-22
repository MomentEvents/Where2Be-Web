/*
We can either use cookies to access the user server side via api routes or we 
can just use supabase's client to access data using the supabase object.
By calling setSupabaseCookies and deleteSupabaseCookies, we can sync the two
such that we can get the best of both worlds.

tldr cookies are used for server side processes, not for client side processes
*/

import { deleteCookie, getCookie, setCookie } from "cookies-next";
import supabase from "./supabase";

export const COOKIES = {
  access_token: "supabase-access-token",
  refresh_token: "supabase-refresh-token",
};

export const setSupabaseCookies = (access_token, refresh_token) => {
  setCookie(COOKIES.access_token, access_token)
  setCookie(COOKIES.refresh_token, refresh_token)
};

export const deleteSupabaseCookies = () => {
  deleteCookie(COOKIES.access_token);
  deleteCookie(COOKIES.refresh_token);
};

export const getSupabaseUser = async (access_token, refresh_token) => {
  if (!access_token || !refresh_token) {
    deleteSupabaseCookies();
    return undefined;
  }

  await supabase.auth.setSession({
    access_token: access_token,
    refresh_token: refresh_token,
  });

  const user = await supabase.auth.getUser();

  if (!user?.data?.user || user?.error) {
    console.log("USER ERROR IS " + user?.error.message)
    return undefined;
  }

  return user;
};
