import React from 'react';
import { MaterialSymbol } from "@/components/ui/material-symbol";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function FAQPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="section-container py-12">
                {/* Hero Section */}
                <div className="flex flex-col gap-6 mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 border-none">Frequently Asked Questions</h1>
                    <p className="text-lg text-slate-600 max-w-2xl font-medium">Find everything you need to know about booking, payments, and our travel policies. Can't find what you're looking for? Our support team is here to help.</p>
                    <div className="w-full max-w-3xl mt-4">
                        <div className="relative flex items-center h-14 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                            <MaterialSymbol icon="search" className="ml-5 text-slate-400" size={24} />
                            <input className="w-full h-full bg-transparent border-none focus:ring-0 text-lg px-4 text-slate-900 placeholder:text-slate-400 font-medium" placeholder="Ask a question (e.g. 'How do I request a refund?')" type="text" />
                            <Button className="mr-2 bg-primary text-white px-6 py-2.5 rounded-lg font-bold">Search</Button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Navigation */}
                    <aside className="w-full lg:w-1/4">
                        <div className="sticky top-32 flex flex-col gap-6">
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 px-2">Categories</h3>
                                <nav className="flex flex-col gap-1">
                                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-bold transition-all" href="#">
                                        <MaterialSymbol icon="payments" size={20} />
                                        <span>Booking & Payments</span>
                                    </a>
                                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 transition-all font-medium" href="#">
                                        <MaterialSymbol icon="cancel" size={20} />
                                        <span>Cancellations</span>
                                    </a>
                                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 transition-all font-medium" href="#">
                                        <MaterialSymbol icon="verified_user" size={20} />
                                        <span>Travel Insurance</span>
                                    </a>
                                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 transition-all font-medium" href="#">
                                        <MaterialSymbol icon="support_agent" size={20} />
                                        <span>On-Trip Support</span>
                                    </a>
                                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 transition-all font-medium" href="#">
                                        <MaterialSymbol icon="luggage" size={20} />
                                        <span>Luggage & Extras</span>
                                    </a>
                                </nav>
                            </div>
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary to-blue-600 text-white shadow-xl shadow-primary/20">
                                <h4 className="font-bold text-lg mb-2">Need a custom plan?</h4>
                                <p className="text-sm text-blue-50 mb-4 opacity-90 font-medium">Talk to our travel experts and get a personalized itinerary.</p>
                                <Button className="w-full bg-white text-primary font-bold py-6 rounded-lg text-sm shadow-sm hover:bg-slate-50 transition-colors">Contact Us</Button>
                            </div>
                        </div>
                    </aside>

                    {/* FAQ Content Area */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-2xl font-bold text-slate-900 mb-2 border-none">Booking & Payments</h2>

                            {/* Accordion Item 1 */}
                            <div className="group border border-slate-200 bg-white rounded-2xl overflow-hidden shadow-sm">
                                <button className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
                                    <span className="text-lg font-bold text-slate-800">How do I book a travel package?</span>
                                    <MaterialSymbol icon="expand_more" className="text-slate-400 group-hover:text-primary transition-colors" />
                                </button>
                                <div className="px-6 pb-6 text-slate-600 font-medium leading-relaxed">
                                    To book a package, simply browse our Destinations or Packages page, select your desired itinerary, and click "Book Now". Follow the prompts to enter traveler details and complete your payment securely. You'll receive a confirmation email within minutes.
                                </div>
                            </div>

                            {/* Accordion Item 2 */}
                            <div className="group border border-slate-200 bg-white rounded-2xl overflow-hidden shadow-sm">
                                <button className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
                                    <span className="text-lg font-bold text-slate-800">What payment methods are accepted?</span>
                                    <MaterialSymbol icon="expand_more" className="text-slate-400 group-hover:text-primary transition-colors" />
                                </button>
                            </div>

                            {/* Accordion Item 3 (Highlighted Style) */}
                            <div className="group border-2 border-primary bg-white rounded-2xl overflow-hidden shadow-md">
                                <button className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
                                    <span className="text-lg font-bold text-slate-900 font-black">Can I pay in installments?</span>
                                    <MaterialSymbol icon="expand_less" className="text-primary font-bold" />
                                </button>
                                <div className="px-6 pb-6 text-slate-600 font-medium leading-relaxed">
                                    <p className="mb-3">Yes, we offer flexible payment plans for most international packages. You can choose to:</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Pay a minimum deposit of 20% at the time of booking.</li>
                                        <li>Schedule monthly installments interest-free.</li>
                                        <li>Complete the full payment at least 45 days before your departure.</li>
                                    </ul>
                                    <p className="mt-4 text-sm font-bold text-primary italic">Note: Installment options may vary depending on the specific airline and hotel policies involved in your package.</p>
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
