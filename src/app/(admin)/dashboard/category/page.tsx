import React from 'react';
import { MaterialSymbol } from "@/components/ui/material-symbol";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function CategoryAdminPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center bg-zinc-900 p-8 rounded-[2.5rem] text-white">
                <div>
                    <h1 className="text-3xl font-black tracking-tight">Destinations & Categories</h1>
                    <p className="opacity-60 font-medium mt-1">Organize your offerings by region and style.</p>
                </div>
                <Button className="h-14 px-8 rounded-2xl gap-3 font-bold bg-white text-black hover:bg-zinc-200 transition-colors">
                    <MaterialSymbol icon="add_location" size={24} />
                    Create Category
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { name: 'Mountain Treks', count: 12, icon: 'terrain' },
                    { name: 'Heritage Tours', count: 8, icon: 'temple_buddhist' },
                    { name: 'Luxury Getaways', count: 5, icon: 'diamond' },
                    { name: 'Jungle Safaris', count: 4, icon: 'forest' },
                    { name: 'Cultural Walks', count: 15, icon: 'festival' },
                    { name: 'Honeymoon', count: 6, icon: 'favorite' }
                ].map((cat, i) => (
                    <div key={i} className="bg-white border border-zinc-100 rounded-[2rem] p-8 hover:shadow-2xl hover:shadow-zinc-200/30 transition-all group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-primary/10 transition-colors" />
                        <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                            <MaterialSymbol icon={cat.icon} size={28} />
                        </div>
                        <h3 className="text-2xl font-black text-zinc-900 mb-2">{cat.name}</h3>
                        <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs mb-8">{cat.count} ACTIVE PACKAGES</p>
                        <div className="flex items-center gap-3">
                            <Button variant="ghost" className="h-12 w-12 p-0 rounded-xl hover:bg-zinc-100">
                                <MaterialSymbol icon="edit" size={20} className="text-zinc-400" />
                            </Button>
                            <Button variant="ghost" className="h-12 w-12 p-0 rounded-xl hover:bg-zinc-100 text-destructive">
                                <MaterialSymbol icon="delete" size={20} />
                            </Button>
                            <div className="flex-1" />
                            <Button variant="link" className="font-bold text-primary group-hover:translate-x-1 transition-transform p-0">
                                View Packages
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
