"use client"

import { useState } from "react"
import { Calendar, Download, FileText, MoreHorizontal, Plus, Trash2, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DashboardHeader } from "@/components/dashboard-ui/dashboard-header"

// Mock data for resumes
const mockResumes = [
  {
    id: 1,
    name: "Software Developer Resume",
    fileName: "software_developer_resume.pdf",
    date: "2023-11-10",
    size: "245 KB",
  },
  {
    id: 2,
    name: "UX Designer Resume",
    fileName: "ux_designer_resume.pdf",
    date: "2023-10-15",
    size: "220 KB",
  },
  {
    id: 3,
    name: "Product Manager Resume",
    fileName: "product_manager_resume.pdf",
    date: "2023-09-20",
    size: "235 KB",
  },
]

export default function ResumesPage() {
  const [resumes, setResumes] = useState(mockResumes)
  const [searchQuery, setSearchQuery] = useState("")

  // Filter resumes based on search query
  const filteredResumes = resumes.filter((resume) => resume.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="min-h-screen bg-muted/40">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Resumes</h1>
            <p className="text-muted-foreground">Manage your resume versions</p>
          </div>
          <Button asChild>
            <label htmlFor="resume-upload" className="cursor-pointer">
              <Upload className="mr-2 h-4 w-4" /> Upload Resume
              <input id="resume-upload" type="file" className="hidden" />
            </label>
          </Button>
        </div>

        <div className="grid gap-6">
          {/* Search */}
          <div className="relative max-w-md">
            <Input
              placeholder="Search resumes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Resumes Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredResumes.length > 0 ? (
              filteredResumes.map((resume) => (
                <Card key={resume.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{resume.name}</h3>
                          <p className="text-sm text-muted-foreground">{resume.fileName}</p>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" />
                            <span>Download</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Plus className="mr-2 h-4 w-4" />
                            <span>Rename</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            <span>Delete</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(resume.date).toLocaleDateString()}</span>
                      </div>
                      <div>{resume.size}</div>
                    </div>
                    <div className="flex gap-3 ">
                      <Button variant="outline" size="sm" className="w-full">
                        Preview
                      </Button>
                      <Button size="sm" className="w-full">
                        Use
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <FileText className="h-12 w-12 mx-auto text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">No resumes found</h3>
                <p className="text-muted-foreground">
                  {searchQuery ? `No results for "${searchQuery}"` : "Upload your first resume to get started"}
                </p>
                <Button className="mt-4" asChild>
                  <label htmlFor="resume-upload-empty" className="cursor-pointer">
                    <Upload className="mr-2 h-4 w-4" /> Upload Resume
                    <input id="resume-upload-empty" type="file" className="hidden" />
                  </label>
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}