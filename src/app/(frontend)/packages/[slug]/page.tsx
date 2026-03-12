"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { MaterialSymbol } from "@/components/ui/material-symbol";
import { Button } from "@/components/ui/button";
import { NewsletterForm } from "../../_components/NewsletterForm";
import { Testimonials } from "../../_components/Testimonials";

function PackageDetailContent({ resolvedParams }: { resolvedParams: { slug: string } }) {
    const [activeSection, setActiveSection] = useState("overview");

    useEffect(() => {
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
    }, []);

    return (
        <div className="py-8">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6 font-display">
                <Link className="hover:text-primary transition-colors" href="/">
                    Home
                </Link>
                <MaterialSymbol icon="chevron_right" size={16} />
                <Link className="hover:text-primary transition-colors" href="/packages">
                    Packages
                </Link>
                <MaterialSymbol icon="chevron_right" size={16} />
                <span className="text-slate-900 font-semibold uppercase">Details</span>
            </nav>

            {/* Photo Gallery Grid */}
            <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[500px] mb-10 overflow-hidden rounded-xl">
                <div className="col-span-2 row-span-2 relative group overflow-hidden">
                    <div
                        className="w-full h-full bg-slate-200 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{
                            backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLh8D3YRBcuxsFOyxy4uFEpY9EjaT1F_9UpSThe91RGW6BHvLEBY_p7tes61z4E_coWWjBclwjqdqoHeI25khRbplB3B_EQOE89KbFaILVbQW332n18Hf9ER4CK6EKGZnPCflwLfSmikLtuPQCOA-zFnV31VKu4n8w6Ff83AXw3IKbuP6ITzPw7AslsBjJoWg798f2fB4eKuT5G9XHbw_Qq7jwmaguBWZ296coxhoZYp_f4NAYfSeRHTjhKV7E58LR2M9rMS8Cw8Ek')",
                        }}
                    ></div>
                </div>
                <div className="col-span-1 row-span-1 overflow-hidden">
                    <div
                        className="w-full h-full bg-slate-200 bg-cover bg-center hover:scale-110 transition-transform duration-500"
                        style={{
                            backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXm9llJ_9Xk-bzk25QYndswKAxLlJZIZZcw9EbN71wSoNXJ3jJ0Lapq9mAeFH6Wb369QeetlGRxER_TBfy6g825jkIT_Gmm3a4Jg9E4ECMWsLbjIKAYPTINvKCUL1OOojc8a9qXZc5RpZI38VT9hlU9U1dOBpw-l9Q2kUpZrUlHdAwAdPTkl08WJURlgPZc8NCzG5j5_9KfTtllcCnywOoje3tT_xXlLmAXh_2ChDi6x6sUxqH4UMKdcc-1frSaAxVvVVvC_1KCq1h')",
                        }}
                    ></div>
                </div>
                <div className="col-span-1 row-span-1 overflow-hidden">
                    <div
                        className="w-full h-full bg-slate-200 bg-cover bg-center hover:scale-110 transition-transform duration-500"
                        style={{
                            backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0YH47YoN7DjMf8SOSL99Am1YL4IKH30AzmplpmK7FjhwAFbMuK9hq8tJ1022FnygeeMfqqXVA4XM9Z6V1w7Xjh6Oxb6LFKfN_qgpxZwG51oah1v2dfpq8SC53cWU98_W3xQ-IY_RRsirWuGJ_M4YpePWUWOJdS9m37EV_IJeoBgRV-dresO_TAIPTxM8RSXYjrRygo2TKUcoEG2TiaLwKn31-WMLNmmfw5KrnF92HDgFWeRrAaIgnxMRSkSCIL_pkuDQ10s4ZHycA')",
                        }}
                    ></div>
                </div>
                <div className="col-span-1 row-span-1 overflow-hidden">
                    <div
                        className="w-full h-full bg-slate-200 bg-cover bg-center hover:scale-110 transition-transform duration-500"
                        style={{
                            backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCm59SKUf7LTTGo1oJna9AeHsPDLd6valUwpHrPrctRXR7rC2sxRldOfu3xXZZqFoAuD89RPI-Cz_FMTjNfIX7yxPuLFCNACOAWOv2jeFeYmPF9M1qIDwmKaDExVl-JNpsC8nszOLfG9ChqFZ0mrihN3oWaYVxruE7xnQqAWU3RWOMbSkcR2X4LqsAfShVi6G_5at6JC_3vVuVamf5oMYnuo4TOJvkfC6WR_VwSoljvt5qA5Jb612vWqMgLWxIkqD1d3Vt_d0kcN1Wl')",
                        }}
                    ></div>
                </div>
                <div className="col-span-1 row-span-1 relative group overflow-hidden">
                    <div
                        className="w-full h-full bg-slate-200 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{
                            backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDNc7U35AwIPcl_zN8c91V7gAIvrlbi0t1iAwQ7hTiYUNCY1NA9KZrEURvvi9sZqGzfcdoJHQu8O5kA2idEPTWIor2CVU8PZgVn0hQq995Vylcdg83pTnSQf87IMJgMDn7ka8inNjmK3g0v_R8mwCzrh-7WtpfrnnRYPuBcs0z8u8yRx7hN0z0W6r3Yl9pxGx5MpkizR5olcMLQZH569gVXLvM5KGjzLWuSHBk7MCbiOtTGrfvPB70_b3EpexZcV4gDoEEB2vYhstaH')",
                        }}
                    ></div>
                    <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-slate-900 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-white transition-colors shadow-lg cursor-pointer">
                        <MaterialSymbol icon="grid_view" size={18} />
                        View all photos
                    </button>
                </div>
            </div>

            {/* Sticky Navigation Bar */}
            <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-md -mx-4 px-4 mb-8 py-2 hidden lg:block">
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
                                className={`px-5 py-3 text-sm font-bold transition-all rounded-full ${activeSection === tab.id ? "bg-primary/5 text-primary" : "text-slate-500 hover:text-primary hover:bg-slate-50"}`}
                            >
                                {tab.name}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center gap-4">
                        <Button className="rounded-xl px-6 py-5 font-bold">Book Now</Button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    <article className="space-y-12" id="overview">
                        {/* Title Section */}
                        <div>
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900">
                                Wandering through Antiquity: A 10-Day Italian Odyssey
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 mb-8 pb-8 border-b border-slate-100">
                                {/* Meta details removed */}
                            </div>
                        </div>

                        {/* Story/Itinerary Content */}
                        <section className="space-y-16">
                            {/* Day 1 */}
                            <div>
                                <span className="text-primary font-bold tracking-widest uppercase text-xs">Day One</span>
                                <h2 className="text-3xl font-extrabold mt-2 mb-6 text-slate-900">The Eternal City Awakens</h2>
                                <p className="text-slate-600 leading-relaxed text-lg font-serif mb-6">
                                    Your journey begins where Western civilization found its voice. As you step out of your private transfer at the Fiumicino Airport, the
                                    warm Roman air carries the scent of roasted coffee and ancient stone.
                                </p>
                                <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-xl">
                                    <div className="flex items-center gap-2 mb-2 text-primary">
                                        <MaterialSymbol icon="lightbulb" size={20} />
                                        <span className="font-bold uppercase tracking-wider text-[10px]">Expert Pro-Tip</span>
                                    </div>
                                    <p className="text-slate-700 text-sm leading-relaxed">
                                        Avoid the "tourist menu" restaurants near the major monuments. Our Trastevere selection is a perfect example of authentic Roman dining.
                                    </p>
                                </div>
                            </div>

                            {/* Day 2 */}
                            <div>
                                <span className="text-primary font-bold tracking-widest uppercase text-xs">Day Two</span>
                                <h2 className="text-3xl font-extrabold mt-2 mb-6 text-slate-900">Whispers of the Vatican</h2>
                                <div
                                    className="w-full h-80 rounded-2xl bg-cover bg-center mb-8 shadow-md"
                                    style={{
                                        backgroundImage:
                                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXm9llJ_9Xk-bzk25QYndswKAxLlJZIZZcw9EbN71wSoNXJ3jJ0Lapq9mAeFH6Wb369QeetlGRxER_TBfy6g825jkIT_Gmm3a4Jg9E4ECMWsLbjIKAYPTINvKCUL1OOojc8a9qXZc5RpZI38VT9hlU9U1dOBpw-l9Q2kUpZrUlHdAwAdPTkl08WJURlgPZc8NCzG5j5_9KfTtllcCnywOoje3tT_xXlLmAXh_2ChDi6x6sUxqH4UMKdcc-1frSaAxVvVVvC_1KCq1h')",
                                    }}
                                ></div>
                                <p className="text-slate-600 leading-relaxed text-lg font-serif mb-6">
                                    We rise early to beat the crowds, entering the Vatican Museums before the general public.
                                </p>
                            </div>

                            <div className="py-12 border-t border-slate-100">
                                <button className="w-full py-6 rounded-2xl bg-slate-50 border-2 border-dashed border-slate-200 text-slate-500 font-bold hover:bg-primary/5 hover:border-primary/40 transition-all flex flex-col items-center gap-2 cursor-pointer">
                                    <MaterialSymbol icon="keyboard_double_arrow_down" size={32} />
                                    Read full itinerary
                                </button>
                            </div>
                        </section>

                        {/* Itinerary Section */}
                        <section className="mt-16 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm scroll-mt-36" id="itinerary">
                            <h3 className="text-3xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                                <MaterialSymbol icon="route" className="text-primary" size={32} />
                                Full Itinerary
                            </h3>
                            <div className="space-y-4">
                                {[
                                    {
                                        day: 1,
                                        title: "Arrival in Rome & Welcome Dinner",
                                        desc: "Arrive at Fiumicino Airport and meet your private driver for a transfer to our boutique hotel.",
                                        icon: "flight_land",
                                    },
                                    {
                                        day: 2,
                                        title: "Vatican Masterpieces & Sistine Chapel",
                                        desc: "Early access to the Vatican Museums before the crowds arrive.",
                                        icon: "museum",
                                    },
                                ].map((step) => (
                                    <details
                                        key={step.day}
                                        className="group border border-slate-100 rounded-xl overflow-hidden bg-slate-50/50 hover:bg-white transition-all [&_summary::-webkit-details-marker]:hidden"
                                    >
                                        <summary className="flex items-center justify-between p-5 cursor-pointer list-none focus:outline-none">
                                            <div className="flex items-center gap-4">
                                                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-open:bg-primary group-open:text-white transition-colors">
                                                    <MaterialSymbol icon={step.icon} size={20} />
                                                </div>
                                                <div>
                                                    <span className="text-primary font-bold text-[10px] uppercase tracking-widest block mb-0.5">Day {step.day}</span>
                                                    <h4 className="text-lg font-bold text-slate-900 leading-tight">{step.title}</h4>
                                                </div>
                                            </div>
                                            <MaterialSymbol icon="expand_more" size={24} className="text-slate-400 group-open:rotate-180 transition-transform duration-300" />
                                        </summary>
                                        <div className="px-5 pb-5 pt-0 ml-14">
                                            <div className="h-px bg-slate-100 mb-4"></div>
                                            <p className="text-slate-600 leading-relaxed text-sm antialiased">{step.desc}</p>
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </section>

                        <div id="cost-details" className="grid md:grid-cols-2 gap-8 mt-12 scroll-mt-36">
                            <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100/50">
                                <h4 className="text-emerald-800 font-bold mb-6 flex items-center gap-2 text-xl">
                                    <MaterialSymbol icon="check_circle" className="text-emerald-600" />
                                    Included
                                </h4>
                                <ul className="space-y-4 text-emerald-900/80">
                                    <li className="flex items-start gap-3 text-sm">
                                        <MaterialSymbol icon="done" size={18} className="text-emerald-500 mt-0.5" /> Luxury hotels
                                    </li>
                                    <li className="flex items-start gap-3 text-sm">
                                        <MaterialSymbol icon="done" size={18} className="text-emerald-500 mt-0.5" /> Professional local guides
                                    </li>
                                    <li className="flex items-start gap-3 text-sm">
                                        <MaterialSymbol icon="done" size={18} className="text-emerald-500 mt-0.5" /> All domestic transport & transfers
                                    </li>
                                    <li className="flex items-start gap-3 text-sm">
                                        <MaterialSymbol icon="done" size={18} className="text-emerald-500 mt-0.5" /> Daily breakfast and select group meals
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-rose-50 p-8 rounded-2xl border border-rose-100/50">
                                <h4 className="text-rose-800 font-bold mb-6 flex items-center gap-2 text-xl">
                                    <MaterialSymbol icon="cancel" className="text-rose-600" />
                                    Not Included
                                </h4>
                                <ul className="space-y-4 text-rose-900/80">
                                    <li className="flex items-start gap-3 text-sm">
                                        <MaterialSymbol icon="close" size={18} className="text-rose-500 mt-1" /> International flights
                                    </li>
                                    <li className="flex items-start gap-3 text-sm">
                                        <MaterialSymbol icon="close" size={18} className="text-rose-500 mt-1" /> Travel insurance
                                    </li>
                                    <li className="flex items-start gap-3 text-sm">
                                        <MaterialSymbol icon="close" size={18} className="text-rose-500 mt-1" /> Personal expenses & gratuities
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Departures Section */}
                        <section id="departures" className="mt-16 scroll-mt-36">
                            <h3 className="text-3xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                                <MaterialSymbol icon="calendar_today" className="text-primary" size={32} />
                                Upcoming Departures
                            </h3>
                            <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50 border-b border-slate-100">
                                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Date Range</th>
                                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
                                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Price</th>
                                            <th className="px-6 py-4"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50">
                                        {[
                                            { start: "May 15, 2024", end: "May 24, 2024", status: "Filling Fast", price: "$2,499" },
                                            { start: "Jun 10, 2024", end: "Jun 19, 2024", status: "Available", price: "$2,699" },
                                            { start: "Sep 05, 2024", end: "Sep 14, 2024", status: "Available", price: "$2,499" },
                                        ].map((date, idx) => (
                                            <tr key={idx} className="hover:bg-slate-50/50 transition-colors group">
                                                <td className="px-6 py-5">
                                                    <span className="font-bold text-slate-900">{date.start}</span>
                                                    <span className="text-slate-400 mx-2">—</span>
                                                    <span className="font-medium text-slate-600">{date.end}</span>
                                                </td>
                                                <td className="px-6 py-5">
                                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${date.status === "Filling Fast" ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"
                                                        }`}>
                                                        {date.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-5 text-right font-black text-slate-900 group-hover:text-primary transition-colors">
                                                    {date.price}
                                                </td>
                                                <td className="px-6 py-5 text-right">
                                                    <button className="text-primary font-bold text-sm hover:underline">Book Selection</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Useful Info Section */}
                        <section id="useful-info" className="mt-16 scroll-mt-36">
                            <h3 className="text-3xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                                <MaterialSymbol icon="info" className="text-primary" size={32} />
                                Good to Know
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6 font-display">
                                {[
                                    { icon: "star_rate", title: "Difficulty Level", desc: "Moderate. Includes several hours of walking on uneven ancient cobblestones and some stairs." },
                                    { icon: "group", title: "Group Size", desc: "Limited to 12 participants per departure for an intimate, high-quality experience." },
                                    { icon: "restaurant", title: "Dietary Needs", desc: "We can accommodate most allergies (Gluten-free, Vegan, etc.) if notified at least 30 days prior." },
                                    { icon: "luggage", title: "Packing Essentials", desc: "Comfortable walking shoes are non-negotiable. Shoulders and knees must be covered for church visits." },
                                ].map((info, idx) => (
                                    <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/20 transition-colors">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="size-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary border border-slate-100">
                                                <MaterialSymbol icon={info.icon} size={22} />
                                            </div>
                                            <h4 className="font-bold text-slate-900">{info.title}</h4>
                                        </div>
                                        <p className="text-slate-600 text-sm leading-relaxed">{info.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </article>
                </div>

                <div className="lg:col-span-1">
                    <div className="sticky top-36 space-y-6">
                        {/* Primary Booking Card */}
                        <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 space-y-6">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col">
                                    <span className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Price starts at</span>
                                    <div className="flex items-end gap-1.5">
                                        <span className="text-4xl font-black text-primary">$2,499</span>
                                        <span className="text-slate-500 text-sm mb-1 font-medium italic">/ person</span>
                                    </div>
                                </div>
                                <div className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-emerald-100">
                                    Best Deal
                                </div>
                            </div>

                            <div className="space-y-3 pt-2">
                                <div className="flex items-center gap-3 text-sm text-slate-600">
                                    <div className="size-8 rounded-lg bg-slate-50 flex items-center justify-center text-primary">
                                        <MaterialSymbol icon="hotel" size={18} />
                                    </div>
                                    <span className="font-medium">Luxury 4-Star Stays</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-600">
                                    <div className="size-8 rounded-lg bg-slate-50 flex items-center justify-center text-primary">
                                        <MaterialSymbol icon="group" size={18} />
                                    </div>
                                    <span className="font-medium">Max 12 Travelers</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-600">
                                    <div className="size-8 rounded-lg bg-slate-50 flex items-center justify-center text-primary">
                                        <MaterialSymbol icon="verified_user" size={18} />
                                    </div>
                                    <span className="font-medium">Free 24hr Cancellation</span>
                                </div>
                            </div>

                            <Button className="w-full py-7 bg-primary text-white rounded-2xl font-bold text-lg hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 group">
                                Reserve Your Spot
                                <MaterialSymbol icon="arrow_forward" size={24} className="group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>

                        {/* Support Card */}
                        <div className="bg-slate-900 text-white p-6 rounded-3xl space-y-4">
                            <h4 className="font-bold flex items-center gap-2">
                                <MaterialSymbol icon="support_agent" className="text-primary" />
                                Need Custom Help?
                            </h4>
                            <p className="text-slate-400 text-xs leading-relaxed">
                                Our travel experts are ready to personalize this itinerary for your private group or family.
                            </p>
                            <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-sm font-bold transition-all border border-white/10">
                                Get a Free Quote
                            </button>
                        </div>

                        {/* Recent Activity Mini-Card */}
                        <div className="px-4 py-3 bg-amber-50 rounded-2xl border border-amber-100 flex items-center gap-3">
                            <div className="size-2 bg-amber-500 rounded-full animate-pulse" />
                            <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider">
                                4 people viewed this in the last hour
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const PageFallback = () => (
    <div className="section-container py-8 animate-pulse">
        <div className="h-6 w-1/4 bg-slate-100 rounded mb-6"></div>
        <div className="h-[500px] w-full bg-slate-100 rounded-xl mb-10"></div>
    </div>
);

export default function PackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = React.use(params);

    return (
        <main className="section-container relative">
            <Suspense fallback={<PageFallback />}>
                <PackageDetailContent resolvedParams={resolvedParams} />
            </Suspense>

            <div id="reviews" className="scroll-mt-36">
                <Testimonials
                    title="Voices from the Road"
                    description="Real stories from travelers."
                />
            </div>

            <NewsletterForm variant="section" noBackground={true} />
        </main>
    );
}
