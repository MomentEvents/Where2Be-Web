alter table "public"."profile" drop constraint "Users_email_key";

alter table "public"."profile" drop constraint "Users_phone_number_key";

alter table "public"."user_join_events" drop constraint "user_join_events_event_id_fkey";

alter table "public"."user_join_events" drop constraint "user_join_events_user_id_fkey";

alter table "public"."events" drop constraint "events_host_id_fkey";

alter table "public"."profile" drop constraint "Users_pkey";

alter table "public"."user_join_events" drop constraint "UserJoinEvents_pkey";

drop index if exists "public"."UserJoinEvents_pkey";

drop index if exists "public"."Users_email_key";

drop index if exists "public"."Users_phone_number_key";

drop index if exists "public"."Users_pkey";

drop table "public"."profile";

drop table "public"."user_join_events";

create table "public"."profile_join_events" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "user_id" uuid not null,
    "event_id" uuid not null
);


alter table "public"."profile_join_events" enable row level security;

create table "public"."profiles" (
    "user_id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "name" character varying not null,
    "email" character varying not null,
    "phone_number" character varying not null,
    "picture" text
);


alter table "public"."profiles" enable row level security;

CREATE UNIQUE INDEX "UserJoinEvents_pkey" ON public.profile_join_events USING btree (id);

CREATE UNIQUE INDEX "Users_email_key" ON public.profiles USING btree (email);

CREATE UNIQUE INDEX "Users_phone_number_key" ON public.profiles USING btree (phone_number);

CREATE UNIQUE INDEX "Users_pkey" ON public.profiles USING btree (user_id);

alter table "public"."profile_join_events" add constraint "UserJoinEvents_pkey" PRIMARY KEY using index "UserJoinEvents_pkey";

alter table "public"."profiles" add constraint "Users_pkey" PRIMARY KEY using index "Users_pkey";

alter table "public"."profile_join_events" add constraint "profile_join_events_event_id_fkey" FOREIGN KEY (event_id) REFERENCES events(event_id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."profile_join_events" validate constraint "profile_join_events_event_id_fkey";

alter table "public"."profile_join_events" add constraint "profile_join_events_user_id_fkey" FOREIGN KEY (user_id) REFERENCES profiles(user_id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."profile_join_events" validate constraint "profile_join_events_user_id_fkey";

alter table "public"."profiles" add constraint "Users_email_key" UNIQUE using index "Users_email_key";

alter table "public"."profiles" add constraint "Users_phone_number_key" UNIQUE using index "Users_phone_number_key";

alter table "public"."events" add constraint "events_host_id_fkey" FOREIGN KEY (host_id) REFERENCES profiles(user_id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."events" validate constraint "events_host_id_fkey";


