import { ClientSidebarShell } from "@/components/application/client/ClientSidebarShell";

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function FlowLayout({ children, params }: Props) {
    await params;

    return (
        <ClientSidebarShell>{children}</ClientSidebarShell>
    );
}
