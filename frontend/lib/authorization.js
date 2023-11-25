// utils/auth.js

import { ContactPageOutlined } from "@mui/icons-material";
import supabase from "./supabase";
import supabaseAdmin from "./supabaseAdmin";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import { COOKIES, deleteSupabaseCookies, getSupabaseUser } from "./cookies";

export async function mustBeLoggedInServer(context) {
  const refreshToken = context.req.cookies[COOKIES.refresh_token];
  const accessToken = context.req.cookies[COOKIES.access_token];

  const user = await getSupabaseUser(accessToken, refreshToken);

  if (!user?.data?.user || user?.error) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  if (!user.data.user.email) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  let response = await supabaseAdmin
    .from("profiles")
    .select("*")
    .eq("user_id", user.data.user.id);
  if (response.error) {
    console.warn(
      "ERROR GETTING USER DATA: user does not exist in profiles table"
    );
    deleteSupabaseCookies();
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  const userData = { ...response.data[0], email: user.data.user.email };

  return {
    props: { userData },
  };
}

export async function mustNotBeLoggedInServer(context) {
  const refreshToken = context.req.cookies[COOKIES.refresh_token];
  const accessToken = context.req.cookies[COOKIES.access_token];

  const user = await getSupabaseUser(accessToken, refreshToken);

  if (user?.data?.user && user.data.user.email) {
    console.warn("CASE 2 MUSTNOTBELOGGEDIN");

    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return { props: {} };
}

export async function mustBeLoggedInClient() {
  const router = useRouter();
  const user = await supabase.auth.getUser();

  if (!user?.data?.user || user?.error) {
    router.replace("/signin");
  }
  return user;
}

export async function mustNotBeLoggedInClient() {
  const router = useRouter();
  const user = await supabase.auth.getUser();

  if (user?.data?.user) {
    router.replace("/dashboard");
  }
  return user;
}
