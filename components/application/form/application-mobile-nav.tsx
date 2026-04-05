import { ApplicationIcon } from "@/components/application/form/application-icon";

export function ApplicationMobileNav() {
  return (
    <div className="fixed bottom-6 left-1/2 z-50 flex w-[90%] -translate-x-1/2 items-center justify-between rounded-full bg-white/90 px-8 py-4 shadow-2xl backdrop-blur-xl md:hidden">
      <ApplicationIcon className="text-[#006565]" name="clinical_notes" />
      <ApplicationIcon className="text-slate-400" name="chat_bubble" />
      <div className="-mt-10 flex items-center justify-center rounded-full bg-[#006565] p-3 shadow-lg shadow-[#006565]/40">
        <ApplicationIcon className="text-white" name="add" />
      </div>
      <ApplicationIcon className="text-slate-400" name="local_hospital" />
      <ApplicationIcon className="text-slate-400" name="account_circle" />
    </div>
  );
}
