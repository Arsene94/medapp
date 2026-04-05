import { ApplicationIcon } from "@/components/application/form/application-icon";
import {
  consultationGoals,
  consultationMessages,
  contextualDocuments,
} from "@/components/application/form/data";

function ConsultationMessageBubble({
  body,
  emphasis,
  options,
  role,
}: (typeof consultationMessages)[number]) {
  const isUser = role === "user";

  return (
    <div
      className={
        isUser
          ? "ml-auto flex max-w-[85%] flex-row-reverse gap-4"
          : "flex max-w-[85%] gap-4"
      }
    >
      <div
        className={
          isUser
            ? "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d5e3fc]"
            : "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#008080]/10"
        }
      >
        <ApplicationIcon
          className={isUser ? "text-[#57657a]" : "text-[#006565]"}
          name={isUser ? "person" : "auto_awesome"}
          size={14}
        />
      </div>

      <div
        className={
          isUser
            ? "rounded-2xl rounded-tr-none bg-[#006565] p-6 text-white shadow-md"
            : "rounded-2xl rounded-tl-none bg-[#e6eeff] p-6 text-[#0d1c2f]"
        }
      >
        <p className="leading-relaxed">{body}</p>
        {emphasis ? <p className="mt-4 font-bold">{emphasis}</p> : null}
        {options?.length ? (
          <div className="mt-6 space-y-3">
            {options.map((option) => (
              <button
                className="group flex w-full items-center justify-between rounded-xl border border-transparent bg-white p-4 text-left transition-all hover:border-[#008080]"
                key={option}
                type="button"
              >
                <span>{option}</span>
                <ApplicationIcon
                  className="text-[#006565] opacity-0 transition-opacity group-hover:opacity-100"
                  name="add_circle"
                  size={18}
                />
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function ContextFolderCard() {
  return (
    <div className="rounded-[1rem] bg-[#eff4ff] p-8">
      <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
        <ApplicationIcon className="text-[#006565]" name="folder_shared" />
        Dosar Contextual
      </h3>
      <div className="space-y-3">
        {contextualDocuments.map((document) => (
          <div
            className="flex items-center gap-3 rounded-lg bg-white p-4"
            key={document.name}
          >
            <ApplicationIcon className="text-[#974000]" name={document.icon} />
            <div className="overflow-hidden">
              <p className="text-sm font-bold truncate">{document.name}</p>
              <p className="text-xs text-[#515f74]">{document.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ConsultationObjectivesCard() {
  return (
    <div className="rounded-[1rem] bg-white p-8 shadow-sm">
      <h3 className="mb-4 text-base font-bold text-[#3e4949]">
        Obiective Consultanță
      </h3>
      <ul className="space-y-4">
        {consultationGoals.map((goal) => (
          <li className="flex gap-3 text-sm" key={goal.label}>
            <ApplicationIcon
              className={goal.complete ? "text-[#006565]" : "text-[#bdc9c8]"}
              name={goal.complete ? "check_circle" : "radio_button_unchecked"}
              size={16}
            />
            <span className={goal.complete ? "" : "text-[#515f74]"}>
              {goal.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AuraAssistantPanel() {
  return (
    <div className="relative flex h-[700px] flex-col overflow-hidden rounded-[1rem] border border-[#e6eeff] bg-white shadow-2xl shadow-[#0d1c2f]/5">
      <div className="flex items-center justify-between bg-[#eff4ff] p-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#006565] to-[#008080] shadow-lg">
              <ApplicationIcon className="text-white" name="neurology" />
            </div>
            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#eff4ff] bg-green-500" />
          </div>
          <div>
            <h2 className="text-lg font-bold leading-none">Aura Assistant</h2>
            <p className="mt-1 text-xs text-[#515f74]">
              Specialist AI în Diagnostic Preliminar
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            className="rounded-full p-2 transition-colors hover:bg-[#dde9ff]"
            type="button"
          >
            <ApplicationIcon className="text-[#3e4949]" name="history" />
          </button>
          <button
            className="rounded-full p-2 transition-colors hover:bg-[#dde9ff]"
            type="button"
          >
            <ApplicationIcon className="text-[#3e4949]" name="more_vert" />
          </button>
        </div>
      </div>

      <div className="flex-1 space-y-8 overflow-y-auto p-8">
        {consultationMessages.map((message, index) => (
          <ConsultationMessageBubble
            body={message.body}
            emphasis={message.emphasis}
            key={`${message.role}-${index}`}
            options={message.options}
            role={message.role}
          />
        ))}
      </div>

      <div className="border-t border-[#dde9ff] bg-white p-6">
        <div className="relative flex items-center">
          <input
            className="w-full rounded-full border-none bg-[#d5e3fd] py-4 pl-6 pr-32 text-[#0d1c2f] outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#006565]/20"
            placeholder="Descrieți aici alte detalii sau răspundeți la întrebări..."
            type="text"
          />
          <div className="absolute right-2 flex items-center gap-2">
            <button
              className="p-2 text-[#3e4949] transition-colors hover:text-[#006565]"
              type="button"
            >
              <ApplicationIcon name="mic" size={20} />
            </button>
            <button
              className="flex items-center gap-2 rounded-full bg-[#006565] px-4 py-2 text-white shadow-md transition-all hover:scale-[1.02] active:scale-95"
              type="button"
            >
              <span className="text-sm font-bold">Trimite</span>
              <ApplicationIcon name="send" size={16} />
            </button>
          </div>
        </div>
        <p className="mt-4 text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400">
          Criptat & Securizat • HIPAA Compliant
        </p>
      </div>
    </div>
  );
}
