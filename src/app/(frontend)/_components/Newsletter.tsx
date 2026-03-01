import { MaterialSymbol } from "@/components/ui/material-symbol";

export function Newsletter() {
    return (
        <section className="bg-slate-50 py-20">
            <div className="section-container">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    <div className="size-16 bg-secondary rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-secondary/30">
                        <MaterialSymbol icon="mail" size={32} />
                    </div>
                    <h2 className="text-slate-900 text-2xl md:text-3xl font-bold mb-4">Get Special Offers & Inspiration</h2>
                    <p className="text-slate-500 mb-8 max-w-lg">
                        Subscribe to our newsletter and get exclusive deals, travel inspiration, and tips directly to your inbox.
                    </p>
                    <form className="flex w-full max-w-md gap-2 flex-col sm:flex-row">
                        <input
                            className="flex-1 h-12 px-4 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            placeholder="Your email address"
                            type="email"
                            required
                        />
                        <button
                            className="h-12 px-6 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                            type="submit"
                        >
                            Subscribe
                        </button>
                    </form>
                    <p className="text-xs text-slate-400 mt-4">We respect your privacy. Unsubscribe at any time.</p>
                </div>
            </div>
        </section>
    );
}
