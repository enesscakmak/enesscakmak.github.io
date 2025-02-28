"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sidebar } from "@/components/sidebar";
import { Github, Linkedin, Mail } from "lucide-react";
import { Turnstile } from "@/components/turnstile";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isVerified, setIsVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleVerify = useCallback(async (token: string) => {
    try {
      setError(null);
      
      if (!token) {
        setIsVerified(false);
        return;
      }

      const response = await fetch("/api/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();
      
      if (response.ok && data.success) {
        setIsVerified(true);
      } else {
        setIsVerified(false);
        setError(data.error || "Verification failed. Please try again.");
      }
    } catch (err) {
      setIsVerified(false);
      setError("An error occurred during verification.");
      console.error("Verification error:", err);
    }
  }, []);

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!formData.message.trim()) {
      setError("Message is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!isVerified) {
      setError("Please complete the verification first.");
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Here you would implement your form submission logic
      // For example:
      // const response = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });
      
      // Simulated success
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess(true);
      setFormData(initialFormData);
      setIsVerified(false);
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
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
                {success ? (
                  <div className="text-center py-8">
                    <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                    <Button
                      onClick={() => setSuccess(false)}
                      className="bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 
                        text-zinc-50 dark:text-zinc-900"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full min-h-[150px]"
                          placeholder="Your message..."
                        />
                      </div>

                      <div className="pt-4">
                        <Turnstile 
                          onVerify={handleVerify}
                          onError={(error) => setError(error.message)}
                        />
                      </div>
                      
                      {error && (
                        <p className="text-sm text-red-500 bg-red-50 dark:bg-red-900/10 p-3 rounded-md">
                          {error}
                        </p>
                      )}
                      
                      <Button 
                        type="submit"
                        disabled={!isVerified || isSubmitting}
                        className="w-full bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 
                          text-zinc-50 dark:text-zinc-900 transition-transform duration-300 hover:scale-105"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </div>
                  </form>
                )}
              </Card>

              <Card className="bg-white/80 dark:bg-zinc-800/50 p-6 border-zinc-200 dark:border-zinc-700
                transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Other Ways to Connect</h2>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((item) => (
                      <Button 
                        key={item.name}
                        variant="outline"
                        asChild
                        className="border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300
                          hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-transform duration-300 hover:scale-110"
                      >
                        <a 
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <item.icon className="h-4 w-4" />
                          {item.name}
                        </a>
                      </Button>
                    ))}
                    <Button
                      variant="outline"
                      asChild
                      className="border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300
                        hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-transform duration-300 hover:scale-110"
                    >
                      <a
                        href="mailto:cakmakkeness@gmail.com"
                        className="flex items-center gap-2"
                      >
                        <Mail className="h-4 w-4" />
                        Email Directly
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 