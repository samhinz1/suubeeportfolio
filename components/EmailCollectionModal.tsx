"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { toast } from "@/hooks/use-toast"
import { Loader2, CheckCircle } from "lucide-react"
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

interface EmailCollectionModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EmailCollectionModal({ isOpen, onClose }: EmailCollectionModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)
    setIsSuccess(false)
    
    try {
      // Use the same Google Apps Script Web App URL as in coming-soon.tsx
      const apiUrl = "https://script.google.com/macros/s/AKfycbxDWbzOD4zrlWgNasJYH6Gkyxc7s1obQlfU0XExyfGVHduuKXnLyyRESSsg7IuS5tH1EQ/exec"
      
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
      })
      
      // Since we're using no-cors, we don't get response details
      // So we'll just assume success if no error is thrown
      
      // Show success state
      setIsSuccess(true)
      
      // Reset form
      form.reset()
      
      // Show success toast
      toast({
        title: "Thanks for your interest!",
        description: "We'll notify you when we're live.",
      })
      
      // Close modal after a short delay
      setTimeout(() => {
        onClose()
        setIsSuccess(false)
      }, 2000)
      
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem subscribing. Please try again.",
        variant: "destructive",
      })
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (!isSubmitting) {
      onClose()
      setIsSuccess(false)
      form.reset()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-white border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center text-gray-900">
            {isSuccess ? "Thank You!" : "We're Still Working on This!"}
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            {isSuccess 
              ? "We'll notify you when we're live." 
              : "Leave your email and we will notify you when we're live."
            }
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-8">
              <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
              <p className="text-lg font-medium text-gray-900">You're all set!</p>
              <p className="text-sm text-gray-600 mt-2">We'll be in touch soon.</p>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-900 font-medium">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="your@email.com" 
                          type="email"
                          className="bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-mint/50 focus:border-mint"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex gap-3 pt-2">
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={handleClose}
                    className="flex-1 border-gray-300 text-white bg-gray-800 hover:bg-gray-100 hover:border-gray-400 hover:text-gray-900"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit"
                    className="flex-1 bg-mint text-black hover:bg-mint/80 hover:shadow-md font-medium transition-all duration-200"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Subscribing...
                      </>
                    ) : (
                      "Notify Me"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
