import { NextApiRequest, NextApiResponse } from "next";
import supabaseAdmin from "../../../../lib/supabaseAdmin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Fetch the list of events from the 'events' table, sorted by 'start_date' in ascending order
        const { data, error } = await supabaseAdmin
            .from("events")
            .select("*")
            .order("start_date", { ascending: true })
            .limit(100);

        if (error) {
            // If there's an error in the query, send an error response
            throw error;
        }

        // If no events are found, send a 404 response
        if (data.length === 0) {
            return res.status(404).send({ message: "No events found" });
        }

        // Send the list of events as a response
        return res.status(200).json(data);
    } catch (error) {
        // Handle any other errors
        return res.status(500).send({ error: error.message });
    }
}
