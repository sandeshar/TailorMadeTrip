"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { MaterialSymbol } from "@/components/ui/material-symbol";
import { subscribeToNewsletter } from "@/actions/newsletter";
import { cn } from "@/lib/utils";

interface NewsletterFormProps {
    variant?: "default" | "minimal" | "sidebar" | "section";
    className?: string;
    noBackground?: boolean;
}

export function NewsletterForm({ variant = "default", className, noBackground }: NewsletterFormProps) {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsSubmitting(true);
        try {
            const sourceUrl = typeof window !== 'undefined' ? window.location.href : undefined;
            const res = await subscribeToNewsletter(email, sourceUrl);
            if (res.success) {
                toast.success(res.message);
                setEmail("");
            } else {
                toast.error(res.message);
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (variant === "section") {
        return (
            <section className={cn(
                "py-20 px-4 md:px-12 lg:px-24 w-full max-w-full italic",
                !noBackground && "bg-slate-50 border-t border-slate-100",
                className
            )}>
                <div className="max-w-[1800px] mx-auto text-center flex flex-col items-center italic">
                    <div className="size-16 bg-primary rounded-full flex items-center justify-center text-white mb-6 shadow-2xl shadow-primary/40 transition-transform hover:scale-110">
                        <MaterialSymbol icon="alternate_email" size={30} />
                    </div>
                    <h2 className="text-slate-900 text-2xl md:text-3xl lg:text-4xl font-black mb-4 italic tracking-tight uppercase">Stay Inspired</h2>
                    <p className="text-slate-500 text-sm lg:text-base mb-8 max-w-xl mx-auto leading-relaxed italic">Join our global mailing list and receive curated travel deals and hidden gems directly in your inbox.</p>
                    <NewsletterForm variant="default" />
                    <p className="text-sm text-slate-400 mt-6 font-medium italic">We respect your privacy. Unsubscribe at any time.</p>
                </div>
            </section>
        );
    }

    if (variant === "sidebar") {
        return (
            <form onSubmit={handleSubmit} className={cn("flex flex-col gap-3", className)}>
                <input
                    className="w-full bg-slate-50 border-slate-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none transition-all placeholder:font-bold placeholder:uppercase placeholder:text-[10px] placeholder:tracking-widest"
                    placeholder="Your email address"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white font-black py-3 rounded-xl text-[10px] uppercase tracking-[0.2em] transition-all hover:shadow-xl hover:shadow-primary/20 cursor-pointer disabled:opacity-50"
                >
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
            </form>
        );
    }

    if (variant === "minimal") {
        return (
            <form onSubmit={handleSubmit} className={cn("relative z-10", className)}>
                <input
                    className="w-full bg-white/20 border border-white/30 rounded-lg py-2 px-3 text-sm placeholder:text-white/60 focus:ring-1 focus:ring-white outline-none mb-3"
                    placeholder="Email address"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-primary font-bold py-2 rounded-lg text-sm transition-opacity hover:opacity-90 cursor-pointer disabled:opacity-50"
                >
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
            </form>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={cn("flex w-full max-w-xl gap-2 flex-col sm:flex-row bg-white p-1.5 rounded-xl shadow-lg border border-slate-100", className)}>
            <input
                className="flex-1 h-11 px-4 rounded-lg border border-transparent bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-900 text-sm font-medium"
                placeholder="Your best email address"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
            />
            <button
                className="h-11 px-6 bg-primary hover:bg-primary/90 text-white font-black rounded-lg transition-all whitespace-nowrap cursor-pointer shadow-lg shadow-primary/30 uppercase text-sm disabled:opacity-50"
                type="submit"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Subscribing..." : "Subscribe Now"}
            </button>
        </form>
    );
}
