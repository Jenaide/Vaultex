"use client";

import { Briefcase, Calendar, ChevronDown, Plus, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "../ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Image from 'next/image';


// Mock data for job applications
const mockApplications = [
    {
      id: 1,
      company: "TechCorp Inc.",
      position: "Frontend Developer",
      location: "San Francisco, CA",
      appliedDate: "2023-11-15",
      status: "Applied",
      statusColor: "blue",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      company: "Design Studio",
      position: "UX Designer",
      location: "Remote",
      appliedDate: "2023-11-10",
      status: "Interview",
      statusColor: "green",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      company: "Innovate Inc.",
      position: "Product Manager",
      location: "New York, NY",
      appliedDate: "2023-11-05",
      status: "Rejected",
      statusColor: "red",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      company: "Global Systems",
      position: "Backend Developer",
      location: "Chicago, IL",
      appliedDate: "2023-11-01",
      status: "Offer",
      statusColor: "purple",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      company: "StartupXYZ",
      position: "Full Stack Developer",
      location: "Austin, TX",
      appliedDate: "2023-10-28",
      status: "Applied",
      statusColor: "blue",
      logo: "/placeholder.svg?height=40&width=40",
    },
  ]
  
  // Status badge color mapping
  const statusColors = {
    Applied: "bg-blue-100 text-blue-800",
    Interview: "bg-green-100 text-green-800",
    Rejected: "bg-red-100 text-red-800",
    Offer: "bg-purple-100 text-purple-800",
    "Follow-up": "bg-yellow-100 text-yellow-800",
  }

export function SearchInputField() {
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search companies or positions..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
    )
}

export function FilteredApps() {
    const [applications] = useState(mockApplications);
    const [searchQuery] = useState("");

    // Filter applications based on search query
    const filteredApplications = applications.filter(
        (app) =>
        app.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.position.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    return (
        <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-5 w-full max-w-md">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="applied">Applied</TabsTrigger>
            <TabsTrigger value="interview">Interview</TabsTrigger>
            <TabsTrigger value="offer">Offer</TabsTrigger>
            <TabsTrigger value="rejected">Rejected</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
            {/* Applications List */}
            <div className="grid gap-4">
                {filteredApplications.length > 0 ? (
                filteredApplications.map((app) => (
                    <Link href={`/dashboard/applications/${app.id}`} key={app.id}>
                    <Card className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                            <div className="h-10 w-10 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                            <Image
                                src={app.logo || "/placeholder.svg"}
                                alt={`${app.company} logo`}
                                className="h-full w-full object-cover"
                                width={200}
                                height={200}
                            />
                            </div>
                            <div className="flex-grow">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                <h3 className="font-semibold text-lg">{app.position}</h3>
                                <Badge
                                variant="outline"
                                className={`${statusColors[app.status as keyof typeof statusColors]} border-0`}
                                >
                                {app.status}
                                </Badge>
                            </div>
                            <p className="text-muted-foreground">{app.company}</p>
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                <Briefcase className="h-4 w-4" />
                                <span>{app.location}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>Applied: {new Date(app.appliedDate).toLocaleDateString()}</span>
                                </div>
                            </div>
                            </div>
                            <ChevronDown className="h-5 w-5 text-muted-foreground self-center hidden sm:block" />
                        </div>
                        </CardContent>
                    </Card>
                    </Link>
                ))
                ) : (
                <div className="text-center py-12">
                    <Briefcase className="h-12 w-12 mx-auto text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">No applications found</h3>
                    <p className="text-muted-foreground">
                    {searchQuery ? `No results for "${searchQuery}"` : "Start by adding your first job application"}
                    </p>
                    <Button className="mt-4" asChild>
                    <Link href="/dashboard/applications/new">
                        <Plus className="mr-2 h-4 w-4" /> Add Application
                    </Link>
                    </Button>
                </div>
                )}
            </div>
            </TabsContent>
            {/* Other tab contents would be similar but filtered by status */}
            <TabsContent value="applied" className="mt-6">
            {/* Applied applications */}
            </TabsContent>
            <TabsContent value="interview" className="mt-6">
            {/* Interview applications */}
            </TabsContent>
            <TabsContent value="offer" className="mt-6">
            {/* Offer applications */}
            </TabsContent>
            <TabsContent value="rejected" className="mt-6">
            {/* Rejected applications */}
            </TabsContent>
        </Tabs>
    )
}