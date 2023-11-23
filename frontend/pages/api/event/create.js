import { NextApiRequest, NextApiResponse } from "next";
import { COOKIES, getSupabaseUser } from "../../../lib/cookies";
import supabaseAdmin from "../../../lib/supabaseAdmin";

export default async function handler(
  req,
  res,
) {
  console.log("CREATING EVENT IN API")
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const user = await getSupabaseUser(
    req.cookies[COOKIES.access_token],
    req.cookies[COOKIES.refresh_token]
  );

  if (!user) {
    return res.status(401).json({ error: "User not found" });
  }

  console.log("CHECKING REQUEST BODY")

  const { title, description, start_date, image, location, is_open, do_sms_reminder, sms_reminder_minutes_before, sms_reminder_message } = req.body;

  // Decode base64 image
  const base64Data = image.replace(/^data:image\/\w+;base64,/, '');
  const buffer = Buffer.from(base64Data, 'base64');

  try {
    // Upload the image to Supabase Storage
    const filePath = `event-pictures/${Date.now()}-${user.data.user.id}`;
    const { error: uploadError } = await supabaseAdmin.storage
      .from('event-pictures')
      .upload(filePath, buffer, {
        contentType: 'image/png', // or the correct mime type of your image
        upsert: false // set to true if you want to overwrite existing files
      });

    if (uploadError) {
      throw new Error(`Failed to upload image: ${uploadError.message}`);
    }

    // Retrieve the public URL for the uploaded image
    const storageResponse = supabaseAdmin.storage
      .from('event-pictures')
      .getPublicUrl(filePath);

    if (storageResponse.error) {
      throw new Error(`Failed to get image URL: ${storageResponse.error.message}`);
    }

    if(!storageResponse.data.publicUrl) {
      throw new Error(`Failed to get storage response data`);
    }



    // Insert the event into the 'events' table with the image URL
    const dbResponse = await supabaseAdmin
      .from('events')
      .insert([
        {
          title,
          description,
          start_date,
          image: storageResponse.data.publicUrl,
          location,
          is_open,
          host_id: user.data.user.id,
          do_sms_reminder,
          sms_reminder_minutes_before,
          sms_reminder_message
        },
      ]).select();

    if (dbResponse.error) {
      throw new Error(`Failed to insert event: ${dbResponse.error.message}`);
    }

    return res.status(200).json({ event_data: dbResponse.data[0] });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
