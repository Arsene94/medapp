alter table public.patient_profiles enable row level security;
alter table public.treatment_requests enable row level security;
alter table public.patient_conditions enable row level security;
alter table public.patient_medications enable row level security;
alter table public.patient_allergies enable row level security;
alter table public.patient_medical_documents enable row level security;
alter table public.patient_consents enable row level security;


-- =========================================================
-- patient_profiles
-- =========================================================
create policy patient_profiles_select_own
on public.patient_profiles
for select
               to authenticated
               using (auth.uid() is not null and auth.uid() = id);

create policy patient_profiles_insert_own
on public.patient_profiles
for insert
to authenticated
with check (auth.uid() is not null and auth.uid() = id);

create policy patient_profiles_update_own
on public.patient_profiles
for update
                      to authenticated
                      using (auth.uid() is not null and auth.uid() = id)
    with check (auth.uid() is not null and auth.uid() = id);


-- =========================================================
-- treatment_requests
-- =========================================================
create policy treatment_requests_select_own
on public.treatment_requests
for select
               to authenticated
               using (auth.uid() is not null and auth.uid() = user_id);

create policy treatment_requests_insert_own
on public.treatment_requests
for insert
to authenticated
with check (auth.uid() is not null and auth.uid() = user_id);

create policy treatment_requests_update_own
on public.treatment_requests
for update
                      to authenticated
                      using (auth.uid() is not null and auth.uid() = user_id)
    with check (auth.uid() is not null and auth.uid() = user_id);


-- =========================================================
-- patient_conditions
-- =========================================================
create policy patient_conditions_select_own
on public.patient_conditions
for select
               to authenticated
               using (auth.uid() is not null and auth.uid() = user_id);

create policy patient_conditions_insert_own
on public.patient_conditions
for insert
to authenticated
with check (auth.uid() is not null and auth.uid() = user_id);

create policy patient_conditions_update_own
on public.patient_conditions
for update
                      to authenticated
                      using (auth.uid() is not null and auth.uid() = user_id)
    with check (auth.uid() is not null and auth.uid() = user_id);

create policy patient_conditions_delete_own
on public.patient_conditions
for delete
to authenticated
using (auth.uid() is not null and auth.uid() = user_id);


-- =========================================================
-- patient_medications
-- =========================================================
create policy patient_medications_select_own
on public.patient_medications
for select
               to authenticated
               using (auth.uid() is not null and auth.uid() = user_id);

create policy patient_medications_insert_own
on public.patient_medications
for insert
to authenticated
with check (auth.uid() is not null and auth.uid() = user_id);

create policy patient_medications_update_own
on public.patient_medications
for update
                      to authenticated
                      using (auth.uid() is not null and auth.uid() = user_id)
    with check (auth.uid() is not null and auth.uid() = user_id);

create policy patient_medications_delete_own
on public.patient_medications
for delete
to authenticated
using (auth.uid() is not null and auth.uid() = user_id);


-- =========================================================
-- patient_allergies
-- =========================================================
create policy patient_allergies_select_own
on public.patient_allergies
for select
               to authenticated
               using (auth.uid() is not null and auth.uid() = user_id);

create policy patient_allergies_insert_own
on public.patient_allergies
for insert
to authenticated
with check (auth.uid() is not null and auth.uid() = user_id);

create policy patient_allergies_update_own
on public.patient_allergies
for update
                      to authenticated
                      using (auth.uid() is not null and auth.uid() = user_id)
    with check (auth.uid() is not null and auth.uid() = user_id);

create policy patient_allergies_delete_own
on public.patient_allergies
for delete
to authenticated
using (auth.uid() is not null and auth.uid() = user_id);


-- =========================================================
-- patient_medical_documents
-- =========================================================
create policy patient_medical_documents_select_own
on public.patient_medical_documents
for select
               to authenticated
               using (auth.uid() is not null and auth.uid() = user_id);

create policy patient_medical_documents_insert_own
on public.patient_medical_documents
for insert
to authenticated
with check (auth.uid() is not null and auth.uid() = user_id);

create policy patient_medical_documents_update_own
on public.patient_medical_documents
for update
                      to authenticated
                      using (auth.uid() is not null and auth.uid() = user_id)
    with check (auth.uid() is not null and auth.uid() = user_id);

create policy patient_medical_documents_delete_own
on public.patient_medical_documents
for delete
to authenticated
using (auth.uid() is not null and auth.uid() = user_id);


-- =========================================================
-- patient_consents
-- append-only from the patient side
-- =========================================================
create policy patient_consents_select_own
on public.patient_consents
for select
               to authenticated
               using (auth.uid() is not null and auth.uid() = user_id);

create policy patient_consents_insert_own
on public.patient_consents
for insert
to authenticated
with check (auth.uid() is not null and auth.uid() = user_id);
