"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MaterialSymbol } from "@/components/ui/material-symbol";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navLinks = [
    { title: "Home", href: "/" },
    { title: "Packages", href: "/packages" },
    { title: "Destinations", href: "/destinations" },
    { title: "Blog", href: "/blog" },
    { title: "FAQ", href: "/faq" },
    { title: "Terms", href: "/terms" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full border-b border-solid border-slate-200 bg-white/90 backdrop-blur-md transition-all duration-300",
                isScrolled ? "shadow-sm" : ""
            )}
        >
            <div className="section-container flex h-16 items-center justify-between gap-8 py-3">
                <div className="flex items-center gap-3">
                    <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                        <Image src="/tailormytrip.png" alt="Wanderlust Travels Logo" width={156} height={45} />
                    </Link>
                </div>
                <nav className="hidden lg:flex flex-1 justify-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                        return (
                            <Link
                                key={link.title}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium leading-normal transition-all relative py-1",
                                    isActive
                                        ? "text-secondary font-bold"
                                        : "text-slate-700 hover:text-secondary"
                                )}
                            >
                                {link.title}
                                {isActive && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary rounded-full animate-in fade-in zoom-in duration-300" />
                                )}
                            </Link>
                        );
                    })}
                </nav>
                <div className="flex items-center gap-3">
                    <Link href="/login" className="hidden sm:block">
                        <Button variant="ghost" className="text-slate-400 hover:text-primary text-xs font-bold uppercase tracking-widest h-9 px-4 transition-colors">
                            Admin
                        </Button>
                    </Link>
                    <Link href="/contact" className="hidden sm:block">
                        <Button className="bg-primary hover:bg-primary/90 text-white text-sm font-bold transition-colors shadow-sm shadow-primary/20 h-9 px-6 rounded-full">
                            Contact Us
                        </Button>
                    </Link>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="lg:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <MaterialSymbol icon={isOpen ? "close" : "menu"} size={28} />
                    </Button>
                </div>

                {/* Mobile Nav */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-white border-b lg:hidden animate-in slide-in-from-top duration-300">
                        <nav className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                                return (
                                    <Link
                                        key={link.title}
                                        href={link.href}
                                        className={cn(
                                            "text-sm font-medium transition-colors p-2 rounded-lg",
                                            isActive
                                                ? "bg-secondary/10 text-secondary font-bold"
                                                : "text-slate-700 hover:text-secondary"
                                        )}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.title}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
