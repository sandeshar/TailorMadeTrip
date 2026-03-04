
import { HeroSection } from "./_components/HeroSection";
import { TrendingDestinations } from "./_components/TrendingDestinations";
import { WhyChooseUs } from "./_components/WhyChooseUs";
import { FeaturedPackages } from "./_components/FeaturedPackages";
import { LatestBlogPosts } from "./_components/LatestBlogPosts";
import { Testimonials } from "./_components/Testimonials";
import { CTASection } from "./_components/CTASection";
import { Newsletter } from "./_components/Newsletter";
import { StatsSection } from "./_components/StatsSection";
import { CategoryBrowse } from "./_components/CategoryBrowse";
import { HowItWorks } from "./_components/HowItWorks";
import { TickerSection } from "./_components/TickerSection";
import { CollectionsSection } from "./_components/CollectionsSection";

export default function Page() {
    return (
        <div className="flex flex-col w-full bg-slate-50/50">
            <HeroSection />
            <CollectionsSection />
            <div className="space-y-0">
                <TrendingDestinations />
                <StatsSection />
                <WhyChooseUs />
                <FeaturedPackages />
                <div className="bg-slate-50 py-24">
                    <Testimonials />
                </div>
                <LatestBlogPosts />
                <Newsletter />
            </div>
        </div>
    );
}

