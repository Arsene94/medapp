create table public.patient_conditions (
                                           id uuid primary key default gen_random_uuid(),
                                           user_id uuid not null references public.patient_profiles(id) on delete cascade,
                                           treatment_request_id uuid references public.treatment_requests(id) on delete set null,

                                           condition_name text not null,
                                           icd10_code text,

                                           condition_status text not null default 'active'
                                               check (condition_status in ('active', 'resolved', 'suspected', 'past')),

                                           diagnosis_date date,
                                           is_chronic boolean not null default false,
                                           notes text,

                                           created_at timestamptz not null default now(),
                                           updated_at timestamptz not null default now()
);

create index idx_patient_conditions_user_id
    on public.patient_conditions (user_id);

create index idx_patient_conditions_treatment_request_id
    on public.patient_conditions (treatment_request_id);

create index idx_patient_conditions_condition_name
    on public.patient_conditions (condition_name);

create trigger trg_patient_conditions_set_updated_at
    before update on public.patient_conditions
    for each row
    execute procedure public.set_updated_at();


create table public.patient_medications (
                                            id uuid primary key default gen_random_uuid(),
                                            user_id uuid not null references public.patient_profiles(id) on delete cascade,
                                            treatment_request_id uuid references public.treatment_requests(id) on delete set null,

                                            medication_name text not null,
                                            dosage text,
                                            frequency text,
                                            administration_route text,

                                            started_on date,
                                            ended_on date,

                                            is_current boolean not null default true,
                                            notes text,

                                            created_at timestamptz not null default now(),
                                            updated_at timestamptz not null default now(),

                                            constraint patient_medications_date_range_check
                                                check (
                                                    ended_on is null
                                                        or started_on is null
                                                        or started_on <= ended_on
                                                    )
);

create index idx_patient_medications_user_id
    on public.patient_medications (user_id);

create index idx_patient_medications_treatment_request_id
    on public.patient_medications (treatment_request_id);

create index idx_patient_medications_medication_name
    on public.patient_medications (medication_name);

create trigger trg_patient_medications_set_updated_at
    before update on public.patient_medications
    for each row
    execute procedure public.set_updated_at();


create table public.patient_allergies (
                                          id uuid primary key default gen_random_uuid(),
                                          user_id uuid not null references public.patient_profiles(id) on delete cascade,
                                          treatment_request_id uuid references public.treatment_requests(id) on delete set null,

                                          allergen_name text not null,
                                          reaction text,

                                          severity text not null default 'unknown'
                                              check (severity in ('mild', 'moderate', 'severe', 'unknown')),

                                          notes text,

                                          created_at timestamptz not null default now(),
                                          updated_at timestamptz not null default now()
);

create index idx_patient_allergies_user_id
    on public.patient_allergies (user_id);

create index idx_patient_allergies_treatment_request_id
    on public.patient_allergies (treatment_request_id);

create index idx_patient_allergies_allergen_name
    on public.patient_allergies (allergen_name);

create trigger trg_patient_allergies_set_updated_at
    before update on public.patient_allergies
    for each row
    execute procedure public.set_updated_at();


create table public.patient_medical_documents (
                                                  id uuid primary key default gen_random_uuid(),
                                                  user_id uuid not null references public.patient_profiles(id) on delete cascade,
                                                  treatment_request_id uuid references public.treatment_requests(id) on delete set null,

                                                  bucket_name text not null default 'patient-medical-documents',
                                                  storage_path text not null,

                                                  document_type text not null default 'other'
                                                      check (
                                                          document_type in (
                                                                            'medical_report',
                                                                            'lab_result',
                                                                            'imaging',
                                                                            'prescription',
                                                                            'insurance',
                                                                            'passport',
                                                                            'consent_form',
                                                                            'photo',
                                                                            'other'
                                                              )
                                                          ),

                                                  file_name text not null,
                                                  mime_type text,
                                                  file_size_bytes bigint
                                                      check (file_size_bytes is null or file_size_bytes >= 0),

                                                  checksum_sha256 text,
                                                  issued_on date,
                                                  provider_name text,
                                                  notes text,

                                                  created_at timestamptz not null default now(),
                                                  updated_at timestamptz not null default now(),

                                                  constraint patient_medical_documents_bucket_path_unique
                                                      unique (bucket_name, storage_path)
);

alter table public.patient_medical_documents enable row level security;

create index idx_patient_medical_documents_user_id
    on public.patient_medical_documents (user_id);

create index idx_patient_medical_documents_treatment_request_id
    on public.patient_medical_documents (treatment_request_id);

create index idx_patient_medical_documents_document_type
    on public.patient_medical_documents (document_type);

create trigger trg_patient_medical_documents_set_updated_at
    before update on public.patient_medical_documents
    for each row
    execute procedure public.set_updated_at();
