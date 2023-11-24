import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/seo';
import UiElementMain from '../components/elementPage';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Element"}/>
            <UiElementMain/>
        </Wrapper>
    );
};

export default index;