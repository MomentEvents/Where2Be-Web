import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/seo';
import BlogMain from '../components/blog/blogMain';

const index = () => {
    return (
        <Wrapper>
        <SEO pageTitle={'Blog'} />
         <BlogMain/>
    </Wrapper>
    );
};

export default index;