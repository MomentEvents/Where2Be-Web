import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/seo';
import EventListTwoMain from '../components/eventListTwo';
const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Event List'} />
            <EventListTwoMain/>
        </Wrapper>
    );
};

export default index;