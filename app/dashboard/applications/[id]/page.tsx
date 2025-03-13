"use client";
import { DashboardHeader } from "@/components/dashboard-ui/dashboard-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Calendar, Clock, Edit, FileText, Globe, MapPin, MoreHorizontal, PenSquare, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
//import { useParams } from "next/navigation";
import { useState } from "react";

// Mock data for a single job application
const mockApplication = {
    id: 1,
    company: "TechCorp Inc.",
    position: "Frontend Developer",
    location: "San Francisco, CA",
    appliedDate: "2023-11-15",
    status: "Interview",
    statusColor: "green",
    logo: "/placeholder.svg?height=64&width=64",
    description:
      "TechCorp Inc. is looking for a Frontend Developer to join our team. The ideal candidate will have experience with React, TypeScript, and Next.js.",
    salary: "$120,000 - $150,000",
    jobType: "Full-time",
    website: "https://techcorp.example.com",
    contactName: "Jane Smith",
    contactEmail: "jane.smith@techcorp.example.com",
    notes: [
      {
        id: 1,
        date: "2023-11-15",
        content: "Applied through the company website. Uploaded resume and cover letter.",
      },
      {
        id: 2,
        date: "2023-11-20",
        content: "Received email for initial phone screening. Scheduled for Nov 25.",
      },
      {
        id: 3,
        date: "2023-11-25",
        content: "Completed phone screening with HR. Went well, discussed experience and salary expectations.",
      },
    ],
    reminders: [
      {
        id: 1,
        date: "2023-12-05T14:00:00",
        title: "Technical Interview",
        description: "Virtual interview with the engineering team",
      },
      {
        id: 2,
        date: "2023-12-10T10:00:00",
        title: "Follow-up Email",
        description: "Send a follow-up email if no response by this date",
      },
    ],
    documents: [
      {
        id: 1,
        name: "Resume - Frontend Developer.pdf",
        date: "2023-11-15",
        size: "245 KB",
      },
      {
        id: 2,
        name: "Cover Letter - TechCorp.pdf",
        date: "2023-11-15",
        size: "120 KB",
      },
    ],
  }

  // Status badge color mapping
const statusColors = {
    Applied: "bg-blue-100 text-blue-800",
    Interview: "bg-green-100 text-green-800",
    Rejected: "bg-red-100 text-red-800",
    Offer: "bg-purple-100 text-purple-800",
    "Follow-up": "bg-yellow-100 text-yellow-800",
  }
