import { Provider } from "react-redux";
import { store } from "../redux/store";
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
import Router from "next/router";

import "../public/assets/app/css/globals.css";

// Optional: import nprogress.css and customize it as needed
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
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
    <Provider store={store}>
      <DarkModeProvider>
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
          <SpeedInsights />
        </AppProvider>
      </DarkModeProvider>
    </Provider>
  );
}

export default MyApp;
