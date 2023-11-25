CREATE UNIQUE INDEX unique_event_user_constraint ON public.profile_join_events USING btree (event_id, user_id);

alter table "public"."profile_join_events" add constraint "unique_event_user_constraint" UNIQUE using index "unique_event_user_constraint";


