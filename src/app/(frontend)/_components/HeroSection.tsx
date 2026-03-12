import { MaterialSymbol } from "@/components/ui/material-symbol";

interface HeroSectionProps {
    title?: string;
    subtitle?: string;
    badgeText?: string;
    backgroundImage?: string;
    showSearch?: boolean;
}

export function HeroSection({
    title = "Discover Your Next Adventure",
    subtitle = "Explore the world's most beautiful destinations with our expert guides. Curated experiences for the modern traveler.",
    badgeText = "Explore the Unseen",
    backgroundImage = "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2560&auto=format&fit=crop",
    showSearch = true,
}: HeroSectionProps) {
    return (
        <section className="relative italic">
            <div
                className="w-full min-h-[500px] lg:min-h-[700px] flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-20 relative"
                style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.6)), url("${backgroundImage}")` }}
            >
                <div className="relative z-10 flex flex-col items-center text-center section-container space-y-4 mb-12">
                    <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-black/10">
                        {badgeText}
                    </span>
                    <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight uppercase italic drop-shadow-2xl font-serif">
                        {title}
                    </h1>
                    <p className="text-white/80 text-sm md:text-base lg:text-lg font-medium max-w-2xl leading-relaxed italic drop-shadow-lg font-sans">
                        {subtitle}
                    </p>
                </div>

                {showSearch && (
                    <div className="relative z-10 w-full max-w-7xl bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/20 p-2 lg:p-4 italic border border-white/20">
                        <form className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-2 lg:gap-4">
                            <div className="md:col-span-2 lg:col-span-4 relative group">
                                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white">
                                    <MaterialSymbol icon="location_on" size={20} />
                                </div>
                                <div className="flex flex-col justify-center h-16 pl-14 pr-4 bg-white/10 rounded-xl border border-white/10 focus-within:border-primary focus-within:bg-white/20 transition-all">
                                    <label className="text-[10px] font-black text-white/60 uppercase tracking-widest mb-1 italic">Destination</label>
                                    <input
                                        className="w-full bg-transparent border-none p-0 text-white placeholder-white/40 focus:ring-0 text-sm font-black uppercase tracking-tight outline-none italic"
                                        placeholder="Where to?"
                                        type="text"
                                    />
                                </div>
                            </div>

                            <div className="md:col-span-1 lg:col-span-3 relative group">
                                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white">
                                    <MaterialSymbol icon="calendar_today" size={20} />
                                </div>
                                <div className="flex flex-col justify-center h-16 pl-14 pr-4 bg-white/10 rounded-xl border border-white/10 focus-within:border-primary focus-within:bg-white/20 transition-all">
                                    <label className="text-[10px] font-black text-white/60 uppercase tracking-widest mb-1 italic">Date</label>
                                    <input
                                        className="w-full bg-transparent border-none p-0 text-white placeholder-white/40 focus:ring-0 text-sm font-black uppercase tracking-tight outline-none italic"
                                        placeholder="When?"
                                        type="text"
                                    />
                                </div>
                            </div>

                            <div className="md:col-span-1 lg:col-span-3 relative group">
                                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white">
                                    <MaterialSymbol icon="group" size={20} />
                                </div>
                                <div className="flex flex-col justify-center h-16 pl-14 pr-4 bg-white/10 rounded-xl border border-white/10 focus-within:border-primary focus-within:bg-white/20 transition-all">
                                    <label className="text-[10px] font-black text-white/60 uppercase tracking-widest mb-1 italic">Guests</label>
                                    <input
                                        className="w-full bg-transparent border-none p-0 text-white placeholder-white/40 focus:ring-0 text-sm font-black uppercase tracking-tight outline-none italic"
                                        placeholder="How many?"
                                        type="number"
                                    />
                                </div>
                            </div>

                            <div className="md:col-span-4 lg:col-span-2 flex italic">
                                <button className="w-full h-16 flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white font-black rounded-xl transition-all shadow-xl shadow-primary/20 cursor-pointer uppercase text-xs tracking-[0.2em] group" type="button">
                                    <MaterialSymbol icon="travel_explore" size={20} className="group-hover:scale-110 transition-transform" />
                                    <span>Find</span>
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>

            <section className="py-16 bg-white border-b border-slate-100 italic w-full">
                <div className="section-container">
                    <div className="flex overflow-hidden relative group">
                        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
                        <div className="flex animate-marquee whitespace-nowrap items-center gap-24 min-w-max italic grayscale group-hover:grayscale-0 transition-all duration-500">
                            <div className="text-slate-900 font-black text-2xl opacity-10 uppercase italic tracking-tighter hover:opacity-100 transition-opacity">Airline One</div>
                            <div className="text-slate-900 font-black text-2xl opacity-10 uppercase italic tracking-tighter hover:opacity-100 transition-opacity">SkyHotels</div>
                            <div className="text-slate-900 font-black text-2xl opacity-10 uppercase italic tracking-tighter hover:opacity-100 transition-opacity">GlobeTrotter</div>
                            <div className="text-slate-900 font-black text-2xl opacity-10 uppercase italic tracking-tighter hover:opacity-100 transition-opacity">Luxe Stays</div>
                            <div className="text-slate-900 font-black text-2xl opacity-10 uppercase italic tracking-tighter hover:opacity-100 transition-opacity">OceanView</div>
                        </div>
                        <div className="flex animate-marquee whitespace-nowrap items-center gap-24 min-w-max pl-24 italic grayscale group-hover:grayscale-0 transition-all duration-500" aria-hidden="true">
                            <div className="text-slate-900 font-black text-2xl opacity-10 uppercase italic tracking-tighter hover:opacity-100 transition-opacity">Airline One</div>
                            <div className="text-slate-900 font-black text-2xl opacity-10 uppercase italic tracking-tighter hover:opacity-100 transition-opacity">SkyHotels</div>
                            <div className="text-slate-900 font-black text-2xl opacity-10 uppercase italic tracking-tighter hover:opacity-100 transition-opacity">GlobeTrotter</div>
                            <div className="text-slate-900 font-black text-2xl opacity-10 uppercase italic tracking-tighter hover:opacity-100 transition-opacity">Luxe Stays</div>
                            <div className="text-slate-900 font-black text-2xl opacity-10 uppercase italic tracking-tighter hover:opacity-100 transition-opacity">OceanView</div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

