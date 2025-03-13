"use client";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Bell, Briefcase, ChevronDown, LogOut, Menu, Settings, User } from "lucide-react";
import Link from "next/link";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";


export function DashboardHeader() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <header className="bg-background">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo and Mobile Menu */}
                <div className="flex items-center gap-4">
                    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button className="md:hidden" size={"icon"} variant={"ghost"}>
                                <Menu className="w-5 h-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                            <nav className="flex flex-col gap-4 mt-8">
                                <Link 
                                    href={"/dashboard"}
                                    className="px-4 py-2 rounded-md hover:bg-muted"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Dashboard
                                </Link>
                                <Link 
                                    href={"/dashboard/applications"}
                                    className="px-4 py-2 rounded-md hover:bg-muted"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Applications
                                </Link>
                                <Link 
                                    href={"/dashboard/reminders"}
                                    className="px-4 py-2 rounded-md hover:bg-muted"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Reminders
                                </Link>
                                <Link 
                                    href={"/dashboard/resumes"}
                                    className="px-4 py-2 rounded-md hover:bg-muted"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Resumes
                                </Link>
                                <Link 
                                    href={"/dashboard/settings"}
                                    className="px-4 py-2 rounded-md hover:bg-muted"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Settings
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>

                    <Link href={"/dashboard"} className="flex items-center gap-2">
                    <Briefcase className="h-6 w-6 text-primary" />
                        <span className="font-bold text-xl">AutoVault</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link href={"/dashboard"} className="text-sm font-medium hover:text-primary">
                        Dashboard
                    </Link>
                    <Link href={"/dashboard/applications"} className="text-sm font-medium hover:text-primary">
                        Applications
                    </Link>
                    <Link href={"/dashboard/reminders"} className="text-sm font-medium hover:text-primary">
                        Reminders
                    </Link>
                    <Link href={"/dashboard/resumes"} className="text-sm font-medium hover:text-primary">
                        Resumes
                    </Link>
                </nav>

                {/* User Menu */}
                <div className="flex items-center gap-2">
                    <Button variant={"ghost"} size={"icon"} className="relative cursor-pointer">
                        <Bell className="w-5 h-5"/>
                        <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#3b5f87]"></span>
                        <span className="sr-only">Notifications</span>
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant={"ghost"} className="flex items-center gap-2">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                                        <AvatarFallback>AV</AvatarFallback>
                                    </Avatar>
                                    <span className="hidden sm:inline-block">John Doe</span>
                                <ChevronDown className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <User className="mr-2 h-4 w-4" />
                                    <Link href={"/dashboard/profile"}>Profile</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Settings className="mr-2 h-4 w-4" />
                                    <Link href={"/dashboard/settings"}>Settings</Link>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <LogOut className="mr-2 h-4 w-4" />
                                <Link href={"/"}>Log out</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}