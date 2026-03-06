"use server";
import { SignJWT, jwtVerify } from "jose";

const secret = process.env.JWT_SECRET || "fallback_secret_key_at_least_32_chars_long";
const key = new TextEncoder().encode(secret);

export interface JWTPayload {
    userId: string;
    email: string;
    role: string;
    [key: string]: any;
}

export async function signToken(payload: JWTPayload) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256", typ: "JWT" })
        .setIssuedAt()
        .setExpirationTime("7d")
        .sign(key);
}

export async function verifyToken(token: string): Promise<JWTPayload | null> {
    try {
        if (!token || typeof token !== "string" || token.split(".").length !== 3) {
            return null;
        }
        const { payload } = await jwtVerify(token, key, {
            algorithms: ["HS256"],
        });
        return payload as JWTPayload;
    } catch (error) {
        return null;
    }
}

// Backward compatibility for encrypt/decrypt names if used elsewhere
export const encrypt = signToken;
export const decrypt = verifyToken;

