import React from 'react';
import { MaterialSymbol } from "@/components/ui/material-symbol";
import { Button } from "@/components/ui/button";
import { getFAQPage } from "@/actions/cms-actions";
import { getFAQCategories } from "@/actions/categories";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const page = await getFAQPage();
    return {
        title: page?.seo?.title || "FAQ | Travel",
        description: page?.seo?.description || "Frequently Asked Questions",
    };
}

export default async function FAQPage() {
    const [page, dbCategories] = await Promise.all([
        getFAQPage(),
        getFAQCategories()
    ]);

    const { header, items, cta } = page;

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <main className="section-container py-16 lg:py-24">
                <div className="flex flex-col gap-6 mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-2 uppercase">{header?.title}</h1>
                    <p className="text-lg text-slate-500 max-w-2xl font-medium tracking-tight">{header?.description}</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Sidebar Navigation */}
                    <aside className="w-full lg:w-1/4">
                        <div className="sticky top-28 flex flex-col gap-8">
                            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 px-2 border-b border-slate-50 pb-4">Categories</h3>
                                <nav className="flex flex-col gap-2">
                                    {dbCategories?.map((cat: any, idx: number) => (
                                        <a
                                            key={cat.id || cat._id}
                                            className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all font-bold group ${idx === 0 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-600 hover:bg-slate-50 hover:text-primary'}`}
                                            href={`#${cat.id || cat._id}`}
                                        >
                                            <MaterialSymbol icon={cat.icon || "help"} size={20} className={idx === 0 ? 'text-white' : 'text-slate-400 group-hover:text-primary'} />
                                            <span className="text-sm">{cat.name || cat.title}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-2xl shadow-slate-900/20 relative overflow-hidden group">
                                <div className="relative z-10">
                                    <h4 className="font-black text-xl mb-3 tracking-tight uppercase">Need a custom plan?</h4>
                                    <p className="text-sm text-slate-400 mb-6 leading-relaxed font-medium">Talk to our travel experts and get a personalized itinerary.</p>
                                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-black py-6 rounded-xl text-xs tracking-widest uppercase shadow-lg shadow-primary/20 transition-all">Contact Us</Button>
                                </div>
                                <MaterialSymbol icon="travel_explore" className="absolute -right-8 -bottom-8 text-9xl text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                            </div>
                        </div>
                    </aside>

                    {/* FAQ Content Area */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-12">
                            {dbCategories?.map((cat: any) => (
                                <div key={cat.id || cat._id} id={cat.id || cat._id} className="scroll-mt-32">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="h-10 w-2 bg-primary rounded-full"></div>
                                        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">{cat.name || cat.title}</h2>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        {items?.filter((item: any) => item.categoryId === (cat.id || cat._id)).map((item: any, idx: number) => (
                                            <div key={idx} className={`group border border-slate-100 bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 ${item.isHighlighted ? 'border-2 border-primary shadow-xl shadow-primary/5' : ''}`}>
                                                <div className="w-full flex flex-col p-7 text-left">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <span className={`text-lg font-bold ${item.isHighlighted ? 'text-slate-900 uppercase tracking-tight text-xl' : 'text-slate-900'}`}>{item.question}</span>
                                                        <div className={`size-8 rounded-full flex items-center justify-center ${item.isHighlighted ? 'bg-primary text-white' : 'bg-slate-50 group-hover:bg-primary group-hover:text-white transition-colors'}`}>
                                                            <MaterialSymbol icon="info" className="text-xl" />
                                                        </div>
                                                    </div>
                                                    <div className="text-slate-600 font-medium leading-relaxed text-base">
                                                        {item.answer}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            <div className="mt-12 p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="flex flex-col gap-2 text-center md:text-left">
                                    <h3 className="text-2xl font-bold text-slate-900 border-none">{cta?.title}</h3>
                                    <p className="text-slate-600 font-medium">{cta?.description}</p>
                                </div>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {cta?.secondaryButtonText && (
                                        <Button variant="outline" className="bg-white border-slate-200 px-6 py-6 rounded-xl font-bold flex items-center gap-2 text-slate-700 hover:shadow-md transition-all" asChild>
                                            <a href={cta?.secondaryButtonLink}>
                                                <MaterialSymbol icon="mail" className="text-primary" size={20} />
                                                {cta?.secondaryButtonText}
                                            </a>
                                        </Button>
                                    )}
                                    <Button className="bg-primary text-white px-8 py-6 rounded-xl font-bold shadow-lg shadow-primary/30 hover:scale-[1.02] transition-all" asChild>
                                        <a href={cta?.buttonLink}>{cta?.buttonText}</a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

