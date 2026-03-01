import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Suspense } from "react";

export default function FrontendLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Suspense fallback={null}>
                <Navbar />
            </Suspense>
            <main className="min-h-screen">
                {children}
            </main>
            <Footer />
        </>
    );
}
