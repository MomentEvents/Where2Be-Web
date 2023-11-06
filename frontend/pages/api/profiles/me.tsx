// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import {COOKIES, getSupabaseUser} from "../../../lib/cookies"
import supabaseAdmin from "../../../lib/supabaseAdmin"
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const user = await getSupabaseUser(req.cookies[COOKIES.access_token], req.cookies[COOKIES.refresh_token])
    if(!user){
        return res.status(401).json({ error: 'User not found' });
    }
    return res.status(200).json(user)
  }
  