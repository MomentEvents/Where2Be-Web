import { useRouter } from "next/router";
import React from "react";
import Wrapper from "../../../layout/wrapper";
import SEO from "../../../components/seo";
import schedules from "../../../data/dashboardData/schduleEvent";
import { deleteSupabaseCookies } from "../../../lib/cookies";
import supabaseAdmin from "../../../lib/supabaseAdmin";

const EventDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  /*
  
    const profileJoinEventsResponse = await supabaseAdmin
      .from("profile_join_events")
      .select("*")
      .eq("event_id", id);

    if (profileJoinEventsResponse.error) throw profileJoinEventsResponse.error;

    const attendeeIds = profileJoinEventsResponse.data.map(
      (item) => item.user_id
    );

    const attendeeResponse = await supabaseAdmin
      .from("profiles")
      .select("*")
      .in("user_id", attendeeIds);

    if (profileJoinEventsResponse.error) throw profileJoinEventsResponse.error;


    const profiles = attendeeResponse.data;

    const profileJoinEvents = profileJoinEventsResponse.data;

    // Joining the data
    const attendeesWithJoinDate = profiles.map((profile) => {
      const joinEvent = profileJoinEvents.find(
        (event) => event.user_id === profile.user_id
      );
      return {
        ...profile,
        joinedAt: joinEvent ? joinEvent.created_at : null,
      };
    });

    // Sorting by 'created_at'
    const sortedAttendees = attendeesWithJoinDate.sort(
      (a, b) => new Date(a.joinedAt) - new Date(b.joinedAt)
    );

    // Now `sortedAttendees` is an array of attendee profiles with their join date,
    // sorted by the 'created_at' timestamp


      /*Continue Here*/

  return (
    <>
      <Wrapper>
        <SEO pageTitle={"Details"} />
        <EventDetailsMian schduleItem={schduleItem} />
      </Wrapper>
    </>
  );
};

export default EventDetails;

export const getServerSideProps = async (context) => {
  // TODO:

  // CHANGE THIS TO A USEEFFECT WHERE YOU CAN FETCH ATTENDEE RECORDS BASED ON PAGINATION SIMILAR TO THE HOSTED EVENTS LIST.
  // ONLY USE SERVERSIDE PROPS TO GET THE EVENT DATA AND THE USER DATA AND VERIFY THAT THE USER IS LOGGED IN AND IS THE HOST OF THE EVENT

  const { params } = context;
  const id = params.id;

  if (!id) {
    return {
      notFound: true,
    };
  }

  const user = await getSupabaseUser(
    context.req.cookies[COOKIES.access_token],
    context.req.cookies[COOKIES.refresh_token]
  );

  if (!user) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  try {
    const eventResponse = await supabaseAdmin
      .from("events")
      .select("*")
      .eq("event_id", id)
      .single();

    if (eventResponse.error) throw eventResponse.error;

    if (
      !eventResponse.data ||
      eventResponse.data.host_id !== user.data.user.id
    ) {
      return { notFound: true };
    }

    let response = await supabaseAdmin
      .from("profiles")
      .select("*")
      .eq("user_id", user.data.user.id);
    if (response.error) {
      console.warn(
        "ERROR GETTING USER DATA: user does not exist in profiles table"
      );
      deleteSupabaseCookies();
      return {
        redirect: {
          destination: "/signin",
          permanent: false,
        },
      };
    }

    const userData = { ...response.data[0], email: user.data.user.email };

    return {
      props: {
        event: eventResponse.data,
        userData: userData,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};
