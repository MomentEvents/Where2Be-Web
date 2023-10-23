import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/seo';
import PricingMain from '../components/pricing';
const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Pricing'} />
            <PricingMain/>
        </Wrapper>
    );
};

export default index;