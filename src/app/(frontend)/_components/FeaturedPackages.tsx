import { MaterialSymbol } from "@/components/ui/material-symbol";
import Link from "next/link";

const packages = [
    {
        id: 1,
        title: "Maldives Luxury Escape",
        location: "Maldives",
        duration: "5 Days",
        rating: 4.9,
        reviews: 128,
        price: 1499,
        oldPrice: 1800,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaHM6z2uvKaSXpFIP0q76qb2nbAcwDdmTiPd25xZbLSPL_pTesyY4Bme-43QuIJ1rwUDqjMy21PcF7nVFB9tPmRrbyQ6neafrT8vcN7bzkPJFPiZVZMpkUh0FiaKTJvncIEYvwl-aNWfkCVSVYZ_uoyP25FdNvqYiKX8jgwZZpJBu__CFFOwA8Jo2G9BSEKkzx0GM0TWh5WFzkclSb8iwqvY_qSxEhsSmP-5bwGR0F6qwIueeOLdpKkLfqddYLQUQwGk8kVlOfTqiN",
    },
    {
        id: 2,
        title: "Dubai Desert Safari",
        location: "Dubai, UAE",
        duration: "7 Days",
        rating: 4.8,
        reviews: 85,
        price: 820,
        oldPrice: 950,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcrJEBd26P69hj0TmPzhzTncJiu48HGmMvlfmeLFOV-WFa1KIEg9WjolFJUZQpPXOJ9PjJzlzHc5z6XxCx1zfqtQ_b3d9WFJx6aaMXCAITY7Bhy1W9jl8nLPEBtFJTlW3-7a5b6d_aHfOGf0O4MIyBFgBUXtMGrlYEeiByQEonpFLgejmaF4MMfMBltaCuG1aoVySlK6UMGVk-5_YR-ot10sZ_KrNWtHrRWPKHtZaZwMAm9hUhmKtWaoDjSNs6Ns0KF-ABajQAJI4J",
    },
    {
        id: 3,
        title: "Machu Picchu Trek",
        location: "Cusco, Peru",
        duration: "10 Days",
        rating: 5.0,
        reviews: 210,
        price: 1850,
        oldPrice: 2100,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-SSM0ik7QyPRnbhksT7rBdpSPr7GgBwBZ6Ff7LFTNe9tHAswx_toRYGJ4nLgf65Sa3-lFfiqus_r0h11xSxUOGrk4x28I3uO9_GdeEJGa1Qi_UpaVMgXQJoOonRO4k-plzasuhRffoRX3H93I31lhYnKus6DmS5mHLgw75ziyOwt1PPNpIPkdm9timjPQ-Nk32N-6JBb2NiGh3XJlAk48h0Fl19S7rhQBM5lbGHrlS-mhM_wGRHvu7StUuhFrZztRSYxBnn4DsFC0",
    },
    {
        id: 4,
        title: "Santorini Sunset Cruise",
        location: "Santorini, Greece",
        duration: "3 Days",
        rating: 4.7,
        reviews: 95,
        price: 1850,
        oldPrice: 2100,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-SSM0ik7QyPRnbhksT7rBdpSPr7GgBwBZ6Ff7LFTNe9tHAswx_toRYGJ4nLgf65Sa3-lFfiqus_r0h11xSxUOGrk4x28I3uO9_GdeEJGa1Qi_UpaVMgXQJoOonRO4k-plzasuhRffoRX3H93I31lhYnKus6DmS5mHLgw75ziyOwt1PPNpIPkdm9timjPQ-Nk32N-6JBb2NiGh3XJlAk48h0Fl19S7rhQBM5lbGHrlS-mhM_wGRHvu7StUuhFrZztRSYxBnn4DsFC0",
    },
];

export function FeaturedPackages() {
    return (
        <section className="px-4 md:px-12 lg:px-24 py-20 w-full max-w-full border-t border-slate-100 italic">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left max-w-[1800px] mx-auto">
                <div>
                    <h2 className="text-slate-900 text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight italic uppercase">Handpicked Adventures</h2>
                    <p className="text-slate-500 text-sm lg:text-base mt-2 italic">Curated tours designed for the modern explorer.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 max-w-[1800px] mx-auto italic">
                {packages.map((pkg) => (
                    <div key={pkg.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-slate-100 transition-all flex flex-col group italic">
                        <div className="relative aspect-video bg-cover bg-center shrink-0 overflow-hidden" style={{ backgroundImage: `url("${pkg.image}")` }}>
                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300" />
                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black px-2.5 py-1 rounded-full shadow-sm uppercase">
                                {pkg.duration}
                            </div>
                            <button className="absolute top-3 left-3 bg-white/20 hover:bg-primary backdrop-blur-sm p-2 rounded-full text-white transition-all cursor-pointer">
                                <MaterialSymbol icon="favorite" size={16} />
                            </button>
                        </div>
                        <div className="p-5 text-left flex flex-col flex-1 italic">
                            <div className="flex items-center gap-1 text-amber-500 text-xs font-black mb-2 uppercase">
                                <MaterialSymbol icon="star" size={14} fill />
                                {pkg.rating} <span className="text-slate-400 font-medium ml-1">({pkg.reviews} reviews)</span>
                            </div>
                            <h3 className="text-slate-900 text-base lg:text-lg font-black mb-2 line-clamp-1 uppercase tracking-tight">{pkg.title}</h3>
                            <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-4">
                                <MaterialSymbol icon="location_on" size={14} className="text-primary" />
                                {pkg.location}
                            </div>
                            <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                                <div>
                                    <p className="text-slate-400 text-[10px] line-through font-bold">${pkg.oldPrice}</p>
                                    <p className="text-primary text-xl font-black">${pkg.price}</p>
                                </div>
                                <Link href="#" className="inline-flex items-center gap-1 px-4 py-2 bg-slate-900 text-white text-[10px] font-black rounded-lg hover:bg-primary transition-colors uppercase tracking-widest">
                                    Explore <MaterialSymbol icon="arrow_forward" size={12} />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
