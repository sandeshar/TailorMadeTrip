import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function AdminSettingPage() {
    return (
        <div className="max-w-4xl space-y-12">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">System Settings</h1>
                <p className="text-muted-foreground mt-2 font-medium">Configure your travel platform details and global preferences.</p>
            </div>

            <div className="space-y-8">
                <Card className="border-none shadow-sm bg-muted/30">
                    <CardHeader>
                        <CardTitle className="text-xl">General Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label className="text-xs font-bold uppercase tracking-wider opacity-60">Site Name</Label>
                                <Input defaultValue="ChitraBazaar Travel" className="bg-background" />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-xs font-bold uppercase tracking-wider opacity-60">Support Email</Label>
                                <Input defaultValue="support@chitrabazaar.com" type="email" className="bg-background" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label className="text-xs font-bold uppercase tracking-wider opacity-60">Address</Label>
                            <Input defaultValue="123 Travel Avenue, Kathmandu, Nepal" className="bg-background" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-none shadow-sm bg-muted/30">
                    <CardHeader>
                        <CardTitle className="text-xl">SEO & Meta</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label className="text-xs font-bold uppercase tracking-wider opacity-60">Home Page Title</Label>
                            <Input defaultValue="Best Adventure Travel Agency in Nepal | ChitraBazaar" className="bg-background" />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-xs font-bold uppercase tracking-wider opacity-60">Meta Description</Label>
                            <Input defaultValue="Explore the world with ChitraBazaar. We offer luxury trekking, heritage tours, and local experiences." className="bg-background" />
                        </div>
                    </CardContent>
                </Card>

                <div className="flex justify-end gap-4">
                    <Button variant="outline" className="px-8 h-12 font-bold">Discard Changes</Button>
                    <Button className="px-10 h-12 font-bold shadow-xl shadow-primary/20">Save Settings</Button>
                </div>
            </div>
        </div>
    );
}
