
import { HeroSection } from "./_components/HeroSection";
import { TrendingDestinations } from "./_components/TrendingDestinations";
import { WhyChooseUs } from "./_components/WhyChooseUs";
import { FeaturedPackages } from "./_components/FeaturedPackages";
import { LatestBlogPosts } from "./_components/LatestBlogPosts";
import { Testimonials } from "./_components/Testimonials";
import { CTASection } from "./_components/CTASection";
import { Newsletter } from "./_components/Newsletter";

export default function Page() {
    return (
        <div className="flex flex-col w-full">
            <HeroSection />
            <TrendingDestinations />
            <WhyChooseUs />
            <FeaturedPackages />
            <Testimonials />
            <LatestBlogPosts />
            {/* <CTASection /> */}
            <Newsletter />
        </div>
    );
}
