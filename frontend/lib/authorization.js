// utils/auth.js

import { ContactPageOutlined } from "@mui/icons-material";
import supabase from "./supabase";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import { COOKIES, getSupabaseUser } from "./cookies";

export async function mustBeLoggedInServer(context) {
  const refreshToken = context.req.cookies[COOKIES.refresh_token];
  const accessToken = context.req.cookies[COOKIES.access_token];

  const user = await getSupabaseUser(accessToken, refreshToken)

  console.log(user);

  if (!user?.data?.user || user?.error) {
    console.warn("CASE 2 MUSTBELOGGEDIN")
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  return { props: {} };
}

export async function mustNotBeLoggedInServer(context) {
  const refreshToken = context.req.cookies[COOKIES.refresh_token];
  const accessToken = context.req.cookies[COOKIES.access_token];

  const user = await getSupabaseUser(accessToken, refreshToken)

  if (user?.data?.user) {
    console.warn("CASE 2 MUSTNOTBELOGGEDIN")

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
