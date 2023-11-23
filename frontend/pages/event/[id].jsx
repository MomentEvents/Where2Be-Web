import React from "react";
import { useRouter } from "next/router";
import { COOKIES, getSupabaseUser } from "../../lib/cookies";
import supabaseAdmin from "../../lib/supabaseAdmin"; // Assuming this is how you import supabaseAdmin
import Wrapper from "../../layout/wrapper";
import SEO from "../../components/seo";
import EventDetailsMain from "../../components/eventDetails";

const EventDetails = ({ event, host }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Wrapper>
      <SEO pageTitle={event.title} pageImage={event.image} />
      <EventDetailsMain event={event} host={host} />
    </Wrapper>
  );
};

export const getServerSideProps = async (context) => {
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

  try {
    const eventResponse = await supabaseAdmin
      .from("events")
      .select("*")
      .eq("event_id", id)
      .single();

    if (eventResponse.error) throw eventResponse.error;

    if (!eventResponse.data) {
      return { notFound: true };
    }

    if (user) {
      eventResponse.data.is_host =
        eventResponse.data.host_id === user.data.user.id;
    } else {
      eventResponse.data.is_host = false;
    }

    const hostResponse = await supabaseAdmin
      .from("profiles")
      .select("*")
      .eq("user_id", eventResponse.data.host_id)
      .single();

    console.log(hostResponse);

    if (hostResponse.error) throw hostResponse.error;

    if (!hostResponse.data) {
      return { notFound: true };
    }

    return {
      props: {
        event: eventResponse.data,
        host: hostResponse.data,
      },
    };
  } catch (error) {
    console.error("Failed to fetch event", error);
    return {
      notFound: true,
    };
  }
};

export default EventDetails;
