import React from 'react';
import { MaterialSymbol } from "@/components/ui/material-symbol";
import Link from 'next/link';
import { Newsletter } from '../_components/Newsletter';

const destinationCategories = [
    { name: "All", count: 48 },
    { name: "Europe", count: 12 },
    { name: "Asia", count: 18 },
    { name: "Americas", count: 10 },
    { name: "Africa", count: 5 },
    { name: "Oceania", count: 3 },
];

const destinations = [
    {
        id: 1,
        name: "Bali",
        country: "Indonesia",
        region: "Asia",
        price: "899",
        rating: 4.8,
        packages: 12,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDv45wk3aThy0vdifB9iTIDRH5XaV9j9SQ3fKKEN7GnK5vzk2xQcs-5f49TaSxY1aewa2JaEqCRu3AHZPnkdxF5t7snzJA0UaOP9gKqqLMMF9BaAf1PmPrsEqi5aOxT1qT8TjHhsLmmUjzO-7ouJzE8cSeOaJb0623Wb00aaBuQbwZQm0x81ikl8D0hBKb8nS-_IdcAfKTJaKEuXhpaq7_M56WPwvWv7dJdOZBvhViVGM8sCO6GtQW9y6nX8cz79vV6Ybe7ZAMw4A2j",
    },
    {
        id: 2,
        name: "Paris",
        country: "France",
        region: "Europe",
        price: "1,200",
        rating: 4.9,
        packages: 8,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuARFtTO8rIV-c6iQGE1E_R2XkpVg8GoEKUf2R2ncUeDFZnLx0m6Wxcq0_CBahlMeij5jEmjmDz6atLOoGIvn_rB2D31p1fz7KuGpkzGuPU8VPLTtsn-zzwgMBe79Takec3eVpwQH2NIcsM5N9QGD_JEGkGdnD_MPuwW76itRg4Vky6z-jOwJgdwHEgdmROU_zhZ1IKJw5to5pzly3YHHjEiL2Ts7Pe-Qd6_jD1QK7HpcIiHIyaDqbAEOqfjG6AVJsaiuED5L03Tkwz6",
    },
    {
        id: 3,
        name: "Santorini",
        country: "Greece",
        region: "Europe",
        price: "1,450",
        rating: 4.7,
        packages: 6,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRuSjkr9W_1MF7F4DR3QnMLQpSrk1LuUkVRQmtuaKYZo6VYjq1qDOwua__QLijGlHV_7XEi7zLFqvihMJg22P4Ux4GOCr-yt0PH5kayA7d-tiIbHvXpqwqgNeILmZgofnKxJFaFHwkK43tx4UAwG5eGZ1JCiN7KBJkWfx97VsLy24GGSKfokt248PS5k0wLRNLgB-swRnizo_LUmSfZIJ2sFazU2AC_Bc4Rz55_o3HVE7tbEJcB56i8-trokMrpiSJZv_PrPNhlxTU",
    },
    {
        id: 4,
        name: "Kyoto",
        country: "Japan",
        region: "Asia",
        price: "1,150",
        rating: 4.9,
        packages: 10,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqmiMcQY3pG36q5TlNnO-QHwTPa7KwjcC85rDGvL2epAwGoyq-KGuD0UBWPZs9EuRI3MIf1YqyHExyaeqZzOWkn62ySEB8dCELzLlXtab2JjzfaMZIiu8L-pG04-jvCdhveArvBOOMgIRrtOqFtEViq5aeAJ9gjc6hVRgs8dNQnsQFQigWlMgInePWZnGYfPL6pSHGuksLufxwr2fNmBWeOvl-aaE_ZjF2Mrem6JL_TFgqw1ssUFV9ePmWsQqbVfZ6mvv0P_xU0mVj",
    },
    {
        id: 5,
        name: "Swiss Alps",
        country: "Switzerland",
        region: "Europe",
        price: "1,800",
        rating: 4.8,
        packages: 5,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_qLFK844cgSxAcmrzj19HgZoC9smhWLWHvQNlRigD7L_I7wZFh5ltIi1N2wFryKdxnaYl7pN2wo2Yygdap4bsGIw-huUueYCu8W4uxpNc8bBJx9VknZE_PE1OU3XNn0scShnVWf8z_kpH7rs6OqRvpPsR3bEuq7jKm0UDyAu0wo3kKJYCYPePu7cMkl2N6nW8eqlZUQlrmPzkfoiXenVrzBNqzw5r3HL0FOmAQhlwszq5QKqnnity-B-NFcqF8_VcebLRS4-eyh9r",
    },
    {
        id: 6,
        name: "Great Barrier Reef",
        country: "Australia",
        region: "Oceania",
        price: "2,100",
        rating: 4.6,
        packages: 4,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-geBB_Lf0WOOOTIhPYXeOjlb77BxCG-iZKidqbCLJD14G4tDTYtCziA9WLBjSdun2knqaJPvG3hK_LFc3TyLPJqCKrtdWKsHrmHd9Pmaca7PaGm9m49vg_tIxPbv5Fiy9dDIn6eVs4bUMiqRIbGjpwq7gaI7IfPYVKNVjVyRRbYvpQkeKupTIoxKq8MsRdBNZaDrrQXc53okr_BG1oajVjyt7tt_j9vkbsfsV4y4sqcP4_guLS7iSI3FlCiP0aUkLN0u4wR9rUnNi",
    },
];

