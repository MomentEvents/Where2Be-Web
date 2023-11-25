import { NextApiRequest, NextApiResponse } from "next";
import { COOKIES, getSupabaseUser } from "../../../../lib/cookies";
import supabaseAdmin from "../../../../lib/supabaseAdmin";

export default async function handler(req, res) {

    console.log("getting event")
  const user = await getSupabaseUser(
    req.cookies[COOKIES.access_token],
    req.cookies[COOKIES.refresh_token]
  );

  // Extract id from the query parameters
  const id = req.query.event_id;

  if (!id) {
    // If no id is provided, send an error response
    return res.status(400).send({ error: "Event ID is required" });
  }

  try {
    // Fetch the row from the 'events' table where event_id matches the provided id
    const { data, error } = await supabaseAdmin
      .from("events")
      .select("*")
      .eq("event_id", id)
      .single();

    if (error) {
      // If there's an error in the query, send an error response
      throw error;
    }

    console.log(data);


    if (!data) {
      // If no data is found, send a 404 response
      return res.status(404).send({ message: "Event not found" });
    }

    data.is_host = user && (data.host_id === user.data.user.id)

    return res.status(200).json(data);
  } catch (error) {
    // Handle any other errors
    return res.status(500).send({ error: error.message });
  }
}