export default function ApplicationDetailPage() {

    //const params = useParams()
    const [application, setApplication] = useState(mockApplication)
    const [newNote, setNewNote] = useState("")

    // In a real app, you would fetch the application data based on the ID
    // const { id } = params
    // useEffect(() => { fetch application data }, [id])

    const handleAddNote = () => {
        if (newNote.trim()) {
        const newNoteObj = {
            id: application.notes.length + 1,
            date: new Date().toISOString().split("T")[0],
            content: newNote,
        }
        setApplication({
            ...application,
            notes: [newNoteObj, ...application.notes],
        })
        setNewNote("")
        }
    }
    return (
        <div className="min-h-screen bg-muted/40">
            <DashboardHeader />

            <main className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div className="flex items-center gap-2">
                        <Button variant={"ghost"} size={"icon"} asChild>
                            <Link href={"/dashboard"}>
                                <ArrowLeft className="h-5 w-5" />
                            </Link>
                        </Button>
                        <h1 className="text-2xl md:text-3xl font-bold">Application Details</h1>
                    </div>
                    <div className="flex gap-2">
                        <Button variant={"outline"} className="flex gap-2 cursor-pointer">
                            <Edit className="w-4 h-4" /> Edit
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="cursor-pointer">
                                    <MoreHorizontal className="h-5 w-5" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem className="text-red-600">
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    <span>Delete Application</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Main Content - 2/3 width on large screens */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Application Header */}
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex flex-col md:flex-row gap-6">
                                <div className="h-16 w-16 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                                    <Image
                                    src={application.logo || "/placeholder.svg"}
                                    alt={`${application.company} logo`}
                                    className="h-full w-full object-cover"
                                    width={200}
                                    height={200}
                                    />
                                </div>
                                <div className="flex-grow">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                    <h2 className="font-bold text-2xl">{application.position}</h2>
                                    <Badge
                                        variant="outline"
                                        className={`${statusColors[application.status as keyof typeof statusColors]} border-0`}
                                    >
                                        {application.status}
                                    </Badge>
                                    </div>
                                    <p className="text-lg text-muted-foreground">{application.company}</p>
                                    <div className="flex flex-col sm:flex-row gap-4 mt-3 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                        <MapPin className="h-4 w-4" />
                                        <span>{application.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4" />
                                        <span>Applied: {new Date(application.appliedDate).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Globe className="h-4 w-4" />
                                        <a
                                        href={application.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:underline"
                                        >
                                        Company Website
                                        </a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Tabs for Notes, Documents, etc. */}
                        <Tabs defaultValue="notes" className="w-full">
                            <TabsList className="grid grid-cols-3 w-full max-w-md">
                                <TabsTrigger value="notes">Notes</TabsTrigger>
                                <TabsTrigger value="documents">Documents</TabsTrigger>
                                <TabsTrigger value="details">Job Details</TabsTrigger>
                            </TabsList>

                            {/* Notes Tab */}
                            <TabsContent value="notes" className="mt-6 space-y-4">
                                <Card>
                                <CardContent className="p-4">
                                    <Textarea
                                        placeholder="Add a note about this application..."
                                        className="min-h-[100px]"
                                        value={newNote}
                                        onChange={(e) => setNewNote(e.target.value)}
                                    />
                                    <div className="flex justify-end mt-2">
                                        <Button onClick={handleAddNote}>Add Note</Button>
                                    </div>
                                </CardContent>
                                </Card>

                                {application.notes.map((note) => (
                                <Card key={note.id}>
                                    <CardContent className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-sm font-medium">{new Date(note.date).toLocaleDateString()}</span>
                                        <Button variant="ghost" size="icon">
                                            <PenSquare className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <p className="text-sm">{note.content}</p>
                                    </CardContent>
                                </Card>
                                ))}
                            </TabsContent>

                            {/* Documents Tab */}
                            <TabsContent value="documents" className="mt-6 space-y-4">
                                <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-medium">Uploaded Documents</h3>
                                <Button className="flex gap-2">
                                    <Plus className="h-4 w-4" /> Upload Document
                                </Button>
                                </div>

                                {application.documents.map((doc) => (
                                <Card key={doc.id}>
                                    <CardContent className="p-4 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <FileText className="h-8 w-8 text-primary" />
                                        <div>
                                        <p className="font-medium">{doc.name}</p>
                                        <p className="text-sm text-muted-foreground">
                                            Uploaded on {new Date(doc.date).toLocaleDateString()} • {doc.size}
                                        </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button variant="outline" size="sm">
                                        View
                                        </Button>
                                        <Button variant="outline" size="sm">
                                        Download
                                        </Button>
                                    </div>
                                    </CardContent>
                                </Card>
                                ))}
                            </TabsContent>

                            {/* Job Details Tab */}
                            <TabsContent value="details" className="mt-6">
                                <Card>
                                <CardContent className="p-6 space-y-4">
                                    <div>
                                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Job Description</h3>
                                    <p>{application.description}</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <h3 className="text-sm font-medium text-muted-foreground mb-1">Salary Range</h3>
                                        <p>{application.salary}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-muted-foreground mb-1">Job Type</h3>
                                        <p>{application.jobType}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-muted-foreground mb-1">Contact Name</h3>
                                        <p>{application.contactName}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-muted-foreground mb-1">Contact Email</h3>
                                        <p>{application.contactEmail}</p>
                                    </div>
                                    </div>
                                </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Sidebar - 1/3 width on large screens */}
                    <div className="space-y-6">
                        {/* Status Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Application Status</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium">Current Status</span>
                                    <Badge
                                    variant="outline"
                                    className={`${statusColors[application.status as keyof typeof statusColors]} border-0`}
                                    >
                                    {application.status}
                                    </Badge>
                                </div>
                                <Button className="w-full">Update Status</Button>
                                </div>
                            </CardContent>
                        </Card>

                         {/* Reminders Card */}
                         <Card>
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle>Reminders</CardTitle>
                                <Button variant="ghost" size="sm" className="h-8 gap-1">
                                <Plus className="h-4 w-4" /> Add
                                </Button>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                {application.reminders.map((reminder) => (
                                    <div key={reminder.id} className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Clock className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium">{reminder.title}</p>
                                        <p className="text-sm text-muted-foreground">
                                        {new Date(reminder.date).toLocaleDateString()} at{" "}
                                        {new Date(reminder.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                                        </p>
                                        <p className="text-sm mt-1">{reminder.description}</p>
                                    </div>
                                    </div>
                                ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Timeline Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Application Timeline</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-0 before:h-full before:w-0.5 before:bg-muted">
                                    <div className="relative">
                                        <div className="absolute left-[-1.620rem] h-4 w-4 rounded-full bg-primary"></div>
                                        <div>
                                        <p className="font-medium">Applied</p>
                                        <p className="text-sm text-muted-foreground">
                                            {new Date(application.appliedDate).toLocaleDateString()}
                                        </p>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute left-[-1.620rem] h-4 w-4 rounded-full bg-primary"></div>
                                        <div>
                                            <p className="font-medium">Phone Screening</p>
                                            <p className="text-sm text-muted-foreground">{new Date("2023-11-25").toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute left-[-1.620rem] h-4 w-4 rounded-full bg-primary/40"></div>
                                        <div>
                                            <p className="font-medium">Technical Interview</p>
                                            <p className="text-sm text-muted-foreground">{new Date("2023-12-05").toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}