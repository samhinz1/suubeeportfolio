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
      // Simulate API call (replace with actual API integration)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
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
  
  const blobVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5
      }
    }
  }
  
  return (
    <Layout>
      <Toaster />
      <main>
        {/* Hero Section */}
        <section 
          className="relative min-h-screen flex items-center pt-20 overflow-hidden"
          aria-label="Coming Soon section"
        >
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-b from-black to-black/90"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(57,253,173,0.1),transparent_60%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(241,140,31,0.05),transparent_50%)]"></div>
          </div>
          
          {/* Blob background */}
          <motion.div 
            className="absolute z-0 pointer-events-none blob-container"
            variants={blobVariants}
            initial="hidden"
            animate="visible"
            style={{
              bottom: "130px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100%",
              height: "220px"
            }}
            aria-hidden="true"
          >
            <div className="relative w-full h-full md:w-[460px] md:h-[460px] mx-auto">
              {/* First blob layer - larger and more pronounced */}
              <div 
                className="absolute inset-0 rounded-[70%_30%_20%_80%/60%_30%_70%_40%] bg-gradient-to-br from-mint via-orange/70 to-mint/90 blur-xl md:blur-3xl opacity-90"
                style={{
                  animation: "blob 6s infinite alternate",
                  transform: "scale(1.2)"
                }}
              ></div>
              
              {/* Second blob layer - with more contrast */}
              <div 
                className="absolute inset-0 rounded-[30%_70%_80%_20%/30%_80%_20%_70%] bg-gradient-to-br from-orange/80 via-mint/60 to-orange/80 blur-xl md:blur-3xl opacity-80"
                style={{
                  animation: "blob 7s infinite alternate-reverse",
                  animationDelay: "0.5s",
                  transform: "scale(1.1) rotate(15deg)"
                }}
              ></div>
              
              {/* Third blob layer for extra effects */}
              <div 
                className="absolute inset-0 rounded-[40%_60%_30%_70%/60%_30%_70%_40%] bg-gradient-to-r from-mint/60 to-orange/60 blur-md md:blur-2xl opacity-60"
                style={{
                  animation: "blob 8s infinite alternate",
                  animationDelay: "1s",
                  transform: "scale(0.9) rotate(-10deg)"
                }}
              ></div>
              
              {/* Fourth blob layer for depth in center */}
              <div 
                className="absolute inset-0 rounded-[55%_45%_40%_60%/50%_40%_60%_50%] bg-gradient-to-br from-mint/70 to-orange/70 blur-md md:blur-3xl opacity-50"
                style={{
                  animation: "blob 9s infinite alternate-reverse",
                  animationDelay: "1.5s",
                  transform: "scale(0.7)"
                }}
              ></div>
            </div>
          </motion.div>

          {/* Add special media query styles for desktop */}
          <style jsx global>{`
            @media (min-width: 768px) {
              .blob-container {
                bottom: auto !important;
                left: 65% !important;
                transform: translate(0, -50%) !important;
                width: 460px !important;
                height: 460px !important;
                top: 50% !important;
              }
            }
          `}</style>

          <div className="container mx-auto px-4 pt-20 pb-32 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="max-w-3xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div className="flex items-center gap-3 mb-8" variants={itemVariants}>
                  <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-mint">Suubee Portfolios | Coming Soon</span>
                </motion.div>
                <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6" variants={itemVariants}>
                  Invest in {" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint to-orange">
                    Leadership
                  </span>
                </motion.h1>
                <motion.p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl" variants={itemVariants}>
                  We're building expertly managed investment portfolios designed to provide exposure to leading stocks and themes, locally and abroad.
                </motion.p>
                
                {/* Notification Form */}
                <motion.div variants={itemVariants} className="mt-10 max-w-md">
                  <h2 className="text-xl font-semibold mb-4 text-white">Be the first to know when we launch</h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300">Email Address</FormLabel>
                            <div className="flex gap-2">
                              <FormControl>
                                <Input 
                                  placeholder="your@email.com" 
                                  type="email"
                                  className="bg-black/60 border border-mint/30 text-white placeholder-gray-500 focus:ring-mint/50"
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
                    <div className="mt-4 p-3 bg-green-500/20 border border-green-500/50 rounded-md" role="alert">
                      <p className="text-green-400 text-sm flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Thanks for subscribing! We'll keep you updated on our launch.
                      </p>
                    </div>
                  )}
                </motion.div>
                
                {/* App Store and Play Store coming soon */}
                <motion.div className="flex flex-col gap-3 mt-12" variants={itemVariants}>
                  <p className="text-sm text-gray-400">Our app will be available soon on:</p>
                  <div className="flex flex-row gap-4 opacity-60" role="group" aria-label="Download our app">
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

              {/* Empty div to maintain grid layout on desktop */}
              <div className="hidden md:block" aria-hidden="true"></div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
} 