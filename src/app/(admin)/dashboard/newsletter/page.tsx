"use client";

import { useState, useEffect, useCallback } from "react";
import { toast } from "react-hot-toast";
import { MaterialSymbol } from "@/components/ui/material-symbol";
import { getSubscribers, deleteSubscriber } from "@/actions/newsletter";

interface ISubscriber {
    _id: string;
    email: string;
    status: 'active' | 'unsubscribed';
    sourceUrl?: string;
    createdAt: string;
}

export default function NewsletterManagement() {
    const [subscribers, setSubscribers] = useState<ISubscriber[]>([]);
    const [stats, setStats] = useState({ total: 0, active: 0, unsubscribed: 0 });
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isDeleting, setIsDeleting] = useState<string | null>(null);

    const fetchSubscribers = useCallback(async (page: number) => {
        setIsLoading(true);
        try {
            const result = await getSubscribers(page);
            setSubscribers(result.subscribers);
            setTotalPages(result.totalPages);
            setCurrentPage(result.currentPage);
            
            // Simple stats calculation for current view or refactor getSubscribers to return full stats
            const active = result.subscribers.filter((s: ISubscriber) => s.status === 'active').length;
            setStats({ 
                total: result.total, 
                active, // Note: these are current page stats, ideal to get from server
                unsubscribed: result.subscribers.length - active 
            });
        } catch (error) {
            toast.error("Failed to fetch subscribers");
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchSubscribers(1);
    }, [fetchSubscribers]);

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to remove this subscriber?")) return;
        setIsDeleting(id);
        try {
            const result = await deleteSubscriber(id);
            if (result.success) {
                toast.success("Subscriber removed");
                fetchSubscribers(currentPage);
            } else {
                toast.error("Failed to delete");
            }
        } catch (error) {
            toast.error("An error occurred");
        } finally {
            setIsDeleting(null);
        }
    };

    const getStatusColor = (status: string) => {
        return status === 'active' 
            ? 'bg-emerald-100 text-emerald-700 border-emerald-200' 
            : 'bg-slate-100 text-slate-600 border-slate-200';
    };

    return (
        <div className="p-6 lg:p-10 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight font-lexend uppercase italic">
                        Newsletter Subscribers
                    </h1>
                    <p className="text-slate-500 font-medium mt-1">Manage your email list and community growth.</p>
                </div>
                <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="px-5 py-2 text-center border-r border-slate-100">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total</p>
                        <p className="text-xl font-black text-slate-900">{stats.total}</p>
                    </div>
                    <button 
                        onClick={() => fetchSubscribers(currentPage)}
                        className="p-3 hover:bg-slate-50 rounded-xl transition-colors text-slate-400 hover:text-primary"
                    >
                        <MaterialSymbol icon="refresh" size={24} />
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 border-bottom border-slate-100">
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Email Address</th>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Status</th>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Source URL</th>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Subscribed On</th>
                                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {isLoading ? (
                                Array(5).fill(0).map((_, i) => (
                                    <tr key={i} className="animate-pulse">
                                        <td colSpan={4} className="px-8 py-6">
                                            <div className="h-4 bg-slate-100 rounded-full w-2/3"></div>
                                        </td>
                                    </tr>
                                ))
                            ) : subscribers.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="px-8 py-20 text-center">
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="size-16 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-200">
                                                <MaterialSymbol icon="mail" size={32} />
                                            </div>
                                            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No subscribers found yet</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                subscribers.map((sub) => (
                                    <tr key={sub._id} className="hover:bg-slate-50/50 transition-colors group">
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-3">
                                                <div className="size-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                                    <MaterialSymbol icon="contact_mail" size={18} fill />
                                                </div>
                                                <span className="font-bold text-slate-700">{sub.email}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5">
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${getStatusColor(sub.status)}`}>
                                                {sub.status}
                                            </span>
                                        </td>
                                        <td className="px-8 py-5">
                                            {sub.sourceUrl ? (
                                                <a 
                                                    href={sub.sourceUrl} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="text-xs font-medium text-primary hover:underline truncate max-w-[200px] block"
                                                    title={sub.sourceUrl}
                                                >
                                                    {(() => {
                                                        try {
                                                            const url = new URL(sub.sourceUrl);
                                                            return url.pathname + url.search;
                                                        } catch(e) {
                                                            return sub.sourceUrl;
                                                        }
                                                    })()}
                                                </a>
                                            ) : (
                                                <span className="text-xs text-slate-300 italic">Direct/Other</span>
                                            )}
                                        </td>
                                        <td className="px-8 py-5 text-sm font-medium text-slate-400">
                                            {new Date(sub.createdAt).toLocaleDateString('en-US', {
                                                year: 'numeric', month: 'short', day: 'numeric'
                                            })}
                                        </td>
                                        <td className="px-8 py-5 text-right">
                                            <button 
                                                onClick={() => handleDelete(sub._id)}
                                                disabled={isDeleting === sub._id}
                                                className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                                            >
                                                <MaterialSymbol icon={isDeleting === sub._id ? "progress_activity" : "delete"} size={20} className={isDeleting === sub._id ? "animate-spin" : ""} />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {totalPages > 1 && (
                    <div className="px-8 py-5 bg-slate-50/50 flex items-center justify-between border-t border-slate-100">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                            Page {currentPage} of {totalPages}
                        </p>
                        <div className="flex gap-2">
                            <button 
                                disabled={currentPage === 1}
                                onClick={() => fetchSubscribers(currentPage - 1)}
                                className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 disabled:opacity-50 transition-all shadow-sm"
                            >
                                Previous
                            </button>
                            <button 
                                disabled={currentPage === totalPages}
                                onClick={() => fetchSubscribers(currentPage + 1)}
                                className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 disabled:opacity-50 transition-all shadow-sm"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
