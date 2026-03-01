import React from 'react';
import Link from 'next/link';
import { MaterialSymbol } from "@/components/ui/material-symbol";
import { Button } from "@/components/ui/button";

export default function BlogPostPage() {
    return (
        <main className="relative">
            {/* Hero Header */}
            <div className="w-full h-[70vh] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>
                <img
                    alt="Swiss Alps"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE3WVyH9bIVhoGd14Urte1p-r0PIpE-RIEEabjXX-iS7gn2b2OiD3jO4a4s1pF4wSxsgnde50lmOE8ZE1j1xZxNN2jjBt2FmjF0_aECdFIR-3c1iF5crQUTS8gvDKk4NcXMjFI2_V4QWL1hcX3OCc5wok8hXmuop83MYgNridiJGd0J2FOM-sRyUJKCLe0a41h2PYKW6lBfKdgkaM6oTjsLyRcpz_vI1PdQ_E_9B0aO3xmGBL5uQaJiwO6BF7nCWYAIYi9EHmFF073"
                />
                <div className="absolute bottom-0 left-0 w-full z-20 pb-16">
                    <div className="section-container max-w-4xl">
                        <div className="flex gap-2 mb-4">
                            <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Adventure</span>
                            <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">12 Min Read</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">Hidden Gems of the Swiss Alps: A Local's Guide</h1>
                        <div className="flex items-center gap-4">
                            <img
                                className="size-12 rounded-full border-2 border-white shadow-lg"
                                alt="Portrait of travel writer Elena Rossi"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa_2NWsOcE3Wl3SrQSsWcE3f5zofPhR5YihWggbXL7oAdV5eQ-s2d8wxc_sxjfJUtQdx-tmlWogq-IRmc-j4ollkxz5EdZZRTMpKOdPw3j-ROiiYt0LOpNSMuYdV02qhJ_ARuSjAe3tlgQsv599useCOhyVfL95MG6PJjkwbhOs8TpxOL3COVCckMAoVVEPz5wHDue17mOzAKssq7nY6czXrk3JtVW870ILkB4vcEtrSNzAYSUMJy0y-xKhcmHDXkZnIapROuDr0Kq"
                            />
                            <div className="text-white">
                                <p className="font-bold">Elena Rossi</p>
                                <p className="text-sm text-slate-200">Travel Writer • October 15, 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-container py-12 flex flex-col lg:flex-row gap-12">
                {/* Left Sidebar: Social Sharing */}
                <aside className="hidden lg:block w-16">
                    <div className="sticky top-28 flex flex-col gap-4 items-center">
                        <button className="size-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all cursor-pointer">
                            <MaterialSymbol icon="share" />
                        </button>
                        <button className="size-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-red-500 hover:text-white transition-all cursor-pointer">
                            <MaterialSymbol icon="favorite" />
                        </button>
                        <button className="size-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all cursor-pointer">
                            <MaterialSymbol icon="bookmark" />
                        </button>
                        <div className="h-px w-8 bg-slate-200 my-2"></div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 text-center">Share</p>
                    </div>
                </aside>

                {/* Main Content Column */}
                <article className="flex-1 max-w-3xl mx-auto text-slate-800">
                    <p className="text-xl font-medium leading-relaxed mb-8 text-slate-600 italic">
                        The Swiss Alps offer more than just world-class skiing. Beyond the famous peaks of the Matterhorn and Jungfrau lies a network of secluded valleys, crystal-clear alpine lakes, and charming villages that remain untouched by mass tourism.
                    </p>
                    <div className="space-y-6 text-lg leading-relaxed text-slate-700">
                        <p>
                            Stepping off the beaten path in Switzerland requires a bit of curiosity and a sturdy pair of hiking boots. While most travelers flock to Interlaken or Zermatt, the savvy explorer heads toward the Engadin valley. Here, the air feels sharper, the light more golden, and the culture uniquely Romansh.
                        </p>
                        <figure className="my-10">
                            <img
                                className="w-full rounded-xl shadow-md"
                                alt="Mountain peaks reflecting in a calm alpine lake"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC09DhY8rWxI02xOup09jnus75KIHdDgCb4D4C3XFBTGV4-5n6wDuqKi0bvMzw4EsnN1XR14XAIIOx-CYTDbGO2c4RWha23g4GATay0xESPew4c5LyvC7W01_W-q6j7cl7T0o1Enblo25VR2i6WyaHkklpqaGY26dSDo8UVA06id2K-dHPTJTwdGs8ZoKlgPzXVtUIj6gdnyA-Oc50BjCxvWGqZd99hdX2rEhwp5Lm65wP8FgCKv-9TMQzW_VKu6KS5MikhnoJGsK0Z"
                            />
                            <figcaption className="text-center text-sm text-slate-500 mt-4 italic">Morning serenity at Lake Seealpsee, Appenzell.</figcaption>
                        </figure>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12 transition-colors">1. The Secret of Val Fex</h2>
                        <p>
                            Val Fex is a car-free paradise accessible only by horse-drawn carriage or on foot from Sils Maria. It's a place where time seems to have stopped in the 19th century. The traditional stone-roofed houses are adorned with sgraffito—intricate carvings in the plaster that tell stories of the families who live within.
                        </p>
                        <blockquote className="my-12 pl-8 border-l-4 border-primary italic">
                            <p className="text-2xl font-light text-slate-700">"Switzerland is not just a destination; it's a sensory experience of purity and silence that resets your soul."</p>
                            <footer className="mt-2 font-bold text-primary">— Local Guide, Hans Weber</footer>
                        </blockquote>
                        <p>
                            For the best experience, visit during the shoulder seasons. In late September, the larch trees turn a brilliant orange-gold, reflecting in the glacial streams that meander through the valley floor.
                        </p>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12 transition-colors">2. Gastronomy Above 2,000 Meters</h2>
                        <p>
                            Forget simple mountain fare. The culinary scene in the Swiss high altitudes has evolved into a sophisticated blend of tradition and innovation. Try the local 'Capuns'—Swiss chard leaves stuffed with Spätzle dough and dried meat—at a rustic hut, or opt for a Michelin-starred experience with a view of the glaciers.
                        </p>
                    </div>

                    {/* Related Travel Packages Widget */}
                    <section className="mt-20 py-10 border-t border-slate-200">
                        <h3 className="text-2xl font-bold mb-8 text-slate-900">Related Travel Packages</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all">
                                <div className="relative h-48">
                                    <img
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        alt="Wooden chalets in a snowy Swiss village"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrpoaDlyIwZbENkEXiCmpe4MdVUBA6f4KYrVFCt_4C6In5mrsO43yQoUsSW4ccFLW1ISDcSU2cV-uHbdcn8fH2Uo86GzL01gukg9FC6wJQEOUXKBErN0t8dOv5Q6BEv-pOtRBjXMPB98Xh39qUdQZS8F7yIK2E1lujpb8iuxMfkL5kT3j8h6jLNEjudPJQk7bihYAxyfImi9GqHOs_1Fg1YERSqUvyS9NF9t-7Ef6jZpWZMCXZ6UjKeeLbEUEihlJTarmjtwjWRD78"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-bold text-primary">From $2,499</div>
                                </div>
                                <div className="p-5">
                                    <h4 className="font-bold text-lg mb-2">Grand Alpine Tour</h4>
                                    <p className="text-slate-500 text-sm mb-4 line-clamp-2">A 10-day luxury journey through the most iconic peaks and hidden valleys.</p>
                                    <div className="flex items-center justify-between">
                                        <span className="flex items-center gap-1 text-sm text-slate-400">
                                            <MaterialSymbol icon="schedule" size={16} /> 10 Days
                                        </span>
                                        <button className="text-primary font-bold text-sm flex items-center gap-1 cursor-pointer">
                                            View Details <MaterialSymbol icon="arrow_forward" size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all">
                                <div className="relative h-48">
                                    <img
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        alt="Hiker standing on a ridge looking at mountains"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqsrLeY22jmYNPs9wUAmv_QIBuZkxIR8Ez_x_RU8L7XfxM5UQYZCwDSV106e5LJ4PPR1XPc-tRmLVaJx8pxM8J1ltrR29FuUeN_bpdgYedcLv267m2musiLOrzE5ykYw2MEfwaZxUeOKpgz_7bQqmxxidnOsT64RYoQwyoMhS77z7gkiknjgA036Vx8ILk94Hc6G4JFDG_6oikA1-9dP1idrA2RjFwoJUDC4lwnZARr4-CKJ7qtuWB7edOOLwAkDEVKyovu-LbnjQp"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-bold text-primary">From $1,850</div>
                                </div>
                                <div className="p-5">
                                    <h4 className="font-bold text-lg mb-2">Engadin Hiking Escape</h4>
                                    <p className="text-slate-500 text-sm mb-4 line-clamp-2">Explore the car-free valleys and crystal lakes on this guided trekking adventure.</p>
                                    <div className="flex items-center justify-between">
                                        <span className="flex items-center gap-1 text-sm text-slate-400">
                                            <MaterialSymbol icon="schedule" size={16} /> 7 Days
                                        </span>
                                        <button className="text-primary font-bold text-sm flex items-center gap-1 cursor-pointer">
                                            View Details <MaterialSymbol icon="arrow_forward" size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Comments Section */}
                    <section className="mt-12">
                        <h3 className="text-2xl font-bold mb-8 text-slate-900">Comments (24)</h3>
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <img
                                    className="size-10 rounded-full"
                                    alt="User avatar for Sarah"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTxpMHtu8D5JtznZn-6eLcVGdodtycldo8ciCxP96Ahkcgz3el7uMxR5OlqQ1e54AR-ArmuoGywAyyI1qwVhcUJ60LlcLiDfrWLBlp9duIBLxAgjEn43zP8eJw2bZPOn748vO7yTgL9NCAE1XEhWWmKeI_LyHG4W6wRGYl8Z8nIF0bZzCgPi5XW0J46SGo88lC72bufr9fL9wbfIOeqgD0dvr-URpJxKCcU26klunGyQd9WGaN5Iujs5bLQyCAFr-p2cXYv-CFgMhN"
                                />
                                <div className="flex-1">
                                    <div className="bg-slate-100 p-4 rounded-xl">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-bold text-sm">Sarah Jenkins</span>
                                            <span className="text-xs text-slate-500">2 hours ago</span>
                                        </div>
                                        <p className="text-sm text-slate-700">This guide is exactly what I needed! I'm planning a solo trip to Switzerland next summer and I definitely want to avoid the tourist traps. Adding Val Fex to my list!</p>
                                    </div>
                                    <div className="flex gap-4 mt-2 ml-2">
                                        <button className="text-xs font-bold text-slate-500 hover:text-primary cursor-pointer">Reply</button>
                                        <button className="text-xs font-bold text-slate-500 hover:text-primary cursor-pointer">Like</button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <MaterialSymbol icon="person" className="text-primary" />
                                </div>
                                <div className="flex-1">
                                    <textarea
                                        className="w-full bg-white border border-slate-200 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none min-h-[100px]"
                                        placeholder="Join the conversation..."
                                        rows={3}
                                    ></textarea>
                                    <div className="flex justify-end mt-2">
                                        <Button className="bg-primary hover:bg-primary/90 text-white font-bold h-10 px-6">Post Comment</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Next/Prev Navigation */}
                    <div className="mt-20 flex flex-col sm:flex-row gap-4 border-y border-slate-200 py-12">
                        <Link
                            href="#"
                            className="flex-1 p-6 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors group"
                        >
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                <MaterialSymbol icon="arrow_back" size={16} /> Previous Story
                            </p>
                            <h4 className="font-bold text-lg group-hover:text-primary transition-colors text-slate-900">The Best Coffee Shops in Zurich</h4>
                        </Link>
                        <Link
                            href="#"
                            className="flex-1 p-6 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors group text-right"
                        >
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center justify-end gap-2 text-slate-400">
                                Next Story <MaterialSymbol icon="arrow_forward" size={16} />
                            </p>
                            <h4 className="font-bold text-lg group-hover:text-primary transition-colors text-slate-900">Coastal Magic: Exploring the Italian Riviera</h4>
                        </Link>
                    </div>
                </article>

                {/* Right Sidebar: Author & Related */}
                <aside className="hidden xl:block w-72">
                    <div className="sticky top-28 space-y-10">
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">About The Author</h3>
                            <div className="p-5 bg-white rounded-2xl border border-slate-200 text-center">
                                <img
                                    className="size-20 rounded-full mx-auto mb-4 border-4 border-slate-50"
                                    alt="Author profile picture"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdJDu8UyfVngXvv_CvEdFx-nomv2_gcJGhBscpCemO7PnQhgkNrJ7dK4OjRZllc-qMbG_2W0mgWQU58Uk00aCee_wIvxskhJz7DOWgasR7V-AUDtQ_jo8w-KGYQDJkyytSKbGuP0yWE3EzxXzJaYr04UE0acJRXJvfWBlMFd_49-yS7apxgRqsaTqgqFHnJuKKDSSDyB0e5nZORUGaBBLP3jX6WCvFK7EWk4U6iBfvDK1815EWHb8HlCYLUGjVnNmhgzZbkBDmkL3_"
                                />
                                <h4 className="font-bold text-lg text-slate-900">Elena Rossi</h4>
                                <p className="text-sm text-slate-500 mb-4 leading-relaxed">Photographer and story-teller based in Milan. Obsessed with high altitudes and dark chocolate.</p>
                                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all font-bold">
                                    Follow Elena
                                </Button>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Trending Stories</h3>
                            <div className="space-y-6">
                                <Link href="#" className="flex gap-4 group">
                                    <div className="size-16 relative flex-shrink-0">
                                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuEwKxkFVXJdNOHkEq9xA8gPT7JZ3mD5EBO7EOG8OrOOHihKYeU4SVbDxEco7BM1BpDs698j5FQ7rGhOMjYAca4gwmjO1cRs_Jb5g2aImhs6lj4GrRYIwjAjecZRy-25TUItv1UVMOJ2lLmAMAcm8CkE1ykNi8q1uC6ShqqEFtZ8Rkd6fu5N5Za70XEWTMHzBPRyXFYxUPXUlDS62XiIlBaIK66ih-fAlPyN9L88lOI_iSdRFH542gzN1dYoCcR5BEO84yL190r7A7" className="w-full h-full object-cover rounded-lg" alt="Iceland" />
                                    </div>
                                    <div>
                                        <h5 className="text-sm font-bold leading-tight group-hover:text-primary transition-colors text-slate-900">Iceland's Winter Solstice Guide</h5>
                                        <p className="text-xs text-slate-400 mt-1">5 min read</p>
                                    </div>
                                </Link>
                                <Link href="#" className="flex gap-4 group">
                                    <div className="size-16 relative flex-shrink-0">
                                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcEIl5W8bpy1-YWw3_K6P0s6B_Jl2-WJwFwn6JeIOhP4VpDQTLRcY1hqjkP1muZGRXLpjb2_IGtHYIYLTOgYA30sQxmCZXOI2AWqSHnBWc-zzlfR0gMjoV0E95Tf-M0VNtneqIc6-6JXZmPif-Hrwtm4gGBU1ULNkWSOWCKSwFKcuUqVrTxFT77I8WbU8DPOlzJ-nnOYiJwiJM8Of30HgxMTIETmJ44v3ACms9WMha-qLv90Acsi62cAOUzMJ5uE_uU8nIGQijtX6P" className="w-full h-full object-cover rounded-lg" alt="Beginners Peaks" />
                                    </div>
                                    <div>
                                        <h5 className="text-sm font-bold leading-tight group-hover:text-primary transition-colors text-slate-900">Top 10 Peaks for Beginners</h5>
                                        <p className="text-xs text-slate-400 mt-1">8 min read</p>
                                    </div>
                                </Link>
                                <Link href="#" className="flex gap-4 group">
                                    <div className="size-16 relative flex-shrink-0">
                                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA3LmWm4K_GLM-bVglVMnSgKDmNyrRT2cC0zmwZKup4t1_TY0mmXdLgg9xbg5YLl7qx3QNxPKwdFSbE9qvT1VNil2LwR2n0aIarHwu-5LKJnvASx4qj-mEab-PcuBC9V7nMEUkWrvLutp7Ez7iVQwqgbyY7XvyLJvTPlBY4lgojTRUf_xxP95xTqs-qLk0b39jDCMZfAmFgzkzSv5hoCDtvibNfrLPgGThPSBi_74scPqHFTAgeEO1rg_U_nKBCIXDr_0tWaTeNE6c" className="w-full h-full object-cover rounded-lg" alt="Kyoto" />
                                    </div>
                                    <div>
                                        <h5 className="text-sm font-bold leading-tight group-hover:text-primary transition-colors text-slate-900">Exploring Kyoto's Back Alleys</h5>
                                        <p className="text-xs text-slate-400 mt-1">15 min read</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="p-6 bg-primary rounded-2xl text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-lg font-bold mb-2">Weekly Newsletter</h3>
                                <p className="text-sm text-white/80 mb-4">Get the best travel stories delivered to your inbox.</p>
                                <input
                                    className="w-full bg-white/20 border border-white/30 rounded-lg py-2 px-3 text-sm placeholder:text-white/60 focus:ring-1 focus:ring-white outline-none mb-3"
                                    placeholder="Email address"
                                    type="email"
                                />
                                <button className="w-full bg-white text-primary font-bold py-2 rounded-lg text-sm transition-opacity hover:opacity-90 cursor-pointer">
                                    Subscribe
                                </button>
                            </div>
                            <div className="absolute -bottom-4 -right-4 text-white/10 rotate-12">
                                <MaterialSymbol icon="send" size={96} />
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
}
