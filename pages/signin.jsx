import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/seo';
import SignInPage from '../components/signin';


const index = () => {
    return (
        <Wrapper>
        <SEO pageTitle={'Singin'} />
         <SignInPage/>
    </Wrapper>
    );
};

export default index;