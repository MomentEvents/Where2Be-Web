/*

IMPORTANT: Only import this into API routes. DO NOT IMPORT THIS ONTO ANY FRONTEND CODE.
Use supabase.js for that, since it queries non-sensitive data.
*/

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

export default supabaseAdmin;