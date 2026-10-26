-- ============================================================
-- Gable Funding — lead form v2 (Oct 21): loan amount as a range.
-- Run after 001. Additive, safe to re-run.
-- ============================================================

alter table public.gf_leads add column if not exists loan_amount_range text;  -- lt150 | 150_300 | 300_500 | 500_1m | 1m_plus
