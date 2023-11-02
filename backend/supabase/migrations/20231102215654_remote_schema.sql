
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE EXTENSION IF NOT EXISTS "pgsodium" WITH SCHEMA "pgsodium";

CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";

CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";

SET default_tablespace = '';

SET default_table_access_method = "heap";

CREATE TABLE IF NOT EXISTS "public"."Events" (
    "event_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "title" character varying NOT NULL,
    "description" "text" NOT NULL,
    "start_date" "date" NOT NULL,
    "image" "text" NOT NULL,
    "is_open" boolean NOT NULL,
    "location" "text" NOT NULL,
    "host_id" "uuid" NOT NULL,
    "do_sms_reminder" boolean NOT NULL,
    "sms_reminder_minutes_before" bigint,
    "sms_reminder_message" "text"
);

ALTER TABLE "public"."Events" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."UserJoinEvents" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "user_id" "uuid" NOT NULL,
    "event_id" "uuid" NOT NULL
);

ALTER TABLE "public"."UserJoinEvents" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."Users" (
    "user_id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "name" character varying NOT NULL,
    "email" character varying NOT NULL,
    "phone_number" character varying NOT NULL,
    "picture" "text"
);

ALTER TABLE "public"."Users" OWNER TO "postgres";

ALTER TABLE ONLY "public"."Events"
    ADD CONSTRAINT "Events_pkey" PRIMARY KEY ("event_id");

ALTER TABLE ONLY "public"."UserJoinEvents"
    ADD CONSTRAINT "UserJoinEvents_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."Users"
    ADD CONSTRAINT "Users_email_key" UNIQUE ("email");

ALTER TABLE ONLY "public"."Users"
    ADD CONSTRAINT "Users_phone_number_key" UNIQUE ("phone_number");

ALTER TABLE ONLY "public"."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY ("user_id");

ALTER TABLE ONLY "public"."Events"
    ADD CONSTRAINT "Events_host_id_fkey" FOREIGN KEY ("host_id") REFERENCES "public"."Users"("user_id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."UserJoinEvents"
    ADD CONSTRAINT "UserJoinEvents_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "public"."Events"("event_id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."UserJoinEvents"
    ADD CONSTRAINT "UserJoinEvents_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."Users"("user_id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE "public"."Events" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."UserJoinEvents" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."Users" ENABLE ROW LEVEL SECURITY;

GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";

GRANT ALL ON TABLE "public"."Events" TO "anon";
GRANT ALL ON TABLE "public"."Events" TO "authenticated";
GRANT ALL ON TABLE "public"."Events" TO "service_role";

GRANT ALL ON TABLE "public"."UserJoinEvents" TO "anon";
GRANT ALL ON TABLE "public"."UserJoinEvents" TO "authenticated";
GRANT ALL ON TABLE "public"."UserJoinEvents" TO "service_role";

GRANT ALL ON TABLE "public"."Users" TO "anon";
GRANT ALL ON TABLE "public"."Users" TO "authenticated";
GRANT ALL ON TABLE "public"."Users" TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";

RESET ALL;
