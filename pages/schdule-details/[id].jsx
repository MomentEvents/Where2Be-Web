import { useRouter } from 'next/router';
import React from 'react';
import Wrapper from '../../layout/wrapper';
import SEO from '../../components/seo';
import SchduleDetailsMain from '../../components/schdule-details/SchduleDetailsMain';
import pageOne from '../../data/schduleContentData/pageOne';

const SchduleDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const schduleItem = pageOne?.find((item) => item.id == id);
    if (!schduleItem) {
      return <div>Loading...</div>;
    }
    return (
        <>
            <Wrapper>
            <SEO pageTitle={"Schdule-Details"}/>
            <SchduleDetailsMain schduleItem={schduleItem}/>
        </Wrapper>
        </>
    );
};

export default SchduleDetails;