import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/seo';
import SettingMain from '../components/setting';

const index = () => {
    return (
        <Wrapper>
        <SEO pageTitle={'Setting'} />
         <SettingMain/>
    </Wrapper>
    );
};

export default index;