const offers = [
    {
        title: "Early Bird Special",
        discount: "15% OFF",
        description: "Book your summer trip 3 months in advance and save big.",
        code: "EARLY15",
        bg: "bg-blue-600",
    },
    {
        title: "Last Minute Deals",
        discount: "Up to 40% OFF",
        description: "Unbeatable prices for departures within the next 14 days.",
        code: "LAST40",
        bg: "bg-rose-600",
    },
    {
        title: "Family Package",
        discount: "Kids Go Free",
        description: "Special discounts for families with children under 12.",
        code: "FAMILYFUN",
        bg: "bg-emerald-600",
    },
];

export default function DestinationsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 py-12 bg-slate-50">
                <div className="section-container">
                    {/* Page Header & Filters */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
                        <div>
                            <h1 className="text-slate-900 text-3xl md:text-4xl font-bold leading-tight tracking-tight tracking-tight uppercase">Explore Destinations</h1>
                            <p className="text-slate-500 mt-2 text-base font-normal max-w-2xl">
                                Discover the world's most breathtaking locations and find your perfect getaway.
                            </p>
                        </div>

                        <div className="w-full lg:w-96 flex items-center bg-white border border-slate-200 rounded-xl px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                            <MaterialSymbol icon="search" className="text-slate-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Search by destination or country..."
                                className="w-full bg-transparent border-none outline-none text-sm font-medium text-slate-700 placeholder:text-slate-400"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {destinationCategories.map((cat) => (
                            <button
                                key={cat.name}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${cat.name === "All"
                                    ? "bg-primary text-white shadow-md shadow-primary/20"
                                    : "bg-white text-slate-600 border border-slate-200 hover:border-primary/50 hover:text-primary"
                                    }`}
                            >
                                {cat.name} ({cat.count})
                            </button>
                        ))}
                    </div>

                    {/* Sorting and Results count */}
                    <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-200">
                        <p className="text-slate-600 font-medium">
                            Showing <span className="text-slate-900 font-bold">{destinations.length}</span> destinations
                        </p>
                        <div className="flex items-center gap-2 text-sm">
                            <span className="font-medium text-slate-500">Sort:</span>
                            <div className="relative">
                                <select className="appearance-none bg-white border border-slate-200 text-slate-700 py-1.5 pl-3 pr-8 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30 font-medium text-sm">
                                    <option>Popularity</option>
                                    <option>Name (A-Z)</option>
                                    <option>Price (Low-High)</option>
                                    <option>Rating (Highest)</option>
                                </select>
                                <MaterialSymbol icon="expand_more" className="absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-sm" />
                            </div>
                        </div>
                    </div>

                    {/* Destinations Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {destinations.map((dest) => (
                            <Link
                                key={dest.id}
                                href={`/destinations/${dest.id}`}
                                className="group bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
                            >
                                <div className="relative aspect-square overflow-hidden mb-0">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                        style={{ backgroundImage: `url("${dest.image}")` }}
                                    ></div>
                                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-[10px] font-bold text-slate-900 uppercase tracking-widest shadow-sm">
                                            {dest.region}
                                        </span>
                                    </div>

                                    <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <button className="w-full bg-white text-slate-900 py-2.5 rounded-xl text-xs font-bold hover:bg-primary hover:text-white transition-colors shadow-lg">
                                            VIEW DETAILS
                                        </button>
                                    </div>
                                </div>

                                <div className="p-5 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-1">{dest.name}</h3>
                                            <div className="flex items-center gap-1 text-slate-400 text-xs mt-1">
                                                <MaterialSymbol icon="location_on" className="text-sm text-primary" />
                                                <span className="font-medium">{dest.country}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg text-amber-700 font-bold text-xs border border-amber-100/50">
                                            <MaterialSymbol icon="star" className="text-xs fill-current" />
                                            <span>{dest.rating}</span>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex items-center justify-between pt-4 border-t border-slate-50">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest">Starting</span>
                                            <span className="text-lg font-black text-slate-900">${dest.price}</span>
                                        </div>
                                        <div className="text-[10px] font-bold text-primary bg-primary/5 px-2.5 py-1.5 rounded-full uppercase tracking-tighter">
                                            {dest.packages} PACKAGES
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination Placeholder */}
                    <div className="mt-16 flex justify-center">
                        <nav className="flex items-center gap-2">
                            <button className="size-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-colors disabled:opacity-50" disabled>
                                <MaterialSymbol icon="chevron_left" />
                            </button>
                            {[1, 2, 3].map((page) => (
                                <button key={page} className={`size-10 rounded-lg border flex items-center justify-center font-bold text-sm transition-colors ${page === 1 ? 'bg-primary border-primary text-white' : 'border-slate-200 text-slate-600 hover:border-primary hover:text-primary'}`}>
                                    {page}
                                </button>
                            ))}
                            <button className="size-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary transition-colors">
                                <MaterialSymbol icon="chevron_right" />
                            </button>
                        </nav>
                    </div>
                </div>
            </main>

            <Newsletter />
        </div>
    );
}
