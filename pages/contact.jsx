import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/seo';
import ContactMain from '../components/contactPage/ContactMain';
const index = () => {
    return (
    <Wrapper>
        <SEO pageTitle={'Contact'} />
        <ContactMain/>
    </Wrapper>
    );
};

export default index;