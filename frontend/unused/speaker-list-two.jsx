import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/seo';
import SpeakerListTwoMain from '../components/speakerListTwo';
const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Speaker List'} />
            <SpeakerListTwoMain/>
        </Wrapper>
    );
};

export default index;