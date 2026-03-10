import { Testimonials } from "./Testimonials";
import { getHomepage } from "@/actions/cms-actions"; // Correct action file
import { getTestimonials } from "@/actions/testimonials";

export default async function TestimonialsSection() {
    const [homepageData, testimonials] = await Promise.all([
        getHomepage(),
        getTestimonials({ status: "active", featured: true }, { createdAt: -1 }, 6)
    ]);

    const title = homepageData?.testimonials?.title || "Voices of Adventure";
    const description = homepageData?.testimonials?.description || "Real stories from travelers who have explored the world with us.";

    // If no featured testimonials, show the defaults from the component
    return (
        <Testimonials
            title={title}
            description={description}
            items={testimonials.length > 0 ? testimonials : undefined}
        />
    );
}
