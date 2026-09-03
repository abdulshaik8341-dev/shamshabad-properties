/*
# Create contact_submissions table (single-tenant, no auth)

1. New Tables
- `contact_submissions`
- `id` (uuid, primary key)
- `name` (text, not null) - submitter's full name
- `email` (text, not null) - submitter's email
- `phone` (text, not null) - submitter's phone number
- `interest` (text) - which venture or service they're interested in
- `message` (text) - their message
- `created_at` (timestamp)
2. Security
- Enable RLS on `contact_submissions`.
- Allow anon + authenticated INSERT (so the public contact form can submit).
- No SELECT/UPDATE/DELETE for anon — submissions are private to the site owner.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  interest text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions"
ON contact_submissions FOR INSERT
TO anon, authenticated WITH CHECK (true);