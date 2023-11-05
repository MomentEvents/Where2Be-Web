alter table "public"."profiles" drop constraint "Users_email_key";

alter table "public"."profiles" drop constraint "Users_phone_number_key";

drop index if exists "public"."Users_email_key";

drop index if exists "public"."Users_phone_number_key";

alter table "public"."profiles" drop column "email";

alter table "public"."profiles" drop column "phone_number";

alter table "public"."profiles" alter column "picture" set default 'default/ProfilePic.png'::text;

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.create_new_profile()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$begin 
  insert into public.profiles (user_id, name) 
  values(new.id, new.raw_user_meta_data->>'name'); 

  return new; 
end;
$function$
;


