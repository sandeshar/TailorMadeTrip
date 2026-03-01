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
        <section className="py-20 w-full bg-slate-50">
            <div className="section-container">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                        <h2 className="text-slate-900 text-2xl md:text-3xl font-bold leading-tight">Featured Packages</h2>
                        <p className="text-slate-500 mt-2">Curated tours handpicked for the ultimate experience.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {packages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-slate-100 transition-all"
                        >
                            <div
                                className="relative h-56 bg-cover bg-center"
                                style={{ backgroundImage: `url("${pkg.image}")` }}
                            >
                                <div className="absolute top-3 right-3 bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                                    {pkg.duration}
                                </div>
                                <button className="absolute top-3 left-3 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full text-white transition-colors cursor-pointer">
                                    <MaterialSymbol icon="favorite" size={18} />
                                </button>
                            </div>
                            <div className="p-5">
                                <div className="flex items-center gap-1 text-secondary text-sm font-bold mb-2">
                                    <MaterialSymbol icon="star" fill size={16} />
                                    {pkg.rating} <span className="text-slate-400 font-normal ml-1">({pkg.reviews} reviews)</span>
                                </div>
                                <h3 className="text-slate-900 text-lg font-bold mb-2">{pkg.title}</h3>
                                <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                                    <MaterialSymbol icon="location_on" size={16} className="text-primary" />
                                    {pkg.location}
                                </div>
                                <div className="flex items-end justify-between border-t border-slate-100 pt-4 mt-2">
                                    <div>
                                        <p className="text-slate-400 text-xs line-through">${pkg.oldPrice}</p>
                                        <p className="text-primary text-xl font-bold">${pkg.price}</p>
                                    </div>
                                    <Link
                                        href={`/packages/${pkg.id}`}
                                        className="text-sm font-bold text-slate-900 hover:text-primary transition-colors"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
