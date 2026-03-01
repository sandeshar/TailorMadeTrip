import React from 'react';
import { MaterialSymbol } from "@/components/ui/material-symbol";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CmsAdminPage() {
    return (
        <div className="space-y-10">
            <div className="flex justify-between items-end border-b border-zinc-100 pb-10">
                <div>
                    <h1 className="text-5xl font-black tracking-tighter text-zinc-900 leading-none">Pages & CMS</h1>
                    <p className="text-zinc-500 mt-4 text-xl font-medium tracking-tight">Create and modify static content pages.</p>
                </div>
                <Button className="h-16 px-10 rounded-3xl gap-4 font-black text-lg shadow-2xl shadow-primary/30">
                    <MaterialSymbol icon="add_box" size={28} />
                    Create Page
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[
                    { title: 'Privacy Policy', url: '/privacy-policy', lastEdit: '2 days ago', status: 'Published' },
                    { title: 'Terms of Service', url: '/terms', lastEdit: '1 week ago', status: 'Published' },
                    { title: 'Cookie Policy', url: '/cookies', lastEdit: '3 hours ago', status: 'Draft' },
                    { title: 'FAQ', url: '/faq', lastEdit: '1 month ago', status: 'Published' }
                ].map((page, i) => (
                    <div key={i} className="bg-white border-2 border-zinc-50 p-10 rounded-[3rem] hover:border-primary/20 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] transition-all group flex flex-col justify-between min-h-[320px]">
                        <div>
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-20 h-20 rounded-3xl bg-zinc-50 flex items-center justify-center text-zinc-300 group-hover:bg-primary/5 group-hover:text-primary transition-colors duration-500">
                                    <MaterialSymbol icon="article" size={36} />
                                </div>
                                <Badge variant={page.status === 'Published' ? 'secondary' : 'outline'} className={`px-4 py-2 rounded-xl border-none font-black uppercase tracking-widest text-[10px] ${page.status === 'Published' ? 'bg-emerald-50 text-emerald-600' : 'bg-zinc-100 text-zinc-400'}`}>
                                    {page.status}
                                </Badge>
                            </div>
                            <h3 className="text-3xl font-black text-zinc-900 tracking-tighter group-hover:text-primary transition-colors mb-2">{page.title}</h3>
                            <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs">{page.url}</p>
                        </div>
                        
                        <div className="flex items-center justify-between pt-10 border-t border-zinc-50 mt-8">
                            <span className="text-sm font-bold text-zinc-400">Edited {page.lastEdit}</span>
                            <div className="flex gap-4">
                                <Button variant="ghost" className="h-14 w-14 rounded-2xl p-0 hover:bg-zinc-50">
                                    <MaterialSymbol icon="edit" size={24} className="text-zinc-400" />
                                </Button>
                                <Button className="h-14 w-14 rounded-2xl p-0 shadow-lg opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                                    <MaterialSymbol icon="arrow_forward" size={24} />
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
