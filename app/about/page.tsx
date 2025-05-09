"use client"

import React from "react"
import Layout from "@/components/Layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-black/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(57,253,173,0.1),transparent_60%)]"></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint to-orange">Suubee</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Learn more about our philosophy, team, and approach to investment management.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Philosophy</h2>
              <p className="text-gray-300 mb-4">
                At Suubee Portfolios, we believe that successful investing is about identifying high-quality companies with sustainable competitive advantages and holding them for the long term.
              </p>
              <p className="text-gray-300 mb-4">
                Our investment philosophy is centered around three core principles:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-mint/20 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#39FDAD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-300">
                    <strong className="text-mint">Quality First:</strong> We focus on businesses with strong fundamentals, healthy balance sheets, and proven management teams.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-mint/20 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#39FDAD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-300">
                    <strong className="text-mint">Global Perspective:</strong> We look for opportunities both locally and globally to provide our clients with diversified exposure.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-mint/20 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#39FDAD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-300">
                    <strong className="text-mint">Long-Term Focus:</strong> We believe that time in the market, not timing the market, is the key to building wealth.
                  </span>
                </li>
              </ul>
              <Link href="/approach" className="text-mint hover:text-mint/80 flex items-center gap-2 group">
                <span>Learn more about our investment approach</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="relative rounded-xl overflow-hidden h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-mint/20 to-orange/20 z-0"></div>
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-300 mb-6">
                  Our mission is to democratize access to high-quality investment strategies, empowering individuals to achieve their financial goals through transparent, cost-effective portfolio solutions.
                </p>
                <div className="w-16 h-1 bg-mint rounded-full mb-6"></div>
                <p className="italic text-gray-400">
                  "We're committed to helping our clients build wealth through careful selection of growth-oriented, quality businesses."
                </p>
                <p className="mt-4 text-sm text-mint">- The Suubee Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 pt-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-mint/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Investment Community</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Ready to take the next step in your investment journey? Get started with Suubee Portfolios today.
              </p>
            </div>

            <div className="flex justify-center">
              <Link href="/register">
                <Button className="bg-mint hover:bg-mint/90 text-black px-6 py-6 rounded-full">
                  Open an Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 