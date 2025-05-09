"use client";

import Layout from "@/components/Layout";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StrategyPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-mint to-mint/80 text-transparent bg-clip-text">
            Our Investment Strategy
          </h1>
          <p className="text-gray-400 mb-12 text-lg max-w-2xl">
            At Suubee Portfolios, we employ a rigorous, research-driven approach to identify market-leading investments 
            with significant growth potential.
          </p>

          <div className="grid grid-cols-1 gap-16">
            {/* Strategy Overview Section */}
            <section>
              <div className="relative mb-10">
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-3 h-12 bg-gradient-to-b from-mint to-mint/40 rounded-r-md"></div>
                <h2 className="text-2xl md:text-3xl font-bold">Our Winning Approach</h2>
              </div>
              <p className="text-gray-300 mb-8">
                Our investment philosophy is built on identifying true market leaders and capturing their momentum 
                during significant market advances. Through rigorous analysis and disciplined execution, 
                we aim to maximize returns while carefully managing risk.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="relative bg-black/40 backdrop-blur-sm border border-mint/20 rounded-xl p-6 overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-24 h-24 bg-mint/10 rounded-full blur-xl"></div>
                  <h3 className="text-xl font-semibold mb-4 text-mint">Proven Track Record</h3>
                  <p className="text-gray-300 relative z-10">
                    Our portfolios have consistently outperformed benchmarks by focusing on market leaders and 
                    employing our proprietary investment framework.
                  </p>
                </div>
                
                <div className="relative bg-black/40 backdrop-blur-sm border border-mint/20 rounded-xl p-6 overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-24 h-24 bg-orange/10 rounded-full blur-xl"></div>
                  <h3 className="text-xl font-semibold mb-4 text-orange">Expert Management</h3>
                  <p className="text-gray-300 relative z-10">
                    Our team consists of experienced investment professionals with deep market knowledge and 
                    a passion for identifying high-potential opportunities.
                  </p>
                </div>
              </div>
            </section>

            {/* Strategy Pillars Section */}
            <section>
              <div className="relative mb-10">
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-3 h-12 bg-gradient-to-b from-mint to-mint/40 rounded-r-md"></div>
                <h2 className="text-2xl md:text-3xl font-bold">Key Strategy Pillars</h2>
              </div>

              <div className="space-y-8">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 bg-black/30 border border-mint/10 rounded-xl p-6">
                  <div className="lg:w-32 flex items-center justify-center">
                    <div className="w-16 h-16 flex items-center justify-center bg-mint/10 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mint">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Dual Analysis Framework</h3>
                    <p className="text-gray-300">
                      We combine rigorous technical and fundamental analysis to identify high-potential stocks with precision.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 bg-black/30 border border-mint/10 rounded-xl p-6">
                  <div className="lg:w-32 flex items-center justify-center">
                    <div className="w-16 h-16 flex items-center justify-center bg-mint/10 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mint">
                        <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7Z"/>
                        <path d="m5 16 3 4"/>
                        <path d="m19 16-3 4"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Focus on Market Leaders</h3>
                    <p className="text-gray-300">
                      At any given time, we target the 30-50 true market leaders driving performance, capturing their momentum during significant advances (e.g., standout performers like NVDA in 2024 or TSLA in 2022).
                    </p>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 bg-black/30 border border-mint/10 rounded-xl p-6">
                  <div className="lg:w-32 flex items-center justify-center">
                    <div className="w-16 h-16 flex items-center justify-center bg-mint/10 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mint">
                        <path d="M3 3v18h18"/>
                        <path d="m19 9-5 5-4-4-3 3"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Statistical Edge</h3>
                    <p className="text-gray-300">
                      Our proprietary statistical models form a proven formula for pinpointing winning stocks with strong upside potential.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 bg-black/30 border border-mint/10 rounded-xl p-6">
                  <div className="lg:w-32 flex items-center justify-center">
                    <div className="w-16 h-16 flex items-center justify-center bg-mint/10 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mint">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="m4.93 4.93 4.24 4.24"/>
                        <path d="m14.83 9.17 4.24-4.24"/>
                        <path d="m14.83 14.83 4.24 4.24"/>
                        <path d="m9.17 14.83-4.24 4.24"/>
                        <circle cx="12" cy="12" r="4"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Thematic Drivers</h3>
                    <p className="text-gray-300">
                      We seek leaders propelled by compelling catalysts, such as robust earnings growth or transformative industry trends, often commanding premium valuations due to anticipated future performance.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 bg-black/30 border border-mint/10 rounded-xl p-6">
                  <div className="lg:w-32 flex items-center justify-center">
                    <div className="w-16 h-16 flex items-center justify-center bg-mint/10 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mint">
                        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                        <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Rules-Based Discipline</h3>
                    <p className="text-gray-300">
                      Our structured approach provides a clear blueprint for entering, managing, and exiting positions to maximize returns and minimize risk.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 bg-black/30 border border-mint/10 rounded-xl p-6">
                  <div className="lg:w-32 flex items-center justify-center">
                    <div className="w-16 h-16 flex items-center justify-center bg-mint/10 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mint">
                        <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
                        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Own the Best</h3>
                    <p className="text-gray-300">
                      We prioritize owning the top-performing companies leading the market, ensuring alignment with the strongest opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="mt-8">
              <div className="bg-gradient-to-br from-black/60 to-mint/10 backdrop-blur-sm rounded-2xl p-8 border border-mint/20 shadow-lg shadow-mint/5">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-3">Ready to Invest With Us?</h3>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    Experience the difference our strategic approach can make for your investment portfolio.
                  </p>
                </div>

                <div className="flex justify-center mt-6">
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-mint to-mint/80 text-black px-8 py-6 rounded-full hover:from-mint/90 hover:to-mint/70 flex items-center gap-2">
                      <span>Contact Our Team</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
} 