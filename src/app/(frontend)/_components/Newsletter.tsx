import { MaterialSymbol } from "@/components/ui/material-symbol";

export function Newsletter() {
    return (
        <section className="bg-slate-50 border-t border-slate-100 py-20 px-4 md:px-12 lg:px-24 w-full max-w-full italic">
            <div className="max-w-[1800px] mx-auto text-center flex flex-col items-center italic">
                <div className="size-16 bg-primary rounded-full flex items-center justify-center text-white mb-6 shadow-2xl shadow-primary/40 transition-transform hover:scale-110">
                    <MaterialSymbol icon="alternate_email" size={30} />
                </div>
                <h2 className="text-slate-900 text-2xl md:text-3xl lg:text-4xl font-black mb-4 italic tracking-tight uppercase">Stay Inspired</h2>
                <p className="text-slate-500 text-sm lg:text-base mb-8 max-w-xl mx-auto leading-relaxed italic">Join our global mailing list and receive curated travel deals and hidden gems directly in your inbox.</p>
                <form className="flex w-full max-w-xl gap-2 flex-col sm:flex-row bg-white p-1.5 rounded-xl shadow-lg border border-slate-100">
                    <input className="flex-1 h-11 px-4 rounded-lg border border-transparent bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-900 text-sm font-medium" placeholder="Your best email address" type="email" />
                    <button className="h-11 px-6 bg-primary hover:bg-primary/90 text-white font-black rounded-lg transition-all whitespace-nowrap cursor-pointer shadow-lg shadow-primary/30 uppercase text-sm" type="submit">Subscribe Now</button>
                </form>
                <p className="text-sm text-slate-400 mt-6 font-medium italic">We respect your privacy. Unsubscribe at any time.</p>
            </div>
        </section>
    );
}

