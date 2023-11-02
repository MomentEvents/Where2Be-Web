import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/seo';
import ProfileMain from '../components/profile';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Profile'} />
             <ProfileMain/>
        </Wrapper>
    );
};

export default index;