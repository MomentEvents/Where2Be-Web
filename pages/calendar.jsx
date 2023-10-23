import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/seo';
import CalenderMain from '../components/calender';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Calender'} />
             <CalenderMain/>
        </Wrapper>
    );
};

export default index;