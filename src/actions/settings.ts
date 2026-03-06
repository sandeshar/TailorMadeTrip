"use server";

import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";

const SETTINGS_FILE = path.join(process.cwd(), "public", "settings.json");

export interface SiteSettings {
    siteName: string;
    supportEmail: string;
    address: string;
    homePageTitle: string;
    metaDescription: string;
    logoUrl?: string;
    faviconUrl?: string;
    facebookUrl?: string;
    twitterUrl?: string;
    instagramUrl?: string;
    linkedinUrl?: string;
    youtubeUrl?: string;
    whatsappNumber?: string;
    phoneNumber?: string;
    smtp?: {
        host: string;
        port: number;
        user: string;
        pass: string;
        from: string;
        fromName?: string;
    };
}

const defaultSettings: SiteSettings = {
    siteName: "ChitraBazaar Travel",
    supportEmail: "support@chitrabazaar.com",
    address: "123 Travel Avenue, Kathmandu, Nepal",
    homePageTitle: "Best Adventure Travel Agency in Nepal | ChitraBazaar",
    metaDescription: "Explore the world with ChitraBazaar. We offer luxury trekking, heritage tours, and local experiences.",
    linkedinUrl: "",
    youtubeUrl: "",
    whatsappNumber: "",
    smtp: {
        host: "",
        port: 587,
        user: "",
        pass: "",
        from: "",
        fromName: "ChitraBazaar Travel"
    }
};

export async function getSettings(): Promise<SiteSettings> {
    try {
        const data = await fs.readFile(SETTINGS_FILE, "utf-8");
        const settings = JSON.parse(data);
        return {
            ...defaultSettings,
            ...settings,
            smtp: { ...defaultSettings.smtp, ...(settings.smtp || {}) }
        };
    } catch (error) {
        // Return defaults if file doesn't exist
        return defaultSettings;
    }
}

export async function updateSettings(settings: SiteSettings) {
    try {
        await fs.writeFile(SETTINGS_FILE, JSON.stringify(settings, null, 2), "utf-8");
        revalidatePath("/dashboard/setting");
        revalidatePath("/");
        return { success: true };
    } catch (error: any) {
        console.error("Error saving settings:", error);
        return { success: false, error: error.message };
    }
}
