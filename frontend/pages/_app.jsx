import { Provider } from 'react-redux'
import { store } from '../redux/store';
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import '../styles/index.scss';
import AppProvider from '../context/AppContext';
import SEO from '../components/seo';
import { DarkModeProvider } from '../components/darkmode-provider/DarkModeProvider';
import supabase from '../lib/supabase';

function MyApp({ Component, pageProps }) {

  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_OUT' || event === 'USER_DELETED') {
      // delete cookies on sign out
      const expires = new Date(0).toUTCString()
      document.cookie = `supabase-access-token=; path=/; expires=${expires}; SameSite=Lax; secure`
      document.cookie = `supabase-refresh-token=; path=/; expires=${expires}; SameSite=Lax; secure`
    } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
      const maxAge = 100 * 365 * 24 * 60 * 60 // 100 years, never expires
      document.cookie = `supabase-access-token=${session.access_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`
      document.cookie = `supabase-refresh-token=${session.refresh_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`
    }
  })

  return (
    <>
    <SEO font={'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap'} />
      <Provider store={store}>
        <DarkModeProvider>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
        </DarkModeProvider>
      </Provider>
    </>
  )
}

export default MyApp
