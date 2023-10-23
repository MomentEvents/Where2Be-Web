

import { useRouter } from 'next/router';
import React from 'react';
import Wrapper from '../../layout/wrapper';
import SEO from '../../components/seo';
import EventDetailsMian from '../../components/dynamicEventDetails/EventDetailsMian';
import schedules from '../../data/dashboardData/schduleEvent';

const EventDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const schduleItem = schedules?.find((item) => item.id == id);
    if (!schduleItem) {
      return <div>Loading...</div>;
    }
    return (
        <>
            <Wrapper>
            <SEO pageTitle={"Schdule-Details"}/>
            <EventDetailsMian schduleItem={schduleItem}/>
        </Wrapper>
        </>
    );
};

export default EventDetails;