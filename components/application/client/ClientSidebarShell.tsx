"use client";

import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

import { ClientSideBar } from "@/components/application/client/SideBar";

type ClientSidebarContextValue = {
  isMobileSidebarOpen: boolean;
  setMobileSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const ClientSidebarContext = createContext<ClientSidebarContextValue | null>(null);

export function ClientSidebarShell({ children }: { children: ReactNode }) {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <ClientSidebarContext.Provider value={{ isMobileSidebarOpen, setMobileSidebarOpen }}>
      <div className="flex min-h-screen">
        <ClientSideBar />
        {children}
      </div>
    </ClientSidebarContext.Provider>
  );
}

export function useClientSidebar() {
  const context = useContext(ClientSidebarContext);

  if (!context) {
    throw new Error("useClientSidebar must be used within ClientSidebarShell");
  }

  return context;
}
