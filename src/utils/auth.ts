"use server";
import { cookies } from "next/headers";
import { verifyToken } from "@/utils/jwt";

export interface UserSession {
    id: string;
    email: string;
    name: string;
    role: "admin" | "staff" | "editor";
    permissions?: string[];
}

export async function getSession(): Promise<UserSession | null> {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    if (!token) return null;
    
    const payload = await verifyToken(token);
    if (!payload) return null;

    // Map the payload from loginAction/lib/jwt to UserSession
    return {
        id: (payload as any).userId || "1",
        email: payload.email,
        name: (payload as any).name || payload.email.split('@')[0],
        role: (payload.role as any) || "admin",
        permissions: (payload as any).permissions || ["cms", "media", "contacts", "users", "settings", "packages", "blog"]
    };
}

export async function hasPermission(permission: string) {
    const session = await getSession();
    if (!session) return false;
    if (session.role === "admin") return true;
    return session.permissions?.includes(permission) || false;
}

export async function isAdmin() {
    const session = await getSession();
    return session?.role === "admin";
}

export async function isEditor() {
    const session = await getSession();
    return session?.role === "admin" || session?.role === "editor";
}

export async function isStaff() {
    const session = await getSession();
    return !!session;
}

