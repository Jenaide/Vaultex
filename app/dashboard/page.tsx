import { DashboardHeader } from "@/components/dashboard-ui/dashboard-header";
import { FilteredApps, SearchInputField } from "@/components/dashboard-ui/SearchInput";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Clock, Filter, Plus, SlidersHorizontal } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-muted/40">
            <DashboardHeader />

            <main className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold">Job Applications</h1>
                        <p className="text-muted-foreground">Track and manage your job applications</p>
                    </div>
                    <Button asChild className="bg-[#3b5f87]">
                        <Link href={"/dashboard/applications/new"}>
                            <Plus className="mr-2 h-4 w-4"/> Add Application
                        </Link>
                    </Button>
                </div>

                <div className="grid gap-6">
                    {/* Filters and Search */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <SearchInputField />
                        <div className="flex gap-2">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="flex gap-2">
                                    <Filter className="h-4 w-4" /> Filter
                                </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-[200px]">
                                <DropdownMenuItem>All Applications</DropdownMenuItem>
                                <DropdownMenuItem>Applied</DropdownMenuItem>
                                <DropdownMenuItem>Interview</DropdownMenuItem>
                                <DropdownMenuItem>Offer</DropdownMenuItem>
                                <DropdownMenuItem>Rejected</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <Button variant="outline" className="flex gap-2">
                                <SlidersHorizontal className="h-4 w-4" /> Sort
                            </Button>
                        </div>
                    </div>

                    {/* Tabs */}
                    <FilteredApps />

                    {/* Upcoming Reminders Section */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold mb-4">Upcoming Reminders</h2>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardContent className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-yellow-200 flex items-center justify-center">
                                            <Clock className="h-5 w-5 text-yellow-600" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Follow-up with Design Studio</p>
                                            <p className="text-sm text-muted-foreground">Tomorrow @ 10:00 AM</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-green-200 flex items-center justify-center">
                                            <Clock className="h-5 w-5 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Interview with TechCorp Inc.</p>
                                            <p className="text-sm text-muted-foreground">March 29, 2025 @ 11:00 AM</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-sky-200 flex items-center justify-center">
                                            <Clock className="h-5 w-5 text-sky-600" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Submit portfolio to Global Systems</p>
                                            <p className="text-sm text-muted-foreground">March 17, 2025 @ 09:00 AM</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}