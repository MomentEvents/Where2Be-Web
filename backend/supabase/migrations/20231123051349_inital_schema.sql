alter table "public"."events" alter column "start_date" set data type timestamp with time zone using "start_date"::timestamp with time zone;


