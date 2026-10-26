-- ============================================================
-- Gable Funding — lead form v3 (Oct 23): contact first, then qualify.
-- Run after 001 and 003. Additive, safe to re-run.
--
-- Step 1 of the form is now name, phone and consents, so a lead exists
-- before any other answer. Step 2 asks about occupancy: owner-occupants are
-- kept and tagged in the admin portal (status 'disqualified', lost_reason
-- 'Owner-occupied' — portal sql/002). The site writes these columns in a
-- separate best-effort update, so leads keep saving before this has run; the
-- same values are in `answers` too. Contract: docs/lead-form.md.
-- ============================================================

alter table public.gf_leads add column if not exists occupancy           text;          -- investment | owner (form v3, step 2)
alter table public.gf_leads add column if not exists contact_captured_at timestamptz;   -- first save of name + phone (step 1)
alter table public.gf_leads add column if not exists site                text not null default 'gablefunding';  -- which site the lead came from
alter table public.gf_leads add column if not exists loan_amount_range   text;          -- from 003, repeated so this file works on its own

create index if not exists gf_leads_site_idx      on public.gf_leads (site, created_at desc);
create index if not exists gf_leads_occupancy_idx on public.gf_leads (occupancy);
