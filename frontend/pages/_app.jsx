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
