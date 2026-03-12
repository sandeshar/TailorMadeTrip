import { Testimonials } from "./Testimonials";
import { getHomepage } from "@/actions/cms-actions"; // Correct action file
import { getTestimonials } from "@/actions/testimonials";

interface TestimonialsSectionProps {
    tag?: string;
    title?: string;
    description?: string;
    limit?: number;
}

export default async function TestimonialsSection({
    tag,
    title: overrideTitle,
    description: overrideDescription,
    limit = 6
}: TestimonialsSectionProps) {
    const query: any = { status: "active" };
    // Temporarily disabled dynamic tag filtering to show static defaults for frontend testing
    /*
    if (tag) {
        query.tags = tag;
    }
    */

    const [homepageData, testimonials] = await Promise.all([
        getHomepage().catch(() => null),
        getTestimonials(query, { createdAt: -1 }, limit)
    ]);

    const title = overrideTitle || homepageData?.testimonials?.title || "Voices of Adventure";
    const description = overrideDescription || homepageData?.testimonials?.description || "Real stories from travelers who have explored the world with us.";

    // Pass undefined items to trigger the static defaults inside the Testimonials component
    return (
        <Testimonials
            title={title}
            description={description}
            items={undefined}
        />
    );
}
