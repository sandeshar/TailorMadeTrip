import { MaterialSymbol } from "@/components/ui/material-symbol";

const features = [
    {
        title: "Expert Guides",
        description: "Our tours are led by certified, local experts who know the destinations inside out.",
        icon: "verified_user",
    },
    {
        title: "Best Price Guarantee",
        description: "We ensure you get the most competitive prices without compromising on quality.",
        icon: "savings",
    },
    {
        title: "24/7 Support",
        description: "Our dedicated support team is available round the clock to assist you.",
        icon: "support_agent",
    },
];

export function WhyChooseUs() {
    return (
        <section className="bg-white py-20 border-t border-slate-100 italic">
            <div className="section-container italic">
                <div className="text-left mb-12 italic">
                    <h2 className="text-slate-900 text-2xl md:text-3xl lg:text-4xl font-black mb-2 italic uppercase tracking-tight leading-tight">Why Choose Us</h2>
                    <p className="text-slate-500 text-sm lg:text-base italic">Unmatched expertise, unbeatable prices, and 24/7 care for your journey.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 italic">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-start text-left p-8 bg-slate-50 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-slate-100 border border-transparent hover:border-slate-100 group italic">
                            <div className="size-14 rounded-full bg-white flex items-center justify-center text-primary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-all transform group-hover:scale-110">
                                <MaterialSymbol icon={feature.icon} size={24} />
                            </div>
                            <h3 className="text-slate-900 text-base lg:text-lg font-black mb-3 uppercase tracking-tight italic">{feature.title}</h3>
                            <p className="text-slate-500 text-xs lg:text-sm leading-relaxed italic">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

