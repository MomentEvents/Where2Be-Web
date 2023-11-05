# Supabase notes

Supabase is a growing platform. As a result, there may be some quirks that others would like to know about (to save development time). You don't have to read all of this before starting. Just maybe go here if you're facing some issue

- Do not add columns or modify in any way the `users.auth` table. Don't even add RLS.
- If you get some error like "failed to fetch schema", you probably modified an important table. Atm the fix is just `supabase db reset`