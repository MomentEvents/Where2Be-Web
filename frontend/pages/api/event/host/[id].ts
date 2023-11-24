// List of hosted events from a specific host

import { NextApiRequest, NextApiResponse } from "next";
import { COOKIES, getSupabaseUser } from "../../../../lib/cookies";
import supabaseAdmin from "../../../../lib/supabaseAdmin";

export default async function handler(req, res) {
  // Extract id from the query parameters
  const id = req.query.id;
  const page = parseInt(req.query.page) || 1;
  console.log(JSON.stringify(req.query.future))
  const future = req.query.future === "true" || false;
  const limit = 5;
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
          .range(startIndex, endIndex) :
          await supabaseAdmin
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

    return res.status(200).json(eventResponse.data);
  } catch (error) {
    // Handle any other errors
    return res.status(500).send({ error: error.message });
  }
}
