"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, X, MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"

// === CONSTANT: Use your actual production site key here ===
const TURNSTILE_SITE_KEY = "0x4AAAAAACFHSYWFl5BfNm3B"; 

// Define the form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  turnstile: z.string().min(1, { message: "Please complete verification." })
})

type FormData = z.infer<typeof formSchema>

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

export default function CallbackChatBubble() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      turnstile: "", 
    },
  })

  // === Turnstile useEffect Hook (With rendering delay for pop-up) ===
  useEffect(() => {
    // 1. Cleanup logic (runs when modal closes)
    if (!isOpen) {
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
        form.setValue('turnstile', '');
      }
      return;
    }

    // Prevents re-rendering if already open and widget exists
    if (widgetIdRef.current) {
      return;
    }

    let renderTimer: NodeJS.Timeout | null = null;
    let widgetId: string | null = null;
    
    const loadTurnstile = () => {
      // Use a brief delay to ensure the modal's animation has finished 
      renderTimer = setTimeout(() => { 
        if (widgetIdRef.current || !turnstileRef.current) {
          return;
        }

        if (typeof window !== "undefined" && window.turnstile) {
          widgetId = window.turnstile.render(turnstileRef.current, {
            sitekey: TURNSTILE_SITE_KEY,
            callback: (token: string) => {
              form.setValue('turnstile', token);
            },
            "error-callback": () => {
              form.setValue('turnstile', '');
            },
            "expired-callback": () => {
              form.setValue('turnstile', '');
              if (window.turnstile && widgetIdRef.current) {
                  window.turnstile.reset(widgetIdRef.current);
              }
            },
          });
          widgetIdRef.current = widgetId;
        }
      }, 300); // 300ms delay for animation
    };

    // Load Turnstile script if not already loaded, then call loadTurnstile
    const existingScript = document.querySelector('script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]');
    if (existingScript) {
        loadTurnstile();
    } else {
        const script = document.createElement("script");
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
        script.async = true;
        script.defer = true;
        script.onload = loadTurnstile;
        document.body.appendChild(script);
    }
    
    // Cleanup function: remove widget AND clear timer
    return () => {
      if (renderTimer) {
        clearTimeout(renderTimer);
      }
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [isOpen, form]); 
  
  // === onSubmit Function - FIXED VERSION (matches working contact page) ===
  const onSubmit = async (values: FormData) => {
    setIsSubmitting(true)
    
    try {
      const formData = new FormData()
      formData.append("name", values.name)
      formData.append("email", values.email)
      formData.append("phone", values.phone)
      formData.append("message", `CALLBACK REQUEST: Please call back on ${values.phone}. Email: ${values.email}`);
      formData.append("cf-turnstile-response", values.turnstile); 
      formData.append("g-recaptcha-response", values.turnstile); 
      formData.append("_subject", "New callback request from Suubee Portfolios")
      formData.append("_captcha", "false")
      
      // ✅ FIXED: Removed headers object to match working contact page
      const response = await fetch("https://formsubmit.co/ajax/info@suubee.com", {
        method: "POST",
        body: formData
      })
      
      const result = await response.json()
      
      if (result.success) {
        toast({
          title: "Request Submitted! 📞",
          description: "A portfolio manager will call you back within 24 hours.",
        })
        
        setIsSuccess(true)
        form.reset({ turnstile: '' });
        
        // Reset Turnstile widget
        if (window.turnstile && widgetIdRef.current) {
            window.turnstile.reset(widgetIdRef.current);
        }

        setTimeout(() => {
          setIsOpen(false)
          setIsSuccess(false)
        }, 2000)
      } else {
        throw new Error(result.message || "Something went wrong")
      }
    } catch (error) {
      toast({
        title: "Error ⚠️",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      })
      console.error("Submission Error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Floating Chat Bubble */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Button
                onClick={() => setIsOpen(true)}
                className="group relative w-16 h-16 bg-mint text-black rounded-full shadow-lg hover:bg-mint/90 hover:scale-110 transition-all duration-300"
                aria-label="Request a call back from a portfolio manager"
              >
                <Phone className="w-6 h-6" />
                
                {/* Pulse animation ring */}
                <div className="absolute inset-0 rounded-full bg-mint/30 animate-ping" />
                
                {/* Tooltip */}
                <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  Request a call back from a portfolio manager
                  <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
                </div>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Form Modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-mint px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-black" />
                  <h3 className="font-semibold text-black">Request Call Back</h3>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 p-0 hover:bg-black/10 text-black"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Form */}
              <div className="p-4 bg-gray-50">
                <p className="text-sm text-gray-600 mb-4">
                  Fill out the form below and a portfolio manager will call you back within 24 hours.
                </p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name Field */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your name" 
                              {...field} 
                              className="h-9 text-sm bg-white border-gray-300"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Email Field */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">Email</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="your@email.com" 
                              {...field} 
                              className="h-9 text-sm bg-white border-gray-300"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Phone Field */}
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">Phone Number</FormLabel>
                          <FormControl>
                            <Input 
                              type="tel"
                              placeholder="Enter your phone number" 
                              {...field} 
                              className="h-9 text-sm bg-white border-gray-300"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {/* Turnstile Widget */}
                    <div className="pt-2">
                        <div 
                          ref={turnstileRef}
                          className="cf-turnstile"
                          style={{ transform: 'scale(0.8)', transformOrigin: '0 0' }} 
                        />
                        {form.formState.errors.turnstile && (
                          <p className="text-xs text-red-500 mt-1">{form.formState.errors.turnstile.message}</p>
                        )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-mint text-black hover:bg-mint/90 h-9 text-sm font-medium"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                          Submitting...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Request Call Back
                        </div>
                      )}
                    </Button>
                    
                    {/* Success Message */}
                    {isSuccess && (
                      <div 
                        className="mt-4 p-3 bg-green-500/20 border border-green-500/50 rounded-md"
                        role="alert"
                        aria-live="polite"
                      >
                        <p className="text-green-700 text-sm flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Your callback request has been submitted successfully!
                        </p>
                      </div>
                    )}
                  </form>
                </Form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Toast Notifications */}
      <Toaster />
    </>
  )
}