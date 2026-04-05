insert into storage.buckets (id, name, public)
values ('patient-medical-documents', 'patient-medical-documents', false)
    on conflict (id) do nothing;


-- Path convention:
-- {user_id}/{document_id}/{file_name}
--
-- Example:
-- 11111111-1111-1111-1111-111111111111/
--   22222222-2222-2222-2222-222222222222/
--     mri-report.pdf

create policy patient_medical_documents_storage_select_own
on storage.objects
for select
               to authenticated
               using (
               bucket_id = 'patient-medical-documents'
               and auth.uid() is not null
               and (storage.foldername(name))[1] = auth.uid()::text
               );

create policy patient_medical_documents_storage_insert_own
on storage.objects
for insert
to authenticated
with check (
    bucket_id = 'patient-medical-documents'
    and auth.uid() is not null
    and (storage.foldername(name))[1] = auth.uid()::text
);

create policy patient_medical_documents_storage_update_own
on storage.objects
for update
                      to authenticated
                      using (
                      bucket_id = 'patient-medical-documents'
                      and auth.uid() is not null
                      and (storage.foldername(name))[1] = auth.uid()::text
                      )
    with check (
                      bucket_id = 'patient-medical-documents'
                      and auth.uid() is not null
                      and (storage.foldername(name))[1] = auth.uid()::text
                      );

create policy patient_medical_documents_storage_delete_own
on storage.objects
for delete
to authenticated
using (
    bucket_id = 'patient-medical-documents'
    and auth.uid() is not null
    and (storage.foldername(name))[1] = auth.uid()::text
);
