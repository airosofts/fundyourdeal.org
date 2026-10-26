-- ============================================================
-- Gable Funding — lead capture tables
-- Run once in the AiroBase project's SQL editor. Safe to re-run.
--
-- All writes come from the site's server routes using AIROBASE_SECRET_KEY,
-- which bypasses row-level security. RLS is on with no public policies, so
-- the public/anon key can't read or write any of these tables.
-- ============================================================

create extension if not exists pgcrypto;  -- gen_random_uuid()

create or replace function public.gf_set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end; $$;


-- ------------------------------------------------------------
-- Leads: one row per form started, upserted step by step
-- (1 loan · 2 deal · 3 investor · 4 contact)
-- ------------------------------------------------------------
create table if not exists public.gf_leads (
  id                        uuid primary key default gen_random_uuid(),
  session_id                text not null unique,
  source_page               text,                 -- page the form was on

  -- Step 1: the loan
  loan_type                 text,                 -- dscr | str | flip | rehab_rental | bridge | construction | portfolio
  purpose                   text,                 -- purchase | refinance | cashout

  -- Step 2: the deal
  property_zip              text,
  property_state            text,                 -- from the ZIP
  property_type             text,                 -- sfr | 2_4 | condo | mf5 | mixed_use | land
  portfolio_size            text,                 -- portfolio loans: 2–4 | 5–9 | 10–24 | 25+
  property_value            numeric(14,2),        -- purchase price, or as-is value
  rehab_budget              numeric(14,2),
  arv                       numeric(14,2),        -- after-repair value / completed value
  construction_budget       numeric(14,2),
  current_balance           numeric(14,2),        -- refinances
  loan_amount               numeric(14,2),
  monthly_rent              numeric(12,2),
  lease_status              text,                 -- leased | vacant
  str_annual_revenue        numeric(14,2),        -- short-term rentals: gross bookings / year
  str_history               text,                 -- 12mo | some | new
  owned_for                 text,                 -- refinances: lt3 | 3_6 | 6_12 | 12_plus (cash-out seasoning)
  permit_status             text,                 -- construction: approved | pending | planning
  exit_strategy             text,                 -- bridge: refinance | sell | undecided
  ltv                       numeric(6,2),         -- loan ÷ value, %
  ltc                       numeric(6,2),         -- loan ÷ (price + rehab or build), %
  loan_to_arv               numeric(6,2),         -- loan ÷ ARV, %

  -- Step 3: the investor
  credit_band               text,                 -- 20-point bands: Under 620 … 760+
  experience                text,                 -- deals in the last 3 years: 0 | 1_2 | 3_4 | 5_9 | 10_plus
  borrower_type             text,                 -- llc | forming_llc | individual
  liquidity                 text,                 -- cash for down payment + reserves
  residency                 text,                 -- us_citizen | permanent_resident | non_permanent_resident | foreign_national
  timeline                  text,
  business_purpose_confirmed boolean not null default false,  -- investment property, not owner-occupied
  business_purpose_at       timestamptz,
  business_purpose_version  text,

  -- Step 4: contact
  first_name                text,
  last_name                 text,
  email                     text,
  phone                     text,
  phone_e164                text,
  share_consent_at          timestamptz,          -- terms + authorization to share with lenders (clicking submit)
  share_consent_ip          text,
  share_consent_version     text,
  share_consent_text        text,                 -- exact wording agreed to
  tcpa_consent              boolean not null default false,  -- optional: autodialed / prerecorded calls and texts
  tcpa_consent_at           timestamptz,
  tcpa_consent_version      text,
  tcpa_consent_text         text,

  -- Progress
  last_step                 smallint not null default 1,
  completed                 boolean  not null default false,
  completed_at              timestamptz,
  status                    text     not null default 'new',  -- new | contacted | matched | closed | dead
  answers                   jsonb    not null default '{}'::jsonb,  -- raw answers as submitted

  -- Ad attribution (last touch, 90 days)
  gclid                     text,
  gbraid                    text,
  wbraid                    text,
  fbclid                    text,
  msclkid                   text,
  utm_source                text,
  utm_medium                text,
  utm_campaign              text,
  utm_term                  text,
  utm_content               text,
  landing_page              text,
  traffic_channel           text,
  traffic_source            text,
  referrer_host             text,

  -- Visitor
  ip_address                text,
  country                   text,
  region                    text,
  city                      text,
  user_agent                text,
  referrer                  text,

  created_at                timestamptz not null default now(),
  updated_at                timestamptz not null default now()
);

create index if not exists gf_leads_created_idx   on public.gf_leads (created_at desc);
create index if not exists gf_leads_completed_idx on public.gf_leads (completed, created_at desc);
create index if not exists gf_leads_type_idx      on public.gf_leads (loan_type);
create index if not exists gf_leads_state_idx     on public.gf_leads (property_state);
create index if not exists gf_leads_email_idx     on public.gf_leads (lower(email));
create index if not exists gf_leads_gclid_idx     on public.gf_leads (gclid) where gclid is not null;

drop trigger if exists trg_gf_leads_updated on public.gf_leads;
create trigger trg_gf_leads_updated
  before update on public.gf_leads
  for each row execute function public.gf_set_updated_at();


-- ------------------------------------------------------------
-- Rate alerts: investors who asked for an email when rates move
-- ------------------------------------------------------------
create table if not exists public.gf_rate_alerts (
  id               uuid primary key default gen_random_uuid(),
  email            text not null,
  source_page      text,
  consent_at       timestamptz not null default now(),
  unsubscribed_at  timestamptz,
  ip_address       text,
  user_agent       text,
  created_at       timestamptz not null default now()
);
create unique index if not exists gf_rate_alerts_email_uq on public.gf_rate_alerts (email);  -- stored lowercase


-- ------------------------------------------------------------
-- Lender / broker partner inquiries (the "For lenders" page)
-- ------------------------------------------------------------
create table if not exists public.gf_partner_inquiries (
  id               uuid primary key default gen_random_uuid(),
  company          text not null,
  contact_name     text not null,
  email            text not null,
  phone            text,
  website          text,
  nmls_id          text,
  partner_type     text,          -- direct_lender | broker | private_fund | other
  programs         text[] not null default '{}',
  states           text,          -- free text: "All 50", "TX, FL, GA" …
  monthly_volume   text,
  message          text,
  ip_address       text,
  user_agent       text,
  created_at       timestamptz not null default now()
);
create index if not exists gf_partner_inquiries_created_idx on public.gf_partner_inquiries (created_at desc);


-- ------------------------------------------------------------
-- Contact page messages
-- ------------------------------------------------------------
create table if not exists public.gf_contact_messages (
  id               uuid primary key default gen_random_uuid(),
  name             text not null,
  email            text not null,
  phone            text,
  topic            text,
  message          text not null,
  ip_address       text,
  user_agent       text,
  created_at       timestamptz not null default now()
);
create index if not exists gf_contact_messages_created_idx on public.gf_contact_messages (created_at desc);


-- ------------------------------------------------------------
-- Row-level security: on, with no policies. Only the server
-- (secret key) can read or write.
-- ------------------------------------------------------------
alter table public.gf_leads             enable row level security;
alter table public.gf_rate_alerts       enable row level security;
alter table public.gf_partner_inquiries enable row level security;
alter table public.gf_contact_messages  enable row level security;
