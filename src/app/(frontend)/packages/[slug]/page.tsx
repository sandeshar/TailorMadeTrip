import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function PackageDetailPage({ params }: { params: { slug: string } }) {
    return (
        <div className="container mx-auto py-10 px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                    <div>
                        <Badge className="mb-4 text-zinc-600 bg-zinc-100 hover:bg-zinc-200">Featured Package</Badge>
                        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">Luxury Everest Base Camp Trek</h1>
                        <p className="text-muted-foreground text-xl leading-relaxed max-w-3xl">
                            Experience the majesty of the world's highest peak with our exclusive luxury trek. Expert guides, premium accommodation, and unforgettable views.
                        </p>
                    </div>

                    <div className="aspect-[16/9] bg-muted animate-pulse rounded-2xl shadow-2xl overflow-hidden shadow-zinc-200/50" />

                    <div className="prose prose-zinc prose-lg  max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:text-zinc-600">
                        <h2 className="text-3xl font-bold mb-6">Overview</h2>
                        <p className="mb-6 leading-relaxed">
                            This luxury trek to Everest Base Camp is designed for those who want to experience the grandeur of the Himalayas without sacrificing comfort. Our itinerary is carefully crafted to ensure safe acclimatization while visiting the most iconic spots in the Khumbu region.
                        </p>
                        <h2 className="text-3xl font-bold mb-6">Itinerary</h2>
                        <ul className="space-y-4 mb-8">
                            <li className="flex gap-4 items-start p-4 rounded-xl hover:bg-zinc-50 transition-colors border-l-4 border-primary">
                                <span className="font-bold text-primary min-w-[60px] text-lg">Day 1:</span>
                                <span className="text-zinc-700 leading-relaxed font-medium">Arrival in Kathmandu and transfer to luxury hotel in Thamel. Welcome dinner with cultural program.</span>
                            </li>
                            <li className="flex gap-4 items-start p-4 rounded-xl hover:bg-zinc-50 transition-colors border-l-4 border-zinc-200">
                                <span className="font-bold text-zinc-500 min-w-[60px] text-lg">Day 2:</span>
                                <span className="text-zinc-700 leading-relaxed font-medium font-medium">Flight to Lukla (2,860m) followed by a gentle 4-hour trek to Phakding. Overnight at high-end lodge.</span>
                            </li>
                            <li className="flex gap-4 items-start p-4 rounded-xl hover:bg-zinc-50 transition-colors border-l-4 border-zinc-200">
                                <span className="font-bold text-zinc-500 min-w-[60px] text-lg">Day 3:</span>
                                <span className="text-zinc-700 leading-relaxed font-medium font-medium">Trek to Namche Bazaar (3,440m). Spectacular views of Everest and Lhotse along the way.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <div className="sticky top-28 space-y-8">
                        <div className="bg-card p-8 rounded-3xl border border-zinc-100 shadow-2xl shadow-zinc-200/50 hover:shadow-primary/5 transition-all duration-500">
                            <div className="flex justify-between items-baseline mb-8">
                                <span className="text-muted-foreground font-semibold text-lg">Price from</span>
                                <span className="text-4xl font-extrabold tracking-tight text-primary">$4,999</span>
                            </div>

                            <div className="space-y-6 mb-10">
                                <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-50/50">
                                    <span className="text-zinc-500 font-medium">Duration</span>
                                    <span className="font-bold text-zinc-900">14 Days</span>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-50/50">
                                    <span className="text-zinc-500 font-medium">Group Size</span>
                                    <span className="font-bold text-zinc-900">Max 12</span>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-50/50">
                                    <span className="text-zinc-500 font-medium">Difficulty</span>
                                    <span className="font-bold text-primary">Hard</span>
                                </div>
                            </div>

                            <Button className="w-full py-8 text-xl font-bold shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transform hover:-translate-y-1 transition-all duration-300">
                                Book This Adventure
                            </Button>

                            <p className="text-xs text-center text-muted-foreground font-medium mt-6 uppercase tracking-widest opacity-60">
                                * Flexible cancellation policies apply
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
