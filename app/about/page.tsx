"use client"

import React from "react"
import Layout from "@/components/Layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import CTASection from "@/components/CTASection"

export default function AboutPage() {
  return (
    <Layout>


      {/* Team Section */}
      <section className="py-16 relative z-10 bg-black/40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mt-6 mb-6">Meet Our Team</h2>
            <p className="text-gray-300">
            With over 40+ years of combined experience in capital markets, the Suubee team has the experience to navigate all market environments.
            Our goal is to build long-term wealth for our clients while developing relationships built off trust, integrity and transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Team Member 1 */}
            <div className="bg-black/30 backdrop-blur-sm border border-mint/20 rounded-xl overflow-hidden transition-transform hover:scale-105">
              <div className="aspect-[4/3] relative">
                <Image 
                  src="/georgephoto.png" 
                  alt="George Rolleston" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">George Rolleston</h3>
                <p className="text-mint mb-2">Founder & Portfolio Manager</p>
                <p className="text-gray-300 mb-4">
                Founded by George Rolleston (MAPPFIN) B Bus (Law), who has over 18 years of experience in financial markets. George sits on a number of boards in both the public and private markets and is the cornerstone investor in Suubee.
                </p>
                <div className="flex justify-end">
                  <Link href="#" className="text-mint hover:text-mint/80 flex items-center gap-2 group">
                    <span>Full Profile</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-black/30 backdrop-blur-sm border border-mint/20 rounded-xl overflow-hidden transition-transform hover:scale-105">
              <div className="aspect-[4/3] relative">
                <Image 
                  src="/samphoto.png" 
                  alt="Sam Hinz" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Sam Hinz</h3>
                <p className="text-mint mb-2">US Portfolio Manager</p>
                <p className="text-gray-300 mb-4">
                Sam Hinz (B Bus, Economics & Finance) was a founding team member alongside George. Now based in London, Sam leads our US & European operations, enabling Suubee to provide comprehensive real-time service across global markets.
                </p>
                <div className="flex justify-end">
                  <Link href="#" className="text-mint hover:text-mint/80 flex items-center gap-2 group">
                    <span>Full Profile</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-black/30 backdrop-blur-sm border border-mint/20 rounded-xl overflow-hidden transition-transform hover:scale-105">
              <div className="aspect-[4/3] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-mint/20 to-orange/20 z-0"></div>
                <div className="h-full flex items-center justify-center p-4">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-mint/30 to-orange/30 flex items-center justify-center">
                    <span className="text-3xl font-bold text-mint">PH</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Phil Hall</h3>
                <p className="text-mint mb-2">General Manager</p>
                <p className="text-gray-300 mb-4">
                  Phil Hall (B Bus, Economics & Finance) has over 15 years of experience in financial markets. Phil is responsible for the day-to-day operations of WAM including client services, marketing, and business development.
                </p>
                <div className="flex justify-end">
                  <Link href="#" className="text-mint hover:text-mint/80 flex items-center gap-2 group">
                    <span>Full Profile</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Start Your Portfolio Today"
        description="Ready to take the next step in your investment journey? Get started with Suubee Portfolios today."
        buttonText="Open an Account"
        buttonLink="/register"
      />
    </Layout>
  )
} 