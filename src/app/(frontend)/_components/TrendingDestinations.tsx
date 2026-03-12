import { MaterialSymbol } from "@/components/ui/material-symbol";
import Link from "next/link";

const destinations = [
    {
        id: 1,
        name: "Bali, Indonesia",
        region: "Asia",
        price: "899",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDv45wk3aThy0vdifB9iTIDRH5XaV9j9SQ3fKKEN7GnK5vzk2xQcs-5f49TaSxY1aewa2JaEqCRu3AHZPnkdxF5t7snzJA0UaOP9gKqqLMMF9BaAf1PmPrsEqi5aOxT1qT8TjHhsLmmUjzO-7ouJzE8cSeOaJb0623Wb00aaBuQbwZQm0x81ikl8D0hBKb8nS-_IdcAfKTJaKEuXhpaq7_M56WPwvWv7dJdOZBvhViVGM8sCO6GtQW9y6nX8cz79vV6Ybe7ZAMw4A2j",
    },
    {
        id: 2,
        name: "Paris, France",
        region: "Europe",
        price: "1,200",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuARFtTO8rIV-c6iQGE1E_R2XkpVg8GoEKUf2R2ncUeDFZnLx0m6Wxcq0_CBahlMeij5jEmjmDz6atLOoGIvn_rB2D31p1fz7KuGpkzGuPU8VPLTtsn-zzwgMBe79Takec3eVpwQH2NIcsM5N9QGD_JEGkGdnD_MPuwW76itRg4Vky6z-jOwJgdwHEgdmROU_zhZ1IKJw5to5pzly3YHHjEiL2Ts7Pe-Qd6_jD1QK7HpcIiHIyaDqbAEOqfjG6AVJsaiuED5L03Tkwz6",
    },
    {
        id: 3,
        name: "Santorini, Greece",
        region: "Europe",
        price: "1,450",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRuSjkr9W_1MF7F4DR3QnMLQpSrk1LuUkVRQmtuaKYZo6VYjq1qDOwua__QLijGlHV_7XEi7zLFqvihMJg22P4Ux4GOCr-yt0PH5kayA7d-tiIbHvXpqwqgNeILmZgofnKxJFaFHwkK43tx4UAwG5eGZ1JCiN7KBJkWfx97VsLy24GGSKfokt248PS5k0wLRNLgB-swRnizo_LUmSfZIJ2sFazU2AC_Bc4Rz55_o3HVE7tbEJcB56i8-trokMrpiSJZv_PrPNhlxTU",
    },
    {
        id: 4,
        name: "Kyoto, Japan",
        region: "Asia",
        price: "1,150",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqmiMcQY3pG36q5TlNnO-QHwTPa7KwjcC85rDGvL2epAwGoyq-KGuD0UBWPZs9EuRI3MIf1YqyHExyaeqZzOWkn62ySEB8dCELzLlXtab2JjzfaMZIiu8L-pG04-jvCdhveArvBOOMgIRrtOqFtEViq5aeAJ9gjc6hVRgs8dNQnsQFQigWlMgInePWZnGYfPL6pSHGuksLufxwr2fNmBWeOvl-aaE_ZjF2Mrem6JL_TFgqw1ssUFV9ePmWsQqbVfZ6mvv0P_xU0mVj",
    },
];

export function TrendingDestinations() {
    return (
        <section className="py-20 border-t border-slate-100 italic">
            <div className="section-container">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 text-left italic">
                    <div>
                        <h2 className="text-slate-900 text-2xl md:text-3xl lg:text-4xl font-black mb-2 italic uppercase tracking-tight leading-tight">Trending Destinations</h2>
                        <p className="text-slate-500 text-sm lg:text-base italic">Most popular choices for travelers this season.</p>
                    </div>
                    <Link className="text-primary text-sm font-black hover:text-slate-900 flex items-center gap-2 group whitespace-nowrap mb-1 uppercase tracking-widest transition-colors" href="#">
                        View All Destinations
                        <MaterialSymbol icon="arrow_forward" size={18} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 italic">
                    {destinations.map((dest) => (
                        <Link key={dest.id} className="group relative aspect-[3/4] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 italic" href="#">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0" style={{ backgroundImage: `url("${dest.image}")` }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6 w-full text-left italic">
                                <span className="px-2.5 py-1 bg-primary text-white text-[10px] font-black rounded mb-3 inline-block uppercase tracking-widest leading-none">{dest.region}</span>
                                <h3 className="text-white text-xl lg:text-2xl font-black leading-tight group-hover:text-primary transition-colors uppercase tracking-tight italic">{dest.name}</h3>
                                <div className="flex items-center gap-2 mt-2 text-white/60 text-[10px] uppercase font-black tracking-widest">
                                    <MaterialSymbol icon="flight_takeoff" size={14} className="text-primary" />
                                    <span>Starting From ${dest.price}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

