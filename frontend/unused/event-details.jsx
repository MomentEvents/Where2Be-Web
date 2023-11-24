import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/seo';
import EvenDetailsMain from '../components/evnetDetailsPage';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Event Details"}/>
            <EvenDetailsMain/>
        </Wrapper>
    );
};

export default index;