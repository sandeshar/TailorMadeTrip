"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MaterialSymbol } from "./ui/material-symbol";
import { cn } from '@/lib/utils';

interface NavLink {
    label: string;
    href?: string;
    icon: string;
    children?: {
        label: string;
        href: string;
        icon: string;
    }[];
}

const navLinks: NavLink[] = [
    { label: 'Dashboard', href: '/dashboard', icon: 'dashboard' },
    {
        label: 'Travel Management',
        icon: 'explore',
        children: [
            { label: 'Packages', href: '/dashboard/packages', icon: 'package_2' },
            { label: 'Categories', href: '/dashboard/category', icon: 'category' },
            { label: 'Destinations', href: '/dashboard/destinations', icon: 'map' },
            { label: 'Testimonials', href: '/dashboard/homepage?tab=testimonials', icon: 'forum' },
        ]
    },
    {
        label: 'Blog Content',
        icon: 'article',
        children: [
            { label: 'Blog', href: '/dashboard/blog', icon: 'edit_note' },
            { label: 'CMS Pages', href: '/dashboard/cms', icon: 'description' },
            { label: 'Media Library', href: '/dashboard/media', icon: 'imagesmode' },
        ]
    },
    {
        label: 'FAQ Management',
        icon: 'quiz',
        children: [
            { label: 'FAQ CMS', href: '/dashboard/faq-page', icon: 'web_stories' },
            { label: 'FAQ Items', href: '/dashboard/faq', icon: 'list_alt' },
            { label: 'Categories', href: '/dashboard/faq/categories', icon: 'category' },
            { label: 'Terms CMS', href: '/dashboard/terms-page', icon: 'policy' },
        ]
    },
    {
        label: 'Marketing',
        icon: 'campaign',
        children: [
            { label: 'Newsletter', href: '/dashboard/newsletter', icon: 'mail' },
            { label: 'Contacts', href: '/dashboard/contact', icon: 'contact_page' },
        ]
    },
    {
        label: 'System Admin',
        icon: 'settings_suggest',
        children: [
            { label: 'Users', href: '/dashboard/users', icon: 'group' },
            { label: 'Settings', href: '/dashboard/setting', icon: 'settings' },
        ]
    },
];

