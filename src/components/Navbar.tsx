"use client";

import * as React from "react";
import Link from "next/link";
import { MaterialSymbol } from "@/components/ui/material-symbol";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navLinks = [
    { title: "Home", href: "/" },
    { title: "Packages", href: "/packages" },
    { title: "Destinations", href: "/destinations" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
];

export function Navbar() {
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
                        <Image src="/tailormytrip.png" alt="Wanderlust Travels Logo" width={156} height={140} />
                    </Link>
                </div>
                <nav className="hidden lg:flex flex-1 justify-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.title}
                            href={link.href}
                            className="text-slate-700 hover:text-secondary text-sm font-medium leading-normal transition-colors"
                        >
                            {link.title}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-3">
                    <Button variant="ghost" className="hidden sm:flex text-slate-900 text-sm font-bold h-9 px-4">
                        Login
                    </Button>
                    <Button className="bg-secondary hover:bg-secondary/90 text-white text-sm font-bold transition-colors shadow-sm shadow-secondary/20 h-9 px-4">
                        Sign Up
                    </Button>
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
                            {navLinks.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.href}
                                    className="text-slate-700 hover:text-secondary text-sm font-medium transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
