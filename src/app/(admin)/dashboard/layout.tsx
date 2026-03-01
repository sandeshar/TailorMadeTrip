import SideBar from "@/components/SideBar";
import DashboardHeader from "./_components/DashboardHeader";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-zinc-50 font-sans w-full relative">
            <input type="checkbox" id="sidebar-toggle" className="peer hidden" />

            {/* Mobile Backdrop */}
            <label
                htmlFor="sidebar-toggle"
                className="fixed inset-0 bg-black/50 z-40 lg:hidden hidden peer-checked:block transition-opacity"
            />

            <SideBar />

            <main className="flex-1 flex flex-col w-full overflow-hidden">
                <DashboardHeader />
                <div className="p-4 lg:p-10 max-w-400 mx-auto w-full">
                    {children}
                </div>
            </main>
        </div>
    );
}
