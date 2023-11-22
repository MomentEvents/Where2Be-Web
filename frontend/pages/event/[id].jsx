import React from "react";
import { useRouter } from "next/router";
import { COOKIES, getSupabaseUser } from "../../lib/cookies";
import supabaseAdmin from "../../lib/supabaseAdmin"; // Assuming this is how you import supabaseAdmin

const EventDetails = ({ event }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <span>Id is {id}</span>
      {event && (
        <div>
          <h2>Event Details</h2>
          {JSON.stringify(event)}
        </div>
      )}
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const id = params.id;

  const user = await getSupabaseUser(
    context.req.cookies[COOKIES.access_token],
    context.req.cookies[COOKIES.refresh_token]
  );

  if (!id) {
    // Redirect to a different page or return a 404 not found
    return {
      notFound: true,
    };
  }

  try {
    const { data, error } = await supabaseAdmin
      .from("events")
      .select("*")
      .eq("event_id", id)
      .single();

    if (error) throw error;

    if (!data) {
      return { notFound: true };
    }

    data.is_host = user && data.host_id === user.data.user.id;

    return {
      props: {
        event: data,
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
