"use client"

import Link from "next/link"
import { ArrowRight, Plus } from "lucide-react"
import CustomCursor from "@/components/custom-cursor"
import PortfolioCard from "@/components/portfolio-card"
import { Button } from "@/components/ui/button"
import DashboardPreview from "@/components/dashboard-preview"
import Image from "next/image"
import { useState } from "react"
import Layout from "@/components/Layout"
import { motion } from "framer-motion"

export default function Home() {
  // Get base path for assets to work with GitHub Pages
  const basePath = process.env.NODE_ENV === 'production' ? '/suubeeportfolio' : '';
  const [selectedPortfolio, setSelectedPortfolio] = useState<string>("us")
  
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
      <CustomCursor />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-black/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(57,253,173,0.1),transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(241,140,31,0.05),transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-4 pt-20 pb-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="max-w-3xl"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="flex items-center gap-3 mb-8" variants={itemVariants}>
                <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-mint">Suubee Portfolios</span>
              </motion.div>
              <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6" variants={itemVariants}>
                Invest in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint to-orange">
                  Leadership
                </span>
              </motion.h1>
              <motion.p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl" variants={itemVariants}>
                Expertly managed investment portfolios designed to provide exposure to leading stocks and themes, locally and abroad.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-4 items-start" variants={itemVariants}>
                <Link href="/register">
                  <Button className="group flex items-center gap-2 text-base px-6 py-6 bg-mint text-black hover:bg-mint/90 rounded-full transition-all">
                    Open an Account
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="text-base px-6 py-6 bg-transparent border border-orange/50 text-white hover:bg-orange/10 rounded-full transition-all"
                >
                  Explore Portfolios
                </Button>
              </motion.div>
              
              {/* App Store and Play Store links */}
              <motion.div className="flex flex-col gap-3 mt-12" variants={itemVariants}>
                <div className="flex flex-row gap-4">
                  <a href="#" className="w-32 transition-opacity hover:opacity-80">
                    <img src={`${basePath}/appstore.svg`} alt="Download on the App Store" className="w-full" />
                  </a>
                  <a href="#" className="w-36 transition-opacity hover:opacity-80">
                    <img src={`${basePath}/playstore.svg`} alt="Get it on Google Play" className="w-full" />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative h-[400px] md:h-[500px] flex items-center justify-center"
              variants={blobVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="absolute w-[340px] h-[340px] md:w-[460px] md:h-[460px]">
                {/* First blob layer - larger and more pronounced */}
                <div 
                  className="absolute inset-0 rounded-[70%_30%_20%_80%/60%_30%_70%_40%] bg-gradient-to-br from-mint via-orange/70 to-mint/90 blur-3xl opacity-80"
                  style={{
                    animation: "blob 6s infinite alternate",
                    transform: "scale(1.2)"
                  }}
                ></div>
                
                {/* Second blob layer - with more contrast */}
                <div 
                  className="absolute inset-0 rounded-[30%_70%_80%_20%/30%_80%_20%_70%] bg-gradient-to-br from-orange/80 via-mint/60 to-orange/80 blur-3xl opacity-70"
                  style={{
                    animation: "blob 7s infinite alternate-reverse",
                    animationDelay: "0.5s",
                    transform: "scale(1.1) rotate(15deg)"
                  }}
                ></div>
                
                {/* Third blob layer for extra effects */}
                <div 
                  className="absolute inset-0 rounded-[40%_60%_30%_70%/60%_30%_70%_40%] bg-gradient-to-r from-mint/60 to-orange/60 blur-2xl opacity-60"
                  style={{
                    animation: "blob 8s infinite alternate",
                    animationDelay: "1s",
                    transform: "scale(0.9) rotate(-10deg)"
                  }}
                ></div>
                
                {/* Fourth blob layer for depth in center */}
                <div 
                  className="absolute inset-0 rounded-[55%_45%_40%_60%/50%_40%_60%_50%] bg-gradient-to-br from-mint/70 to-orange/70 blur-3xl opacity-50"
                  style={{
                    animation: "blob 9s infinite alternate-reverse",
                    animationDelay: "1.5s",
                    transform: "scale(0.7)"
                  }}
                ></div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sm text-gray-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <span>Scroll to explore</span>
          <div className="w-6 h-10 border border-gray-500 rounded-full flex items-center justify-center p-1">
            <div className="w-1 h-1 bg-mint rounded-full animate-scroll-down"></div>
          </div>
        </motion.div>
      </section>

      {/* Portfolio Options Section */}
      <section id="portfolios" className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Portfolios</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Geographically diversified portfolios, with a focus on either US, or Australian equities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-10 h-full">
            <motion.div
              className="h-full"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <PortfolioCard
                title="US Leaders Portfolio"
                subtitle="Portfolio One"
                description="A strategic portfolio focused on leading US companies, offering exposure to innovative and high-growth sectors of the American market."
                iconSrc={`${basePath}/usflag.png`}
                color="orange"
              >
                <div className="space-y-3 my-4">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                  >
                    {[
                      "Access to some of the world's largest, highest-quality companies",
                      "Deep capital markets featuring diverse multinational corporations",
                      "Curated portfolio of market-leading companies across sectors",
                      "Dedicated US portfolio manager with specialized expertise",
                      "Direct US equity exposure (no repackaged ETFs)",
                      "Targeting 10%+ annual returns after fees",
                      "Straightforward 2% management fee structure"
                    ].map((feature, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center gap-2 mb-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-6 h-6 rounded-full bg-orange/20 flex items-center justify-center flex-shrink-0">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="#F18C1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </PortfolioCard>
            </motion.div>

            <motion.div
              className="h-full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <PortfolioCard
                title="AU Leaders Portfolio"
                subtitle="Portfolio Two"
                description="A carefully curated portfolio of top Australian companies, providing strong exposure to the local market with a focus on stability and growth."
                iconSrc={`${basePath}/australiaflag.svg`}
                color="orange"
              >
                <div className="space-y-3 my-4">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
                  >
                    {[
                      "Get access to some of the best domestic emerging companies",
                      "Active portfolio management to ensure optimal asset allocations",
                      "Diverse portfolio across size, sector and geography",
                      "Targeting 10%+ annual returns after fees",
                      "Straightforward 2% management fee structure"
                    ].map((feature, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center gap-2 mb-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-6 h-6 rounded-full bg-orange/20 flex items-center justify-center flex-shrink-0">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="#F18C1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </PortfolioCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-24 pb-36 relative z-10 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Performance</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See how our portfolios have performed over time.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <DashboardPreview 
                selectedPortfolio={selectedPortfolio} 
                onPortfolioChange={(portfolio) => setSelectedPortfolio(portfolio)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 pt-12 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto bg-black/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-mint/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Portfolio Today</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Opening an account is <span className="text-mint font-medium">free, fast, and easy</span>. Start your investment journey with Suubee Portfolios in minutes.
              </p>
            </div>

            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/register">
                <Button className="group flex items-center gap-2 text-base px-8 py-6 bg-orange hover:bg-orange/90 text-black rounded-full transition-all">
                  Open an Account
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            <motion.div 
              className="mt-8 flex justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="flex items-center gap-2 text-mint hover:text-mint/80 transition-colors group"
              >
                <span>Chat With a Portfolio Manager</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
