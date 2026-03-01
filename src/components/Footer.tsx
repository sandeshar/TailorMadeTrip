import Link from "next/link";
import { MaterialSymbol } from "@/components/ui/material-symbol";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-20">
            <div className="section-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-white">
                        <div className="flex items-center justify-center size-8 rounded bg-primary text-white">
                            <MaterialSymbol icon="flight_takeoff" size={20} />
                        </div>
                        <h2 className="text-lg font-bold leading-tight">Wanderlust</h2>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Your trusted partner for exploring the world. Making travel dreams a reality since 2010.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <a className="hover:text-white transition-colors" href="#">
                            <MaterialSymbol icon="public" size={20} />
                        </a>
                        <a className="hover:text-white transition-colors" href="#">
                            <MaterialSymbol icon="photo_camera" size={20} />
                        </a>
                        <a className="hover:text-white transition-colors" href="#">
                            <MaterialSymbol icon="alternate_email" size={20} />
                        </a>
                    </div>
                </div>
                <div>
                    <h3 className="text-white font-bold mb-4">Company</h3>
                    <ul className="flex flex-col gap-2 text-sm">
                        <li>
                            <Link className="hover:text-primary transition-colors" href="/about">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-primary transition-colors" href="/careers">
                                Careers
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-primary transition-colors" href="/blog">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-primary transition-colors" href="/press">
                                Press
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-bold mb-4">Support</h3>
                    <ul className="flex flex-col gap-2 text-sm">
                        <li>
                            <Link className="hover:text-primary transition-colors" href="/contact">
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-primary transition-colors" href="/legal">
                                Legal Notice
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-primary transition-colors" href="/privacy">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-primary transition-colors" href="/terms">
                                Terms & Conditions
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-bold mb-4">Get in Touch</h3>
                    <ul className="flex flex-col gap-3 text-sm">
                        <li className="flex items-start gap-3">
                            <MaterialSymbol icon="location_on" size={20} className="text-primary" />
                            <span>
                                123 Adventure Lane, Suite 100
                                <br />
                                San Francisco, CA 94107
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <MaterialSymbol icon="call" size={20} className="text-primary" />
                            <span>+1 (555) 123-4567</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <MaterialSymbol icon="mail" size={20} className="text-primary" />
                            <span>hello@wanderlust.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
                © 2026 Wanderlust Travels. All rights reserved.
            </div>
        </footer>
    );
}
