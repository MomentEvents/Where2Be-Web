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

import NProgress from 'nprogress';
import Router from 'next/router';

import "../public/assets/app/css/globals.css"; 

// Optional: import nprogress.css and customize it as needed
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  supabase.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_OUT" || event === "USER_DELETED") {
      console.log("SUPABASE SIGNING OUT");
      deleteSupabaseCookies();
    } else if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
      console.log("SUPABASE SIGNED IN");
      setSupabaseCookies(session.access_token, session.refresh_token);
    }
  });
  return (
    <>
      <SEO
        font={
          "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        }
      />
      <Provider store={store}>
        <DarkModeProvider>
          <AppProvider>
            <Component {...pageProps} />
          </AppProvider>
        </DarkModeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
