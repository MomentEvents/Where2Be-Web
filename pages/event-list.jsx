import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/seo';
import EventListMain from '../components/eventListPage';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Event List"}/>
            <EventListMain/>
        </Wrapper>
    );
};

export default index;