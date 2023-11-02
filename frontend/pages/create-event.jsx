import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/seo';
import CreateEventMain from '../components/createEventPage';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Create Event"}/>
            <CreateEventMain/>
        </Wrapper>
    );
};

export default index;