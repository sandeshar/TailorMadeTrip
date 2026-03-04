import { MaterialSymbol } from "@/components/ui/material-symbol";
import Link from "next/link";

export function CollectionsSection() {
    return (
        <section className="py-24 px-4 md:px-12 lg:px-24 w-full max-w-full overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 text-left max-w-[1800px] mx-auto">
                <div>
                    <h2 className="text-slate-900 text-2xl md:text-3xl font-black tracking-tight leading-tight italic uppercase">Curated Collections</h2>
                    <p className="text-slate-500 text-sm lg:text-base mt-2 italic">Handpicked experiences tailored to your unique travel style.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 h-auto lg:h-[70vh] max-w-[1800px] mx-auto">
                <Link className="md:col-span-7 relative group rounded-2xl overflow-hidden block h-80 md:h-full" href="#">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-SSM0ik7QyPRnbhksT7rBdpSPr7GgBwBZ6Ff7LFTNe9tHAswx_toRYGJ4nLgf65Sa3-lFfiqus_r0h11xSxUOGrk4x28I3uO9_GdeEJGa1Qi_UpaVMgXQJoOonRO4k-plzasuhRffoRX3H93I31lhYnKus6DmS5mHLgw75ziyOwt1PPNpIPkdm9timjPQ-Nk32N-6JBb2NiGh3XJlAk48h0Fl19S7rhQBM5lbGHrlS-mhM_wGRHvu7StUuhFrZztRSYxBnn4DsFC0")` }}></div>
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end h-full text-left">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="bg-amber-400 text-slate-900 text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full">Exclusive</span>
                            <span className="text-white text-[10px] font-bold tracking-widest uppercase">Off The Beaten Path</span>
                        </div>
                        <h3 className="text-white text-2xl md:text-3xl font-black leading-tight mb-2 tracking-tight">The Hidden Gems</h3>
                        <p className="text-white/80 text-sm mb-4 line-clamp-2 max-w-lg">Discover secret locations and unspoiled landscapes away from the crowds with our local specialists.</p>
                        <span className="text-white text-xs font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all">Explore Collection <MaterialSymbol icon="arrow_right_alt" /></span>
                    </div>
                </Link>
                <div className="md:col-span-5 grid grid-rows-2 gap-8 h-full">
                    <Link className="relative group rounded-2xl overflow-hidden block h-64 md:h-full" href="#">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDv45wk3aThy0vdifB9iTIDRH5XaV9j9SQ3fKKEN7GnK5vzk2xQcs-5f49TaSxY1aewa2JaEqCRu3AHZPnkdxF5t7snzJA0UaOP9gKqqLMMF9BaAf1PmPrsEqi5aOxT1qT8TjHhsLmmUjzO-7ouJzE8cSeOaJb0623Wb00aaBuQbwZQm0x81ikl8D0hBKb8nS-_IdcAfKTJaKEuXhpaq7_M56WPwvWv7dJdOZBvhViVGM8sCO6GtQW9y6nX8cz79vV6Ybe7ZAMw4A2j")` }}></div>
                        <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end h-full text-left">
                            <div className="flex items-center gap-2 mb-3">
                                <MaterialSymbol icon="local_fire_department" className="text-rose-400" />
                                <span className="text-white text-[10px] font-black tracking-widest uppercase">Trending Now</span>
                            </div>
                            <h3 className="text-white text-3xl font-black tracking-tight leading-tight">Most Popular Choices</h3>
                        </div>
                    </Link>
                    <div className="grid grid-cols-2 gap-8 h-64 md:h-full">
                        <Link className="relative group rounded-2xl overflow-hidden block" href="#">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDRuSjkr9W_1MF7F4DR3QnMLQpSrk1LuUkVRQmtuaKYZo6VYjq1qDOwua__QLijGlHV_7XEi7zLFqvihMJg22P4Ux4GOCr-yt0PH5kayA7d-tiIbHvXpqwqgNeILmZgofnKxJFaFHwkK43tx4UAwG5eGZ1JCiN7KBJkWfx97VsLy24GGSKfokt248PS5k0wLRNLgB-swRnizo_LUmSfZIJ2sFazU2AC_Bc4Rz55_o3HVE7tbEJcB56i8-trokMrpiSJZv_PrPNhlxTU")` }}></div>
                            <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                                <span className="text-white/70 text-[10px] uppercase font-black tracking-widest mb-1">Explore</span>
                                <h3 className="text-white text-xl font-bold tracking-tight">Family Trips</h3>
                            </div>
                        </Link>
                        <Link className="relative group rounded-2xl overflow-hidden block" href="#">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuARFtTO8rIV-c6iQGE1E_R2XkpVg8GoEKUf2R2ncUeDFZnLx0m6Wxcq0_CBahlMeij5jEmjmDz6atLOoGIvn_rB2D31p1fz7KuGpkzGuPU8VPLTtsn-zzwgMBe79Takec3eVpwQH2NIcsM5N9QGD_JEGkGdnD_MPuwW76itRg4Vky6z-jOwJgdwHEgdmROU_zhZ1IKJw5to5pzly3YHHjEiL2Ts7Pe-Qd6_jD1QK7HpcIiHIyaDqbAEOqfjG6AVJsaiuED5L03Tkwz6")` }}></div>
                            <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                                <span className="text-white/70 text-[10px] uppercase font-black tracking-widest mb-1">Indulge</span>
                                <h3 className="text-white text-xl font-bold tracking-tight">Romantic</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
