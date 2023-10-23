import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/seo';
import AttendenceMain from '../components/attendencePage';


const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'AttendenceList List'} />
             <AttendenceMain/>
        </Wrapper>
    );
};

export default index;