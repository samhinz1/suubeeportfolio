"use client";

import Layout from "@/components/Layout";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export default function StrategyPage() {
  // State to track if this is a mobile device
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile on component mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup event listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Create an array of refs for each pillar
  const pillarRefs = Array(6).fill(0).map(() => useRef(null));
  // Create array of inView states for each pillar
  const pillarInView = pillarRefs.map(ref => useInView(ref, { once: false, amount: 0.3 }));

  return (
    <Layout>
      <main>
        <div className="container mx-auto px-4 pt-32 pb-12 bg-[#f5f5f5]">
          <div className="max-w-6xl mx-auto">
            <header>
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#0c0c0c] leading-[1.1] pb-2">
                Our Investment Strategy
              </h1>
              <p className="text-gray-600 mb-12 text-lg">
                At Suubee Portfolios, we utilize a quantitative, rules-based strategy to identify market-leading stocks and sectors. Our goal is to invest in these high-potential names, maintaining a diverse portfolio of market leaders. 
                Unlike a "buy and hold" approach, we dynamically rotate the list as stocks gain or lose leadership status, ensuring we stay positioned for outperformance while prioritizing risk control.
              </p>
            </header>

            <div className="grid grid-cols-1 gap-16">
              {/* Strategy Pillars Section */}
              <section aria-labelledby="strategy-pillars-heading">
                <div className="relative mb-10">
                  <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-3 h-12 bg-gradient-to-b from-mint to-mint/40 rounded-r-md" aria-hidden="true"></div>
                  <h2 id="strategy-pillars-heading" className="text-2xl md:text-3xl font-bold text-[#0c0c0c]">Key Strategy Pillars</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Strategy pillars">
                  {[
                    {
                      title: "Targeting Market Leaders",
                      description: "We focus on true market leaders that drive performance, aiming to capture price momentum swings and trends. These are companies like NVIDIA in 2024 or Tesla in 2022, which exhibit exceptional growth and market leadership characteristics",
                      icon: (
                        <>
                          <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7Z"/>
                          <path d="m5 16 3"/>
                          <path d="m19 16-3"/>
                        </>
                      )
                    },
                    {
                      title: "Owning the Best",
                      description: "Our strategy prioritizes owning the highest-performing companies within the highest performing sectors. With competition for portfolio inclusion, underperforming names are systematically replaced by emerging leaders. This dynamic process ensures our portfolio consistently reflects the strongest market contenders",
                      icon: (
                        <>
                          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                          <path d="M4 22h16"/>
                          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
                        </>
                      )
                    },
                    {
                      title: "Thematic and Fundamental Drivers",
                      description: "We target leaders fueled by compelling catalysts, such as robust earnings growth, disruptive innovation, or transformative industry trends. These companies often command premium valuations due to their anticipated future performance, supported by strong fundamentals or powerful market narratives.",
                      icon: (
                        <>
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                        </>
                      )
                    },
                    {
                      title: "Statistical Advantage",
                      description: "Success in investing hinges on asymmetric returns: maximizing gains from winners while minimizing losses from underperformers. While not every stock will outperform, our focus on true market leaders ensures that winning positions deliver significantly larger average gains, creating a statistical edge over time.",
                      icon: (
                        <>
                          <path d="M3 3v18h18"/>
                          <path d="M7 16v-6"/>
                          <path d="M11 16v-3"/>
                          <path d="M15 16v-5"/>
                          <path d="M19 16v-8"/>
                          <path d="m3 8 5-3 4 3 9-6"/>
                        </>
                      )
                    },
                    {
                      title: "Risk Management and Portfolio Discipline",
                      description: "Our leadership-driven approach enforces a \"survival of the fittest\" philosophy. Stocks are regularly evaluated, with underperformers rotated out to maintain optimal portfolio allocation. Position sizes are distributed roughly equally across 20-50 equities, ensuring diversification across sectors and industries while mitigating concentration risk.",
                      icon: (
                        <>
                          <path d="M14 3v4a1 1 0 0 0 1 1h4"/>
                          <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z"/>
                          <path d="M9 9h1"/>
                          <path d="M9 13h6"/>
                          <path d="M9 17h6"/>
                        </>
                      )
                    },
                    {
                      title: "Continuous Adaptation",
                      description: "Market leadership is fluid, and our strategy adapts to evolving trends and opportunities. By leveraging data-driven insights and rigorous analysis, we stay ahead of market shifts, ensuring our portfolio remains aligned with the most compelling opportunities in real time.",
                      icon: (
                        <>
                          <path d="M21 2v6h-6"/>
                          <path d="M3 12a9 9 0 0 1 15-6.7L21 8"/>
                          <path d="M3 22v-6h6"/>
                          <path d="M21 12a9 9 0 0 1-15 6.7L3 16"/>
                        </>
                      )
                    }
                  ].map((pillar, index) => {
                    // Apply hover effect if card is in view on mobile or on hover for desktop
                    const applyHoverEffect = isMobile && pillarInView[index];
                    
                    return (
                      <article
                        key={index}
                        ref={pillarRefs[index]}
                        className={cn(
                          "relative flex flex-col gap-6 bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:border-mint/30 group hover:shadow-[0_10px_20px_-15px_rgba(57,253,173,0.25)]",
                          {
                            "translate-y-[-8px] shadow-[0_10px_20px_-15px_rgba(57,253,173,0.25)]": applyHoverEffect,
                            "hover:translate-y-[-8px]": !isMobile
                          }
                        )}
                      >
                        <div className="text-left">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 flex items-center justify-center" aria-hidden="true">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                                {pillar.icon}
                              </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#0c0c0c]">{pillar.title}</h3>
                          </div>
                          <p className="text-gray-600">
                            {pillar.description}
                          </p>
                        </div>
                        <div
                          className={cn(
                            "absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 bg-gradient-to-r from-mint to-mint/80 transition-all duration-300 rounded-b-lg",
                            {
                              "w-full": applyHoverEffect,
                              "w-0 group-hover:w-full": !isMobile
                            }
                          )}
                          aria-hidden="true"
                        ></div>
                      </article>
                    );
                  })}
                </div>
              </section>

              {/* CTA Section */}
              <CTASection 
                title="Ready to Invest With Us?"
                description="Experience the difference our strategic approach can make for your investment portfolio."
                buttonText="Contact Our Team"
                buttonLink="/contact"
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
} 