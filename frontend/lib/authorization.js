// utils/auth.js

import { ContactPageOutlined } from "@mui/icons-material";
import supabase from "./supabase";
import supabaseAdmin from "./supabaseAdmin";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import { COOKIES, getSupabaseUser } from "./cookies";
import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";

export async function mustBeLoggedInServer(ctx) {
  const supabaseClient = createPagesServerClient(ctx, {
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    options: {},
    cookieOptions: { name: "SupabaseCookie" },
  });
  // Check if we have a session
  const {
    data: { session },
  } = await supabaseClient.auth.getSession();

  console.log("Session is" + session)

  if (!session)
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };

  const user = await supabaseClient.auth.getUser();

  let response = await supabaseAdmin
    .from("profiles")
    .select("*")
    .eq("user_id", user.data.user.id);
  if (response.error) {
    console.warn(
      "ERROR GETTING USER DATA: user does not exist in profiles table"
    );
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

export async function mustNotBeLoggedInServer(ctx) {
  const supabaseServerClient = createPagesServerClient(ctx, {
    supabaseUrl: process.env.NEXT_PUBLIC__SUPABASE_URL,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  });
  // Check if we have a session
  const {
    data: { session },
  } = await supabaseServerClient.auth.getSession();

  if (session)
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };

  return { props: {} };
}