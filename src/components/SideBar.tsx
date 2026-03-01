"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MaterialSymbol } from "./ui/material-symbol";
import { cn } from '@/lib/utils';

const navLinks = [
    { label: 'Dashboard', href: '/dashboard', icon: 'dashboard' },
    { label: 'Travel Packages', href: '/dashboard/packages', icon: 'package_2' },
    { label: 'Blog Posts', href: '/dashboard/blog', icon: 'article' },
    { label: 'Categories', href: '/dashboard/category', icon: 'category' },
    { label: 'CMS', href: '/dashboard/cms', icon: 'description' },
    { label: 'Contacts', href: '/dashboard/contact', icon: 'contact_page' },
    { label: 'Newsletter', href: '/dashboard/newsletter', icon: 'mail' },
    { label: 'Users', href: '/dashboard/users', icon: 'group' },
    { label: 'Settings', href: '/dashboard/setting', icon: 'settings' },
];

const SideBar = () => {
    const pathname = usePathname();

    return (
        <aside className={cn(
            "fixed inset-y-0 left-0 z-50 w-64 border-r border-primary/10 bg-white  transition-transform duration-300 lg:sticky lg:translate-x-0 flex flex-col h-screen overflow-y-auto",
            "-translate-x-full peer-checked:translate-x-0"
        )}>
            <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="bg-primary size-10 rounded-lg flex items-center justify-center text-white">
                            <MaterialSymbol icon="explore" />
                        </div>
                        <div>
                            <h1 className="text-sm font-bold leading-tight">Travel Agency</h1>
                            <p className="text-slate-500 text-xs font-normal">Management Portal</p>
                        </div>
                    </div>
                    <label
                        htmlFor="sidebar-toggle"
                        className="lg:hidden p-2 hover:bg-zinc-100 rounded-lg cursor-pointer transition-colors"
                    >
                        <MaterialSymbol icon="close" size={20} />
                    </label>
                </div>
                <nav className="flex flex-col gap-1">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                                    isActive
                                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                                        : "text-slate-600  hover:bg-primary/5 hover:text-primary"
                                )}
                                href={link.href}
                            >
                                <MaterialSymbol icon={link.icon} size={20} />
                                <span className="text-sm font-medium">{link.label}</span>
                            </Link>
                        );
                    })}
                </nav>
            </div>
            <div className="mt-auto p-6 border-t border-primary/10">
                <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <MaterialSymbol icon="person" size={20} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold truncate">Admin User</p>
                        <p className="text-[10px] text-slate-500 cursor-pointer hover:text-primary transition-colors">Sign Out</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default SideBar;
