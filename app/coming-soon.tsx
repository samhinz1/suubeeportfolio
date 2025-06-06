"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import Layout from "@/components/Layout"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"

// Define the form validation schema
const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export default function ComingSoonPage() {
  // Get base path for assets to work with GitHub Pages
  const basePath = process.env.NODE_ENV === 'production' ? '/suubeeportfolio' : '';
  
  // Form state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setIsSuccess(false);
    
    try {
      // Replace with your Google Apps Script Web App URL
      const apiUrl = "https://script.google.com/macros/s/AKfycbxDWbzOD4zrlWgNasJYH6Gkyxc7s1obQlfU0XExyfGVHduuKXnLyyRESSsg7IuS5tH1EQ/exec";
      
      // Send the data to Google Sheets
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email
        }),
        mode: "no-cors" // This is important for CORS issues
      });
      
      // Since we're using no-cors, we don't get response details
      // So we'll just assume success if no error is thrown
      
      // Show success toast
      toast({
        title: "Subscription successful!",
        description: "We'll notify you when we launch.",
      });
      
      // Set success state
      setIsSuccess(true);
      
      // Reset form
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem subscribing. Please try again.",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }
  
  return (
    <Layout>
      <Toaster />
      <main className="min-h-screen flex flex-col">
        {/* Hero Section with split design */}
        <section 
          className="flex flex-grow"
          aria-label="Coming Soon section"
        >
          {/* Left side with colored background */}
          <div className="w-full md:w-1/2 bg-[#f5f5f5] text-[#0c0c0c] flex items-center">
            <div className="px-8 py-20 md:px-12 lg:px-20 max-w-2xl mx-auto">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <motion.div className="flex items-center gap-3" variants={itemVariants}>
                  <span className="text-xl md:text-2xl lg:text-3xl font-semibold">Suubee Portfolios | Coming Soon</span>
                </motion.div>
                
                <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight" variants={itemVariants}>
                  Invest in <span className="font-extrabold text-[#0c0c0c] underline decoration-mint decoration-4 underline-offset-4">Leadership</span>
                </motion.h1>
                
                <motion.p className="text-lg md:text-xl text-gray-600" variants={itemVariants}>
                  We're building expertly managed investment portfolios designed to provide exposure to leading stocks and themes, locally and abroad.
                </motion.p>
                
                {/* Notification Form */}
                <motion.div variants={itemVariants} className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">Be the first to know when we launch</h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">Email Address</FormLabel>
                            <div className="flex gap-2">
                              <FormControl>
                                <Input 
                                  placeholder="your@email.com" 
                                  type="email"
                                  className="bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-mint/50"
                                  {...field} 
                                />
                              </FormControl>
                              <Button 
                                type="submit"
                                className="group flex items-center gap-2 bg-mint text-black hover:bg-mint/90 rounded-md transition-all"
                                disabled={isSubmitting}
                              >
                                {isSubmitting ? "Subscribing..." : "Notify Me"}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                              </Button>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </form>
                  </Form>
                  
                  {isSuccess && (
                    <div className="mt-4 p-3 bg-green-100 border border-green-300 rounded-md" role="alert">
                      <p className="text-green-700 text-sm flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Thanks for subscribing! We'll keep you updated on our launch.
                      </p>
                    </div>
                  )}
                </motion.div>
                
                {/* App Store and Play Store coming soon */}
                <motion.div className="flex flex-col gap-3" variants={itemVariants}>
                  <p className="text-sm text-gray-500">Our app will be available soon on:</p>
                  <div className="flex flex-row gap-4" role="group" aria-label="Download our app">
                    <div className="w-32">
                      <img 
                        src={`${basePath}/appstore.svg`} 
                        alt="Coming soon to App Store" 
                        width={128} 
                        height={42}
                        className="w-full" 
                      />
                    </div>
                    <div className="w-36">
                      <img 
                        src={`${basePath}/playstore.svg`} 
                        alt="Coming soon to Google Play" 
                        width={144} 
                        height={42}
                        className="w-full" 
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* Right side with full image */}
          <div className="hidden md:block md:w-1/2 relative">
            <Image
              src={`${basePath}/earth.avif`}
              alt="Earth visualization"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>
      </main>
    </Layout>
  )
} 