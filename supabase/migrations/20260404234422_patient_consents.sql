create table public.patient_consents (
                                         id uuid primary key default gen_random_uuid(),
                                         user_id uuid not null references public.patient_profiles(id) on delete cascade,
                                         treatment_request_id uuid references public.treatment_requests(id) on delete set null,

                                         consent_type text not null
                                             check (
                                                 consent_type in (
                                                                  'privacy_policy',
                                                                  'terms_and_conditions',
                                                                  'medical_data_processing',
                                                                  'medical_record_upload',
                                                                  'clinic_data_sharing',
                                                                  'international_data_transfer',
                                                                  'marketing_communications'
                                                     )
                                                 ),

                                         consent_version text not null,
                                         consent_language text,

                                         decision text not null
                                             check (decision in ('granted', 'revoked')),

                                         decided_at timestamptz not null default now(),

                                         source text,
                                         ip_address inet,
                                         user_agent text,

                                         evidence jsonb not null default '{}'::jsonb,

                                         created_at timestamptz not null default now()
);

alter table public.patient_consents enable row level security;

create index idx_patient_consents_user_id
    on public.patient_consents (user_id);

create index idx_patient_consents_treatment_request_id
    on public.patient_consents (treatment_request_id);

create index idx_patient_consents_consent_type
    on public.patient_consents (consent_type);

create index idx_patient_consents_user_type_version_decided_at
    on public.patient_consents (user_id, consent_type, consent_version, decided_at desc);
