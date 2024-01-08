if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import "../styles/index.scss";
import AppProvider from "../context/AppContext";
import SEO from "../components/seo";
import { DarkModeProvider } from "../components/darkmode-provider/DarkModeProvider";
import supabase from "../lib/supabase";
import { deleteSupabaseCookies, setSupabaseCookies } from "../lib/cookies";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "../components/attendeeEventDetails/PhoneNumber.css";
import { Analytics } from "@vercel/analytics/react";

import NProgress from "nprogress";
import Router, { useRouter } from "next/router";

import "../public/assets/app/css/globals.css";

// Optional: import nprogress.css and customize it as needed
import "nprogress/nprogress.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleStop = () => NProgress.done();

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  supabase.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_OUT") {
      console.log("SUPABASE SIGNING OUT");
      deleteSupabaseCookies();
    } else if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
      console.log("SUPABASE SIGNED IN");
      setSupabaseCookies(session.access_token, session.refresh_token);
    }
  });
  return (
    <AppProvider>
      <SEO
        font={
          "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        }
        pageTitle={undefined}
        pageImage={undefined}
        pageDescription={undefined}
      />
      <Component {...pageProps} />
      <Analytics />
      {/* <SpeedInsights /> */}
    </AppProvider>
  );
}

export default MyApp;
