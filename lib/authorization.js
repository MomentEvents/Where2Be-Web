// utils/auth.js

import supabase from "./supabase";

export async function mustBeLoggedIn(context) {
  // Prevent caching by setting headers
  if (context.res) {
    context.res.setHeader("Cache-Control", "no-store, max-age=0");
  }

  const user = await supabase.auth.getUser();

  if (user?.error) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  return { props: {} };
}

export async function mustNotBeLoggedIn(context) {
  // Prevent caching by setting headers
  if (context.res) {
    context.res.setHeader("Cache-Control", "no-store, max-age=0");
  }

  const user = await supabase.auth.getUser();

  if (!user?.error) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return { props: {} };
}
