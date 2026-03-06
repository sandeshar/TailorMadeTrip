"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
// import { getDashboardStats } from "@/actions/dashboard"; // Assuming this doesn't exist yet, will mock

interface DashboardStats {
    users: number;
    packages: number;
    orders: number;
    blogs: number;
    contacts: number;
}

export default function AdminDashboard() {
    const [stats, setStats] = useState<DashboardStats>({
        users: 0,
        packages: 0,
        orders: 0,
        blogs: 0,
        contacts: 0
    });
    const [isLoading, setIsLoading] = useState(false); // Set to false since we are mocking for now

    // useEffect(() => {
    //   fetchStats();
    // }, []);

    // const fetchStats = async () => {
    //   try {
    //     const statsData = await getDashboardStats();
    //     setStats(statsData);
    //   } catch (error) {
    //     console.error("Error fetching dashboard stats:", error);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };

    const statCards = [
        { label: "Total Users", value: stats.users, icon: "person", color: "bg-blue-600", link: "/dashboard/users" },
        { label: "Travel Packages", value: stats.packages, icon: "inventory_2", color: "bg-purple-600", link: "/dashboard/packages" },
        { label: "Blog Posts", value: stats.blogs, icon: "article", color: "bg-green-600", link: "/dashboard/blog" },
        { label: "Contact Inquiries", value: stats.contacts, icon: "mail", color: "bg-rose-600", link: "/dashboard/contact" },
    ];

    const quickActions = [
        { label: "New Package", icon: "add_circle", href: "/dashboard/packages/new", color: "text-blue-600" },
        { label: "Write Blog", icon: "edit_square", href: "/dashboard/blog/new", color: "text-purple-600" },
        { label: "Media Library", icon: "photo_library", href: "/dashboard/media", color: "text-amber-600" },
        { label: "Site Settings", icon: "settings", href: "/dashboard/setting", color: "text-slate-600" },
    ];

    return (
        <div className="space-y-12 animate-fadeIn pb-16 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-100 pb-8 mt-4">
                <div>
                    <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">System Overview</h1>
                    <p className="text-lg sm:text-xl text-gray-500 mt-2 font-medium">Monitor your travel agency's digital presence and manage content.</p>
                </div>
                <div className="flex gap-3">
                    <Link href="/dashboard/packages" className="bg-white border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-2xl font-bold text-sm hover:bg-gray-50 transition-all shadow-sm">
                        View All Packages
                    </Link>
                    <Link href="/dashboard/setting" className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                        Open Settings
                    </Link>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {statCards.map((stat, index) => (
                    <Link
                        href={stat.link}
                        key={index}
                        className="group bg-white p-8 rounded-[2rem] border-2 border-gray-50 shadow-sm hover:shadow-2xl hover:shadow-gray-200/60 hover:-translate-y-2 transition-all duration-500 flex flex-col gap-6"
                    >
                        <div className={`${stat.color} w-20 h-20 rounded-3xl text-white shadow-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-500`}>
                            <span className="material-symbols-outlined text-[40px] leading-none">{stat.icon}</span>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">{stat.label}</p>
                            <p className="text-5xl font-black text-gray-900 tracking-tighter">
                                {isLoading ? "..." : stat.value.toLocaleString()}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Main Content Area */}
                <div className="lg:col-span-8 space-y-10">
                    {/* Welcome & Status */}
                    <div className="bg-gradient-to-br from-blue-700 via-indigo-700 to-indigo-900 rounded-[2.5rem] p-10 sm:p-14 text-white shadow-2xl shadow-blue-200 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-blue-400/20 rounded-full blur-3xl"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                            <div className="text-center md:text-left max-w-lg">
                                <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">Welcome back,<br /><span className="text-blue-200">Admin!</span></h2>
                                <p className="text-xl text-blue-50 opacity-90 leading-relaxed font-medium">
                                    You have <span className="text-white font-bold underline underline-offset-8 decoration-blue-400">{stats.contacts} new inquiries</span> and {stats.packages} active packages. Everything seems to be running smoothly.
                                </p>
                            </div>
                            <div className="w-full md:w-auto shrink-0 flex flex-col gap-4">
                                <Link
                                    href="/dashboard/packages/new"
                                    className="bg-white text-blue-700 px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-indigo-950/20 text-center"
                                >
                                    Create New Package
                                </Link>
                                <Link
                                    href="/dashboard/contact"
                                    className="bg-white/10 text-white backdrop-blur-md border border-white/20 px-10 py-4 rounded-2xl font-bold text-base hover:bg-white/20 transition-all text-center"
                                >
                                    View Inquiries
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Quick Actions */}
                        <div className="bg-white p-10 rounded-[2rem] border-2 border-gray-50 shadow-xl shadow-gray-100/50 group">
                            <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
                                <span className="material-symbols-outlined text-blue-600 text-3xl group-hover:animate-pulse">bolt</span>
                                Quick Actions
                            </h3>
                            <div className="grid grid-cols-2 gap-6">
                                {quickActions.map((action, index) => (
                                    <Link
                                        key={index}
                                        href={action.href}
                                        className="flex flex-col items-center justify-center p-6 rounded-3xl border-2 border-gray-50 hover:border-blue-200 hover:bg-blue-50/50 transition-all group/item shadow-sm hover:shadow-lg"
                                    >
                                        <span className={`material-symbols-outlined text-4xl ${action.color} mb-3 group-hover/item:scale-125 transition-transform duration-300`}>
                                            {action.icon}
                                        </span>
                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">
                                            {action.label}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Recent Activity Mock */}
                        <div className="bg-white p-10 rounded-[2rem] border-2 border-gray-50 shadow-xl shadow-gray-100/50 group">
                            <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
                                <span className="material-symbols-outlined text-purple-600 text-3xl group-hover:rotate-12 transition-transform">history</span>
                                Recent Activity
                            </h3>
                            <div className="space-y-6">
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className="flex gap-6 items-center p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                                        <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                                            <span className="material-symbols-outlined text-2xl text-indigo-400">person</span>
                                        </div>
                                        <div>
                                            <p className="text-base font-bold text-gray-900 leading-tight">System Update {item}</p>
                                            <p className="text-sm font-medium text-gray-400 mt-1">2 hours ago</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Statistics (Col 4) */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="bg-white p-10 rounded-[2rem] border-2 border-gray-50 shadow-xl shadow-gray-100/50">
                        <h3 className="text-2xl font-black text-gray-900 mb-8 border-b border-gray-100 pb-4">Upcoming Features</h3>
                        <div className="space-y-6">
                            <div className="p-8 rounded-3xl bg-amber-50 border-2 border-amber-100 group hover:bg-amber-100/50 transition-colors">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="material-symbols-outlined text-amber-600 text-3xl font-black">payments</span>
                                    <p className="text-xl font-black text-amber-800 tracking-tight leading-none">Booking Engine</p>
                                </div>
                                <p className="text-base font-medium text-amber-800/70 leading-relaxed">
                                    Integration with local payment gateways (eSewa, Khalti) is currently under development.
                                </p>
                                <div className="mt-6 flex items-center gap-2">
                                    <div className="h-2 w-32 bg-amber-200 rounded-full overflow-hidden">
                                        <div className="h-full w-[65%] bg-amber-600 animate-pulse"></div>
                                    </div>
                                    <span className="text-xs font-black text-amber-600 uppercase">65% Done</span>
                                </div>
                            </div>

                            <div className="p-8 rounded-3xl bg-indigo-50 border-2 border-indigo-100 group">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="material-symbols-outlined text-indigo-600 text-3xl font-black">analytics</span>
                                    <p className="text-xl font-black text-indigo-800 tracking-tight leading-none">Advanced SEO</p>
                                </div>
                                <p className="text-base font-medium text-indigo-800/70 leading-relaxed">
                                    Automatic schema generation for travel packages is in the roadmap.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
