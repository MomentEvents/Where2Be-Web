alter table "public"."Events" drop constraint "Events_host_id_fkey";

alter table "public"."UserJoinEvents" drop constraint "UserJoinEvents_event_id_fkey";

alter table "public"."UserJoinEvents" drop constraint "UserJoinEvents_user_id_fkey";

alter table "public"."Users" drop constraint "Users_email_key";

alter table "public"."Users" drop constraint "Users_phone_number_key";

alter table "public"."Events" drop constraint "Events_pkey";

alter table "public"."UserJoinEvents" drop constraint "UserJoinEvents_pkey";

alter table "public"."Users" drop constraint "Users_pkey";

drop index if exists "public"."Events_pkey";

drop index if exists "public"."UserJoinEvents_pkey";

drop index if exists "public"."Users_email_key";

drop index if exists "public"."Users_phone_number_key";

drop index if exists "public"."Users_pkey";

drop table "public"."Events";

drop table "public"."UserJoinEvents";

drop table "public"."Users";

create table "public"."events" (
    "event_id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "title" character varying not null,
    "description" text not null,
    "start_date" date not null,
    "image" text not null,
    "is_open" boolean not null,
    "location" text not null,
    "host_id" uuid not null,
    "do_sms_reminder" boolean not null,
    "sms_reminder_minutes_before" bigint,
    "sms_reminder_message" text
);


alter table "public"."events" enable row level security;

create table "public"."profile" (
    "user_id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "name" character varying not null,
    "email" character varying not null,
    "phone_number" character varying not null,
    "picture" text
);


alter table "public"."profile" enable row level security;

create table "public"."user_join_events" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "user_id" uuid not null,
    "event_id" uuid not null
);


alter table "public"."user_join_events" enable row level security;

CREATE UNIQUE INDEX "Events_pkey" ON public.events USING btree (event_id);

CREATE UNIQUE INDEX "UserJoinEvents_pkey" ON public.user_join_events USING btree (id);

CREATE UNIQUE INDEX "Users_email_key" ON public.profile USING btree (email);

CREATE UNIQUE INDEX "Users_phone_number_key" ON public.profile USING btree (phone_number);

CREATE UNIQUE INDEX "Users_pkey" ON public.profile USING btree (user_id);

alter table "public"."events" add constraint "Events_pkey" PRIMARY KEY using index "Events_pkey";

alter table "public"."profile" add constraint "Users_pkey" PRIMARY KEY using index "Users_pkey";

alter table "public"."user_join_events" add constraint "UserJoinEvents_pkey" PRIMARY KEY using index "UserJoinEvents_pkey";

alter table "public"."events" add constraint "events_host_id_fkey" FOREIGN KEY (host_id) REFERENCES profile(user_id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."events" validate constraint "events_host_id_fkey";

alter table "public"."profile" add constraint "Users_email_key" UNIQUE using index "Users_email_key";

alter table "public"."profile" add constraint "Users_phone_number_key" UNIQUE using index "Users_phone_number_key";

alter table "public"."user_join_events" add constraint "user_join_events_event_id_fkey" FOREIGN KEY (event_id) REFERENCES events(event_id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."user_join_events" validate constraint "user_join_events_event_id_fkey";

alter table "public"."user_join_events" add constraint "user_join_events_user_id_fkey" FOREIGN KEY (user_id) REFERENCES profile(user_id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."user_join_events" validate constraint "user_join_events_user_id_fkey";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.create_new_profile()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$begin 
  insert into public.profile (id, email, name) 
  values(new.id, new.email, new.raw_user_meta_data->>'name'); 

  return new; 
end;
$function$
;


