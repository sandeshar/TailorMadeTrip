import React from 'react';
import { MaterialSymbol } from "@/components/ui/material-symbol";
import { Button } from "@/components/ui/button";

export default function TermsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <main className="flex-1 section-container py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Sidebar Navigation */}
                    <aside className="lg:col-span-3">
                        <div className="sticky top-28 space-y-6">
                            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                                <h3 className="text-slate-900 text-xs font-bold uppercase tracking-widest mb-6 border-b border-slate-100 pb-4">Table of Contents</h3>
                                <nav className="flex flex-col gap-2">
                                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-white font-bold shadow-md shadow-primary/20 transition-all group" href="#introduction">
                                        <MaterialSymbol icon="info" size={20} className="text-white" />
                                        <span className="text-sm">Introduction</span>
                                    </a>
                                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-primary transition-all font-bold group" href="#user-agreement">
                                        <MaterialSymbol icon="person" size={20} className="text-slate-400 group-hover:text-primary" />
                                        <span className="text-sm">User Agreement</span>
                                    </a>
                                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-primary transition-all font-bold group" href="#booking-policy">
                                        <MaterialSymbol icon="calendar_month" size={20} className="text-slate-400 group-hover:text-primary" />
                                        <span className="text-sm">Booking Policy</span>
                                    </a>
                                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-primary transition-all font-bold group" href="#refunds">
                                        <MaterialSymbol icon="assignment_return" size={20} className="text-slate-400 group-hover:text-primary" />
                                        <span className="text-sm">Refunds & Cancellations</span>
                                    </a>
                                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-primary transition-all font-bold group" href="#intellectual-property">
                                        <MaterialSymbol icon="copyright" size={20} className="text-slate-400 group-hover:text-primary" />
                                        <span className="text-sm">Intellectual Property</span>
                                    </a>
                                </nav>
                            </div>
                            <div className="p-6 rounded-2xl bg-slate-900 text-white shadow-xl shadow-slate-900/20">
                                <div className="size-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                                    <MaterialSymbol icon="support_agent" size={28} className="text-primary" />
                                </div>
                                <h4 className="font-bold text-lg mb-2">Need Help?</h4>
                                <p className="text-slate-400 text-sm mb-6 leading-relaxed">Contact our legal team for clarifications on our policies.</p>
                                <Button className="w-full py-6 bg-primary rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                                    Contact Support
                                </Button>
                            </div>
                        </div>
                    </aside>

                    {/* Content Area */}
                    <div className="lg:col-span-9 bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xs">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-8 border-b border-slate-100">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3 uppercase">Terms and Conditions</h1>
                                <p className="text-slate-400 flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                                    <MaterialSymbol icon="update" size={16} className="text-primary" />
                                    Last Updated: March 01, 2026
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-50 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-100 transition-colors border border-slate-100">
                                    <MaterialSymbol icon="print" size={18} />
                                    PRINT
                                </button>
                                <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl text-xs font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform uppercase tracking-wider">
                                    <MaterialSymbol icon="download" size={18} />
                                    DOWNLOAD PDF
                                </button>
                            </div>
                        </div>

                        <div className="max-w-none space-y-16">
                            {/* Section: Introduction */}
                            <section id="introduction" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-primary font-black text-2xl">01.</span>
                                    <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Introduction</h2>
                                </div>
                                <div className="space-y-6 text-slate-600 leading-relaxed font-medium text-base">
                                    <p>
                                        Welcome to <span className="text-slate-900 font-bold">TailormyTrip</span>. These Terms and Conditions govern your use of our website and your purchase of travel packages, flight bookings, and hotel reservations.
                                    </p>
                                    <p>
                                        By accessing or using our services, you agree to be bound by these terms. If you disagree with any part of the terms, you may not access the service.
                                    </p>
                                </div>
                            </section>

                            {/* Section: User Agreement */}
                            <section id="user-agreement" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-primary font-black text-2xl">02.</span>
                                    <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">User Agreement</h2>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex gap-4 items-start p-5 bg-slate-50 rounded-2xl border border-slate-100/50">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center text-xs font-black shadow-sm border border-slate-100">2.1</span>
                                        <p className="text-slate-600 font-bold leading-relaxed pt-1">You must be at least 18 years of age to book travel services through our platform.</p>
                                    </div>
                                    <div className="flex gap-4 items-start p-5 bg-slate-50 rounded-2xl border border-slate-100/50">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center text-xs font-black shadow-sm border border-slate-100">2.2</span>
                                        <p className="text-slate-600 font-bold leading-relaxed pt-1">You are responsible for maintaining the confidentiality of your account and password.</p>
                                    </div>
                                    <div className="flex gap-4 items-start p-5 bg-slate-50 rounded-2xl border border-slate-100/50">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center text-xs font-black shadow-sm border border-slate-100">2.3</span>
                                        <p className="text-slate-600 font-bold leading-relaxed pt-1">Users agree to provide accurate, current, and complete information during the booking process.</p>
                                    </div>
                                </div>
                            </section>

                            {/* Section: Booking Policy */}
                            <section id="booking-policy">
                                <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-4 mb-6">3. Booking Policy</h2>
                                <p className="text-slate-700 leading-relaxed mb-6 font-medium">
                                    All bookings are subject to availability and confirmation by TravelWise. The following conditions apply:
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <MaterialSymbol icon="check_circle" className="text-primary mt-0.5" size={20} />
                                        <span className="text-slate-700 font-medium"><strong>Payment:</strong> Full payment is required at the time of booking unless specified otherwise in the package details.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <MaterialSymbol icon="check_circle" className="text-primary mt-0.5" size={20} />
                                        <span className="text-slate-700 font-medium"><strong>Pricing:</strong> All prices are subject to change without notice until a booking is confirmed and paid in full.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <MaterialSymbol icon="check_circle" className="text-primary mt-0.5" size={20} />
                                        <span className="text-slate-700 font-medium"><strong>Travel Documents:</strong> It is the passenger's responsibility to ensure they have valid passports, visas, and health certificates.</span>
                                    </li>
                                </ul>
                            </section>

                            {/* Section: Refunds & Cancellations */}
                            <section className="p-8 rounded-2xl bg-slate-50 border border-slate-200" id="refunds">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">4. Refunds & Cancellations</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                                        <h4 className="font-bold text-primary mb-2">Standard Cancellation</h4>
                                        <p className="text-sm text-slate-600 font-medium">Cancellations made 30+ days prior to departure are eligible for a 90% refund of the total package price.</p>
                                    </div>
                                    <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                                        <h4 className="font-bold text-primary mb-2">Late Cancellation</h4>
                                        <p className="text-sm text-slate-600 font-medium">Cancellations made within 7 days of departure are non-refundable unless covered by travel insurance.</p>
                                    </div>
                                </div>
                                <p className="mt-6 text-sm text-slate-500 italic font-medium">
                                    * Specific airline and hotel partner cancellation policies may override these standard terms.
                                </p>
                            </section>

                            {/* Section: Intellectual Property */}
                            <section id="intellectual-property">
                                <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-4 mb-6">5. Intellectual Property</h2>
                                <div className="space-y-4 text-slate-700 leading-relaxed font-medium">
                                    <p>
                                        The Service and its original content, features, and functionality are and will remain the exclusive property of TravelWise and its licensors.
                                    </p>
                                    <p>
                                        Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of TravelWise.
                                    </p>
                                </div>
                            </section>
                        </div>

                        {/* Bottom CTA */}
                        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
                            <p className="text-slate-600 text-sm font-medium">
                                Have questions about these terms? We're here to help.
                            </p>
                            <div className="flex gap-4">
                                <Button variant="outline" className="px-6 py-6 rounded-xl border border-primary text-primary font-bold hover:bg-primary/5 transition-colors">
                                    Support Center
                                </Button>
                                <Button className="px-6 py-6 rounded-xl bg-slate-900 text-white font-bold hover:opacity-90 transition-opacity">
                                    Accept Terms
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
