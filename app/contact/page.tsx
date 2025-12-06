"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { Toaster } from "@/components/ui/toaster";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "@/components/ui/use-toast";
import { useEffect, useRef } from "react";

// Define the form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  message: z.string().optional(),
  turnstile: z.string().min(1, { message: "Please complete the verification." })
});

// TypeScript declaration for Turnstile
declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          "error-callback"?: () => void;
          "expired-callback"?: () => void;
        }
      ) => string;
      remove: (widgetId: string) => void;
      reset: (widgetId: string) => void;
    };
  }
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      turnstile: "",
    },
  });

  // Load Cloudflare Turnstile script and initialize widget
  useEffect(() => {
    let widgetId: string | null = null;
    
    const loadTurnstile = () => {
      if (typeof window !== "undefined" && window.turnstile && turnstileRef.current) {
        widgetId = window.turnstile.render(turnstileRef.current, {
          // Get your free site key from: https://dash.cloudflare.com/?to=/:account/turnstile
          sitekey: "0x4AAAAAACFHSYWFl5BfNm3B", // Cloudflare Turnstile test site key - replace with your production key
          callback: (token: string) => {
            setTurnstileToken(token);
            form.setValue('turnstile', token);
          },
          "error-callback": () => {
            setTurnstileToken(null);
            form.setValue('turnstile', '');
          },
          "expired-callback": () => {
            setTurnstileToken(null);
            form.setValue('turnstile', '');
          },
        });
        widgetIdRef.current = widgetId;
      }
    };

    // Check if script already exists
    const existingScript = document.querySelector('script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]');
    
    if (existingScript) {
      // Script already loaded, initialize immediately
      if (window.turnstile) {
        loadTurnstile();
      } else {
        // Wait for turnstile to be available
        const checkInterval = setInterval(() => {
          if (window.turnstile) {
            loadTurnstile();
            clearInterval(checkInterval);
          }
        }, 100);
        return () => clearInterval(checkInterval);
      }
    } else {
      // Load the script
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        loadTurnstile();
      };
      document.body.appendChild(script);
    }

    return () => {
      if (window.turnstile && widgetId) {
        window.turnstile.remove(widgetId);
      }
    };
  }, [form]);

  // Handle form submission using FormSubmit.co (free, no reCAPTCHA required)
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setIsSuccess(false);
    
    try {
      // FormSubmit.co is completely free and has built-in spam protection
      // Replace info@suubee.com with your actual email address
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("message", values.message || "No message provided");
      formData.append("_subject", "New contact form submission from Suubee");
      formData.append("_captcha", "false"); // Disable their captcha since we don't need it
      
      const response = await fetch("https://formsubmit.co/ajax/info@suubee.com", {
        method: "POST",
        body: formData
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Show success toast
        toast({
          title: "Message sent!",
          description: "Thanks for contacting us. We'll get back to you soon.",
        });
        
        // Set success state
        setIsSuccess(true);
        
        // Reset form and Turnstile
        form.reset();
        setTurnstileToken(null);
        // Reset Turnstile widget
        if (window.turnstile && widgetIdRef.current) {
          window.turnstile.reset(widgetIdRef.current);
        }
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <main>
        <div className="container mx-auto px-4 pt-32 pb-24 bg-[#f5f5f5]">
          <div className="max-w-4xl mx-auto">
            <header>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#0c0c0c]">
                Contact Us
              </h1>
              <p className="text-gray-600 mb-12 text-lg max-w-2xl">
                Have questions about our investment portfolios? We'd love to hear from you. 
                Fill out the form below and our team will get back to you shortly.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <section className="md:col-span-2" aria-labelledby="contact-form-heading">
                <h2 id="contact-form-heading" className="sr-only">Contact Form</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" aria-label="Contact form">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="name" className="text-gray-700">Full Name</FormLabel>
                            <FormControl>
                              <Input id="name" placeholder="Enter your name" {...field} className="bg-white border-gray-300" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="email" className="text-gray-700">Email</FormLabel>
                            <FormControl>
                              <Input id="email" type="email" placeholder="Enter your email" {...field} className="bg-white border-gray-300" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="phone" className="text-gray-700">Phone Number</FormLabel>
                          <FormControl>
                            <Input id="phone" type="tel" placeholder="Enter your phone number" {...field} className="bg-white border-gray-300" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="message" className="text-gray-700">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              id="message"
                              placeholder="Please let us know how we can help you..." 
                              className="min-h-32 bg-white border-gray-300" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="mb-6">
                      <div 
                        ref={turnstileRef}
                        className="cf-turnstile"
                        style={{ transform: 'scale(0.85)', transformOrigin: '0 0' }}
                      />
                      {form.formState.errors.turnstile && (
                        <p className="text-sm text-red-500 mt-1">{form.formState.errors.turnstile.message}</p>
                      )}
                    </div>

                    <Button 
                      type="submit"
                      className="bg-gradient-to-r from-mint to-mint/80 text-black hover:from-mint/90 hover:to-mint/70 rounded-full w-full md:w-auto px-8"
                      disabled={isSubmitting}
                      aria-label={isSubmitting ? "Sending message..." : "Send message"}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                    
                    {isSuccess && (
                      <div 
                        className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-md"
                        role="alert"
                        aria-live="polite"
                      >
                        <p className="text-green-700 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Your message has been sent successfully! We'll be in touch soon.
                        </p>
                      </div>
                    )}
                  </form>
                </Form>
              </section>

              <aside className="space-y-8">
                <section aria-labelledby="social-links-heading">
                  <h2 id="social-links-heading" className="text-xl font-semibold mb-4 text-[#0c0c0c]">Contact Us</h2>
                  <nav aria-label="Social media links">
                    <div className="flex gap-4">
                      <a 
                        href="mailto:info@suubee.com" 
                        className="text-gray-600 hover:text-black hover:bg-mint bg-mint/10 p-3 rounded-full transition-all duration-200 ease-in-out" 
                        aria-label="Send us an email"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </a>
                      <a 
                        href="https://www.linkedin.com/company/suubee" 
                        className="text-gray-600 hover:text-black hover:bg-mint bg-mint/10 p-3 rounded-full transition-all duration-200 ease-in-out" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Visit our LinkedIn profile"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                      <a 
                        href="https://suubee.substack.com/" 
                        className="text-gray-600 hover:text-black hover:bg-mint bg-mint/10 p-3 rounded-full transition-all duration-200 ease-in-out" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Visit our Substack"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                          <path d="M22.539 8.242H1.46V5.406H22.539V8.242zM1.46 10.812H22.539V24H1.46V10.812zM22.539 0H1.46v2.836H22.539V0z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </div>
                  </nav>
                </section>
              </aside>
            </div>
          </div>
        </div>
        <Toaster />
      </main>
    </Layout>
  );
} 