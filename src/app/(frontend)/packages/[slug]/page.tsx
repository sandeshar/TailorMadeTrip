import React from 'react';
import Link from 'next/link';
import { MaterialSymbol } from "@/components/ui/material-symbol";
import { Button } from "@/components/ui/button";
import { NewsletterForm } from '../../_components/NewsletterForm';

export default function PackageDetailPage({ params }: { params: { slug: string } }) {
    return (
        <main className="section-container py-8">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6 font-display">
                <Link className="hover:text-primary transition-colors" href="/">Home</Link>
                <MaterialSymbol icon="chevron_right" size={16} />
                <Link className="hover:text-primary transition-colors" href="/packages">Packages</Link>
                <MaterialSymbol icon="chevron_right" size={16} />
                <span className="text-slate-900 font-semibold">10-Day Amalfi Coast & Rome Discovery</span>
            </nav>

            {/* Photo Gallery Grid */}
            <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[500px] mb-10 overflow-hidden rounded-xl">
                <div className="col-span-2 row-span-2 relative group overflow-hidden">
                    <div
                        className="w-full h-full bg-slate-200 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLh8D3YRBcuxsFOyxy4uFEpY9EjaT1F_9UpSThe91RGW6BHvLEBY_p7tes61z4E_coWWjBclwjqdqoHeI25khRbplB3B_EQOE89KbFaILVbQW332n18Hf9ER4CK6EKGZnPCflwLfSmikLtuPQCOA-zFnV31VKu4n8w6Ff83AXw3IKbuP6ITzPw7AslsBjJoWg798f2fB4eKuT5G9XHbw_Qq7jwmaguBWZ296coxhoZYp_f4NAYfSeRHTjhKV7E58LR2M9rMS8Cw8Ek')" }}
                    ></div>
                </div>
                <div className="col-span-1 row-span-1 overflow-hidden">
                    <div
                        className="w-full h-full bg-slate-200 bg-cover bg-center hover:scale-110 transition-transform duration-500"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXm9llJ_9Xk-bzk25QYndswKAxLlJZIZZcw9EbN71wSoNXJ3jJ0Lapq9mAeFH6Wb369QeetlGRxER_TBfy6g825jkIT_Gmm3a4Jg9E4ECMWsLbjIKAYPTINvKCUL1OOojc8a9qXZc5RpZI38VT9hlU9U1dOBpw-l9Q2kUpZrUlHdAwAdPTkl08WJURlgPZc8NCzG5j5_9KfTtllcCnywOoje3tT_xXlLmAXh_2ChDi6x6sUxqH4UMKdcc-1frSaAxVvVVvC_1KCq1h')" }}
                    ></div>
                </div>
                <div className="col-span-1 row-span-1 overflow-hidden">
                    <div
                        className="w-full h-full bg-slate-200 bg-cover bg-center hover:scale-110 transition-transform duration-500"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0YH47YoN7DjMf8SOSL99Am1YL4IKH30AzmplpmK7FjhwAFbMuK9hq8tJ1022FnygeeMfqqXVA4XM9Z6V1w7Xjh6Oxb6LFKfN_qgpxZwG51oah1v2dfpq8SC53cWU98_W3xQ-IY_RRsirWuGJ_M4YpePWUWOJdS9m37EV_IJeoBgRV-dresO_TAIPTxM8RSXYjrRygo2TKUcoEG2TiaLwKn31-WMLNmmfw5KrnF92HDgFWeRrAaIgnxMRSkSCIL_pkuDQ10s4ZHycA')" }}
                    ></div>
                </div>
                <div className="col-span-1 row-span-1 overflow-hidden">
                    <div
                        className="w-full h-full bg-slate-200 bg-cover bg-center hover:scale-110 transition-transform duration-500"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCm59SKUf7LTTGo1oJna9AeHsPDLd6valUwpHrPrctRXR7rC2sxRldOfu3xXZZqFoAuD89RPI-Cz_FMTjNfIX7yxPuLFCNACOAWOv2jeFeYmPF9M1qIDwmKaDExVl-JNpsC8nszOLfG9ChqFZ0mrihN3oWaYVxruE7xnQqAWU3RWOMbSkcR2X4LqsAfShVi6G_5at6JC_3vVuVamf5oMYnuo4TOJvkfC6WR_VwSoljvt5qA5Jb612vWqMgLWxIkqD1d3Vt_d0kcN1Wl')" }}
                    ></div>
                </div>
                <div className="col-span-1 row-span-1 relative group overflow-hidden">
                    <div
                        className="w-full h-full bg-slate-200 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDNc7U35AwIPcl_zN8c91V7gAIvrlbi0t1iAwQ7hTiYUNCY1NA9KZrEURvvi9sZqGzfcdoJHQu8O5kA2idEPTWIor2CVU8PZgVn0hQq995Vylcdg83pTnSQf87IMJgMDn7ka8inNjmK3g0v_R8mwCzrh-7WtpfrnnRYPuBcs0z8u8yRx7hN0z0W6r3Yl9pxGx5MpkizR5olcMLQZH569gVXLvM5KGjzLWuSHBk7MCbiOtTGrfvPB70_b3EpexZcV4gDoEEB2vYhstaH')" }}
                    ></div>
                    <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-slate-900 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-white transition-colors shadow-lg cursor-pointer">
                        <MaterialSymbol icon="grid_view" size={18} />
                        View all photos
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    <article className="space-y-12">
                        {/* Title Section */}
                        <div>
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900">Wandering through Antiquity: A 10-Day Italian Odyssey</h1>
                            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 mb-8 pb-8 border-b border-slate-100">
                                <div className="flex items-center gap-3">
                                    <img alt="Guide Marco Rossi" className="size-10 rounded-full border border-slate-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqGwPAFPAV7guyK0grvYikXt67FSzUu1bEgLt0J2TpwDLk6r1C99_bKjyQyYKgNKtUvUocMdtQNoBtd-Rwu__raJ8rzomxAdZs8yazYgzlDSeLjgNRsiim775mFsjio1TERlhR7imkuZvWnS2-BXqRBrjqTF1SQT4MXIQ-5wCwxYJKB6Ci6Ts-17tr9sIvUAQO5f8Ftj0Gj3i3gx9RE4dhH_UKslcVRHJel2-yH-exINwIbdZl7zMzN3-AgWEfkgjqcyJboSLg38B4" />
                                    <span>Written by <span className="font-bold text-slate-900">Marco Rossi</span>, Lead Guide</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <MaterialSymbol icon="schedule" size={20} className="text-primary" />
                                    <span>10 Days / 9 Nights</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <MaterialSymbol icon="location_on" size={20} className="text-primary" />
                                    <span>Rome & Amalfi Coast</span>
                                </div>
                            </div>
                        </div>

                        {/* Story/Itinerary Content */}
                        <section className="space-y-16">
                            {/* Day 1 */}
                            <div>
                                <span className="text-primary font-bold tracking-widest uppercase text-xs">Day One</span>
                                <h2 className="text-3xl font-extrabold mt-2 mb-6 text-slate-900">The Eternal City Awakens</h2>
                                <p className="text-slate-600 leading-relaxed text-lg font-serif mb-6">
                                    Your journey begins where Western civilization found its voice. As you step out of your private transfer at the Fiumicino Airport, the warm Roman air carries the scent of roasted coffee and ancient stone. We've selected a boutique hotel nestled in the heart of the historic center, just a stone's throw from the Pantheon, where the original cobblestones still tell stories of emperors and poets.
                                </p>
                                <p className="text-slate-600 leading-relaxed text-lg font-serif mb-6">
                                    After settling into your suite, we'll gather for a welcome dinner at a tucked-away trattoria in Trastevere. Here, the pasta is handmade by nonnas who have perfected their craft over decades. Between sips of local Frascati wine and bites of authentic Carbonara, you'll meet your fellow travelers and begin to feel the rhythmic heartbeat of Rome.
                                </p>
                                <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-xl">
                                    <div className="flex items-center gap-2 mb-2 text-primary">
                                        <MaterialSymbol icon="lightbulb" size={20} />
                                        <span className="font-bold uppercase tracking-wider text-[10px]">Expert Pro-Tip</span>
                                    </div>
                                    <p className="text-slate-700 text-sm leading-relaxed">Avoid the "tourist menu" restaurants near the major monuments. Look for places where the menu is only in Italian and the locals are louder than the fountain outside. Our Trastevere selection is a perfect example of authentic Roman dining.</p>
                                </div>
                            </div>

                            {/* Day 2 */}
                            <div>
                                <span className="text-primary font-bold tracking-widest uppercase text-xs">Day Two</span>
                                <h2 className="text-3xl font-extrabold mt-2 mb-6 text-slate-900">Whispers of the Vatican</h2>
                                <div
                                    className="w-full h-80 rounded-2xl bg-cover bg-center mb-8 shadow-md"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXm9llJ_9Xk-bzk25QYndswKAxLlJZIZZcw9EbN71wSoNXJ3jJ0Lapq9mAeFH6Wb369QeetlGRxER_TBfy6g825jkIT_Gmm3a4Jg9E4ECMWsLbjIKAYPTINvKCUL1OOojc8a9qXZc5RpZI38VT9hlU9U1dOBpw-l9Q2kUpZrUlHdAwAdPTkl08WJURlgPZc8NCzG5j5_9KfTtllcCnywOoje3tT_xXlLmAXh_2ChDi6x6sUxqH4UMKdcc-1frSaAxVvVVvC_1KCq1h')" }}
                                ></div>
                                <p className="text-slate-600 leading-relaxed text-lg font-serif mb-6">
                                    We rise early to beat the crowds, entering the Vatican Museums before the general public. Walking through the Gallery of Maps, the sheer scale of human creativity becomes overwhelming. Your private guide will reveal the hidden messages Michelangelo painted into the Sistine Chapel ceiling—secrets hidden in plain sight for centuries.
                                </p>
                                <p className="text-slate-600 leading-relaxed text-lg font-serif mb-6">
                                    The afternoon is yours to wander. We suggest a stroll through the Borghese Gardens or simply sitting by the Trevi Fountain with a cup of artisanal gelato. The goal today isn't just to see Rome, but to inhabit it, feeling the transition from the sacred halls of the Vatican to the bustling energy of the modern piazzas.
                                </p>
                                <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-xl">
                                    <div className="flex items-center gap-2 mb-2 text-primary">
                                        <MaterialSymbol icon="lightbulb" size={20} />
                                        <span className="font-bold uppercase tracking-wider text-[10px]">Expert Pro-Tip</span>
                                    </div>
                                    <p className="text-slate-700 text-sm leading-relaxed">When visiting St. Peter's Basilica, remember that a strict dress code is enforced. Keep a light scarf in your bag to cover shoulders if you're wearing a sleeveless top—it’s a lifesaver in the summer heat.</p>
                                </div>
                            </div>

                            {/* Full Itinerary Button */}
                            <div className="py-12 border-t border-slate-100">
                                <button className="w-full py-6 rounded-2xl bg-slate-50 border-2 border-dashed border-slate-200 text-slate-500 font-bold hover:bg-primary/5 hover:border-primary/40 transition-all flex flex-col items-center gap-2 cursor-pointer">
                                    <MaterialSymbol icon="keyboard_double_arrow_down" size={32} />
                                    Read about Days 4-10 in the full itinerary
                                </button>
                            </div>
                        </section>

                        {/* Inc/Exc Grid */}
                        <div className="grid md:grid-cols-2 gap-8 mt-12">
                            <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100/50">
                                <h4 className="text-emerald-800 font-bold mb-6 flex items-center gap-2 text-xl">
                                    <MaterialSymbol icon="check_circle" className="text-emerald-600" />
                                    What's Included
                                </h4>
                                <ul className="space-y-4 text-emerald-900/80">
                                    <li className="flex items-start gap-3 text-sm">
                                        <MaterialSymbol icon="done" size={18} className="text-emerald-500 mt-0.5" />
                                        9 Nights in hand-picked luxury boutique hotels
                                    </li>
                                    <li className="flex items-start gap-3 text-sm">
                                        <MaterialSymbol icon="done" size={18} className="text-emerald-500 mt-0.5" />
                                        Private airport transfers & ground transport
                                    </li>
                                    <li className="flex items-start gap-3 text-sm">
                                        <MaterialSymbol icon="done" size={18} className="text-emerald-500 mt-0.5" />
                                        Daily breakfast & 4 curated regional dinners
                                    </li>
                                    <li className="flex items-start gap-3 text-sm">
                                        <MaterialSymbol icon="done" size={18} className="text-emerald-500 mt-0.5" />
                                        Full-time expert local guide & historian
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-rose-50 p-8 rounded-2xl border border-rose-100/50">
                                <h4 className="text-rose-800 font-bold mb-6 flex items-center gap-2 text-xl">
                                    <MaterialSymbol icon="cancel" className="text-rose-600" />
                                    What's Not Included
                                </h4>
                                <ul className="space-y-4 text-rose-900/80">
                                    <li className="flex items-start gap-3 text-sm">
                                        <MaterialSymbol icon="close" size={18} className="text-rose-500 mt-1" />
                                        International flights to/from Rome
                                    </li>
                                    <li className="flex items-start gap-3 text-sm">
                                        <MaterialSymbol icon="close" size={18} className="text-rose-500 mt-1" />
                                        Comprehensive travel insurance
                                    </li>
                                    <li className="flex items-start gap-3 text-sm">
                                        <MaterialSymbol icon="close" size={18} className="text-rose-500 mt-1" />
                                        Personal shopping and alcoholic beverages
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Visual Journey Map Placeholder */}
                        <section className="mt-12">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-900">
                                <MaterialSymbol icon="map" className="text-primary" />
                                The Visual Journey
                            </h3>
                            <div className="w-full h-[400px] rounded-2xl bg-slate-100 overflow-hidden relative border border-slate-200">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBlSMxApnX4srCqL54lSkxZW5iVt9dUIDWyixoP5cQ8Egu5PwYQsv2VvheqByOMUrnnqxuFk4AcOWPYuqhWLtXGm6AVVQC-60tj2bbEA18dyP5b64TcyQfU5PYNG2Xlwk8uxlPTzdHOzvWCGRzaLxqywm7276FeKO5HmRaOY5NGdqskzCsg5oFXNLC-En2YXe5oeS0X7oiKVXslaz1WB4XnbWlj35o52uE4So0vndcMko2xwKnfrxcZPi04G-Z9lQwn1EWPHywPQ0iv')" }}
                                ></div>
                                <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-3 border border-slate-100">
                                        <MaterialSymbol icon="location_on" className="text-primary" />
                                        Mapping the Italian Spirit
                                    </div>
                                </div>
                            </div>
                        </section>
                    </article>
                </div>

                {/* Booking Sidebar */}
                <div className="lg:col-span-1">
                    <div className="sticky top-28 bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 space-y-6">
                        <div className="flex items-end gap-2">
                            <span className="text-4xl font-black text-primary">$2,499</span>
                            <span className="text-slate-500 text-sm mb-1 font-medium">/ person</span>
                        </div>

                        <div className="space-y-4 pt-2">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Select Date</label>
                                <div className="relative">
                                    <MaterialSymbol icon="calendar_month" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" type="date" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Adults</label>
                                    <select className="w-full py-3 px-3 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" defaultValue="2">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Children</label>
                                    <select className="w-full py-3 px-3 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" defaultValue="0">
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3 pt-4 border-t border-slate-50">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500 font-medium">$2,499 x 2 Adults</span>
                                <span className="font-bold text-slate-900">$4,998</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500 font-medium">Service Fee</span>
                                <span className="font-bold text-emerald-500 uppercase tracking-wide">Free</span>
                            </div>
                            <div className="flex justify-between text-xl font-black pt-2 text-slate-900">
                                <span>Total</span>
                                <span className="text-primary">$4,998</span>
                            </div>
                        </div>

                        <Button className="w-full py-7 bg-primary text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 group">
                            Secure Your Spot
                            <MaterialSymbol icon="arrow_forward" size={24} className="group-hover:translate-x-1 transition-transform" />
                        </Button>

                        <div className="flex items-center justify-center gap-2 text-xs text-slate-400 bg-slate-50 py-3 rounded-lg">
                            <MaterialSymbol icon="bolt" size={16} className="text-amber-500" />
                            <span className="italic">Limited availability for Summer 2024</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Voices from the Road section */}
            <section className="mt-24 mb-16">
                <h3 className="text-3xl font-extrabold text-center mb-12 text-slate-900">Voices from the Road</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-8 bg-white rounded-2xl border border-slate-100 relative shadow-sm">
                        <MaterialSymbol icon="format_quote" size={64} className="absolute -top-4 -left-4 text-primary/5" />
                        <div className="flex items-center gap-4 mb-4">
                            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">SJ</div>
                            <div>
                                <h5 className="font-bold text-sm text-slate-900">Sarah Jenkins</h5>
                                <div className="flex text-amber-400">
                                    {[1, 2, 3, 4, 5].map(i => <MaterialSymbol key={i} icon="star" size={14} fill={true} />)}
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-slate-600 italic leading-relaxed">
                            "This wasn't just a vacation, it was a narrative experience. Reading the blog-style itinerary beforehand set the mood, but living it was beyond words. Positano really does feel like a vertical dream."
                        </p>
                    </div>
                    <div className="p-8 bg-white rounded-2xl border border-slate-100 relative shadow-sm">
                        <MaterialSymbol icon="format_quote" size={64} className="absolute -top-4 -left-4 text-primary/5" />
                        <div className="flex items-center gap-4 mb-4">
                            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">MT</div>
                            <div>
                                <h5 className="font-bold text-sm text-slate-900">Michael Thompson</h5>
                                <div className="flex text-amber-400">
                                    {[1, 2, 3, 4, 5].map(i => <MaterialSymbol key={i} icon="star" size={14} fill={i === 5 ? false : true} />)}
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-slate-600 italic leading-relaxed">
                            "The storytelling element of this tour makes a huge difference. You're not just moving from A to B; you're following a plot. The hotel in Amalfi was exactly as described—pure serenity."
                        </p>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <Button variant="outline" className="px-8 py-6 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all text-base">
                        Read More Traveler Stories
                    </Button>
                </div>
            </section>

            {/* Newsletter Section */}
            <NewsletterForm variant="section" noBackground={true} />
        </main>
    );
}
