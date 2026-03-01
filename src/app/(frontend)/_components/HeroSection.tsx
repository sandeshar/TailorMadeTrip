import { MaterialSymbol } from "@/components/ui/material-symbol";

export function HeroSection() {
    return (
        <section className="relative">
            <div
                className="w-full min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDThwmPff3wMbsrSr3M5U4YYzAlBQqzo8ZsTWqA5TGCUkZocB8fxzX9I2XgnsSgams_5pTb6jsEp2pX5ISw2cwLovG-eCkrKewj8mrBSBqWKGRiKWtBgG0A6OyGAV4ETSpRmgaN18BfpRYW4FkLVrmcphuk9kZN3g1H7h_E8fIRVg68uwPUYJPUqYwZJ5EbswPDllnt-3BiNznh6vH8YzE3zHcwRu6d9zlMFrPfyio724kkIof_KEPaXtmZMJkKxyU2E5eXDCe_OSt0")',
                }}
            >
                <div className="section-container relative z-10 py-20 flex flex-col items-center">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-4 mb-10">
                        <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-bold uppercase tracking-wider">
                            Explore the Unseen
                        </span>
                        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight drop-shadow-sm">
                            Discover Your Next Adventure
                        </h1>
                        <p className="text-white/90 text-base md:text-lg font-medium max-w-2xl leading-relaxed drop-shadow-sm">
                            Explore the world's most beautiful destinations with our expert guides. Curated experiences for the
                            modern traveler.
                        </p>
                    </div>

                    {/* Search Bar Widget */}
                    <div className="w-full max-w-5xl bg-white rounded-xl shadow-xl shadow-slate-900/10 p-2 md:p-3">
                        <form className="grid grid-cols-1 md:grid-cols-12 gap-2">
                            {/* Destination */}
                            <div className="md:col-span-4 relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                                    <MaterialSymbol icon="location_on" />
                                </div>
                                <div className="flex flex-col justify-center h-14 pl-12 pr-4 bg-slate-50 rounded-lg border border-transparent focus-within:border-primary/50 focus-within:bg-white transition-all">
                                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                                        Destination
                                    </label>
                                    <input
                                        className="w-full bg-transparent border-none p-0 text-slate-900 placeholder-slate-400 focus:ring-0 text-sm font-medium leading-tight outline-hidden"
                                        placeholder="Where do you want to go?"
                                        type="text"
                                    />
                                </div>
                            </div>
                            {/* Date */}
                            <div className="md:col-span-3 relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                                    <MaterialSymbol icon="calendar_month" />
                                </div>
                                <div className="flex flex-col justify-center h-14 pl-12 pr-4 bg-slate-50 rounded-lg border border-transparent focus-within:border-primary/50 focus-within:bg-white transition-all">
                                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Date</label>
                                    <input
                                        className="w-full bg-transparent border-none p-0 text-slate-900 placeholder-slate-400 focus:ring-0 text-sm font-medium leading-tight outline-hidden"
                                        placeholder="Add dates"
                                        type="text"
                                    />
                                </div>
                            </div>
                            {/* Guests */}
                            <div className="md:col-span-3 relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                                    <MaterialSymbol icon="group" />
                                </div>
                                <div className="flex flex-col justify-center h-14 pl-12 pr-4 bg-slate-50 rounded-lg border border-transparent focus-within:border-primary/50 focus-within:bg-white transition-all">
                                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Guests</label>
                                    <input
                                        className="w-full bg-transparent border-none p-0 text-slate-900 placeholder-slate-400 focus:ring-0 text-sm font-medium leading-tight outline-hidden"
                                        placeholder="Add guests"
                                        type="number"
                                    />
                                </div>
                            </div>
                            {/* Submit */}
                            <div className="md:col-span-2">
                                <button
                                    className="w-full h-14 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-all shadow-lg shadow-primary/25 cursor-pointer"
                                    type="button"
                                >
                                    <MaterialSymbol icon="search" />
                                    <span>Search</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
