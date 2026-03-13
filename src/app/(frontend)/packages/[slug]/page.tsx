"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MaterialSymbol } from "@/components/ui/material-symbol";
import { Button } from "@/components/ui/button";
import { Newsletter } from "../../_components/Newsletter";
import { Testimonials } from "../../_components/Testimonials";
import { getPackageBySlug } from "@/actions/packages";

export default function PackageDetailPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const [resolvedParams, setResolvedParams] = useState<{ slug: string } | null>(null);
    const [pkg, setPkg] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [activeSection, setActiveSection] = useState("overview");

    useEffect(() => {
        params.then(setResolvedParams);
    }, [params]);

    useEffect(() => {
        if (resolvedParams?.slug) {
            getPackageBySlug(resolvedParams.slug).then(data => {
                setPkg(data);
                setLoading(false);
            });
        }
    }, [resolvedParams]);

    useEffect(() => {
        if (loading) return;
        const sections = ["overview", "itinerary", "cost-details", "departures", "useful-info", "reviews"];

        const observerOptions = {
            root: null,
            rootMargin: "-160px 0px -70% 0px",
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [loading]);

    if (loading) return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-[#0ea5e9] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Loading Journey...</p>
            </div>
        </div>
    );

    if (!pkg) return <div className="min-h-screen flex items-center justify-center font-bold text-slate-900">Package Not Found</div>;

    const gallery = Array.isArray(pkg.images) && pkg.images.length > 0
        ? pkg.images
        : (pkg.image ? [pkg.image] : ["https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2560&auto=format&fit=crop"]);

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8 font-display">
                    <Link className="hover:text-[#0ea5e9] transition-colors" href="/">Home</Link>
                    <MaterialSymbol icon="chevron_right" size={16} />
                    <Link className="hover:text-[#0ea5e9] transition-colors" href="/packages">Packages</Link>
                    <MaterialSymbol icon="chevron_right" size={16} />
                    <span className="text-slate-900 font-semibold uppercase">{pkg.title}</span>
                </nav>

                {/* Photo Gallery Grid */}
                <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[500px] mb-10 overflow-hidden rounded-xl">
                    <div className="col-span-2 row-span-2 relative group overflow-hidden">
                        <div className="w-full h-full bg-slate-200 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                            style={{ backgroundImage: `url('${gallery[0]}')` }}></div>
                    </div>
                    {gallery.slice(1, 4).map((img: string, idx: number) => (
                        <div key={idx} className="col-span-1 row-span-1 overflow-hidden">
                            <div className="w-full h-full bg-slate-200 bg-cover bg-center hover:scale-110 transition-transform duration-500"
                                style={{ backgroundImage: `url('${img}')` }}></div>
                        </div>
                    ))}
                    <div className="col-span-1 row-span-1 relative group overflow-hidden">
                        <div className="w-full h-full bg-slate-200 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: `url('${gallery[4] || gallery[0]}')` }}></div>
                        <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-slate-900 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-white transition-colors shadow-lg cursor-pointer">
                            <MaterialSymbol icon="grid_view" size={18} />
                            View all photos
                        </button>
                    </div>
                </div>

                {/* Sticky Navigation Bar */}
                <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-md -mx-4 px-4 mb-12 py-2 hidden lg:block border-b border-slate-100">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <nav className="flex items-center gap-1">
                            {[
                                { name: "Overview", id: "overview" },
                                { name: "Itinerary", id: "itinerary" },
                                { name: "Cost Details", id: "cost-details" },
                                { name: "Departures", id: "departures" },
                                { name: "Useful Info", id: "useful-info" },
                                { name: "Reviews", id: "reviews" },
                            ].map((tab) => (
                                <Link
                                    key={tab.id}
                                    href={`#${tab.id}`}
                                    className={`px-5 py-3 text-sm font-bold transition-all rounded-full ${activeSection === tab.id ? "bg-[#0ea5e9]/5 text-[#0ea5e9]" : "text-slate-500 hover:text-[#0ea5e9] hover:bg-slate-50"}`}
                                >
                                    {tab.name}
                                </Link>
                            ))}
                        </nav>
                        <Button className="rounded-xl px-6 py-5 font-bold bg-[#0ea5e9]">Book Now</Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <article className="space-y-16" id="overview">
                            {/* Title Section */}
                            <div>
                                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 leading-tight text-slate-900">
                                    {pkg.title}
                                </h1>

                                {/* Good to Know Section */}
                                <section className="mb-12">
                                    <div className="flex items-center gap-4 mb-8">
                                        <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">Good to Know</h2>
                                        <div className="h-[2px] w-12 bg-[#0ea5e9]"></div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
                                        {pkg.duration && <GoodToKnowItem icon="calendar_today" label="Duration" value={pkg.duration} />}
                                        {pkg.tripGrade && <GoodToKnowItem icon="speed" label="Trip Grade" value={pkg.tripGrade} showHelp />}
                                        {(pkg.tripDestination || pkg.location) && <GoodToKnowItem icon="signpost" label="Trip Destination" value={pkg.tripDestination || pkg.location} />}
                                        {pkg.startsAt && <GoodToKnowItem icon="location_on" label="Starts at" value={pkg.startsAt} />}
                                        {pkg.endsAt && <GoodToKnowItem icon="flag" label="Ends at" value={pkg.endsAt} />}
                                        {pkg.maxAltitude && <GoodToKnowItem icon="landscape" label="Max. Altitude" value={pkg.maxAltitude} />}
                                        {pkg.tripType && <GoodToKnowItem icon="person_add" label="Trip Type" value={pkg.tripType} />}
                                        {pkg.transport && <GoodToKnowItem icon="flight" label="Transport" value={pkg.transport} rotate={45} />}
                                        {pkg.accommodation && <GoodToKnowItem icon="bed" label="Accommodation" value={pkg.accommodation} />}
                                    </div>
                                </section>

                                {/* TipTap Content */}
                                <div className="tiptap prose prose-slate max-w-none text-slate-600 mb-12 prose-lg font-sans leading-relaxed 
                                    prose-headings:font-black prose-headings:text-slate-900 prose-headings:tracking-tight
                                    prose-p:text-slate-600 prose-p:leading-8
                                    
                                    prose-ul:list-none prose-ul:pl-0
                                    prose-ul:li:relative prose-ul:li:pl-10 prose-ul:li:py-2
                                    prose-ul:li:before:content-['\ea10'] prose-ul:li:before:font-['Material_Symbols_Rounded'] prose-ul:li:before:absolute prose-ul:li:before:left-0 prose-ul:li:before:top-2 prose-ul:li:before:text-2xl prose-ul:li:before:text-[#0ea5e9] prose-ul:li:before:font-normal
                                    
                                    prose-ol:list-none prose-ol:pl-0 prose-ol:counter-reset-list
                                    prose-ol:li:relative prose-ol:li:pl-10 prose-ol:li:py-2 prose-ol:li:counter-increment-list
                                    prose-ol:li:before:content-[counter(list)] prose-ol:li:before:absolute prose-ol:li:before:left-0 prose-ol:li:before:top-2 prose-ol:li:before:size-7 prose-ol:li:before:bg-[#0ea5e9]/10 prose-ol:li:before:text-[#0ea5e9] prose-ol:li:before:rounded-lg prose-ol:li:before:flex prose-ol:li:before:items-center prose-ol:li:before:justify-center prose-ol:li:before:text-xs prose-ol:li:before:font-black
                                    
                                    prose-strong:text-slate-900 prose-strong:font-black
                                    prose-img:rounded-3xl prose-img:shadow-2xl prose-img:my-12 prose-img:mx-auto prose-img:border-8 prose-img:border-slate-50
                                    
                                    prose-blockquote:border-l-0 prose-blockquote:bg-gradient-to-br prose-blockquote:from-[#0ea5e9]/10 prose-blockquote:to-white prose-blockquote:py-10 prose-blockquote:px-12 prose-blockquote:rounded-[2rem] prose-blockquote:italic prose-blockquote:text-slate-800 prose-blockquote:font-semibold prose-blockquote:relative prose-blockquote:shadow-xl prose-blockquote:shadow-[#0ea5e9]/5 prose-blockquote:my-14
                                    prose-blockquote:before:content-['\201C'] prose-blockquote:before:text-8xl prose-blockquote:before:text-[#0ea5e9]/40 prose-blockquote:before:absolute prose-blockquote:before:-top-6 prose-blockquote:before:left-4 prose-blockquote:after:content-['\201D'] prose-blockquote:after:text-8xl prose-blockquote:after:text-[#0ea5e9]/10 prose-blockquote:after:absolute prose-blockquote:after:-bottom-12 prose-blockquote:after:right-8
                                    
                                    prose-code:text-[#0ea5e9] prose-code:bg-[#0ea5e9]/5 prose-code:px-2 prose-code:py-1 prose-code:rounded-lg prose-code:font-bold prose-code:before:content-none prose-code:after:content-none
                                    prose-hr:border-slate-100 prose-hr:my-16 prose-hr:border-t-2"
                                    dangerouslySetInnerHTML={{ __html: pkg.description }}>
                                </div>
                            </div>

                            {/* Itinerary */}
                            {pkg.itinerary && pkg.itinerary.length > 0 && (
                                <section className="scroll-mt-36" id="itinerary">
                                    <h3 className="text-3xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                                        <MaterialSymbol icon="route" className="text-[#0ea5e9]" size={32} />
                                        Full Itinerary
                                    </h3>
                                    <div className="space-y-4">
                                        {[...pkg.itinerary].sort((a: any, b: any) => Number(a.day) - Number(b.day)).map((item: any, idx: number) => (
                                            <details key={idx} className="group border border-slate-100 rounded-xl overflow-hidden bg-slate-50/50 hover:bg-white transition-all duration-300 [&_summary::-webkit-details-marker]:hidden transform hover:-translate-y-0.5 hover:shadow-md">
                                                <summary className="flex items-center justify-between p-5 cursor-pointer list-none focus:outline-none">
                                                    <div className="flex items-center gap-4">
                                                        <div className="size-10 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center text-[#0ea5e9] group-open:bg-[#0ea5e9] group-open:text-white transition-all duration-300 font-bold text-sm">
                                                            {item.day}
                                                        </div>
                                                        <div>
                                                            <span className="text-[#0ea5e9] font-bold text-[10px] uppercase tracking-widest block mb-0.5">Day {item.day}</span>
                                                            <h4 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-[#0ea5e9] transition-colors">{item.title}</h4>
                                                        </div>
                                                    </div>
                                                    <MaterialSymbol icon="expand_more" size={24} className="text-slate-400 group-open:rotate-180 transition-transform duration-500" />
                                                </summary>
                                                <div className="px-5 pb-5 pt-0 ml-14 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-500">
                                                    <div className="h-px bg-slate-100 mb-4"></div>
                                                    <div className="prose prose-sm prose-slate max-w-none 
                                                        prose-p:text-slate-600 prose-p:leading-relaxed 
                                                        prose-headings:font-black prose-headings:text-slate-900 
                                                        prose-li:marker:text-[#0ea5e9] prose-li:marker:font-black prose-li:text-slate-600 
                                                        prose-strong:text-slate-900 prose-strong:font-black
                                                        prose-blockquote:border-l-0 prose-blockquote:bg-white prose-blockquote:shadow-md prose-blockquote:shadow-[#0ea5e9]/5 prose-blockquote:border-r-4 prose-blockquote:border-[#0ea5e9]/20 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-l-2xl prose-blockquote:italic"
                                                        dangerouslySetInnerHTML={{ __html: item.content }}>
                                                    </div>
                                                    {item.proTip && (
                                                        <div className="mt-4 p-4 bg-[#0ea5e9]/5 rounded-xl border-l-4 border-[#0ea5e9]/40 flex gap-3 items-start animate-in zoom-in-95 duration-700 delay-150">
                                                            <MaterialSymbol icon="lightbulb" className="text-[#0ea5e9]" shrink-0 size={18} />
                                                            <p className="text-[#0ea5e9]/80 text-xs font-semibold italic">{item.proTip}</p>
                                                        </div>
                                                    )}
                                                </div>
                                            </details>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Cost Details */}
                            <div id="cost-details" className="grid md:grid-cols-2 gap-8 scroll-mt-36">
                                <div className="bg-emerald-50/50 p-8 rounded-2xl border border-emerald-100/50">
                                    <h4 className="text-emerald-800 font-bold mb-6 flex items-center gap-2 text-xl">
                                        <MaterialSymbol icon="check_circle" className="text-emerald-600" />
                                        What's Included
                                    </h4>
                                    <div className="prose prose-sm prose-emerald" dangerouslySetInnerHTML={{ __html: pkg.costDetails?.includes || "Included details not provided." }}></div>
                                </div>
                                <div className="bg-rose-50/50 p-8 rounded-2xl border border-rose-100/50">
                                    <h4 className="text-rose-800 font-bold mb-6 flex items-center gap-2 text-xl">
                                        <MaterialSymbol icon="cancel" className="text-rose-600" />
                                        What's Excluded
                                    </h4>
                                    <div className="prose prose-sm prose-rose" dangerouslySetInnerHTML={{ __html: pkg.costDetails?.excludes || "Excluded details not provided." }}></div>
                                </div>
                            </div>

                            {/* Departures, Useful Info & Reviews Sections (Empty Placeholders from Git) */}
                            <section id="departures" className="scroll-mt-36 pt-12 border-t border-slate-100">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">Upcoming Departures</h3>
                                <div className="bg-slate-50 p-6 rounded-2xl text-slate-500 text-sm italic">
                                    Private departures available daily. Contact us for custom dates.
                                </div>
                            </section>

                            <section id="useful-info" className="scroll-mt-36 pt-12 border-t border-slate-100">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">Useful Information</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Passports & Visas</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">Ensure your passport is valid for at least six months from the date of entry.</p>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Travel Insurance</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">Comprehensive travel insurance is mandatory for all our trekking expeditions.</p>
                                    </div>
                                </div>
                            </section>

                            <section id="reviews" className="scroll-mt-36 pt-12 border-t border-slate-100">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    Traveler Reviews
                                    <div className="flex text-amber-400"><MaterialSymbol icon="star" size={18} /><MaterialSymbol icon="star" size={18} /><MaterialSymbol icon="star" size={18} /><MaterialSymbol icon="star" size={18} /><MaterialSymbol icon="star" size={18} /></div>
                                </h3>
                                <p className="text-slate-500 text-sm italic">Showing latest reviews from our verified travelers.</p>
                            </section>
                        </article>
                    </div>

                    {/* Sidebar Widget */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 bg-white rounded-3xl border border-slate-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] overflow-hidden group/card hover:shadow-[0_20px_50px_-12px_rgba(14,165,233,0.15)] transition-all duration-500">
                            <div className="bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] p-8 text-white relative overflow-hidden">
                                <div className="absolute -right-6 -top-6 size-32 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
                                <div className="relative z-10">
                                    <p className="text-[10px] font-black opacity-80 uppercase tracking-[0.2em] mb-2">Price Starting From</p>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-5xl font-black">${pkg.price}</span>
                                        <span className="text-sm font-bold opacity-80">/ person</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 space-y-4">
                                <Button className="w-full py-7 rounded-2xl text-lg font-black bg-[#0ea5e9] hover:bg-slate-900 text-white shadow-xl shadow-[#0ea5e9]/10 transform active:scale-[0.97] transition-all uppercase tracking-widest flex items-center justify-center gap-3">
                                    Book This Trip
                                    <MaterialSymbol icon="arrow_forward" size={20} />
                                </Button>
                                <button className="w-full py-4 rounded-2xl text-sm font-bold border-2 border-slate-50 text-slate-500 hover:text-[#0ea5e9] hover:bg-[#0ea5e9]/5 hover:border-[#0ea5e9]/20 transition-all uppercase tracking-widest flex items-center justify-center gap-2">
                                    <MaterialSymbol icon="chat" size={18} />
                                    Contact Expert
                                </button>
                                <div className="pt-4 flex items-center justify-center gap-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                    <div className="flex items-center gap-1.5"><MaterialSymbol icon="verified" size={14} className="text-emerald-500" /> Best Price</div>
                                    <div className="flex items-center gap-1.5"><MaterialSymbol icon="lock" size={14} className="text-[#0ea5e9]" /> Secure</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Testimonials />
            <Newsletter />
        </div>
    );
}

function GoodToKnowItem({ icon, label, value, rotate, showHelp }: { icon: string; label: string; value: string; rotate?: number; showHelp?: boolean }) {
    return (
        <div className="flex items-start gap-4 group">
            <MaterialSymbol
                icon={icon}
                size={48}
                className={`text-[#0ea5e9] transition-transform duration-500 group-hover:scale-110 ${rotate ? `rotate-${rotate}` : ""}`}
                weight={300}
            />
            <div>
                <div className="flex items-center gap-1.5">
                    <label className="text-[15px] text-slate-500 font-medium block">{label}</label>
                    {showHelp && <MaterialSymbol icon="help" size={16} className="text-[#0ea5e9] opacity-0 group-hover:opacity-100 transition-opacity" />}
                </div>
                <p className="font-bold text-slate-900 text-lg leading-tight">{value}</p>
            </div>
        </div>
    );
}
