"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { getSettings, updateSettings, SiteSettings } from "@/actions/settings";

import ImageUploader from "@/components/ImageUploader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, Save, Mail, Globe, Palette, ShieldCheck, Phone, MessageSquare, MapPin } from "lucide-react";

export default function SettingsManager() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [data, setData] = useState<SiteSettings | null>(null);

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            const settingsData = await getSettings();
            setData(settingsData);
        } catch (error) {
            console.error(error);
            toast.error("Failed to load settings");
        } finally {
            setIsLoading(false);
        }
    };

    const handleSave = async () => {
        if (!data) return;
        setIsSaving(true);
        try {
            const result = await updateSettings(data);
            if (result.success) {
                toast.success("Settings updated successfully");
                router.refresh();
                fetchSettings();
            } else {
                toast.error(result.error || "Failed to update settings");
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to update settings");
        } finally {
            setIsSaving(false);
        }
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
            </div>
        );
    }

    if (!data) return null;

    return (
        <div className="max-w-4xl mx-auto space-y-8 pb-20 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sticky top-0 bg-background/95 backdrop-blur-sm py-6 z-40 border-b border-border -mx-4 px-4 sm:-mx-8 sm:px-8">
                <div>
                    <h1 className="text-3xl font-black tracking-tight text-foreground">Settings</h1>
                    <p className="text-sm text-muted-foreground mt-1 font-medium">Manage platform configuration.</p>
                </div>
                <Button
                    onClick={handleSave}
                    disabled={isSaving}
                    size="default"
                    className="w-full sm:w-auto font-bold shadow-sm h-11 px-6 text-sm rounded-lg"
                >
                    {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
                    {isSaving ? "Saving..." : "Save Changes"}
                </Button>
            </div>

            <div className="grid gap-8 mt-2">
                {/* General Settings */}
                <Card className="rounded-xl shadow-sm border overflow-hidden">
                    <CardHeader className="p-6 border-b bg-muted/30">
                        <CardTitle className="flex items-center gap-2.5 text-xl font-bold">
                            <Globe className="h-5 w-5 text-blue-600" />
                            General Information
                        </CardTitle>
                        <CardDescription className="text-sm">Agency details and contact info.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="siteName" className="font-semibold text-sm">Site Name</Label>
                                <Input
                                    id="siteName"
                                    value={data.siteName}
                                    onChange={(e) => setData({ ...data, siteName: e.target.value })}
                                    className="h-11 px-4 text-base rounded-md"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="supportEmail" className="font-semibold text-sm">Support Email</Label>
                                <Input
                                    id="supportEmail"
                                    type="email"
                                    value={data.supportEmail}
                                    onChange={(e) => setData({ ...data, supportEmail: e.target.value })}
                                    className="h-11 px-4 text-base rounded-md"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone" className="font-semibold text-sm flex items-center gap-2">
                                    <Phone className="h-3.5 w-3.5" /> Phone Number
                                </Label>
                                <Input
                                    id="phone"
                                    value={data.phoneNumber || ""}
                                    onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
                                    className="h-11 px-4 text-base rounded-md"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="whatsapp" className="font-semibold text-sm flex items-center gap-2">
                                    <MessageSquare className="h-3.5 w-3.5" /> WhatsApp
                                </Label>
                                <Input
                                    id="whatsapp"
                                    value={data.whatsappNumber || ""}
                                    onChange={(e) => setData({ ...data, whatsappNumber: e.target.value })}
                                    className="h-11 px-4 text-base rounded-md"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="address" className="font-semibold text-sm flex items-center gap-2">
                                <MapPin className="h-3.5 w-3.5" /> Office Address
                            </Label>
                            <Textarea
                                id="address"
                                value={data.address}
                                onChange={(e) => setData({ ...data, address: e.target.value })}
                                className="min-h-[110px] p-4 text-base leading-relaxed rounded-md"
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Email SMTP Settings */}
                <Card className="rounded-xl shadow-sm border overflow-hidden">
                    <CardHeader className="p-6 border-b bg-muted/30">
                        <CardTitle className="flex items-center gap-2.5 text-xl font-bold text-indigo-900">
                            <Mail className="h-5 w-5 text-indigo-600" />
                            SMTP Gateway
                        </CardTitle>
                        <CardDescription className="text-sm">Outgoing email server configuration.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="md:col-span-2 space-y-2">
                                <Label className="font-semibold text-sm">SMTP Host</Label>
                                <Input
                                    value={data.smtp?.host || ""}
                                    onChange={(e) => setData({ ...data, smtp: { ...data.smtp!, host: e.target.value } })}
                                    className="h-11 px-4 text-base rounded-md"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="font-semibold text-sm">Port</Label>
                                <Input
                                    type="number"
                                    value={data.smtp?.port || 587}
                                    onChange={(e) => setData({ ...data, smtp: { ...data.smtp!, port: Number(e.target.value) } })}
                                    className="h-11 px-4 text-base rounded-md"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="font-semibold text-sm">User</Label>
                                <Input
                                    value={data.smtp?.user || ""}
                                    onChange={(e) => setData({ ...data, smtp: { ...data.smtp!, user: e.target.value } })}
                                    className="h-11 px-4 text-base rounded-md"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="font-semibold text-sm">Password</Label>
                                <Input
                                    type="password"
                                    value={data.smtp?.pass || ""}
                                    onChange={(e) => setData({ ...data, smtp: { ...data.smtp!, pass: e.target.value } })}
                                    className="h-11 px-4 text-base rounded-md"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Branding */}
                <Card className="rounded-xl shadow-sm border overflow-hidden">
                    <CardHeader className="p-6 border-b bg-muted/30">
                        <CardTitle className="flex items-center gap-2.5 text-xl font-bold">
                            <Palette className="h-5 w-5 text-amber-600" />
                            Visuals
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                            <ImageUploader
                                label="Site Logo"
                                description="SVG/PNG Recommended"
                                value={data.logoUrl || ""}
                                onChange={(url) => setData({ ...data, logoUrl: url })}
                            />
                        </div>
                        <div>
                            <ImageUploader
                                label="Favicon"
                                description="Best size: 32x32px"
                                value={data.faviconUrl || ""}
                                onChange={(url) => setData({ ...data, faviconUrl: url })}
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* SEO Settings */}
                <Card className="rounded-xl shadow-sm border overflow-hidden">
                    <CardHeader className="p-6 border-b bg-muted/30">
                        <CardTitle className="flex items-center gap-2.5 text-xl font-bold text-emerald-900">
                            <ShieldCheck className="h-5 w-5 text-emerald-600" />
                            SEO Metadata
                        </CardTitle>
                        <CardDescription className="text-sm">Search engine visibility.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="seoTitle" className="font-semibold text-sm">Homepage Title</Label>
                            <Input
                                id="seoTitle"
                                value={data.homePageTitle}
                                onChange={(e) => setData({ ...data, homePageTitle: e.target.value })}
                                className="h-12 px-4 text-lg font-bold"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="metaDesc" className="font-semibold text-sm">Description</Label>
                            <Textarea
                                id="metaDesc"
                                value={data.metaDescription}
                                onChange={(e) => setData({ ...data, metaDescription: e.target.value })}
                                className="min-h-[120px] p-4 text-base leading-relaxed rounded-md shadow-none"
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
