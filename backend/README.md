# Where2Be backend

We use supabase with postgreSQL as the database. To develop locally, follow these steps (taken from https://supabase.com/docs/guides/cli/local-development)

### Set up for initialization & syncing

`supabase login`

`supabase link --project-ref wxpeyxiragxbvfqtqybw`

`supabase db pull`

### Start local development

`supabase start`

When you see...

```      API URL: http://localhost:54321
     GraphQL URL: http://localhost:54321/graphql/v1
          DB URL: postgresql://postgres:postgres@localhost:54322/postgres
      Studio URL: http://localhost:54323
    Inbucket URL: http://localhost:54324
      JWT secret: super-secret-jwt-token-with-at-least-32-characters-long
        anon key: ***************************
service_role key: ***************************
```

Copy the API URL and anon key. Then, put them in the `.env` file in the `frontend` folder

You can access your dashboard using http://localhost:54323/

### If something goes wrong

`supabase db reset` to reset the database

### Stop local development

`supabase stop`