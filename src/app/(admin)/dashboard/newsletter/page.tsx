import React from 'react';
import { MaterialSymbol } from "@/components/ui/material-symbol";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NewsletterAdminPage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-3xl font-black tracking-tight text-zinc-900">Newsletter Subscribers</h1>
                    <p className="text-zinc-500 font-medium">Manage your audience and marketing campaigns.</p>
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                    <Button variant="outline" className="h-14 px-8 rounded-2xl gap-3 font-bold border-zinc-200 flex-1 md:flex-none">
                        <MaterialSymbol icon="upload_file" size={22} />
                        Export CSV
                    </Button>
                    <Button className="h-14 px-8 rounded-2xl gap-3 font-bold shadow-xl shadow-primary/20 flex-1 md:flex-none">
                        <MaterialSymbol icon="campaign" size={22} />
                        Blast Campaign
                    </Button>
                </div>
            </div>

            <div className="bg-white border border-transparent border-t-zinc-100 rounded-[3rem] shadow-2xl shadow-zinc-200/50 p-10">
                <div className="flex flex-col md:flex-row gap-6 mb-10">
                    <div className="flex-1 flex gap-4 bg-zinc-50/50 p-2 rounded-2xl border border-zinc-100">
                        <Input placeholder="Search by email..." className="border-none bg-transparent h-12 px-4 focus-visible:ring-0 font-medium" />
                        <Button className="rounded-xl h-12 w-12 p-0">
                            <MaterialSymbol icon="search" size={20} />
                        </Button>
                    </div>
                    <div className="flex items-center gap-4 bg-zinc-50/50 px-6 py-2 rounded-2xl border border-zinc-100">
                        <span className="text-xs font-black uppercase tracking-widest text-zinc-400">Filter By:</span>
                        <select className="bg-transparent border-none text-sm font-bold focus:ring-0 cursor-pointer outline-none">
                            <option>All Subscribers</option>
                            <option>Recently Joined</option>
                            <option>Unsubscribed</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="flex flex-col md:flex-row items-center justify-between p-6 rounded-[2rem] hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100 group">
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 flex items-center justify-center font-black text-zinc-600 text-lg">
                                    {String.fromCharCode(64 + i)}
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-black text-xl text-zinc-900 tracking-tight">subscriber.name.{i}@gmail.com</h4>
                                    <div className="flex items-center gap-4">
                                        <span className="text-xs font-bold text-zinc-400 flex items-center gap-1 uppercase tracking-widest"><MaterialSymbol icon="history" size={14} /> Joined May {i+5}, 2026</span>
                                        <div className="w-1 h-1 rounded-full bg-zinc-300" />
                                        <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Active</span>
                                    </div>
                                </div>
                            </div>
                            <Button variant="ghost" size="icon" className="rounded-2xl h-14 w-14 hover:bg-white hover:text-destructive hover:shadow-lg transition-all opacity-0 group-hover:opacity-100">
                                <MaterialSymbol icon="person_remove" size={24} />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
