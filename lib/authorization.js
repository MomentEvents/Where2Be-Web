// utils/auth.js

import supabase from "./supabase";

export async function checkServerSideAuth(context) {
  // Here, you might need to use your own method to check authentication on the server side.
  // This is just an example that assumes you have a method on supabase to check server-side auth.
  const user = await supabase.auth.getUser();

  if (!user) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false, // This is a temporary redirect
      },
    };
  }

  return { props: {} };
}
