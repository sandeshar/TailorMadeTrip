"use client"

import { MaterialSymbol } from "@/components/ui/material-symbol";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function DashboardHeader() {
    return (
        <header className="h-16 lg:h-20 border-b bg-white flex items-center justify-between px-4 lg:px-10 sticky top-0 z-30">
            <div className="flex items-center gap-4">
                <label
                    htmlFor="sidebar-toggle"
                    className="lg:hidden p-2 hover:bg-zinc-100 rounded-lg cursor-pointer transition-colors"
                >
                    <MaterialSymbol icon="menu" size={24} />
                </label>
                <div className="hidden sm:flex bg-zinc-100/50 rounded-xl px-4 py-1 items-center gap-3 w-64 md:w-96 border border-zinc-200/50 group focus-within:border-primary/30 transition-all">
                    <MaterialSymbol icon="search" size={20} className="text-zinc-400 group-focus-within:text-primary transition-colors" />
                    <Input
                        placeholder="Find something..."
                        className="border-none bg-transparent h-10 px-0 focus-visible:ring-0 text-sm font-medium"
                    />
                    <kbd className="hidden md:block text-[10px] font-bold bg-zinc-200/50 text-zinc-500 px-2 py-1 rounded">⌘K</kbd>
                </div>
            </div>

            <div className="flex items-center gap-2 lg:gap-4">
                <Button variant="ghost" size="icon" className="h-9 w-9 lg:h-10 lg:w-10 rounded-xl hover:bg-zinc-100">
                    <MaterialSymbol icon="notifications" size={22} className="text-zinc-500" />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 lg:h-10 lg:w-10 rounded-xl hover:bg-zinc-100 hidden sm:flex">
                    <MaterialSymbol icon="chat_bubble_outline" size={20} className="text-zinc-500" />
                </Button>
                <div className="h-4 w-px bg-zinc-200 mx-1 lg:mx-2" />
                <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-zinc-900 cursor-pointer" />
            </div>
        </header>
    );
}
