alter table "public"."profiles" add column "about_me" text not null default 'Welcome to my profile!'::text;

alter table "public"."profiles" add constraint "profiles_about_me_check" CHECK ((length(about_me) < 2000)) not valid;

alter table "public"."profiles" validate constraint "profiles_about_me_check";


