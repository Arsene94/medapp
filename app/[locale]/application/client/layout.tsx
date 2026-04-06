import {ClientSideBar} from "@/components/application/client/SideBar";

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function FlowLayout({ children, params }: Props) {
    await params;

    return (
        <div className="flex min-h-screen">
            <ClientSideBar />
            {children}
        </div>
    );
}
