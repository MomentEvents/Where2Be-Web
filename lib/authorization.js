// utils/auth.js

import { ContactPageOutlined } from "@mui/icons-material";
import supabase from "./supabase";
import { useRouter } from "next/router";

export async function mustBeLoggedInServer(context) {
  // Prevent caching by setting headers
  if (context.res) {
    context.res.setHeader("Cache-Control", "no-store, max-age=0");
  }

  const session = await supabase.auth.getSession()

  if (session?.error) {
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
  //   Prevent caching by setting headers
  if (context.res) {
    context.res.setHeader("Cache-Control", "no-store, max-age=0");
  }

  const session = await supabase.auth.getSession()
  console.log(session);

  if (session?.data?.session) {
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
    const router = useRouter()
    const user = await supabase.auth.getUser()

    if(!user?.data?.user || user?.error){
        router.push("/signin")
    }
    return user
}

export async function mustNotBeLoggedInClient() {
    const router = useRouter()
    const user = await supabase.auth.getUser()

    if(user?.data?.user){
        router.push("/dashboard")
    }
    return user
}