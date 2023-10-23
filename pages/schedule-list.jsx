import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/seo';
import SchduleListMain from '../components/schduleList';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Schedule List'} />
             <SchduleListMain/>
        </Wrapper>
    );
};

export default index;