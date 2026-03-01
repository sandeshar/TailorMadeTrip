import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
    return (
        <main className="section-container py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
                    <p className="text-muted-foreground text-xl mb-10 leading-relaxed">
                        Have questions about our travel packages? Our team of experts is here to help you plan your perfect adventure. Send us a message and we'll get back to you as soon as possible.
                    </p>
                    <div className="space-y-6">
                        <div className="flex flex-col gap-1">
                            <span className="font-semibold text-lg hover:text-primary transition-colors cursor-pointer">Email</span>
                            <span className="text-muted-foreground text-lg cursor-pointer">info@travel.com</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-semibold text-lg hover:text-primary transition-colors cursor-pointer">Phone</span>
                            <span className="text-muted-foreground text-lg cursor-pointer">+977 1234567890</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-semibold text-lg hover:text-primary transition-colors cursor-pointer">Address</span>
                            <span className="text-muted-foreground text-lg cursor-pointer">123 Travel Avenue, Kathmandu, Nepal</span>
                        </div>
                    </div>
                </div>
                <Card className="p-8 shadow-xl border-none">
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-sm font-semibold uppercase tracking-wider">Full Name</Label>
                            <Input id="name" placeholder="Enter your full name" className="py-6 px-4 bg-muted/30 focus:bg-background transition-all" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-semibold uppercase tracking-wider">Email Address</Label>
                            <Input id="email" type="email" placeholder="Enter your email address" className="py-6 px-4 bg-muted/30 focus:bg-background transition-all" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="subject" className="text-sm font-semibold uppercase tracking-wider">Subject</Label>
                            <Input id="subject" placeholder="What are you interested in?" className="py-6 px-4 bg-muted/30 focus:bg-background transition-all" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message" className="text-sm font-semibold uppercase tracking-wider">Message</Label>
                            <Textarea id="message" placeholder="Tell us more about your trip..." rows={5} className="bg-muted/30 focus:bg-background transition-all resize-none" />
                        </div>
                        <Button className="w-full py-6 text-lg font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-1 transition-all duration-300">
                            Send Message
                        </Button>
                    </form>
                </Card>
            </div>
        </main>
    );
}
