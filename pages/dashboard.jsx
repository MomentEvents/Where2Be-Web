import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import HomeMain from '../components/home';
import supabase from '../lib/supabase';
import { mustBeLoggedIn } from '../lib/authorization';

const index = () => {

  return (
    <Wrapper>
      <SEO pageTitle={'Dashboard'} />
      <HomeMain/>
    </Wrapper>
  );
};

// Server side checks
export async function getServerSideProps(context) {
  return mustBeLoggedIn(context)
}

export default index;