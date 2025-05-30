"use client"

import Link from "next/link"
import { ArrowRight, Plus } from "lucide-react"
import PortfolioCard from "@/components/portfolio-card"
import { Button } from "@/components/ui/button"
import DashboardPreview from "@/components/dashboard-preview"
import Image from "next/image"
import { useState, Suspense, lazy } from "react"
import Layout from "@/components/Layout"
import { motion } from "framer-motion"

// Lazy load below-the-fold components
const PortfolioOptions = lazy(() => import("@/components/PortfolioOptions"))
const DashboardPreviewSection = lazy(() => import("@/components/DashboardPreviewSection"))
const CTASection = lazy(() => import("@/components/CTASection"))

// Loading fallback component
const LoadingFallback = () => (
  <div className="w-full h-96 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-mint"></div>
  </div>
)

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
      <main>
        {/* Hero Section */}
        <section 
          className="relative min-h-screen flex items-center pt-20 overflow-hidden"
          aria-label="Hero section"
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
                  <Link href="/register" aria-label="Open an account">
                    <Button className="group flex items-center gap-2 text-base px-6 py-6 bg-mint text-black hover:bg-mint/90 rounded-full transition-all">
                      Open an Account
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="text-base px-6 py-6 bg-transparent border border-orange/50 text-white hover:bg-orange/10 rounded-full transition-all"
                    onClick={() => {
                      document.getElementById('portfolios')?.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }}
                    aria-label="Explore our portfolios"
                  >
                    Explore Portfolios
                  </Button>
                </motion.div>
                
                {/* App Store and Play Store links */}
                <motion.div className="flex flex-col gap-3 mt-12" variants={itemVariants}>
                  <div className="flex flex-row gap-4" role="group" aria-label="Download our app">
                    <a href="https://apps.apple.com/au/app/openwealth-investor-app/id1584958935" className="w-32 transition-opacity hover:opacity-80" aria-label="Download on the App Store">
                      <img 
                        src={`${basePath}/appstore.svg`} 
                        alt="Download Suubee Portfolios on the App Store" 
                        width={128} 
                        height={42}
                        className="w-full" 
                      />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.openwealth.oi.app&hl=en_AU" className="w-36 transition-opacity hover:opacity-80" aria-label="Get it on Google Play">
                      <img 
                        src={`${basePath}/playstore.svg`} 
                        alt="Get Suubee Portfolios on Google Play" 
                        width={144} 
                        height={42}
                        className="w-full" 
                      />
                    </a>
                  </div>
                </motion.div>
              </motion.div>

              {/* Empty div to maintain grid layout on desktop */}
              <div className="hidden md:block" aria-hidden="true"></div>
            </div>
          </div>

          <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-base md:text-lg text-gray-400 hidden md:flex"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            aria-hidden="true"
          >
            <span>Scroll to explore</span>
            <div className="w-8 h-14 border-2 border-gray-500 rounded-full flex items-center justify-center p-1">
              <div className="w-2 h-2 bg-mint rounded-full animate-scroll-down"></div>
            </div>
          </motion.div>
        </section>

        {/* Portfolio Options Section */}
        <Suspense fallback={<LoadingFallback />}>
          <PortfolioOptions />
        </Suspense>

        {/* Dashboard Preview Section */}
        <Suspense fallback={<LoadingFallback />}>
          <DashboardPreviewSection selectedPortfolio={selectedPortfolio} onPortfolioChange={setSelectedPortfolio} />
        </Suspense>

        {/* CTA Section */}
        <Suspense fallback={<LoadingFallback />}>
          <CTASection />
        </Suspense>
      </main>
    </Layout>
  )
}
