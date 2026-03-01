import React from 'react';
import { MaterialSymbol } from "@/components/ui/material-symbol";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section with Collage Background */}
            <section className="relative w-full min-h-[600px] bg-slate-950 flex items-center justify-center overflow-hidden py-20 px-4">
                {/* Collage Grid Masked Background */}
                <div className="absolute inset-0 opacity-40 grid grid-cols-4 grid-rows-2 gap-4">
                    <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB7s-4jQ9iou0LD0uz5K5dakcNG9e0STUqMkFuTnBUwiiYGNPRheUHQcJq7HOGy4JGTWp8FBm-f9_zgcfrTwhvVEJoWiSdG5fWrlxAhw-LIG667LPNX7rclSrwh3fw5WQVdMjfid56OCJn5bxaf0paxD6IDEmSbFNYHenT2QGV5sWPEBXAfd37TiITLqeoGB4l2UwDxDtsZ10-tPfEBO6yj0rIGZ4PuKEqfOwDBXD9ExZ09cDQ5dYsHZCpZY-DOWG3Vgtyy7B_nxzPQ')" }}></div>
                    <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCEu2YkLPKBg0OIMr-JxWgu6ufpvNitgh9Fl3oqkAPqL48C1j3h88D3xWRRHQXBU3jyccinn_5Rz4TyzPeB9vVBf3QDtp6-qDpCwDz_aoLRg77Yu4i01q3Lo50RNFO7QStRNxvg6kmXRETivUhGWPbHGh9iCEWx6l8DNdjuA7MVLQLOlmiAi_qQq2p7q7hbZkEwzYuf1QfQL4xl3f0-gm5SmP4BDOSINyR2oeRvsZEHjDzh6jXB9UzUfdlLVML_7I0sUXIApFSu2JoQ')" }}></div>
                    <div className="bg-cover bg-center col-span-2" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBydNIyBEtJIO4PiZ2s10__6QSlmTB41MVCxBEkO7KcJ0hw1OaqEHESYxbsEzWUlrQH5-JVfkWcl1LtTkeCO7JJbSLP1LxWsX_mjy6kNVE43lzfTCMjQof71sHFPh1zvVPbwhlkHX6bQZgOVsMeQ4WhyzazCJ1IzB5xFWevBxqZ0TVfXbp9HJzEuILnH_fulAezatONY6M3Hrg1H7dlSiMRVkR8OSOuVkd_8rTFdrZxlD_JIRb1AkXqxYRHtSqF-05Z1CVYF7q8UTEo')" }}></div>
                    <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCyoTXPZ75LdfQSJhKFcARoLemjX7yHijXX28nT0kqKYzDhaQfwfyrl3u_nXZB_G_UmuTgMNdBvrXdqYuCKsE3pTsHYXopfOx6o-RcabL2gdyJjounARVW9UWzU33BVTH_kFUOO6SB1suadSkYQgqfDHnn96k82zym-BKqcPRt_TfzZlD0gQP3cmP4Pk8mj--aNiJdgH_67pWNR0UuiW6MVh81EQjIqj9HOpgmdy9r1HV8-Z2hxdMxiUAgPtH_lmc7sGHX4FNtFUKeJ')" }}></div>
                    <div className="bg-cover bg-center col-span-2" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCUYiNzRXRQkwZY8zx0UWj3FUzt-OjPyyN1u8BZ-NtHp4bjFzOFurCOAeYIfb9jTJj5USSrtL4T792GE_GCMSqPthI_-queZesHWdIpQc5VMWhv4tTWmdCmxxSMTJQGAK7U6oADTsaSJRxhEmqQI46pIzCVm4Q3LkxVOM1JqjnUgKZicqRcpiZua50OfvjV3UCZXtez8HeMpqcUrwx6kQ_yHhC7irXg32Q4UiWk9VUFRgfVrmI43PQ5lf43qhdyUpztu5Dll60BQlL4')" }}></div>
                    <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDt63SJSGcJACemqQIABFxgLZKbuPqX71ieNdUj7cvSj--4avJzVBTJwcuFv9sDMHTQJvxV31GSS3Olm-TqQRxgtqXEpbAG9TCfNjDsVQ31-8vHXNtRhJqZnR8qz8ND4cPtH8-tAEzB5XR5JyqdIxHR3UDCiULg5GzAiV7zaB7qL0Rqd6CBdJBVckX_DdGeDi8G-Y5wh1_NbWmj2Giv8xJyeJFvi7wESz_5O6H6z5JNyhQcu5ZDDjkdAxEAprtk5FdBV0G7uwWGuvyH')" }}></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/60 to-slate-950"></div>
                <div className="relative z-10 text-center max-w-4xl">
                    <span className="inline-block bg-primary/20 text-primary border border-primary/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">Our Community</span>
                    <h1 className="text-white text-6xl md:text-8xl font-extrabold leading-tight tracking-tight mb-6">A Journey Shared</h1>
                    <p className="text-slate-300 text-xl md:text-2xl font-normal max-w-2xl mx-auto leading-relaxed">
                        More than just travel. We are a global family of 500,000+ explorers connected by curiosity and courage.
                    </p>
                </div>
            </section>

            {/* Content Container */}
            <main className="section-container py-24">
                {/* Legacy Section */}
                <section className="mb-32">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="flex-1 relative order-2 lg:order-1">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="aspect-[3/4] rounded-2xl bg-cover bg-center mt-8 shadow-lg" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDt63SJSGcJACemqQIABFxgLZKbuPqX71ieNdUj7cvSj--4avJzVBTJwcuFv9sDMHTQJvxV31GSS3Olm-TqQRxgtqXEpbAG9TCfNjDsVQ31-8vHXNtRhJqZnR8qz8ND4cPtH8-tAEzB5XR5JyqdIxHR3UDCiULg5GzAiV7zaB7qL0Rqd6CBdJBVckX_DdGeDi8G-Y5wh1_NbWmj2Giv8xJyeJFvi7wESz_5O6H6z5JNyhQcu5ZDDjkdAxEAprtk5FdBV0G7uwWGuvyH')" }}></div>
                                <div className="aspect-[3/4] rounded-2xl bg-cover bg-center shadow-lg" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB7s-4jQ9iou0LD0uz5K5dakcNG9e0STUqMkFuTnBUwiiYGNPRheUHQcJq7HOGy4JGTWp8FBm-f9_zgcfrTwhvVEJoWiSdG5fWrlxAhw-LIG667LPNX7rclSrwh3fw5WQVdMjfid56OCJn5bxaf0paxD6IDEmSbFNYHenT2QGV5sWPEBXAfd37TiITLqeoGB4l2UwDxDtsZ10-tPfEBO6yj0rIGZ4PuKEqfOwDBXD9ExZ09cDQ5dYsHZCpZY-DOWG3Vgtyy7B_nxzPQ')" }}></div>
                            </div>
                            <div className="absolute -z-10 -bottom-10 -left-10 size-64 bg-primary/5 rounded-full blur-3xl"></div>
                        </div>
                        <div className="flex-1 order-1 lg:order-2">
                            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Heartbeat</h2>
                            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">It Started with a Backpack, it Continued with You.</h3>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                                <p>
                                    In 2005, Elena Rossi founded Wanderlust Travels to bridge the gap between tourist and traveler. But our true evolution happened when our community took over.
                                </p>
                                <p>
                                    Today, we dont just plan trips; we facilitate connections. Our history is written in the shared journals of solo travelers who met on our treks and the local hosts who have become part of our extended family.
                                </p>
                                <div className="grid grid-cols-3 gap-6 py-8 border-y border-slate-100 mt-8">
                                    <div>
                                        <p className="text-3xl font-black text-primary">19yr</p>
                                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Legacy</p>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-black text-primary">500k+</p>
                                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Explorers</p>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-black text-primary">140+</p>
                                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Countries</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="mb-32">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Live the Values</h2>
                        <h3 className="text-3xl md:text-4xl font-bold">What We Stand For</h3>
                        <p className="mt-4 text-slate-500">Real moments captured by our community members across the globe.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Value 1 */}
                        <div className="group">
                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 shadow-md">
                                <img alt="Sustainability" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7s-4jQ9iou0LD0uz5K5dakcNG9e0STUqMkFuTnBUwiiYGNPRheUHQcJq7HOGy4JGTWp8FBm-f9_zgcfrTwhvVEJoWiSdG5fWrlxAhw-LIG667LPNX7rclSrwh3fw5WQVdMjfid56OCJn5bxaf0paxD6IDEmSbFNYHenT2QGV5sWPEBXAfd37TiITLqeoGB4l2UwDxDtsZ10-tPfEBO6yj0rIGZ4PuKEqfOwDBXD9ExZ09cDQ5dYsHZCpZY-DOWG3Vgtyy7B_nxzPQ" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white text-left">
                                    <MaterialSymbol icon="eco" className="mb-2" />
                                    <h4 className="text-2xl font-bold">Sustainability</h4>
                                </div>
                            </div>
                            <p className="text-slate-600 italic">"Seeing the reforestation projects in Costa Rica firsthand changed how I view travel forever."</p>
                            <span className="block mt-2 font-bold text-slate-900">— @GreenTraveler</span>
                        </div>
                        {/* Value 2 */}
                        <div className="group">
                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 shadow-md">
                                <img alt="Authenticity" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt63SJSGcJACemqQIABFxgLZKbuPqX71ieNdUj7cvSj--4avJzVBTJwcuFv9sDMHTQJvxV31GSS3Olm-TqQRxgtqXEpbAG9TCfNjDsVQ31-8vHXNtRhJqZnR8qz8ND4cPtH8-tAEzB5XR5JyqdIxHR3UDCiULg5GzAiV7zaB7qL0Rqd6CBdJBVckX_DdGeDi8G-Y5wh1_NbWmj2Giv8xJyeJFvi7wESz_5O6H6z5JNyhQcu5ZDDjkdAxEAprtk5FdBV0G7uwWGuvyH" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white text-left">
                                    <MaterialSymbol icon="verified_user" className="mb-2" />
                                    <h4 className="text-2xl font-bold">Authenticity</h4>
                                </div>
                            </div>
                            <p className="text-slate-600 italic">"Wanderlust took me beyond the palace gates and into the village homes. This is the real India."</p>
                            <span className="block mt-2 font-bold text-slate-900">— @CultureSeeker</span>
                        </div>
                        {/* Value 3 */}
                        <div className="group">
                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 shadow-md">
                                <img alt="Community" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUYiNzRXRQkwZY8zx0UWj3FUzt-OjPyyN1u8BZ-NtHp4bjFzOFurCOAeYIfb9jTJj5USSrtL4T792GE_GCMSqPthI_-queZesHWdIpQc5VMWhv4tTWmdCmxxSMTJQGAK7U6oADTsaSJRxhEmqQI46pIzCVm4Q3LkxVOM1JqjnUgKZicqRcpiZua50OfvjV3UCZXtez8HeMpqcUrwx6kQ_yHhC7irXg32Q4UiWk9VUFRgfVrmI43PQ5lf43qhdyUpztu5Dll60BQlL4" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white text-left">
                                    <MaterialSymbol icon="group_add" className="mb-2" />
                                    <h4 className="text-2xl font-bold">Community</h4>
                                </div>
                            </div>
                            <p className="text-slate-600 italic">"I arrived as a stranger and left with five new best friends. Were already planning our next trip."</p>
                            <span className="block mt-2 font-bold text-slate-900">— @SoloExplorer</span>
                        </div>
                    </div>
                </section>

                {/* Team in Action Section */}
                <section className="mb-32">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl text-left">
                            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">On the Ground</h2>
                            <h3 className="text-3xl md:text-4xl font-bold">Team in Action</h3>
                            <p className="mt-4 text-slate-600">Meet the experts where they belong—leading the way across mountains, deserts, and jungles.</p>
                        </div>
                        <Button variant="outline" className="rounded-full font-bold px-8 py-6 border-slate-200 hover:bg-slate-50 transition-all flex items-center gap-2">
                            View Full Gallery <MaterialSymbol icon="arrow_forward" size={18} />
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { name: "Marco Santini", role: "Scaling the Dolomites with our August group.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEu2YkLPKBg0OIMr-JxWgu6ufpvNitgh9Fl3oqkAPqL48C1j3h88D3xWRRHQXBU3jyccinn_5Rz4TyzPeB9vVBf3QDtp6-qDpCwDz_aoLRg77Yu4i01q3Lo50RNFO7QStRNxvg6kmXRETivUhGWPbHGh9iCEWx6l8DNdjuA7MVLQLOlmiAi_qQq2p7q7hbZkEwzYuf1QfQL4xl3f0-gm5SmP4BDOSINyR2oeRvsZEHjDzh6jXB9UzUfdlLVML_7I0sUXIApFSu2JoQ" },
                            { name: "Sarah Jenkins", role: "A morning meditation session in Kyoto.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUYiNzRXRQkwZY8zx0UWj3FUzt-OjPyyN1u8BZ-NtHp4bjFzOFurCOAeYIfb9jTJj5USSrtL4T792GE_GCMSqPthI_-queZesHWdIpQc5VMWhv4tTWmdCmxxSMTJQGAK7U6oADTsaSJRxhEmqQI46pIzCVm4Q3LkxVOM1JqjnUgKZicqRcpiZua50OfvjV3UCZXtez8HeMpqcUrwx6kQ_yHhC7irXg32Q4UiWk9VUFRgfVrmI43PQ5lf43qhdyUpztu5Dll60BQlL4" },
                            { name: "David Chen", role: "Managing our remote basecamp in Patagonia.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBydNIyBEtJIO4PiZ2s10__6QSlmTB41MVCxBEkO7KcJ0hw1OaqEHESYxbsEzWUlrQH5-JVfkWcl1LtTkeCO7JJbSLP1LxWsX_mjy6kNVE43lzfTCMjQof71sHFPh1zvVPbwhlkHX6bQZgOVsMeQ4WhyzazCJ1IzB5xFWevBxqZ0TVfXbp9HJzEuILnH_fulAezatONY6M3Hrg1H7dlSiMRVkR8OSOuVkd_8rTFdrZxlD_JIRb1AkXqxYRHtSqF-05Z1CVYF7q8UTEo", offset: true },
                            { name: "Amina Diallo", role: "Ethical tracking in the Serengeti.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyoTXPZ75LdfQSJhKFcARoLemjX7yHijXX28nT0kqKYzDhaQfwfyrl3u_nXZB_G_UmuTgMNdBvrXdqYuCKsE3pTsHYXopfOx6o-RcabL2gdyJjounARVW9UWzU33BVTH_kFUOO6SB1suadSkYQgqfDHnn96k82zym-BKqcPRt_TfzZlD0gQP3cmP4Pk8mj--aNiJdgH_67pWNR0UuiW6MVh81EQjIqj9HOpgmdy9r1HV8-Z2hxdMxiUAgPtH_lmc7sGHX4FNtFUKeJ", offset: true }
                        ].map((member, i) => (
                            <div key={i} className={`relative group aspect-square rounded-2xl overflow-hidden shadow-md ${member.offset ? 'lg:mt-8' : ''}`}>
                                <img alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src={member.img} />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-left">
                                    <p className="text-white font-bold">{member.name}</p>
                                    <p className="text-white/80 text-xs">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Social Feed Section */}
                <section>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Around the World</h2>
                        <h3 className="text-3xl md:text-4xl font-bold">Global Social Feed</h3>
                        <p className="mt-4 text-slate-500">Real-time updates from our communities across every continent.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                        {[
                            { loc: "Swiss Alps", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7s-4jQ9iou0LD0uz5K5dakcNG9e0STUqMkFuTnBUwiiYGNPRheUHQcJq7HOGy4JGTWp8FBm-f9_zgcfrTwhvVEJoWiSdG5fWrlxAhw-LIG667LPNX7rclSrwh3fw5WQVdMjfid56OCJn5bxaf0paxD6IDEmSbFNYHenT2QGV5sWPEBXAfd37TiITLqeoGB4l2UwDxDtsZ10-tPfEBO6yj0rIGZ4PuKEqfOwDBXD9ExZ09cDQ5dYsHZCpZY-DOWG3Vgtyy7B_nxzPQ" },
                            { loc: "Bali, ID", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDt63SJSGcJACemqQIABFxgLZKbuPqX71ieNdUj7cvSj--4avJzVBTJwcuFv9sDMHTQJvxV31GSS3Olm-TqQRxgtqXEpbAG9TCfNjDsVQ31-8vHXNtRhJqZnR8qz8ND4cPtH8-tAEzB5XR5JyqdIxHR3UDCiULg5GzAiV7zaB7qL0Rqd6CBdJBVckX_DdGeDi8G-Y5wh1_NbWmj2Giv8xJyeJFvi7wESz_5O6H6z5JNyhQcu5ZDDjkdAxEAprtk5FdBV0G7uwWGuvyH" },
                            { loc: "Peru", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEu2YkLPKBg0OIMr-JxWgu6ufpvNitgh9Fl3oqkAPqL48C1j3h88D3xWRRHQXBU3jyccinn_5Rz4TyzPeB9vVBf3QDtp6-qDpCwDz_aoLRg77Yu4i01q3Lo50RNFO7QStRNxvg6kmXRETivUhGWPbHGh9iCEWx6l8DNdjuA7MVLQLOlmiAi_qQq2p7q7hbZkEwzYuf1QfQL4xl3f0-gm5SmP4BDOSINyR2oeRvsZEHjDzh6jXB9UzUfdlLVML_7I0sUXIApFSu2JoQ" },
                            { loc: "Tokyo", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUYiNzRXRQkwZY8zx0UWj3FUzt-OjPyyN1u8BZ-NtHp4bjFzOFurCOAeYIfb9jTJj5USSrtL4T792GE_GCMSqPthI_-queZesHWdIpQc5VMWhv4tTWmdCmxxSMTJQGAK7U6oADTsaSJRxhEmqQI46pIzCVm4Q3LkxVOM1JqjnUgKZicqRcpiZua50OfvjV3UCZXtez8HeMpqcUrwx6kQ_yHhC7irXg32Q4UiWk9VUFRgfVrmI43PQ5lf43qhdyUpztu5Dll60BQlL4" },
                            { loc: "Morocco", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBydNIyBEtJIO4PiZ2s10__6QSlmTB41MVCxBEkO7KcJ0hw1OaqEHESYxbsEzWUlrQH5-JVfkWcl1LtTkeCO7JJbSLP1LxWsX_mjy6kNVE43lzfTCMjQof71sHFPh1zvVPbwhlkHX6bQZgOVsMeQ4WhyzazCJ1IzB5xFWevBxqZ0TVfXbp9HJzEuILnH_fulAezatONY6M3Hrg1H7dlSiMRVkR8OSOuVkd_8rTFdrZxlD_JIRb1AkXqxYRHtSqF-05Z1CVYF7q8UTEo" },
                            { loc: "Iceland", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyoTXPZ75LdfQSJhKFcARoLemjX7yHijXX28nT0kqKYzDhaQfwfyrl3u_nXZB_G_UmuTgMNdBvrXdqYuCKsE3pTsHYXopfOx6o-RcabL2gdyJjounARVW9UWzU33BVTH_kFUOO6SB1suadSkYQgqfDHnn96k82zym-BKqcPRt_TfzZlD0gQP3cmP4Pk8mj--aNiJdgH_67pWNR0UuiW6MVh81EQjIqj9HOpgmdy9r1HV8-Z2hxdMxiUAgPtH_lmc7sGHX4FNtFUKeJ" }
                        ].map((post, i) => (
                            <div key={i} className="aspect-square rounded-xl overflow-hidden relative group shadow-sm">
                                <img alt={post.loc} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" src={post.img} />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/10 transition-opacity">
                                    <MaterialSymbol icon="favorite" className="text-white" />
                                </div>
                                <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/20 backdrop-blur-sm px-2 py-0.5 rounded text-white overflow-hidden">
                                    <MaterialSymbol icon="location_on" size={10} />
                                    <span className="text-[10px] font-bold whitespace-nowrap">{post.loc}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-primary/5 rounded-3xl p-12 flex flex-col items-center border border-primary/10">
                        <h4 className="text-2xl font-bold mb-4">Tag #WanderShared to be featured</h4>
                        <p className="text-slate-600 mb-8 text-center max-w-lg">Join the conversation and show us how you explore. Weekly prizes for the most authentic story shared.</p>
                        <div className="flex gap-4">
                            <Button variant="ghost" size="icon" className="size-12 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow">
                                <MaterialSymbol icon="public" className="text-primary" />
                            </Button>
                            <Button variant="ghost" size="icon" className="size-12 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow">
                                <MaterialSymbol icon="camera_enhance" className="text-primary" />
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
