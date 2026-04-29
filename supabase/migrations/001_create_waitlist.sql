-- Create waitlist table for email signups
create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

-- Enable Row Level Security
alter table public.waitlist enable row level security;

-- Allow anonymous inserts (for the public signup form)
create policy "Allow anonymous inserts" on public.waitlist
  for insert
  with check (true);

-- Only authenticated users (admin) can read
create policy "Only authenticated can read" on public.waitlist
  for select
  using (auth.role() = 'authenticated');
