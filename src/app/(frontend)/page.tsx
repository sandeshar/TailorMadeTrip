
import { HeroSection } from "./_components/HeroSection";
import { TrendingDestinations } from "./_components/TrendingDestinations";
import { WhyChooseUs } from "./_components/WhyChooseUs";
import { FeaturedPackages } from "./_components/FeaturedPackages";
import { LatestBlogPosts } from "./_components/LatestBlogPosts";
import TestimonialsSection from "./_components/TestimonialsSection";
import { CTASection } from "./_components/CTASection";
import { NewsletterForm } from "./_components/NewsletterForm";
import { StatsSection } from "./_components/StatsSection";
import { CategoryBrowse } from "./_components/CategoryBrowse";
import { HowItWorks } from "./_components/HowItWorks";
import { TickerSection } from "./_components/TickerSection";
import { CollectionsSection } from "./_components/CollectionsSection";
import { getHomepage } from "@/actions/cms-actions";

export default async function Page() {
    const data = await getHomepage();

    return (
        <div className="flex flex-col w-full bg-slate-50/50">
            <HeroSection />
            <CollectionsSection />
            <div className="space-y-0">
                <TrendingDestinations />
                <StatsSection />
                <WhyChooseUs />
                <FeaturedPackages />
                <TestimonialsSection />
                <LatestBlogPosts />
                <NewsletterForm variant="section" />
            </div>
        </div>
    );
}

