import Link from "next/link";
import { MaterialSymbol } from "@/components/ui/material-symbol";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
    return (
        <footer className="bg-muted/50 border-t">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/20">
                                <MaterialSymbol icon="flight_takeoff" size={28} className="text-primary-foreground" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-foreground">
                                Chitra<span className="text-primary">Bazaar</span>
                            </span>
                        </Link>
                        <p className="text-muted-foreground leading-relaxed">
                            Discover your next adventure with ChitraBazaar. We provide the best travel experiences around the world with comfort and style.
                        </p>
                        <div className="flex gap-4">
                            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-background border shadow-sm">
                                <MaterialSymbol icon="public" size={20} />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-background border shadow-sm">
                                <MaterialSymbol icon="share" size={20} />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-background border shadow-sm">
                                <MaterialSymbol icon="camera_alt" size={20} />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-background border shadow-sm">
                                <MaterialSymbol icon="smart_display" size={20} />
                            </Button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold">Quick Links</h3>
                        <ul className="space-y-4">
                            {["Home", "About Us", "Our Packages", "Destinations", "Travel Blog"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MaterialSymbol icon="location_on" size={20} className="mt-1 text-primary" />
                                <span className="text-muted-foreground">123 Travel Street, Adventure City, World 45678</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <MaterialSymbol icon="call" size={20} className="text-primary" />
                                <span className="text-muted-foreground">+1 (234) 567-890</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <MaterialSymbol icon="mail" size={20} className="text-primary" />
                                <span className="text-muted-foreground">info@chitrabazaar.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold">Newsletter</h3>
                        <p className="text-muted-foreground">
                            Subscribe to get the latest travel news and offers.
                        </p>
                        <div className="flex flex-col gap-2">
                            <Input placeholder="Your email address" className="bg-background h-11" />
                            <Button size="lg" className="w-full h-11">Subscribe</Button>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t pt-8 text-center text-sm text-muted-foreground">
                    <p>© 2026 ChitraBazaar Travel. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
