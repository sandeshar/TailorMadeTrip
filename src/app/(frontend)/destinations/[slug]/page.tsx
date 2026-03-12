import { notFound } from "next/navigation";
import { MaterialSymbol } from "@/components/ui/material-symbol";
import { Metadata } from "next";
import TestimonialsSection from "../../_components/TestimonialsSection";
import { CTASection } from "../../_components/CTASection";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const title = slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');
    return {
        title: `${title} | Destination`,
        description: `Explore incredible destinations with EliteVoyage. Experience the art of living in ${title}.`,
    };
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Static data used as requested
    const destination = {
        title: slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' '),
        description: "A curated journey through the landscapes, flavors, and secrets of the Mediterranean's most storied peninsula. Experience the art of living in " + slug + ".",
        icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGXNZ4m7yGB51cpiX4mdRUwxVkD6PEE_ANAMvl0o1-o8Qc-j1AeIgsq7kGVXLRd0WGy_5C9vPSpGqOC1MMCJU2XyLyc9SPKRTJd_rIGOKOqs3xqYEs0QIC9Je-7JO0oixZteYcOsRlowp7kNXWiviTkJbs0Y1_Z1cSl0urR6spWBZjldfawvTNWvuEXBsZDxtkZ-NftZfrj7Tr0ZDaQOxJRMvjrLtKcIApsNwfL2QIbRz418CRaScx43EcXMgXNfWunNP2-Nte0_YK",
        features: ["Ancient Architecture", "Culinary Excellence", "Hidden Coastal Gems", "Bespoke Tours"],
        status: "active"
    };

    const featuredPackages = [
        {
            _id: "pkg1",
            title: "Classic " + destination.title + " Explorer",
            price: 3800,
            images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuCe3ISQyDrDnwEqxEFP0D1Bhj7hfyypQcwMt-VOdKDq37bCkoIVlt_O_U48_iZT4PlaPBQ5_J3-mo5a2oFu_Mlgf0aXnRHjDis38nZc7A01FNCIt5TcSjsVndcQ5vr4k0YOm-QoRx9qe1Immzv-IDXLXijaDGIWV5JSF3VViTekkJoBcZcufu4-gE70-aumgjouzgTIATAb4imCyL54tnc7k4E6vJ5WlUMz5ni4E0pCA3sMYy5GuY6acOqyiDXe6a0Po1PECXryYv1r"]
        },
        {
            _id: "pkg2",
            title: destination.title + " Romance Tour",
            price: 2950,
            images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBGj55S4euZnIybPF9rqn7UoPLr0pyB2PGJzrZhFjeGZ7HUXIGqspOCC_M5wkYRmp-aXH2ny5g8YbW_uWORWZo2RanndU4suALShAt57ISyvGRKa-mileGW-qyUQy3xjbn3DO9GXw5UwILsZ4OtDSErMnLv5jHU5UwvkZu34hklEbtekUajIJlmhPIfG4rJj2Qf17hHOFZZrVr2QDfpPEW3O7b9jtwZrsxagjCZVNie69Mft0deYjD5808ghYVTZjW8lSCWwOnncSMW"]
        }
    ];

    return (
        <main className="bg-background-light text-slate-900 selection:bg-primary selection:text-white">
            {/* Full-Width Hero Section */}
            <section className="relative h-[70vh] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${destination.icon || "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"})` }}
                ></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end pb-16">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full text-white">
                        <nav className="flex items-center gap-2 mb-4 text-sm font-medium opacity-80">
                            <span>Home</span>
                            <MaterialSymbol icon="chevron_right" className="text-xs" />
                            <span>Destinations</span>
                            <MaterialSymbol icon="chevron_right" className="text-xs" />
                            <span>{destination.title}</span>
                        </nav>
                        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-[1.1] tracking-tight whitespace-pre-line">
                            {destination.title}
                        </h1>
                        <p className="text-xl opacity-90 max-w-2xl font-light leading-relaxed">
                            {destination.description.split(".").slice(0, 2).join(".")}.
                        </p>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Main Content Area */}
                    <div className="lg:col-span-8">
                        <article className="space-y-12">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-primary font-bold tracking-widest uppercase text-xs">
                                    <span className="h-px w-8 bg-primary"></span>
                                    Traveler&apos;s Narrative
                                </div>
                                <h2 className="text-4xl font-bold leading-tight tracking-tight">
                                    Exploring the Essence of {destination.title}
                                </h2>
                                <div className="flex items-center gap-3 text-sm italic text-slate-500">
                                    <div className="size-8 rounded-full bg-slate-200 bg-cover bg-center flex items-center justify-center font-bold text-primary border border-slate-100">
                                        EV
                                    </div>
                                    <span>By EliteVoyage Editorial Team</span>
                                </div>
                                <p className="text-xl text-slate-600 leading-relaxed font-light">
                                    {destination.description}
                                </p>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="h-64 rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1286&auto=format&fit=crop')" }}></div>
                                    <div className="h-64 rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1286&auto=format&fit=crop')" }}></div>
                                </div>
                            </div>

                            {/* Recommended Package In-Line */}
                            {featuredPackages.length > 0 && (
                                <div className="bg-white rounded-2xl p-6 border border-slate-100 flex flex-col md:flex-row items-center gap-8 shadow-sm">
                                    <div className="size-28 shrink-0 rounded-xl overflow-hidden">
                                        <img
                                            alt={featuredPackages[0].title}
                                            className="w-full h-full object-cover"
                                            src={featuredPackages[0].images?.[0] || "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop"}
                                        />
                                    </div>
                                    <div className="flex-1 space-y-2 text-center md:text-left">
                                        <div className="inline-block px-2 py-0.5 bg-slate-100 text-primary text-[10px] font-bold uppercase tracking-widest rounded">Editor&apos;s Choice</div>
                                        <h3 className="text-xl font-bold tracking-tight">{featuredPackages[0].title}</h3>
                                        <p className="text-xs text-slate-500">7 Days | Private Tours | Michelin Dining</p>
                                        <button className="mt-3 text-primary font-bold text-xs flex items-center gap-1.5 mx-auto md:mx-0 hover:gap-2 transition-all uppercase tracking-wider">
                                            View Full Itinerary <MaterialSymbol icon="arrow_forward" className="text-xs" />
                                        </button>
                                    </div>
                                    <div className="text-center md:text-right">
                                        <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Starting at</span>
                                        <span className="text-2xl font-extrabold text-slate-900">${featuredPackages[0].price}</span>
                                    </div>
                                </div>
                            )}

                            {/* Regional Highlights */}
                            <div className="space-y-12">
                                <h2 className="text-4xl font-bold leading-tight tracking-tight">Regional Masterpieces</h2>

                                {destination.features && destination.features.length > 0 && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {destination.features.map((feature: string, index: number) => (
                                            <div key={index} className="group cursor-pointer">
                                                <div className="relative overflow-hidden rounded-3xl mb-6">
                                                    <div className="w-full h-75 bg-slate-200 flex items-center justify-center">
                                                        <MaterialSymbol icon="landscape" className="text-6xl text-slate-100" />
                                                    </div>
                                                    <div className="absolute top-6 left-6 bg-white/90 px-4 py-2 rounded-full font-bold text-sm text-slate-900">FEATURE</div>
                                                </div>
                                                <h3 className="text-2xl font-bold mb-3">{feature}</h3>
                                                <p className="text-slate-600 leading-relaxed mb-4">
                                                    Discover the unique charm and heritage of {feature} within the beautiful landscape of {destination.title}.
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Must-See Landmarks Grid */}
                            <div className="space-y-8 bg-slate-900 text-white rounded-[2rem] p-12">
                                <h2 className="text-2xl font-bold text-center tracking-tight">Must-See {destination.title} Landmarks</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
                                    {[
                                        { icon: "account_balance", title: "Culture", desc: "Heritage" },
                                        { icon: "sailing", title: "Waters", desc: "Discovery" },
                                        { icon: "landscape", title: "Nature", desc: "Splendor" }
                                    ].map((item, i) => (
                                        <div key={i} className="text-center space-y-4">
                                            <div className="size-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
                                                <MaterialSymbol icon={item.icon} className="text-primary text-xl" />
                                            </div>
                                            <h4 className="font-bold text-sm tracking-tight">{item.title}</h4>
                                            <p className="text-[10px] opacity-50 font-light uppercase tracking-wider">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </article>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4">
                        <div className="sticky top-24 space-y-8">
                            {/* Top-Rated Packages */}
                            {featuredPackages.length > 0 && (
                                <div className="space-y-6">
                                    <h3 className="text-lg font-bold flex items-center justify-between">
                                        Top-Rated Packages
                                        <MaterialSymbol icon="info" className="text-slate-400 cursor-pointer" />
                                    </h3>
                                    <div className="space-y-4">
                                        {featuredPackages.map((pkg: any) => (
                                            <div key={pkg._id} className="group flex gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-primary/20 transition-all cursor-pointer shadow-sm">
                                                <div className="size-20 rounded-xl overflow-hidden shrink-0">
                                                    <img
                                                        alt={pkg.title}
                                                        className="w-full h-full object-cover"
                                                        src={pkg.images?.[0] || "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop"}
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="text-sm font-bold group-hover:text-primary transition-colors line-clamp-2">{pkg.title}</h4>
                                                    <div className="flex items-center gap-1 mt-1">
                                                        <MaterialSymbol icon="star" className="text-xs text-yellow-500 fill-1" />
                                                        <span className="text-[10px] font-bold">4.9 Explorer Score</span>
                                                    </div>
                                                    <div className="mt-2 text-primary font-bold text-xs">${pkg.price}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Expert Advice Card */}
                            <div className="bg-linear-to-br from-primary to-blue-700 rounded-3xl p-8 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 opacity-10">
                                    <MaterialSymbol icon="support_agent" className="text-[100px]" />
                                </div>
                                <h4 className="text-lg font-bold mb-2">Need Expert Advice?</h4>
                                <p className="text-xs opacity-80 mb-6">Our travel designers specialize in bespoke {destination.title} itineraries tailored to your specific passions.</p>
                                <button className="bg-white text-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider">Talk to a Specialist</button>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            <TestimonialsSection
                tag={`destination-${slug}`}
                title={`What Travelers Say About ${destination.title}`}
                description={`Real stories from explorers who have discovered the magic of ${destination.title} with us.`}
            />
            <CTASection />
        </main>
    );
}
