create table public.patient_profiles (
                                         id uuid primary key references auth.users(id) on delete cascade,

                                         first_name text,
                                         last_name text,

                                         contact_phone text,
                                         whatsapp_phone text,

                                         date_of_birth date,

                                         sex text not null default 'unknown'
                                             check (sex in ('female', 'male', 'intersex', 'prefer_not_to_say', 'unknown')),

                                         nationality_country_code varchar(2)
                                             check (
                                                 nationality_country_code is null
                                                     or nationality_country_code ~* '^[A-Z]{2}$'
),

    residence_country_code varchar(2)
        check (
            residence_country_code is null
            or residence_country_code ~* '^[A-Z]{2}$'
        ),

    city text,
    preferred_language text,

    height_cm numeric(5,2)
        check (height_cm is null or height_cm between 30 and 300),

    weight_kg numeric(5,2)
        check (weight_kg is null or weight_kg between 1 and 500),

    emergency_contact_name text,
    emergency_contact_phone text,
    emergency_contact_relationship text,

    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create index idx_patient_profiles_last_name
    on public.patient_profiles (last_name);

create index idx_patient_profiles_residence_country_code
    on public.patient_profiles (residence_country_code);

create index idx_patient_profiles_preferred_language
    on public.patient_profiles (preferred_language);

create trigger trg_patient_profiles_set_updated_at
    before update on public.patient_profiles
    for each row
    execute procedure public.set_updated_at();

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
insert into public.patient_profiles (
    id,
    first_name,
    last_name
)
values (
           new.id,
           nullif(btrim(new.raw_user_meta_data ->> 'first_name'), ''),
           nullif(btrim(new.raw_user_meta_data ->> 'last_name'), '')
       )
    on conflict (id) do nothing;

return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
    after insert on auth.users
    for each row
    execute procedure public.handle_new_user();
