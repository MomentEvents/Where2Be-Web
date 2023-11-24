import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/seo';
import SpeakerMain from '../components/spekerList';

const index = () => {
    return (
        <Wrapper>
        <SEO pageTitle={'Speaker List'} />
         <SpeakerMain/>
    </Wrapper>
    );
};

export default index;