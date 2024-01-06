import React from "react";
import Wrapper from "../../layout/wrapper";
import SEO from "../../components/seo";
import ExplorePageMain from "../../components/explorePage";
import LINKS from "../../constants/links";
import supabaseAdmin from "../../lib/supabaseAdmin";

const index = ({upcomingEvents, newestEvents, trendingEvents}) => {
  return (
    <Wrapper>
      <SEO
        pageTitle={"Explore Page"} pageImage={"https://i.imgur.com/QxtpgIP.png"}
      />
      <ExplorePageMain upcomingEvents={upcomingEvents} newestEvents={newestEvents} trendingEvents={trendingEvents}/>
    </Wrapper>
  );
};

export const getServerSideProps = async (context) => {
  try {
    const upcomingEventsResponse = await supabaseAdmin
      .from("events")
      .select("*")
      .order("start_date", { ascending: true })
      .limit(100);

    const newestEventsResponse = await supabaseAdmin
      .from("events")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(100);

    const trendingEventsResponse = await supabaseAdmin
      .from("events")
      .select("*")
      // TODO

    return {
      props: {
        upcomingEvents: upcomingEventsResponse.data,
        newestEvents: newestEventsResponse.data,
        trendingEvents: trendingEventsResponse.data,
      },
    };
  } catch (error) {
    console.error("Failed to fetch events", error);
    return {
      notFound: true,
    };
  }
};

export default index;