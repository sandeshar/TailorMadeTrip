"use client";

import Link from "next/link";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { loginAction } from "@/actions/auth";

export default function LoginPage() {
    const router = useRouter();
    const [state, formAction, isPending] = useActionState(loginAction, {
        success: false,
        message: "",
    });

    useEffect(() => {
        if (state.success) {
            router.push("/dashboard");
        }
    }, [state.success, router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-white p-6">
            <div className="max-w-[400px] w-full space-y-8">
                <div className="text-center">
                    <Link href="/" className="inline-block mb-8">
                        <Image
                            src="/tailormytrip.png"
                            alt="Tailor Made Trip"
                            width={180}
                            height={52}
                            className="mx-auto"
                        />
                    </Link>
                    <h2 className="text-2xl font-playfair font-bold text-slate-900 tracking-tight">
                        Administrator Login
                    </h2>
                    <p className="mt-2 text-sm text-slate-500 font-montserrat font-medium">
                        Access the travel management portal
                    </p>
                </div>

                {state.message && !state.success && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm font-medium">
                        {state.message}
                    </div>
                )}

                <form action={formAction} className="space-y-5">
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            Username / Email
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="admin@tailormytrip.com"
                            className="h-12 border-slate-200 bg-slate-50/50 focus:bg-white focus:border-primary focus:ring-primary/10 transition-all rounded-lg"
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                Password
                            </Label>
                        </div>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            required
                            placeholder="••••••••"
                            className="h-12 border-slate-200 bg-slate-50/50 focus:bg-white focus:border-primary focus:ring-primary/10 transition-all rounded-lg"
                        />
                    </div>

                    <Button 
                        disabled={isPending}
                        type="submit" 
                        className="w-full bg-primary hover:bg-primary/95 text-white h-12 font-bold text-sm uppercase tracking-widest rounded-lg transition-all shadow-md shadow-primary/10 mt-2 disabled:opacity-50"
                    >
                        {isPending ? "Authenticating..." : "Authenticate"}
                    </Button>
                </form>

                <div className="text-center">
                    <Link
                        href="/"
                        className="text-xs font-bold text-slate-400 hover:text-primary transition-colors flex items-center justify-center gap-1 group whitespace-nowrap"
                    >
                        <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to Website
                    </Link>
                </div>
            </div>
        </div>
    );
}