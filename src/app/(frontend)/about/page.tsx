import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
    return (
        <main className="section-container py-20 space-y-24">
            <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto px-4">
                <span className="px-5 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-widest uppercase">Our Story</span>
                <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">
                    Making the World Accessible Through Authentic Travel
                </h1>
                <p className="text-zinc-500 text-xl md:text-2xl leading-relaxed max-w-3xl">
                    ChitraBazaar was founded with a simple mission: to connect travelers with the most authentic and breathtaking experiences across the globe.
                </p>
                <div className="w-24 h-1.5 bg-primary rounded-full mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                <div className="aspect-square bg-muted rounded-[3rem] animate-pulse shadow-2xl skew-y-3" />
                <div className="space-y-8">
                    <h2 className="text-4xl font-extrabold tracking-tight">Our Journey So Far</h2>
                    <p className="text-zinc-600 text-xl leading-relaxed">
                        From our humble beginnings in 2015, we've helped over 10,000 travelers explore the hidden gems of the Himalayas and beyond. Our team of local experts ensures every trip is more than just a vacation—it's a transformation.
                    </p>
                    <div className="grid grid-cols-2 gap-8 pt-6">
                        <div className="space-y-2 border-l-4 border-primary pl-6">
                            <span className="text-4xl font-black block">10+</span>
                            <span className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Years Experience</span>
                        </div>
                        <div className="space-y-2 border-l-4 border-primary pl-6">
                            <span className="text-4xl font-black block">25k+</span>
                            <span className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Happy Travelers</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-zinc-900 text-white rounded-[4rem] p-16 md:p-24 space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-black tracking-tight">Meet Our Core Team</h2>
                    <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
                        The passionate explorers behind every ChitraBazaar adventure.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="flex flex-col items-center text-center space-y-6">
                            <div className="w-48 h-48 rounded-3xl bg-zinc-800 animate-pulse border-4 border-zinc-800 shadow-xl" />
                            <div>
                                <h3 className="text-2xl font-bold">Team Member {i}</h3>
                                <p className="text-primary font-bold tracking-widest uppercase text-xs mt-1">Founder & CEO</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center py-20">
                <h2 className="text-4xl font-black mb-8">Ready to join our next expedition?</h2>
                <Button size="lg" className="px-10 py-8 text-xl font-bold rounded-2xl shadow-2xl shadow-primary/30 hover:shadow-primary/40 transition-all transform hover:-translate-y-2">
                    Check Our Packages
                </Button>
            </div>
        </main>
    );
}
