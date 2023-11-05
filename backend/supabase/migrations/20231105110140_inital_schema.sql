set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.create_new_profile()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$begin 
  insert into public.profile (id, name) 
  values(new.id, new.raw_user_meta_data->>'name'); 

  return new; 
end;
$function$
;


create trigger on_auth_user_created
after insert on auth.users for each row
execute procedure public.create_new_profile ();