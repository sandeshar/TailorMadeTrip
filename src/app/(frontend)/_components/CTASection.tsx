import { MaterialSymbol } from "@/components/ui/material-symbol";
import Link from "next/link";

export function CTASection() {
    return (
        <section className="py-24 bg-slate-900 overflow-hidden relative">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

            <div className="section-container relative z-10 text-center flex flex-col items-center">
                <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                    Ready to Start Your <span className="text-secondary">Next Adventure?</span>
                </h2>
                <p className="text-slate-400 text-xl mb-12 max-w-2xl leading-relaxed">
                    Join over 10,000+ happy travelers who explored the world with us. Get personalized itineraries and exclusive deals tailored just for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                    <Link
                        href="/packages"
                        className="px-8 h-14 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/30"
                    >
                        Explore Packages
                        <MaterialSymbol icon="arrow_forward" size={20} />
                    </Link>
                    <Link
                        href="/contact"
                        className="px-8 h-14 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl flex items-center justify-center gap-2 backdrop-blur-md border border-white/10 transition-all"
                    >
                        Contact Us
                        <MaterialSymbol icon="chat" size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
