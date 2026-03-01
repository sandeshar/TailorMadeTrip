import React from 'react';
import { MaterialSymbol } from "@/components/ui/material-symbol";
import { Button } from "@/components/ui/button";

export default function FAQPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <main className="section-container py-16 lg:py-24">
                <div className="flex flex-col gap-6 mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-2 uppercase">Help Center</h1>
                    <p className="text-lg text-slate-500 max-w-2xl font-medium tracking-tight">Find everything you need to know about booking, payments, and our travel policies.</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Sidebar Navigation */}
                    <aside className="w-full lg:w-1/4">
                        <div className="sticky top-28 flex flex-col gap-8">
                            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 px-2 border-b border-slate-50 pb-4">Categories</h3>
                                <nav className="flex flex-col gap-2">
                                    <a className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 transition-all" href="#">
                                        <MaterialSymbol icon="payments" size={20} />
                                        <span className="text-sm">Booking & Payments</span>
                                    </a>
                                    <a className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-primary transition-all font-bold group" href="#">
                                        <MaterialSymbol icon="cancel" size={20} className="text-slate-400 group-hover:text-primary" />
                                        <span className="text-sm">Cancellations</span>
                                    </a>
                                    <a className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-primary transition-all font-bold group" href="#">
                                        <MaterialSymbol icon="verified_user" size={20} className="text-slate-400 group-hover:text-primary" />
                                        <span className="text-sm">Travel Insurance</span>
                                    </a>
                                    <a className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-primary transition-all font-bold group" href="#">
                                        <MaterialSymbol icon="support_agent" size={20} className="text-slate-400 group-hover:text-primary" />
                                        <span className="text-sm">On-Trip Support</span>
                                    </a>
                                    <a className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-primary transition-all font-bold group" href="#">
                                        <MaterialSymbol icon="luggage" size={20} className="text-slate-400 group-hover:text-primary" />
                                        <span className="text-sm">Luggage & Extras</span>
                                    </a>
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
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-10 w-2 bg-primary rounded-full"></div>
                                <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Booking & Payments</h2>
                            </div>

                            {/* Accordion Item 1 */}
                            <div className="group border border-slate-100 bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300">
                                <button className="w-full flex items-center justify-between p-7 text-left focus:outline-none">
                                    <span className="text-lg font-bold text-slate-900">How do I book a travel package?</span>
                                    <div className="size-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                        <MaterialSymbol icon="add" className="text-xl" />
                                    </div>
                                </button>
                                <div className="px-7 pb-7 text-slate-600 font-medium leading-relaxed text-base">
                                    To book a package, simply browse our Destinations or Packages page, select your desired itinerary, and click "Book Now". Follow the prompts to enter traveler details and complete your payment securely. You'll receive a confirmation email within minutes.
                                </div>
                            </div>

                            {/* Accordion Item 2 */}
                            <div className="group border border-slate-100 bg-white rounded-3xl shadow-xs hover:shadow-md transition-all duration-300">
                                <button className="w-full flex items-center justify-between p-7 text-left focus:outline-none">
                                    <span className="text-lg font-bold text-slate-900">What payment methods are accepted?</span>
                                    <div className="size-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                        <MaterialSymbol icon="add" className="text-xl" />
                                    </div>
                                </button>
                            </div>

                            {/* Accordion Item 3 (Highlighted Style) */}
                            <div className="group border-2 border-primary bg-white rounded-3xl overflow-hidden shadow-xl shadow-primary/5">
                                <button className="w-full flex items-center justify-between p-7 text-left focus:outline-none">
                                    <span className="text-xl font-black text-slate-900 uppercase tracking-tight">Can I pay in installments?</span>
                                    <div className="size-8 rounded-full bg-primary flex items-center justify-center text-white">
                                        <MaterialSymbol icon="remove" className="text-xl" />
                                    </div>
                                </button>
                                <div className="px-7 pb-7 text-slate-600 font-medium leading-relaxed">
                                    <p className="mb-4 text-base">Yes, we offer flexible payment plans for most international packages. You can choose to:</p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3">
                                            <MaterialSymbol icon="check_circle" className="text-primary text-xl" />
                                            <span className="font-bold">Pay a minimum deposit of 20% at the time of booking.</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <MaterialSymbol icon="check_circle" className="text-primary text-xl" />
                                            <span className="font-bold">Schedule monthly installments interest-free.</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <MaterialSymbol icon="check_circle" className="text-primary text-xl" />
                                            <span className="font-bold">Complete the full payment at least 45 days before your departure.</span>
                                        </li>
                                    </ul>
                                    <div className="mt-8 p-4 bg-primary/5 rounded-2xl border border-primary/10">
                                        <p className="text-sm font-bold text-primary italic flex items-center gap-2">
                                            <MaterialSymbol icon="info" size={18} />
                                            Note: Installment options may vary depending on specific airline and hotel policies.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Accordion Item 4 */}
                            <div className="group border border-slate-200 bg-white rounded-2xl overflow-hidden shadow-sm">
                                <button className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
                                    <span className="text-lg font-bold text-slate-800">Are taxes and fees included in the price?</span>
                                    <MaterialSymbol icon="expand_more" className="text-slate-400 group-hover:text-primary transition-colors" size={24} />
                                </button>
                            </div>

                            {/* Accordion Item 5 */}
                            <div className="group border border-slate-200 bg-white rounded-2xl overflow-hidden shadow-sm">
                                <button className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
                                    <span className="text-lg font-bold text-slate-800">How do I get my booking receipt?</span>
                                    <MaterialSymbol icon="expand_more" className="text-slate-400 group-hover:text-primary transition-colors" size={24} />
                                </button>
                            </div>

                            <div className="mt-12 p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="flex flex-col gap-2 text-center md:text-left">
                                    <h3 className="text-2xl font-bold text-slate-900 border-none">Still have questions?</h3>
                                    <p className="text-slate-600 font-medium">We’re available 24/7 to assist you with any concerns.</p>
                                </div>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Button variant="outline" className="bg-white border-slate-200 px-6 py-6 rounded-xl font-bold flex items-center gap-2 text-slate-700 hover:shadow-md transition-all">
                                        <MaterialSymbol icon="mail" className="text-primary" size={20} />
                                        Email Support
                                    </Button>
                                    <Button className="bg-primary text-white px-8 py-6 rounded-xl font-bold shadow-lg shadow-primary/30 hover:scale-[1.02] transition-all">
                                        Contact Us
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
