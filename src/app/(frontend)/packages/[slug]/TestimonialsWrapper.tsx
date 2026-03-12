import { Suspense } from "react";
import TestimonialsSection from "../../_components/TestimonialsSection";

export default function TestimonialsWrapper({ tag, title, description }: { tag: string, title: string, description: string }) {
    return (
        <Suspense fallback={<div className="h-64 flex items-center justify-center bg-slate-50 rounded-2xl animate-pulse text-slate-400 font-medium">Loading reviews...</div>}>
            <TestimonialsSection
                tag={tag}
                title={title}
                description={description}
            />
        </Suspense>
    );
}
