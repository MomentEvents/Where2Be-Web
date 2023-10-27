/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: false,
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
},
}
