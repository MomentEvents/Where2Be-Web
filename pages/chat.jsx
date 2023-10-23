import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/seo';
import ChatMain from '../components/chat';

const index = () => {
    return (
        <Wrapper>
        <SEO pageTitle={"Chat"}/>
        <ChatMain/>
    </Wrapper>
    );
};

export default index;