import React from 'react';
import { Button } from "@/components/ui/button";
import { MaterialSymbol } from "@/components/ui/material-symbol";
import { Badge } from "@/components/ui/badge";

export default function UserAdminPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold tracking-tight text-zinc-900 font-black">Community & Users</h1>
                <Button className="h-12 px-6 rounded-2xl gap-3 font-bold shadow-xl shadow-primary/20">
                    <MaterialSymbol icon="person_add" size={22} />
                    Invite Member
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: 'Total Users', value: '4,567', icon: 'people', color: 'bg-indigo-50 text-indigo-600' },
                    { label: 'Pending Reviews', value: '23', icon: 'pending_actions', color: 'bg-amber-50 text-amber-600' },
                    { label: 'Top Contributors', value: '45', icon: 'star', color: 'bg-emerald-50 text-emerald-600' }
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-[2rem] border border-zinc-100 flex items-center gap-6 shadow-sm">
                        <div className={`${stat.color} p-4 rounded-2xl`}>
                            <MaterialSymbol icon={stat.icon} size={28} />
                        </div>
                        <div>
                            <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                            <p className="text-2xl font-black text-zinc-900 mt-1">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white border border-zinc-100 rounded-[2.5rem] overflow-hidden shadow-sm">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-zinc-50/50 border-b border-zinc-100">
                            <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-zinc-500">Member</th>
                            <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-zinc-500">Access Level</th>
                            <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-zinc-500">Join Date</th>
                            <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-zinc-500">Status</th>
                            <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-zinc-500 text-right">Settings</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-50">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <tr key={i} className="hover:bg-zinc-50/30 transition-colors group">
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-zinc-100 animate-pulse border-2 border-white ring-1 ring-zinc-100" />
                                        <div>
                                            <p className="font-bold text-zinc-900">User Profile {i}</p>
                                            <p className="text-xs text-zinc-400 font-medium">user{i}@example.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <span className={`text-xs font-black uppercase tracking-widest ${i === 1 ? 'text-primary' : 'text-zinc-500'}`}>
                                        {i === 1 ? 'Administrator' : 'Tour Guide'}
                                    </span>
                                </td>
                                <td className="px-8 py-6 text-sm font-medium text-zinc-500">Feb {10 + i}, 2026</td>
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-xs font-bold text-emerald-600">Active</span>
                                    </div>
                                </td>
                                <td className="px-8 py-6 text-right">
                                    <Button variant="ghost" size="icon" className="rounded-xl hover:bg-zinc-100 opacity-0 group-hover:opacity-100 transition-all">
                                        <MaterialSymbol icon="more_horiz" size={24} className="text-zinc-400" />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
