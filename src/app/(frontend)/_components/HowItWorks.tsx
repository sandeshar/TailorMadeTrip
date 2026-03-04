import { MaterialSymbol } from "@/components/ui/material-symbol";

const steps = [
    {
        title: "Find Your Destination",
        description: "Choose from hundreds of hand-picked luxury and budget-friendly destinations worldwide.",
        icon: "travel_explore",
    },
    {
        title: "Book with Confidence",
        description: "Secure booking with 24/7 support and flexible cancellation policies.",
        icon: "credit_score",
    },
    {
        title: "Enjoy Your Trip",
        description: "Experience the world like never before with our expert-led guided tours.",
        icon: "celebration",
    },
];

export function HowItWorks() {
    return (
        <section className="py-20 px-4 md:px-12 lg:px-24 bg-slate-50 border-t border-slate-100 w-full max-w-full italic">
            <div className="max-w-[1800px] mx-auto italic">
                <div className="text-left mb-12 italic">
                    <h2 className="text-slate-900 text-2xl md:text-3xl lg:text-4xl font-black mb-2 italic uppercase tracking-tight leading-tight">Simple Booking</h2>
                    <p className="text-slate-500 text-sm lg:text-base italic">Three easy steps to start your next global adventure.</p>
                </div>
                <div className="relative italic">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-start text-left p-8 bg-white rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-slate-200 border border-slate-100 group italic">
                                <div className="size-14 rounded-full bg-slate-50 flex items-center justify-center text-primary mb-6 transition-all group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white relative">
                                    <MaterialSymbol icon={step.icon} size={28} />
                                    <div className="absolute -top-1 -right-1 size-6 bg-primary text-white text-[10px] font-black rounded-full flex items-center justify-center group-hover:bg-slate-900 transition-colors uppercase">
                                        0{index + 1}
                                    </div>
                                </div>
                                <h3 className="text-slate-900 text-base lg:text-lg font-black mb-3 uppercase tracking-tight italic">{step.title}</h3>
                                <p className="text-slate-500 text-xs lg:text-sm leading-relaxed italic">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
