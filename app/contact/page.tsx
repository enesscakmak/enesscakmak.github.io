"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sidebar } from "@/components/sidebar";
import { Github, Linkedin } from "lucide-react";
import { Turnstile } from "@/components/turnstile";

export default function ContactPage() {
  const [isVerified, setIsVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/enesscakmak",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/enesscakmak",
      icon: Linkedin,
    },
  ];

  const handleVerify = async (token: string) => {
    try {
      const response = await fetch("/api/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();
      if (data.success) {
        setIsVerified(true);
        setError(null);
      } else {
        setError("Verification failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred during verification.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isVerified) {
      setError("Please complete the verification first.");
      return;
    }
    setIsSubmitting(true);
    // Handle your form submission here
    // ...
    setIsSubmitting(false);
  };

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <div className="fixed inset-0 -z-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <Sidebar />
      <main className="flex-1 relative z-10">
        <div className="container px-8 py-8 md:py-12">
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-8">
              <div>
                <h1 className="text-2xl font-bold tracking-tight md:text-3xl mb-4 text-zinc-900 dark:text-zinc-50">Contact</h1>
                <p className="text-base text-zinc-700 dark:text-zinc-400 mb-6">
                  I am looking for internship opportunities especially in the front end field. I'm always interested in hearing about new projects and opportunities.
                </p>
              </div>

              <Card className="bg-white/80 dark:bg-zinc-800/50 p-6 border-zinc-200 dark:border-zinc-700
                transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Your existing form fields here */}
                  
                  <div className="space-y-4">
                    <Turnstile onVerify={handleVerify} />
                    
                    {error && (
                      <p className="text-sm text-red-500">{error}</p>
                    )}
                    
                    <Button 
                      type="submit"
                      disabled={!isVerified || isSubmitting}
                      className="bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 
                        text-zinc-50 dark:text-zinc-900 transition-transform duration-300 hover:scale-110"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </Card>

              {/* Rest of your existing contact page content */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 