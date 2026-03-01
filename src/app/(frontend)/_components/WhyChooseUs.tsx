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
        <section className="bg-white py-20 w-full">
            <div className="section-container">
                <div className="text-center mb-16 px-4">
                    <h2 className="text-slate-900 text-2xl md:text-3xl font-bold mb-4">Why Choose Wanderlust?</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        We provide the best travel experiences with a focus on quality, safety, and unforgettable memories.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                            <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <MaterialSymbol icon={feature.icon} size={32} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
