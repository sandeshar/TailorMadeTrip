import { MaterialSymbol } from "@/components/ui/material-symbol";
import { HeroSection } from "../_components/HeroSection";
import Link from "next/link";

export default function BlogPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col">
            <main className="section-container pt-20 pb-12">
                {/* Featured Post */}
                <section className="mb-16">
                    <div className="relative overflow-hidden rounded-xl h-[480px] group cursor-pointer">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{
                                backgroundImage:
                                    "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, transparent 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDNVB_qzCZREmOERmPtslsMKRTnE1DVUN07DBT06lpinLLVzMhJeNjzmT7v_ddxvI7E7izB5BDa3Wl3l4s-ly8vSSjlBJKEoBfpqe2LjXkwis8kC30pS7KDDmX4jsJlxItVEkjyDI6cD1wnr-u1L_tLfQwwKmXIfoVQy3VOro5S1VAq_YWiaVKPIOdQDYv0MR3c05EfbLUhEP-Ng4cXWSVVEPhTg6yICMStA35sBGaF4Y-ZIqaHMcKQbs30TtANBIBh8fWHhpZGc1rK')",
                            }}
                        ></div>
                        <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-3xl">
                            <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-4 uppercase tracking-widest">
                                Featured Article
                            </span>
                            <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                                Exploring the Hidden Gems of the Swiss Alps: A Local's Perspective
                            </h1>
                            <p className="text-slate-200 text-lg mb-6 line-clamp-2">
                                Escape the tourist traps and discover the pristine valleys, high-altitude huts, and secret
                                viewpoints that only the locals know about.
                            </p>
                            <div className="flex items-center gap-4 text-white text-sm">
                                <div className="flex items-center gap-2">
                                    <MaterialSymbol icon="calendar_today" size={18} />
                                    <span>Oct 24, 2023</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MaterialSymbol icon="schedule" size={18} />
                                    <span>12 min read</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-2/3">
                        <div className="flex items-center justify-between border-b border-slate-200 mb-8 overflow-x-auto whitespace-nowrap">
                            <div className="flex gap-8">
                                <Link
                                    className="border-b-2 border-primary text-slate-900 font-bold pb-4 text-sm uppercase tracking-wider"
                                    href="/blog"
                                >
                                    All Posts
                                </Link>
                                <button
                                    className="text-slate-500 hover:text-primary font-medium pb-4 text-sm uppercase tracking-wider transition-colors"
                                >
                                    Destinations
                                </button>
                                <button
                                    className="text-slate-500 hover:text-primary font-medium pb-4 text-sm uppercase tracking-wider transition-colors"
                                >
                                    Travel Tips
                                </button>
                                <button
                                    className="text-slate-500 hover:text-primary font-medium pb-4 text-sm uppercase tracking-wider transition-colors"
                                >
                                    Food & Culture
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    tag: "Destinations",
                                    readTime: "5 min read",
                                    title: "Top 10 Hidden Beaches in Bali for Your Next Solo Trip",
                                    desc: "Beyond Kuta and Seminyak lies a world of secret coves and pristine sands waiting to be explored...",
                                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQPSEM6Rynq4jUc7tZQTansSqM-1sw9ZvfbDfIqjOr3ti9UEYylv5h5mZcK724_h_7M2SXWf4A4_sQ9vuQBD1cJ8yiOG82n4skKAYcMLYdYN7qm4HXFzm4pfrjTgapoUe4FL8HOEPJSIRMg5zi9lxgdD5zjfTb2O35iyl6Vu5ARqHqjvWvJSeRyJufTIDcjf0ZWsF5-2USQyg3nLzeYLiHkLHGeUC9AFN67Fo6pxEcTt3UI6zp-UJjDnamguZCoW8uYZ3GANx-631j",
                                },
                                {
                                    tag: "Food & Culture",
                                    readTime: "8 min read",
                                    title: "A Foodie's Guide to Tokyo: From Street Food to Michelin Stars",
                                    desc: "Embark on a culinary journey through the heart of Japan, exploring the most authentic ramen and sushi shops.",
                                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkf9xwYVlwaiZKdeGoeK2kEuL07L8aMKKpKNsqWTXDscwVcC9B70lB6SS4sqMwGUR2eWzyFosCTPQBPx7Rc-DPo3la9fusOfL1dxgnvkQeg7lYGvurCD-iRlud9Q8bVwOHaGzNr4QpaZQBuXVjqxAku5x8FDHUUjh_H34gIvPRAHSD4aIOnP1v0KjMZ-7tpelemciKdfDTeKZIgWEFoA64nOUW4T6p00hZ-xyHFkSl2Z0P4GNzFmG3FPfaUklWo5bkjJrDzSrPG7g8",
                                },
                                {
                                    tag: "Travel Tips",
                                    readTime: "6 min read",
                                    title: "How to Travel the World on a Student Budget",
                                    desc: "Smart strategies for accommodation, flights, and meals that will help you see more of the world for less.",
                                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_fcPaougHbSrBEd9YFEtSXy660u1Y5hbB9zCi6soB6XzGys_tGhkZt7Le939REXXUPbTsVYEKytwjUd42vZMq7d75JoN6vea-8xGNyX8nVsvyky-2SAEm4IqfIHNXLKI3kATyLIiNan5JdJ0buEQXCDueG-GrplDprqBAmkZoZpd0Gj0B7BjauXA63QwN9E_K3p_mibZKn0j7qE6DY-uTYC1w4e20Stl35AAPNEFQl1aT1WVyITp249YVqjOENy0lpgyl2bZwwZkq",
                                },
                                {
                                    tag: "Food & Culture",
                                    readTime: "4 min read",
                                    title: "The Art of People Watching: Parisian Café Culture",
                                    desc: "Spend an afternoon at a classic sidewalk bistro and soak in the quintessential Parisian lifestyle.",
                                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXoXZOQFhXys_Pe3S17gwCctitiIv352A5Sv3jtBT1l7bK0tuVjxab0QwzagccpjHSaIH2_x-ILDqEhEA4dXnAatpZnUBwXdmRtLEl6xqQ1Ze3lMXJwsBSjgX3yWUo0J_rpm6dJ-ucwLi5CrHRGzz7-5EbtFyUocArrBgC1TWA2fTvNEC_q6THXsQwYEU2XDpWcfa4vTF0yXatFYLVX7en_QRZ84Yu7DCLVx-503IZtbvOq6L7th9ty-hrcPA7H1oXAK7bCpFr3KsZ",
                                },
                            ].map((post, i) => (
                                <div key={i} className="flex flex-col gap-4 group">
                                    <div className="relative aspect-video rounded-xl overflow-hidden">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                            style={{ backgroundImage: `url('${post.img}')` }}
                                        ></div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-primary text-[10px] font-bold uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded">
                                                {post.tag}
                                            </span>
                                            <span className="text-slate-400 text-xs">• {post.readTime}</span>
                                        </div>
                                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">{post.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 flex justify-center">
                            <button className="px-8 py-3 border border-slate-300 rounded-lg text-sm font-bold hover:bg-slate-100 transition-colors">
                                Load More Articles
                            </button>
                        </div>
                    </div>

                    <aside className="lg:w-1/3 flex flex-col gap-10">
                        {/* Newsletter */}
                        <div className="p-6 bg-white rounded-xl border border-slate-200">
                            <h4 className="text-slate-900 font-bold mb-4 flex items-center gap-2">
                                <MaterialSymbol icon="mail" fill className="text-primary" />
                                Newsletter
                            </h4>
                            <p className="text-slate-500 text-sm mb-6">
                                Get weekly travel inspiration, budget tips, and exclusive deals delivered to your inbox.
                            </p>
                            <div className="flex flex-col gap-3">
                                <input
                                    className="w-full bg-slate-50 border-none rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary"
                                    placeholder="Your email address"
                                    type="email"
                                />
                                <button className="w-full bg-primary text-white font-bold py-2.5 rounded-lg text-sm transition-opacity hover:opacity-90">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        {/* Most Popular */}
                        <div>
                            <h4 className="text-slate-900 font-bold mb-6 flex items-center gap-2">
                                <MaterialSymbol icon="trending_up" fill className="text-primary" />
                                Most Popular
                            </h4>
                            <div className="flex flex-col gap-6">
                                {[
                                    {
                                        title: "Ultimate Iceland Road Trip: A 7-Day Guide",
                                        views: "15.2k views",
                                        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuByk_UL_ifI9IKdhPo659xkHVtQHm_C8o9y-8BwKeQcKp4IPJjLJS_0phhoYRrdtAJOP6RjuX3xzwHkWRCF5HV_lrIzlDLcWzclse8t7uc9aD3_L2u-e3wSqZ4BXgiTGAxlOGs9GQ0VzZ9dpKsQC4YSaX7P9XnL3mDP6aiznmsEi-NvQ4LLdcLQTvkg20-eDYBf_P_MjWNv0GPdWgx6ZMIwpegm4yne8t7FMqzqgBNAJa1_aZnCdfmC3xtwsdb2w9v6zE-7sA1pHr5q",
                                    },
                                    {
                                        title: "Essential Tips for Your First African Safari",
                                        views: "12.8k views",
                                        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZc-mS2QGX3TW7Lzx6H0PdBam7LPQIl29cQybqVDrco9F2aiwqTOIfENBtWdaT8gHvYNYgVFdel1j3yCbg0CTUmqZp6HBtt2dGLmqs5KxCjikPOhYK5PuQmjXZTm3ULC5qbRHm5JqJ1TTEQgcQg0u5oI8XHZAOoBWecjXJLXUz4fU-Uf-wMFrR_O-7lgIKCooRSHTNU040YyOTgEd4U85Q6Zy1Gkm7zlDX6AS6mssrUQubZLgLcElv4GAiK5Q29RL_w06Q9kFPAWaS",
                                    },
                                    {
                                        title: "Street Food NYC: Where the Locals Eat",
                                        views: "10.1k views",
                                        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQ0pTXPE2OBO5CMt1gUJKtRIaQl6P7vLNWRgBdgjNdrEnY4bNMAziJ0FhUFQU7Y5zLzUAdyhe8kzUQHxHOmHItAj6fw5BuzoxsqRRZwCJdV-XCQGE3O_pecSPJEz6o2ZVv08uq9VEG2e7T_ZvlTWMzEdk_w9mGM7mbrF8-vDadxNh5Kjjd-nAdNKdBgxjcE6e4Mz5ax6D0FgpvF7nh3ssLmMu1VO570pzOqtdNtHrWmvch7MSZSb7T8fTp_U_FqaB6WY8gTyFvbDxL",
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 group cursor-pointer">
                                        <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                                            <div
                                                className="h-full w-full bg-cover bg-center"
                                                style={{ backgroundImage: `url('${item.img}')` }}
                                            ></div>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h5 className="text-sm font-bold leading-snug group-hover:text-primary transition-colors mb-1">
                                                {item.title}
                                            </h5>
                                            <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">
                                                {item.views}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
                            <h4 className="text-slate-900 font-bold mb-4">Planning a trip?</h4>
                            <p className="text-slate-600 text-sm mb-4">
                                Chat with our experts and design your custom itinerary today.
                            </p>
                            <Link className="text-primary font-bold text-sm flex items-center gap-1 group" href="#">
                                Talk to a Specialist
                                <MaterialSymbol
                                    icon="arrow_forward"
                                    size={18}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </Link>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}
