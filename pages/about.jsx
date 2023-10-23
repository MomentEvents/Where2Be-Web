import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/seo';
import AboutMain from '../components/aboutPage/aboutMain';


const index = () => {
    return (
        <Wrapper>
        <SEO pageTitle={'About'} />
        <AboutMain/>
    </Wrapper>
    );
};

export default index;