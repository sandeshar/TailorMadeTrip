import Link from "next/link";
import { Compass, Home, Mail, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-background">
            {/* Background pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="container relative z-10 mx-auto px-6 py-12">
                <div className="flex flex-col items-center justify-center text-center">
                    <div className="relative mb-8">
                        <div className="animate-pulse rounded-full bg-primary/5 p-12">
                            <Compass className="h-24 w-24 text-primary opacity-20" />
                        </div>
                        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-black tracking-tighter text-primary sm:text-9xl">
                            404
                        </h1>
                    </div>

                    <div className="max-w-2xl space-y-6">
                        <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                            Destination Unreachable
                        </h2>
                        <p className="text-lg text-muted-foreground sm:text-xl leading-relaxed">
                            It seems your journey took an unexpected detour. The path you're looking for doesn't exist or has moved to a new destination.
                        </p>
                    </div>

                    <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button asChild size="lg" className="h-14 rounded-xl px-8 text-lg font-medium shadow-xl hover:translate-y-[-2px] transition-all duration-300">
                            <Link href="/">
                                <Home className="mr-2 h-5 w-5" />
                                Return to Base
                            </Link>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            asChild
                            className="h-14 rounded-xl px-8 text-lg font-medium hover:bg-accent transition-all duration-300"
                        >
                            <Link href="/contact">
                                <Mail className="mr-2 h-5 w-5" />
                                Report Missing Path
                            </Link>
                        </Button>
                    </div>

                    <div className="mt-16 pt-8 border-t border-border w-full max-w-md">
                        <p className="text-sm text-muted-foreground mb-4 font-medium uppercase tracking-widest">Quick Navigation</p>
                        <div className="grid grid-cols-2 gap-4 text-left">
                            <Link href="/packages" className="group flex items-center text-sm hover:text-primary transition-colors">
                                <MoveRight className="mr-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                Latest Packages
                            </Link>
                            <Link href="/blog" className="group flex items-center text-sm hover:text-primary transition-colors">
                                <MoveRight className="mr-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                Travel Stories
                            </Link>
                            <Link href="/category" className="group flex items-center text-sm hover:text-primary transition-colors">
                                <MoveRight className="mr-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                Destinations
                            </Link>
                            <Link href="/contact" className="group flex items-center text-sm hover:text-primary transition-colors">
                                <MoveRight className="mr-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                Get Support
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

