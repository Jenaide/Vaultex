import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, CheckCircle, Clock, FileText, PenSquare } from "lucide-react";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#e1ddd2] via-[#e7dfcc] to-[#b1ab99] px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
                Organize Your Job Search with AutoVault
              </h1>
              <p className="text-xl text-muted-foreground/90">
                Track applications, set reminders, and land your dream job faster with our comprehensive job application
                management system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size={"lg"} asChild className="bg-accent text-primary hover:bg-accent/90">
                  <Link href={"/signup"}>Get Started</Link>
                </Button>
                <Button size={"lg"} variant={"default"} asChild className="text-accent border-accent hover:bg-accent/10">
                  <Link href={"/login"}>Sign In</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-accent p-6 rounded-lg shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-md">
                    <Briefcase className="text-primary" />
                    <div className="">
                      <p className="font-medium">Frontend Developer</p>
                      <p className="text-sm text-muted-foreground">TechCorp Inc.</p>
                    </div>
                    <span className="ml-auto px-2 py-1 bg-green-300 text-green-800 text-sm rounded-full">
                      Interview
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-md">
                    <Briefcase className="text-primary" />
                    <div className="">
                      <p className="font-medium">Backend Developer</p>
                      <p className="text-sm text-muted-foreground">Design Studio</p>
                    </div>
                    <span className="ml-auto px-2 py-1 bg-blue-300 text-blue-800 text-sm rounded-full">
                      Applied
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-md">
                    <Briefcase className="text-primary" />
                    <div className="">
                      <p className="font-medium">Product Owner</p>
                      <p className="text-sm text-muted-foreground">Innovate Inc.</p>
                    </div>
                    <span className="ml-auto px-2 py-1 bg-yellow-300 text-yellow-800 text-sm rounded-full">
                      Follow-up
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-4 bg-[#f7f2ef]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="text-primary"/>
              </div>
              <h3 className="text-xl font-bold mb-2">Track Application</h3>
              <p className="text-muted-foreground">
                Store all your job applications in one place with company details, job titles, and application status.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <PenSquare className="text-primary"/>
              </div>
              <h3 className="text-xl font-bold mb-2">Add Notes</h3>
              <p className="text-muted-foreground">
                Keep detailed notes for each application, including interview feedback and important contacts.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FileText className="text-primary"/>
              </div>
              <h3 className="text-xl font-bold mb-2">Resume Management</h3>
              <p className="text-muted-foreground">
                Store all your job applications in one place with company details, job titles, and application status.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-primary"/>
              </div>
              <h3 className="text-xl font-bold mb-2">Set Reminders</h3>
              <p className="text-muted-foreground">
                Never miss a follow-up with customizable reminders for interviews and application deadlines.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-primary"/>
              </div>
              <h3 className="text-xl font-bold mb-2">Application Status</h3>
              <p className="text-muted-foreground">
                Never miss a follow-up with customizable reminders for interviews and application deadlines.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-primary"/>
              </div>
              <h3 className="text-xl font-bold mb-2">Calendar Integration</h3>
              <p className="text-muted-foreground">
                Sync interviews and important dates with your calendar to stay organized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#555a54] py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to organize your job search?</h2>
          <p className="text-xl text-muted/50 mb-8">
            Join thousands of job seekers who have streamlined their application process with Job Vault.
          </p>
          <Button size={"lg"} asChild>
            <Link href={"/signup"} className="flex items-center gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-[#f7f2ef] border-t py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">AutoVault</h2>
              <p className="text-muted-foreground">Your Job Search Companion</p>
            </div>
            <div className="flex gap-8">
              <Link href={"/about"} className="text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link href={"/privacy"} className="text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link href={"/terms"} className="text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link href={"/contact"} className="text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} AutoVault. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
