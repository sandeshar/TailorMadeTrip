import React from 'react';
import { HeroSection } from '../_components/HeroSection';
import { MaterialSymbol } from "@/components/ui/material-symbol";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection
                title="Get in Touch"
                subtitle="Have questions about your next adventure? Our travel experts are here to help you plan the perfect trip."
                badgeText="Contact Us"
                backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDiL1OW7YK6H2sx2B38RgH7uETGdOEfryLqE6GY2YUEGWOZ5QPvb_I_EcLQvccmjUqOtw37KnZxLXJbvw0n5n6Eg9sOI0tFkmk7iU3yrchua6-56-ocYzdEvDFC1S5l5uWpUefxCSwnYmpH-0l9I2hDpf4RxEuQLHAzJwPAi2TcKLt1xlDkj3d4Ew7YDcC1UYB2uFvYo3DH9oMGn0UfiplMwDwlMIC-u3dCnrngFLJZxNJgwgC2PmVAQfpndgiaGTXxq4FbvkqVJoku"
                showSearch={false}
            />

            {/* Main Content Grid */}
            <main className="section-container py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Form Column */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
                        <h2 className="text-2xl font-bold mb-6 text-slate-900">Send us a Message</h2>
                        <form className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <Label htmlFor="full-name" className="text-sm font-semibold text-slate-700">Full Name</Label>
                                    <Input id="full-name" className="bg-slate-50 border-slate-200 py-6" placeholder="John Doe" type="text" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</Label>
                                    <Input id="email" className="bg-slate-50 border-slate-200 py-6" placeholder="john@example.com" type="email" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number</Label>
                                <Input id="phone" className="bg-slate-50 border-slate-200 py-6" placeholder="+1 (555) 000-0000" type="tel" />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-sm font-semibold text-slate-700">How can we help?</Label>
                                <Select defaultValue="booking">
                                    <SelectTrigger className="bg-slate-50 border-slate-200 py-6">
                                        <SelectValue placeholder="Booking Inquiry" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="booking">Booking Inquiry</SelectItem>
                                        <SelectItem value="cancellation">Cancellation/Refund</SelectItem>
                                        <SelectItem value="corporate">Corporate Travel</SelectItem>
                                        <SelectItem value="technical">Technical Support</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-sm font-semibold text-slate-700">Message</Label>
                                <Textarea id="message" className="bg-slate-50 border-slate-200 min-h-[120px]" placeholder="Tell us about your travel plans..." />
                            </div>
                            <Button className="w-full bg-primary text-white font-bold py-7 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 text-lg">
                                Send Message
                            </Button>
                        </form>
                    </div>

                    {/* Contact Info Column */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Information</h2>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Prefer to speak with someone directly? Reach out to us through any of the channels below. Our support team is available 24/7 for active bookings.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                        <MaterialSymbol icon="location_on" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Main Office</h4>
                                        <p className="text-slate-600">123 Adventure Way, Suite 500<br />San Francisco, CA 94103</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                        <MaterialSymbol icon="call" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Phone</h4>
                                        <p className="text-slate-600">+1 (800) 123-4567 (Toll Free)<br />+1 (415) 555-0123 (International)</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                        <MaterialSymbol icon="mail" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Email</h4>
                                        <p className="text-slate-600">support@travelwise.com<br />sales@travelwise.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Follow Our Journey</h3>
                            <div className="flex gap-4">
                                {[
                                    { icon: "public", label: "Website" },
                                    { icon: "video_library", label: "Videos" },
                                    { icon: "camera", label: "Instagram" },
                                    { icon: "share", label: "Social" }
                                ].map((social) => (
                                    <a
                                        key={social.icon}
                                        className="size-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all shadow-sm"
                                        href="#"
                                        aria-label={social.label}
                                    >
                                        <MaterialSymbol icon={social.icon} size={24} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                            <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                                <MaterialSymbol icon="schedule" size={18} />
                                Agency Hours
                            </h4>
                            <div className="flex justify-between text-sm py-1 border-b border-primary/5">
                                <span className="text-slate-600">Mon - Fri:</span>
                                <span className="font-bold text-slate-900">9:00 AM - 8:00 PM EST</span>
                            </div>
                            <div className="flex justify-between text-sm py-1 border-b border-primary/5">
                                <span className="text-slate-600">Saturday:</span>
                                <span className="font-bold text-slate-900">10:00 AM - 4:00 PM EST</span>
                            </div>
                            <div className="flex justify-between text-sm py-1">
                                <span className="text-slate-600">Sunday:</span>
                                <span className="font-bold text-slate-900">Emergency Only</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Full Width Map Section */}
            <section className="w-full h-[500px] relative overflow-hidden bg-slate-200">
                <div
                    className="absolute inset-0 bg-cover bg-center grayscale contrast-125 opacity-80"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAa4Z9_R5k8_SWZfyObqaFpaoVi_FVVaHsfl6JlvTgMqbvhgA0iR06VGif6JGnTE-E7zIJUy_c8MiyWzctLlu09wowUKHRVWGQU-lckK4LJU2fu2qoNhsNmGKH2clU3V0udnFtiTjbmuBSZ99OmzDlx5F77Af3sFsOgIPKgc9Nud7pc7FLX3YUYnevv0jPgJtHRkOMsT5xruLFnGm9Ezd-7Q1TGDVgyiI-xtljdBnfCnaPp_1v1WbzEuRHhcO2rDF_WF27hktYMa9Ru')" }}
                ></div>

                {/* Map Overlay Info */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="bg-white p-4 rounded-xl shadow-2xl border border-slate-100 flex items-center gap-4 min-w-[300px]">
                        <div className="size-12 bg-primary rounded-lg flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/30">
                            <MaterialSymbol icon="location_on" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">TravelWise Global HQ</h4>
                            <p className="text-xs text-slate-500 font-medium">Visit us for personalized planning</p>
                        </div>
                        <button className="ml-auto text-primary hover:scale-110 transition-transform">
                            <MaterialSymbol icon="directions" />
                        </button>
                    </div>
                </div>

                {/* Map Controls */}
                <div className="absolute bottom-8 right-8 flex flex-col gap-2 z-20">
                    <button className="bg-white size-10 rounded shadow-md flex items-center justify-center text-slate-600 hover:text-primary transition-colors">
                        <MaterialSymbol icon="add" />
                    </button>
                    <button className="bg-white size-10 rounded shadow-md flex items-center justify-center text-slate-600 hover:text-primary transition-colors">
                        <MaterialSymbol icon="remove" />
                    </button>
                </div>
            </section>
        </div>
    );
}
