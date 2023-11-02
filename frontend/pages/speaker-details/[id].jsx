import { useRouter } from 'next/router';
import React from 'react';
import Wrapper from '../../layout/wrapper';
import SEO from '../../components/seo';
import ProfileDetailsMain from '../../components/speaker-details/ProfileDetailsMain';
import speakerData from '../../data/speakercontentdata/speakerdata';

const ProfileDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const speaker = speakerData?.find((item) => item.id == id);
    if (!speaker) {
      return <div>Loading...</div>;
    }
    return (
        <>
            <Wrapper>
            <SEO pageTitle={"Speaker Details"}/>
            <ProfileDetailsMain speaker={speaker}/>
        </Wrapper>
        </>
    );
};

export default ProfileDetails;