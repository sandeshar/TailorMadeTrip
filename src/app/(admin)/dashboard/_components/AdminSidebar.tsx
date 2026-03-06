"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { logoutAction } from "@/actions/logout";
import { UserSession } from "@/utils/auth";
import { MaterialSymbol } from "@/components/ui/material-symbol";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MenuItem {
    name: string;
    href?: string;
    icon: string;
    subItems?: { name: string; href: string }[];
}

const menuItems: MenuItem[] = [
    { name: "Dashboard", href: "/dashboard", icon: "dashboard" },
    { name: "Settings", href: "/dashboard/setting", icon: "settings" },
];

export default function AdminSidebar({
    user,
    isMobileOpen,
    setIsMobileOpen
}: {
    user: UserSession;
    isMobileOpen: boolean;
    setIsMobileOpen: (open: boolean) => void;
}) {
    const pathname = usePathname();
    const [openMenus, setOpenMenus] = useState<string[]>([]);

    const toggleMenu = (name: string) => {
        setOpenMenus(prev => 
            prev.includes(name) ? prev.filter(i => i !== name) : [...prev, name]
        );
    };

    const SidebarContent = () => (
        <div className="flex flex-col h-full bg-white border-r border-gray-200">
            <div className="p-6">
                <Link href="/dashboard" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-white font-black">T</span>
                    </div>
                    <span className="text-xl font-black tracking-tight text-gray-900">TRAVEL</span>
                </Link>
            </div>

            <nav className="flex-1 px-4 space-y-1">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    const isOpen = openMenus.includes(item.name);

                    if (item.subItems) {
                        return (
                            <div key={item.name} className="space-y-1">
                                <button
                                    onClick={() => toggleMenu(item.name)}
                                    className={cn(
                                        "w-full flex items-center justify-between px-3 py-3 text-sm font-bold rounded-xl transition-all",
                                        "text-gray-600 hover:bg-gray-50 active:scale-[0.98]"
                                    )}
                                >
                                    <div className="flex items-center gap-3">
                                        <MaterialSymbol icon={item.icon} size={22} />
                                        {item.name}
                                    </div>
                                    <MaterialSymbol 
                                        icon={isOpen ? "expand_more" : "chevron_right"} 
                                        size={18} 
                                        className="text-gray-400"
                                    />
                                </button>
                                {isOpen && (
                                    <div className="pl-10 space-y-1">
                                        {item.subItems.map(subItem => (
                                            <Link
                                                key={subItem.href}
                                                href={subItem.href}
                                                className={cn(
                                                    "block px-3 py-2 text-sm font-medium rounded-lg",
                                                    pathname === subItem.href ? "text-primary bg-primary/5" : "text-gray-500 hover:text-gray-900"
                                                )}
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    }

                    return (
                        <Link
                            key={item.href}
                            href={item.href!}
                            className={cn(
                                "flex items-center gap-3 px-3 py-3 text-sm font-bold rounded-xl transition-all",
                                isActive ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-gray-600 hover:bg-gray-50 active:scale-[0.98]"
                            )}
                        >
                            <MaterialSymbol icon={item.icon} size={22} />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-gray-100">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center font-black text-primary">
                        {user.name?.[0] || user.role[0].toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-black text-gray-900 truncate">{user.name || "Administrator"}</p>
                        <p className="text-xs font-bold text-gray-500 truncate lowercase">{user.role}</p>
                    </div>
                </div>
                <form action={logoutAction}>
                    <Button variant="ghost" className="w-full justify-start gap-3 rounded-xl hover:bg-red-50 hover:text-red-600 text-gray-500 font-bold transition-all">
                        <MaterialSymbol icon="logout" size={22} />
                        Sign Out
                    </Button>
                </form>
            </div>
        </div>
    );

    return (
        <>
            <div className="hidden lg:block w-72 h-screen sticky top-0 shrink-0">
                <SidebarContent />
            </div>
            {isMobileOpen && (
                <div className="lg:hidden fixed inset-0 z-50">
                    <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm" onClick={() => setIsMobileOpen(false)} />
                    <div className="absolute left-0 top-0 bottom-0 w-72 animate-in slide-in-from-left duration-300">
                        <SidebarContent />
                    </div>
                </div>
            )}
        </>
    );
}
