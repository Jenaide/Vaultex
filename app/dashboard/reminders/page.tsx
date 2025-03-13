"use client"

import { useState } from "react"
import { Bell, Calendar, Check, Clock, MoreHorizontal, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea";
import { DashboardHeader } from "@/components/dashboard-ui/dashboard-header"

// Mock data for reminders
const mockReminders = [
  {
    id: 1,
    title: "Follow-up with Design Studio",
    description: "Send a follow-up email about the UX Designer position",
    date: "2023-12-10T10:00:00",
    company: "Design Studio",
    position: "UX Designer",
    completed: false,
  },
  {
    id: 2,
    title: "Technical Interview with TechCorp",
    description: "Virtual interview with the engineering team",
    date: "2023-12-05T14:00:00",
    company: "TechCorp Inc.",
    position: "Frontend Developer",
    completed: false,
  },
  {
    id: 3,
    title: "Submit portfolio to Global Systems",
    description: "Send updated portfolio with recent projects",
    date: "2023-12-18T23:59:00",
    company: "Global Systems",
    position: "Backend Developer",
    completed: false,
  },
  {
    id: 4,
    title: "Prepare for behavioral interview",
    description: "Review common behavioral questions and prepare answers",
    date: "2023-12-12T09:00:00",
    company: "Innovate Inc.",
    position: "Product Manager",
    completed: false,
  },
]

export default function RemindersPage() {
  const [reminders, setReminders] = useState(mockReminders)
  const [searchQuery, setSearchQuery] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newReminder, setNewReminder] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    company: "",
    position: "",
  })

  // Filter reminders based on search query
  const filteredReminders = reminders.filter(
    (reminder) =>
      reminder.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reminder.company.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Sort reminders by date (upcoming first)
  const sortedReminders = [...filteredReminders].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  const handleAddReminder = () => {
    const combinedDateTime = `${newReminder.date}T${newReminder.time}:00`

    const reminderToAdd = {
      id: reminders.length + 1,
      title: newReminder.title,
      description: newReminder.description,
      date: combinedDateTime,
      company: newReminder.company,
      position: newReminder.position,
      completed: false,
    }

    setReminders([...reminders, reminderToAdd])
    setIsDialogOpen(false)
    setNewReminder({
      title: "",
      description: "",
      date: "",
      time: "",
      company: "",
      position: "",
    })
  }

  const toggleReminderCompletion = (id: number) => {
    setReminders(
      reminders.map((reminder) => (reminder.id === id ? { ...reminder, completed: !reminder.completed } : reminder)),
    )
  }

  const deleteReminder = (id: number) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id))
  }

  return (
    <div className="min-h-screen bg-muted/40">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Reminders</h1>
            <p className="text-muted-foreground">Stay on top of your job search with reminders</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Reminder
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Reminder</DialogTitle>
                <DialogDescription>
                  Create a reminder for follow-ups, interviews, or other important tasks.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="e.g. Follow-up with company"
                    value={newReminder.title}
                    onChange={(e) => setNewReminder({ ...newReminder, title: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Add details about this reminder"
                    value={newReminder.description}
                    onChange={(e) => setNewReminder({ ...newReminder, description: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={newReminder.date}
                      onChange={(e) => setNewReminder({ ...newReminder, date: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="time">Time</Label>
                    <Input
                      id="time"
                      type="time"
                      value={newReminder.time}
                      onChange={(e) => setNewReminder({ ...newReminder, time: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input
                    id="company"
                    placeholder="Company name"
                    value={newReminder.company}
                    onChange={(e) => setNewReminder({ ...newReminder, company: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="position">Position (Optional)</Label>
                  <Input
                    id="position"
                    placeholder="Job position"
                    value={newReminder.position}
                    onChange={(e) => setNewReminder({ ...newReminder, position: e.target.value })}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={handleAddReminder}>
                  Add Reminder
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-6">
          {/* Search */}
          <div className="relative max-w-md">
            <Input
              placeholder="Search reminders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Reminders List */}
          <div className="grid gap-4">
            {sortedReminders.length > 0 ? (
              sortedReminders.map((reminder) => (
                <Card key={reminder.id} className={reminder.completed ? "opacity-60" : ""}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className={`rounded-full h-10 w-10 ${reminder.completed ? "bg-primary/10" : ""}`}
                        onClick={() => toggleReminderCompletion(reminder.id)}
                      >
                        {reminder.completed ? <Check className="h-5 w-5 text-primary" /> : <Bell className="h-5 w-5" />}
                      </Button>
                      <div className="flex-grow">
                        <div className="flex justify-between">
                          <div>
                            <h3 className={`font-medium text-lg ${reminder.completed ? "line-through" : ""}`}>
                              {reminder.title}
                            </h3>
                            {(reminder.company || reminder.position) && (
                              <p className="text-sm text-muted-foreground">
                                {reminder.company} {reminder.position && `• ${reminder.position}`}
                              </p>
                            )}
                          </div>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => toggleReminderCompletion(reminder.id)}>
                                <Check className="mr-2 h-4 w-4" />
                                <span>{reminder.completed ? "Mark as incomplete" : "Mark as complete"}</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600" onClick={() => deleteReminder(reminder.id)}>
                                <Trash2 className="mr-2 h-4 w-4" />
                                <span>Delete</span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                        <p className="mt-2">{reminder.description}</p>
                        <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(reminder.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>
                              {new Date(reminder.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-12">
                <Bell className="h-12 w-12 mx-auto text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">No reminders found</h3>
                <p className="text-muted-foreground">
                  {searchQuery ? `No results for "${searchQuery}"` : "Create your first reminder to stay on track"}
                </p>
                <Button className="mt-4" onClick={() => setIsDialogOpen(true)}>
                  <Plus className="mr-2 h-4 w-4" /> Add Reminder
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}