import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/seo";
import LandingPageMain from "../components/landingPage";
import LINKS from "../constants/links";

const index = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle={"Landing Page"} pageImage={"https://i.imgur.com/uusaR72.png"}
      />
      <LandingPageMain />
    </Wrapper>
  );
};

export default index;


// import React from "react";
// import Wrapper from "../layout/wrapper";
// import SEO from "../components/seo";
// import ExplorePageMain from "../components/explorePage";
// import supabaseAdmin from "../lib/supabaseAdmin";

// const index = ({upcomingEvents, newestEvents, trendingEvents}) => {
//   return (
//     <Wrapper>
//       <SEO
//         pageTitle={"Events @ UCSD"} pageImage={"https://i.imgur.com/uusaR72.png"}
//       />
//       <ExplorePageMain upcomingEvents={upcomingEvents} newestEvents={newestEvents} trendingEvents={trendingEvents}/>
//     </Wrapper>
//   );
// };

// export const getServerSideProps = async (context) => {
//   try {
//     const today = new Date().toISOString();

//     const upcomingEventsResponse = await supabaseAdmin
//     .from("events")
//     .select("*")
//     .gt("start_date", today)
//     .order("start_date", { ascending: true })
//     .limit(100);

//     return {
//       props: {
//         upcomingEvents: upcomingEventsResponse.data,
//         newestEvents: null,
//         trendingEvents: null,
//       },
//     };
//   } catch (error) {
//     console.error("Failed to fetch events", error);
//     return {
//       notFound: true,
//     };
//   }
// };

// export default index;