"use client"

import React from "react"
import Layout from "@/components/Layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center pt-20 pb-20">
        <div className="max-w-md w-full p-8 bg-black/50 backdrop-blur-md rounded-xl border border-mint/20">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">Create an Account</h1>
            <p className="text-gray-400">Sign up to start your investment journey</p>
          </div>

          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-black/60 border border-mint/30 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-mint/50"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-black/60 border border-mint/30 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-mint/50"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 bg-black/60 border border-mint/30 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-mint/50"
                placeholder="••••••••"
              />
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-3 bg-black/60 border border-mint/30 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-mint/50"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-mint focus:ring-mint border-gray-600 rounded bg-gray-900"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-400">
                I agree to the <Link href="/tos" className="text-mint hover:text-mint/80">Terms of Service</Link> and <Link href="/privacy" className="text-mint hover:text-mint/80">Privacy Policy</Link>
              </label>
            </div>

            <Button className="w-full bg-mint hover:bg-mint/90 text-black py-3 rounded-md transition-colors">
              Create Account
            </Button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-black text-gray-500">Or sign up with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="flex justify-center items-center py-2.5 px-4 border border-gray-700 rounded-md hover:bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-mint/50">
                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
              </button>
              <button className="flex justify-center items-center py-2.5 px-4 border border-gray-700 rounded-md hover:bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-mint/50">
                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z" />
                </svg>
              </button>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="/login" className="text-mint hover:text-mint/80">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  )
} 