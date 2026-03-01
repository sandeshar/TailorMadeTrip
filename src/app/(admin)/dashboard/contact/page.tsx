import React from 'react';
import { MaterialSymbol } from "@/components/ui/material-symbol";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function AdminContactPage() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-black tracking-tight text-zinc-900">Guest Inquiries</h1>

            <div className="grid grid-cols-1 gap-4">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="bg-white border border-zinc-100 rounded-[2rem] p-8 hover:shadow-xl hover:shadow-zinc-200/20 transition-all group flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10">
                            <MaterialSymbol icon="mark_as_unread" size={28} className="text-primary" />
                        </div>
                        <div className="flex-1 space-y-4">
                            <div className="flex items-center gap-3">
                                <h3 className="text-xl font-black text-zinc-900">Custom Trek Inquiry for Mustang</h3>
                                <Badge variant="secondary" className="bg-amber-50 text-amber-600 border-none font-bold uppercase tracking-widest text-[10px]">Urgent</Badge>
                            </div>
                            <p className="text-zinc-500 font-medium leading-relaxed max-w-3xl">
                                "Hi, we are looking for a 12-day customized trek to Upper Mustang for a group of 4. We require luxury accommodation where possible..."
                            </p>
                            <div className="flex flex-wrap gap-6 items-center pt-2">
                                <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-widest">
                                    <MaterialSymbol icon="person" size={16} /> Sarah Jenkins
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-widest">
                                    <MaterialSymbol icon="schedule" size={16} /> 2 hours ago
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-widest">
                                    <MaterialSymbol icon="alternate_email" size={16} /> s.jenkins@email.com
                                </div>
                            </div>
                        </div>
                        <div className="flex md:flex-col gap-3 shrink-0 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                            <Button size="lg" className="rounded-2xl h-14 w-14 p-0 shadow-lg shadow-primary/20">
                                <MaterialSymbol icon="reply" size={24} />
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-2xl h-14 w-14 p-0 border-zinc-100 hover:bg-zinc-50">
                                <MaterialSymbol icon="archive" size={24} className="text-zinc-400" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="flex justify-center pt-10">
                <Button variant="ghost" className="font-bold text-zinc-400 hover:text-primary transition-colors gap-2 text-lg">
                    Load Older Inquiries
                    <MaterialSymbol icon="expand_more" size={24} />
                </Button>
            </div>
        </div>
    );
}
