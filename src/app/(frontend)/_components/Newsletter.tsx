import { MaterialSymbol } from "@/components/ui/material-symbol";
import { NewsletterForm } from "./NewsletterForm";

export function Newsletter() {
    return (
        <section className="bg-slate-50 border-t border-slate-100 py-20 px-4 md:px-12 lg:px-24 w-full max-w-full italic">
            <div className="max-w-[1800px] mx-auto text-center flex flex-col items-center italic">
                <div className="size-16 bg-primary rounded-full flex items-center justify-center text-white mb-6 shadow-2xl shadow-primary/40 transition-transform hover:scale-110">
                    <MaterialSymbol icon="alternate_email" size={30} />
                </div>
                <h2 className="text-slate-900 text-2xl md:text-3xl lg:text-4xl font-black mb-4 italic tracking-tight uppercase">Stay Inspired</h2>
                <p className="text-slate-500 text-sm lg:text-base mb-8 max-w-xl mx-auto leading-relaxed italic">Join our global mailing list and receive curated travel deals and hidden gems directly in your inbox.</p>
                <NewsletterForm />
                <p className="text-sm text-slate-400 mt-6 font-medium italic">We respect your privacy. Unsubscribe at any time.</p>
            </div>
        </section>
    );
}

