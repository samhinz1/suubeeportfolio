"use client"

import React from "react"
import Layout from "@/components/Layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import CTASection from "@/components/CTASection"
import { PersonJsonLd } from "@/components/JsonLd"

export default function AboutPage() {
  // Team members data for structured data
  const teamMembers = [
    {
      name: "George Rolleston",
      jobTitle: "Founder & Portfolio Manager",
      description: "Founded by George Rolleston (MAPPFIN) B Bus (Law), who has over 18 years of experience in financial markets. George sits on a number of boards in both the public and private markets and is the cornerstone investor in Suubee.",
      image: "https://suubeeportfolios.com/georgephoto.png"
    },
    {
      name: "Sam Hinz",
      jobTitle: "US Portfolio Manager",
      description: "Sam Hinz (B Bus, Economics & Finance) was a founding team member alongside George. Now based in London, Sam leads our US & European operations, enabling Suubee to provide comprehensive real-time service across global markets.",
      image: "https://suubeeportfolios.com/samphoto.png"
    },
    {
      name: "Phil Hall",
      jobTitle: "General Manager",
      description: "Phil Hall (B Bus, Economics & Finance) has over 15 years of experience in financial markets. Phil is responsible for the day-to-day operations of WAM including client services, marketing, and business development.",
      image: "https://suubeeportfolios.com/phil.png"
    }
  ];
  
  return (
    <Layout>
      <main>
        {/* Add structured data for team members */}
        <React.Fragment>
          {teamMembers.map((member, index) => (
            <PersonJsonLd 
              key={index}
              name={member.name}
              jobTitle={member.jobTitle}
              description={member.description}
              image={member.image}
            />
          ))}
        </React.Fragment>

        {/* Team Section */}
        <section 
          className="py-16 relative z-10 bg-[#f5f5f5]"
          aria-labelledby="team-heading"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 id="team-heading" className="text-3xl font-bold mt-6 mb-6 text-[#0c0c0c]">Meet Our Team</h1>
              <p className="text-gray-600">
                With over 40+ years of combined experience in capital markets, the Suubee team has the experience to navigate all market environments.
                Our goal is to build long-term wealth for our clients while developing relationships built off trust, integrity and transparency.
              </p>
            </div>

            <div 
              className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
              role="list"
              aria-label="Team members"
            >
              {/* Team Member 1 */}
              <article className="bg-white shadow-md border border-gray-200 rounded-xl overflow-hidden transition-transform hover:scale-105">
                <div className="aspect-[4/3] relative">
                  <Image 
                    src="/georgephoto.png"
                    alt="George Rolleston - Founder & Portfolio Manager at Suubee Portfolios" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2 text-[#0c0c0c]">George Rolleston</h2>
                  <p className="text-black mb-4">Founder & Portfolio Manager</p>
                  <hr className="border-gray-200 mb-4" />
                  <p className="text-gray-600 mb-4">
                    Founded by George Rolleston (MAPPFIN) B Bus (Law), who has over 18 years of experience in financial markets. George sits on a number of boards in both the public and private markets and is the cornerstone investor in Suubee.
                  </p>
                  <div className="flex justify-end">
                    <Link href="#" className="text-mint hover:text-mint/80 flex items-center gap-2 group" aria-label="Learn more about George Rolleston">
                    </Link>
                  </div>
                </div>
              </article>

              {/* Team Member 2 */}
              <article className="bg-white shadow-md border border-gray-200 rounded-xl overflow-hidden transition-transform hover:scale-105">
                <div className="aspect-[4/3] relative">
                  <Image 
                    src="/samphoto.png"
                    alt="Sam Hinz - US Portfolio Manager at Suubee Portfolios" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2 text-[#0c0c0c]">Sam Hinz</h2>
                  <p className="text-black mb-4">US Portfolio Manager</p>
                  <hr className="border-gray-200 mb-4" />
                  <p className="text-gray-600 mb-4">
                    Sam Hinz (B Bus, Economics & Finance) was a founding team member alongside George. Now based in London, Sam leads our US & European operations, enabling Suubee to provide comprehensive real-time service across global markets.
                  </p>
                  <div className="flex justify-end">
                    <Link href="#" className="text-mint hover:text-mint/80 flex items-center gap-2 group" aria-label="Learn more about Sam Hinz">
                    </Link>
                  </div>
                </div>
              </article>

              {/* Team Member 3 */}
              <article className="bg-white shadow-md border border-gray-200 rounded-xl overflow-hidden transition-transform hover:scale-105">
                <div className="aspect-[4/3] relative">
                  <Image 
                    src="/phil.png"
                    alt="Phil Hall - General Manager at Suubee Portfolios" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2 text-[#0c0c0c]">Phil Hall</h2>
                  <p className="text-black mb-4">General Manager</p>
                  <hr className="border-gray-200 mb-4" />
                  <p className="text-gray-600 mb-4">
                    Phil Hall (B Bus, Economics & Finance) has over 15 years of experience in financial markets. Phil is responsible for the day-to-day operations of WAM including client services, marketing, and business development.
                  </p>
                  <div className="flex justify-end">
                    <Link href="#" className="text-mint hover:text-mint/80 flex items-center gap-2 group" aria-label="Learn more about Phil Hall">
                    </Link>
                  </div>
                </div>
              </article>
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
      </main>
    </Layout>
  )
} 