const SideBar = () => {
    const pathname = usePathname();
    const [openMenus, setOpenMenus] = useState<string[]>(navLinks
        .filter(l => l.children?.some(c => pathname.startsWith(c.href)))
        .map(l => l.label)
    );

    const toggleMenu = (label: string) => {
        setOpenMenus(prev =>
            prev.includes(label)
                ? prev.filter(l => l !== label)
                : [...prev, label]
        );
    };

    return (
        <aside className={cn(
            "fixed inset-y-0 left-0 z-50 w-72 bg-zinc-950 text-zinc-400 transition-transform duration-300 lg:sticky lg:translate-x-0 flex flex-col h-screen overflow-y-auto border-r border-zinc-800/50",
            "-translate-x-full peer-checked:translate-x-0"
        )}>
            <div className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-10 px-2">
                    <div className="flex items-center gap-3.5">
                        <div className="bg-primary size-10 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20 rotate-3 transition-transform duration-500">
                            <MaterialSymbol icon="explore" size={24} />
                        </div>
                        <div>
                            <h1 className="text-sm font-black tracking-tight text-white uppercase italic">Travel Agency</h1>
                            <p className="text-zinc-600 text-[9px] font-black tracking-[0.2em] uppercase mt-0.5 ml-0.5">Control Center</p>
                        </div>
                    </div>
                    <label
                        htmlFor="sidebar-toggle"
                        className="lg:hidden p-2 hover:bg-zinc-900 rounded-xl cursor-pointer transition-colors text-zinc-500"
                    >
                        <MaterialSymbol icon="close" size={20} />
                    </label>
                </div>

                <nav className="flex flex-col gap-1.5 flex-1 p-1">
                    {navLinks.map((link) => {
                        if (link.children) {
                            const isOpen = openMenus.includes(link.label);
                            const hasActiveChild = link.children.some(child => pathname === child.href);

                            return (
                                <div key={link.label} className="flex flex-col gap-1">
                                    <button
                                        onClick={() => toggleMenu(link.label)}
                                        className={cn(
                                            "flex items-center gap-3.5 px-4 py-3 rounded-2xl transition-all duration-300 group w-full text-left",
                                            hasActiveChild ? "text-white" : "hover:bg-zinc-900/50 hover:text-zinc-200"
                                        )}
                                    >
                                        <MaterialSymbol
                                            icon={link.icon as any}
                                            size={22}
                                            className={cn(
                                                "transition-colors",
                                                hasActiveChild ? "text-primary" : "text-zinc-600 group-hover:text-zinc-400"
                                            )}
                                        />
                                        <span className="text-sm font-bold tracking-tight flex-1">{link.label}</span>
                                        <MaterialSymbol
                                            icon="keyboard_arrow_down"
                                            size={20}
                                            className={cn(
                                                "transition-transform duration-300 text-zinc-600",
                                                isOpen && "rotate-180"
                                            )}
                                        />
                                    </button>

                                    <div className={cn(
                                        "overflow-hidden transition-all duration-300 ease-in-out pl-6 flex flex-col gap-1",
                                        isOpen ? "max-h-[500px] opacity-100 py-1" : "max-h-0 opacity-0"
                                    )}>
                                        {link.children.map((child) => {
                                            const isChildActive = pathname === child.href;
                                            return (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    className={cn(
                                                        "flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 group relative",
                                                        isChildActive
                                                            ? "bg-zinc-900 text-white shadow-lg shadow-black/20"
                                                            : "hover:text-zinc-200 text-zinc-500"
                                                    )}
                                                >
                                                    <MaterialSymbol
                                                        icon={child.icon as any}
                                                        size={18}
                                                        className={cn(
                                                            "transition-colors",
                                                            isChildActive ? "text-primary" : "text-zinc-700 group-hover:text-zinc-500"
                                                        )}
                                                    />
                                                    <span className="text-xs font-bold tracking-tight">{child.label}</span>
                                                    {isChildActive && (
                                                        <div className="absolute left-0 w-1 h-4 bg-primary rounded-full" />
                                                    )}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        }

                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href!}
                                href={link.href!}
                                className={cn(
                                    "flex items-center gap-3.5 px-4 py-3 rounded-2xl transition-all duration-300 group",
                                    isActive
                                        ? "bg-zinc-900 text-white shadow-xl shadow-black/20"
                                        : "hover:bg-zinc-900/50 hover:text-zinc-200"
                                )}
                            >
                                <MaterialSymbol
                                    icon={link.icon as any}
                                    size={22}
                                    className={cn(
                                        "transition-colors",
                                        isActive ? "text-primary" : "text-zinc-600 group-hover:text-zinc-400"
                                    )}
                                />
                                <span className="text-sm font-bold tracking-tight">{link.label}</span>
                                {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />}
                            </Link>
                        );
                    })}
                </nav>

                <div className="mt-8 pt-6 border-t border-zinc-900/50">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800/50 hover:border-zinc-700/50 transition-colors group">
                        <div className="flex items-center gap-4">
                            <div className="size-10 rounded-xl bg-zinc-800 flex items-center justify-center border border-zinc-700/50 group-hover:scale-105 transition-transform">
                                <MaterialSymbol icon="person" size={22} className="text-zinc-300" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[11px] font-black text-white truncate uppercase italic tracking-wider">Admin</p>
                                <p className="text-[10px] text-zinc-600 font-bold tracking-tight flex items-center gap-1.5 mt-0.5 group-hover:text-primary transition-colors cursor-pointer">
                                    Sign Out <MaterialSymbol icon="logout" size={12} />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default SideBar;
