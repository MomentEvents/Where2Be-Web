import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/seo';
import EventDetailsTwoMain from '../components/eventDetailsTwo';
const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Event Details'} />
            <EventDetailsTwoMain/>
        </Wrapper>
    );
};

export default index;