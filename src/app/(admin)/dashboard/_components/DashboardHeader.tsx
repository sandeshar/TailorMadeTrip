"use client"

import { MaterialSymbol } from "@/components/ui/material-symbol";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { logoutAction } from "@/actions/logout";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DashboardHeader({
    onMenuClick
}: {
    onMenuClick?: () => void;
}) {
    return (
        <header className="h-16 lg:h-16 border-b bg-white/80 backdrop-blur-md flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
            <div className="flex items-center gap-4">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onMenuClick}
                    className="lg:hidden p-2 hover:bg-zinc-100 rounded-lg cursor-pointer transition-colors"
                >
                    <MaterialSymbol icon="menu" size={24} />
                </Button>
                <div className="hidden sm:flex bg-zinc-100/50 rounded-xl px-4 py-1.5 items-center gap-3 w-64 md:w-80 border border-zinc-200/50 group focus-within:border-zinc-300 transition-all">
                    <MaterialSymbol icon="search" size={20} className="text-zinc-400 group-focus-within:text-zinc-600 transition-colors" />
                    <Input
                        placeholder="Search dashboard..."
                        className="border-none bg-transparent h-8 px-0 focus-visible:ring-0 text-sm font-medium placeholder:text-zinc-400"
                    />
                    <kbd className="hidden md:flex text-[10px] items-center gap-1 font-bold bg-white text-zinc-500 px-1.5 py-0.5 rounded border border-zinc-200">
                        <span className="text-[12px]">⌘</span>K
                    </kbd>
                </div>
            </div>

            <div className="flex items-center gap-1.5 lg:gap-3">
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl hover:bg-zinc-100 text-zinc-500">
                    <MaterialSymbol icon="notifications" size={22} />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl hover:bg-zinc-100 hidden sm:flex text-zinc-500">
                    <MaterialSymbol icon="chat_bubble_outline" size={20} />
                </Button>

                <div className="h-8 w-px bg-zinc-200 mx-2" />

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="flex items-center gap-2 hover:bg-zinc-100 p-1 pr-2 rounded-xl transition-colors">
                            <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-white text-[10px] font-black uppercase tracking-wider">
                                AD
                            </div>
                            <div className="hidden md:block text-left">
                                <p className="text-[13px] font-bold text-zinc-900 leading-none">Admin</p>
                                <p className="text-[11px] text-zinc-500 font-medium leading-none mt-1">Administrator</p>
                            </div>
                            <MaterialSymbol icon="unfold_more" size={16} className="text-zinc-400" />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56 mt-2 p-2 rounded-2xl">
                        <DropdownMenuLabel className="px-3 pt-3 pb-2">
                            <p className="text-sm font-bold">My Account</p>
                            <p className="text-xs text-zinc-500 font-medium truncate mt-0.5">admin@example.com</p>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator className="my-2" />
                        <DropdownMenuItem className="cursor-pointer rounded-lg py-2 px-3">
                            <MaterialSymbol icon="person" size={18} className="mr-3 text-zinc-500" />
                            <span className="text-[13px] font-semibold">Profile</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer rounded-lg py-2 px-3">
                            <MaterialSymbol icon="settings" size={18} className="mr-3 text-zinc-500" />
                            <span className="text-[13px] font-semibold">Settings</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="my-2" />
                        <form action={logoutAction}>
                            <DropdownMenuItem
                                asChild
                                className="cursor-pointer rounded-lg py-2 px-3 text-red-600 focus:text-red-700 focus:bg-red-50"
                            >
                                <button className="w-full flex items-center">
                                    <MaterialSymbol icon="logout" size={18} className="mr-3" />
                                    <span className="text-[13px] font-bold">Log out</span>
                                </button>
                            </DropdownMenuItem>
                        </form>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}
