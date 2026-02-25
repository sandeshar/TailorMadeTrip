"use client";

import * as React from "react";
import Link from "next/link";
import { MaterialSymbol } from "@/components/ui/material-symbol";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
                "fixed top-0 z-50 w-full transition-all duration-300",
                isScrolled || isOpen
                    ? "bg-background/80 border-b backdrop-blur-md py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto flex items-center justify-between px-4">
                <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => setIsOpen(false)}
                >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/20">
                        <MaterialSymbol icon="flight_takeoff" size={28} className="text-primary-foreground" />
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-foreground">
                        Chitra<span className="text-primary">Bazaar</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.title}
                            href={link.href}
                            className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            {link.title}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon-lg" className="hidden sm:flex">
                        <MaterialSymbol icon="search" size={22} />
                    </Button>
                    <Button variant="ghost" size="icon-lg" className="hidden sm:flex">
                        <MaterialSymbol icon="person" size={22} />
                    </Button>
                    <Button size="lg" className="hidden md:flex">Book Now</Button>
                    <Button
                        variant="ghost"
                        size="icon-lg"
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <MaterialSymbol icon="close" size={28} /> : <MaterialSymbol icon="menu" size={28} />}
                    </Button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-background border-b animate-in slide-in-from-top duration-300">
                    <nav className="flex flex-col p-4 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.title}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                            >
                                {link.title}
                            </Link>
                        ))}
                        <div className="flex items-center gap-4 pt-4 border-t">
                            <Button variant="outline" className="flex-1 h-10">
                                <MaterialSymbol icon="search" size={20} className="mr-2" />
                                Search
                            </Button>
                            <Button variant="outline" className="flex-1 h-10">
                                <MaterialSymbol icon="person" size={20} className="mr-2" />
                                Account
                            </Button>
                        </div>
                        <Button size="lg" className="w-full">Book Now</Button>
                    </nav>
                </div>
            )}
        </header>
    );
}
