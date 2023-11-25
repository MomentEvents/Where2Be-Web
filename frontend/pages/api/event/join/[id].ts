import { NextApiRequest, NextApiResponse } from "next";
import { COOKIES, getSupabaseUser } from "../../../../lib/cookies";
import supabaseAdmin from "../../../../lib/supabaseAdmin";

export default async function handler(req, res) {
  console.log("getting event");
  const user = await getSupabaseUser(
    req.cookies[COOKIES.access_token],
    req.cookies[COOKIES.refresh_token]
  );

  // Extract id from the query parameters
  const { id } = req.query;

  if (!id) {
    // If no id is provided, send an error response
    return res.status(400).send({ error: "Event ID is required" });
  }

  if(!user){
    return res.status(401).send({ error: "User not logged in" });
  }

  try {

    const { data, error } = await supabaseAdmin
      .from("profile_join_events")
      .insert({
        "user_id": user.data.user.id,
        "event_id": id,
      })

    if (error) {
      // Check if the error is due to the unique constraint violation
      if (error.code === '23505') {
        return res.status(200).json({ message: "You have already joined this event :)" });
      }
      throw error;
    }

    return res.status(200).json({message: "Successfully joined the event!"});
  } catch (error) {
    // Handle any other errors
    return res.status(500).send({ error: error.message });
  }
}
