import { MaterialSymbol } from "@/components/ui/material-symbol";

export function StatsSection() {
    return (
        <section className="bg-slate-900 text-white py-16 px-4 md:px-12 lg:px-24 w-full max-w-full italic">
            <div className="max-w-[1800px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center divide-x divide-white/10 uppercase font-black">
                <div className="flex flex-col items-center justify-center p-6 group">
                    <MaterialSymbol icon="sentiment_very_satisfied" size={32} className="mb-4 text-primary transition-transform group-hover:scale-110" />
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-1 bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent">50K+</h3>
                    <p className="text-white/40 text-[10px] tracking-[0.2em] font-black">Satisfied Travelers</p>
                </div>
                <div className="flex flex-col items-center justify-center p-6 group">
                    <MaterialSymbol icon="map" size={32} className="mb-4 text-primary transition-transform group-hover:scale-110" />
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-1 bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent">120+</h3>
                    <p className="text-white/40 text-[10px] tracking-[0.2em] font-black">Global Destinations</p>
                </div>
                <div className="flex flex-col items-center justify-center p-6 group">
                    <MaterialSymbol icon="history" size={32} className="mb-4 text-primary transition-transform group-hover:scale-110" />
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-1 bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent">15+</h3>
                    <p className="text-white/40 text-[10px] tracking-[0.2em] font-black">Years Experience</p>
                </div>
                <div className="flex flex-col items-center justify-center p-6 group">
                    <MaterialSymbol icon="verified" size={32} className="mb-4 text-primary transition-transform group-hover:scale-110" />
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-1 bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent">99%</h3>
                    <p className="text-white/40 text-[10px] tracking-[0.2em] font-black">Success Rate</p>
                </div>
            </div>
        </section>
    );
}

