// List of hosted events from a specific host

import { NextApiRequest, NextApiResponse } from "next";
import { COOKIES, getSupabaseUser } from "../../../../lib/cookies";
import supabaseAdmin from "../../../../lib/supabaseAdmin";

export default async function handler(req, res) {
  // Extract id from the query parameters
  const id = req.query.host_id;
  const page = parseInt(req.query.page) || 1;
  console.log(JSON.stringify(req.query.future));
  const future = req.query.future === "true" || false;
  const limit = 10;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit - 1;
  console.log("start index: " + startIndex);
  console.log("end index: " + endIndex);
  const currentDate = new Date().toISOString(); // Current date in ISO format

  if (!id) {
    // If no id is provided, send an error response
    return res.status(400).send({ error: "Host ID is required" });
  }

  try {
    // Fetch the row from the 'events' table where event_id matches the provided id
    const eventResponse = future
      ? await supabaseAdmin
          .from("events")
          .select("*")
          .eq("host_id", id)
          .gt("start_date", currentDate)
          .order("start_date", { ascending: true })
          .limit(limit)
          .range(startIndex, endIndex)
      : await supabaseAdmin
          .from("events")
          .select("*")
          .eq("host_id", id)
          .lte("start_date", currentDate)
          .order("start_date", { ascending: false })
          .limit(limit)
          .range(startIndex, endIndex);

    if (eventResponse.error) {
      // If there's an error in the query, send an error response
      throw eventResponse.error;
    }

    if (eventResponse.error) {
      throw eventResponse.error;
    }

    // Fetch all attendee records for the fetched events in a single query
    const eventIds = eventResponse.data.map((event) => event.event_id);
    const attendeeResponse = await supabaseAdmin
      .from("profile_join_events")
      .select("event_id")
      .in("event_id", eventIds);

    if (attendeeResponse.error) {
      throw attendeeResponse.error;
    }

    // Count attendees for each event
    const attendeeCounts = attendeeResponse.data.reduce((acc, curr) => {
      acc[curr.event_id] = (acc[curr.event_id] || 0) + 1;
      return acc;
    }, {});

    // Combine events with attendee counts
    const eventsWithAttendeeCounts = eventResponse.data.map((event) => {
      return {
        ...event,
        attendee_count: attendeeCounts[event.event_id] || 0,
      };
    });

    return res.status(200).json(eventsWithAttendeeCounts);

  } catch (error) {
    // Handle any other errors
    return res.status(500).send({ error: error.message });
  }
}
