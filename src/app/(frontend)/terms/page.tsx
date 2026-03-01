import React from 'react';
import { MaterialSymbol } from "@/components/ui/material-symbol";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function TermsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 section-container py-10 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Sidebar Navigation */}
                    <aside className="lg:col-span-3">
                        <div className="sticky top-28 space-y-6">
                            <div>
                                <h3 className="text-slate-900 text-sm font-bold uppercase tracking-wider mb-4">Table of Contents</h3>
                                <nav className="flex flex-col gap-1">
                                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-semibold group border border-primary/20" href="#introduction">
                                        <MaterialSymbol icon="info" size={20} />
                                        <span className="text-sm">Introduction</span>
                                    </a>
                                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 transition-all font-medium" href="#user-agreement">
                                        <MaterialSymbol icon="person" size={20} />
                                        <span className="text-sm">User Agreement</span>
                                    </a>
                                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 transition-all font-medium" href="#booking-policy">
                                        <MaterialSymbol icon="calendar_month" size={20} />
                                        <span className="text-sm">Booking Policy</span>
                                    </a>
                                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 transition-all font-medium" href="#refunds">
                                        <MaterialSymbol icon="assignment_return" size={20} />
                                        <span className="text-sm">Refunds & Cancellations</span>
                                    </a>
                                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 transition-all font-medium" href="#intellectual-property">
                                        <MaterialSymbol icon="copyright" size={20} />
                                        <span className="text-sm">Intellectual Property</span>
                                    </a>
                                </nav>
                            </div>
                            <div className="p-5 rounded-2xl bg-slate-900 text-white">
                                <h4 className="font-bold mb-2">Need Help?</h4>
                                <p className="text-slate-400 text-xs mb-4">Contact our legal team for clarifications on our policies.</p>
                                <Button className="w-full py-2 bg-primary rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
                                    Contact Support
                                </Button>
                            </div>
                        </div>
                    </aside>

                    {/* Content Area */}
                    <div className="lg:col-span-9">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-2">Terms and Conditions</h1>
                                <p className="text-slate-500 flex items-center gap-2 text-sm font-medium">
                                    <MaterialSymbol icon="update" size={18} />
                                    Last Updated: October 24, 2023
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <Button variant="outline" className="flex items-center gap-2 px-4 py-2 border-slate-200 rounded-lg text-sm font-bold">
                                    <MaterialSymbol icon="print" size={18} />
                                    Print
                                </Button>
                                <Button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                                    <MaterialSymbol icon="download" size={18} />
                                    Download PDF
                                </Button>
                            </div>
                        </div>

                        <div className="max-w-none space-y-12">
                            {/* Section: Introduction */}
                            <section id="introduction">
                                <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-4 mb-6">1. Introduction</h2>
                                <div className="space-y-4 text-slate-700 leading-relaxed font-medium">
                                    <p>
                                        Welcome to TravelWise. These Terms and Conditions govern your use of our website and your purchase of travel packages, flight bookings, and hotel reservations.
                                    </p>
                                    <p>
                                        By accessing or using our services, you agree to be bound by these terms. If you disagree with any part of the terms, you may not access the service.
                                    </p>
                                </div>
                            </section>

                            {/* Section: User Agreement */}
                            <section id="user-agreement">
                                <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-4 mb-6">2. User Agreement</h2>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">2.1</span>
                                        <p className="text-slate-700 font-medium">You must be at least 18 years of age to book travel services through our platform.</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">2.2</span>
                                        <p className="text-slate-700 font-medium">You are responsible for maintaining the confidentiality of your account and password.</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">2.3</span>
                                        <p className="text-slate-700 font-medium">Users agree to provide accurate, current, and complete information during the booking process.</p>
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
