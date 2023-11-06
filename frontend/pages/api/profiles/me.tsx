// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { COOKIES, getSupabaseUser } from "../../../lib/cookies";
import supabaseAdmin from "../../../lib/supabaseAdmin";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = await getSupabaseUser(
    req.cookies[COOKIES.access_token],
    req.cookies[COOKIES.refresh_token]
  );
  if (!user) {
    return res.status(401).json({ error: "User not found" });
  }
  let response = await supabaseAdmin
    .from("profiles")
    .select("*")
    .eq("user_id", user.data.user.id);
  if (response.error) {
    return res.status(400).json({ error: response.error });
  }

  return res.status(200).json(response.data)
}
