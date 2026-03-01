import { MaterialSymbol } from "@/components/ui/material-symbol";

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        location: "Traveled to Indonesia",
        text: "The trip to Bali was absolutely magical. The guides were knowledgeable, the accommodations were top-notch, and every detail was taken care of.",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDu1zlqa1dpkdKbJXLPDSnhHD6FuYe5pGMrrugC_vz14e4fBuZNAloCCb8AeJkVRowumr8azyMWJR3JCCufLXrklgh-GYVHDj7txmLeFlu6YYkNA7tGQVMDsHQnsko-_wiwVw0uvgWSAqWuKwnf5IpUsdrvsFYK6kJp19R-nv3p-_AyoAYNc5sTq2SiLTKKwql9n-jXlhehlWeir-o_v_3eb0Xn4c_xXrm28KSliEHMrUP5Qq3QPdU7Jxt_EezEWV-Fjgz7xKSCcNQn",
        rating: 5,
    },
    {
        id: 2,
        name: "Michael Chen",
        location: "Traveled to Greece",
        text: "An unforgettable honeymoon in Santorini. Wanderlust Travels made everything seamless so we could just relax and enjoy the views. Highly recommended!",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8fhqLFwQ-3yc7RE6n7kvDCb2HckJBrjuPmO42WScOIDlWV5Bh5dk1bXaPcBbOwDrYTJr6rXBJb1zUMbMzsbevPebK-WIaoZe4enVpvDycJJXpPuQu9cFDsR6yObyvmE_9x6PLsSiG6lu00l7O0EAZwCheD9yBu4U312ucmOi7VgU6OG_1s0o5pzBF5CShInWcHkkl0KGIHAdHIXiy-GGPB5_tjOU7DNQAG3FIU2cW6Av3vf48J2EP6e_6UXWVKZbW2DHMofganQpt",
        rating: 4.5,
    },
    {
        id: 3,
        name: "Emma Thompson",
        location: "Traveled to Japan",
        text: "I've used many travel agencies before, but this one stands out. The personalized itinerary for our family trip to Japan was perfect for both kids and adults.",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9UwrqYXE2rS0S5W-7xNatFwycYtA1n5AYLb6I6TfEUvPS_N9OP8uYFJZcvF2HVabiF8TekzxEIcRmQdN7WtKV-l95akN2Z_W-CWjz76cQRG1ND4uXrHZLWcX7lekENuJlFfkVfa90eSNIQx9qDz7Vor2aqBoDjd1ERI7lEnLrSkY10wY0eVv0dBXXpofoN2jhqNl3Hm4VWSglNJjusERtYAazZ4kGAnk_NQ0Dx45a6zGASwdwiq6QJqRj0TQrNk6WpGfeOHpWivn9",
        rating: 5,
    },
];

export function Testimonials() {
    return (
        <section className="bg-white py-20 border-t border-slate-100">
            <div className="section-container">
                <div className="text-center mb-16">
                    <h2 className="text-slate-900 text-3xl md:text-4xl font-bold mb-4">What Our Travelers Say</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">Real stories from real travelers who have explored the world with us.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-slate-50 p-8 rounded-2xl relative">
                            <MaterialSymbol icon="format_quote" className="absolute top-6 right-6 text-6xl text-slate-200 pointer-events-none" />
                            <div className="flex items-center gap-1 text-secondary mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <MaterialSymbol
                                        key={i}
                                        icon={i + 0.5 < testimonial.rating ? "star" : (i < testimonial.rating ? "star_half" : "star")}
                                        fill={i < testimonial.rating}
                                        size={20}
                                    />
                                ))}
                            </div>
                            <p className="text-slate-600 mb-6 relative z-10 italic">"{testimonial.text}"</p>
                            <div className="flex items-center gap-4">
                                <div
                                    className="w-12 h-12 rounded-full bg-cover bg-center ring-2 ring-primary/20"
                                    style={{ backgroundImage: `url("${testimonial.avatar}")` }}
                                ></div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
                                    <p className="text-xs text-slate-500">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
