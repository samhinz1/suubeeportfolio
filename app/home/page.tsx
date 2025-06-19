"use client"

import Link from "next/link"
import { ArrowRight, Plus, UserPlus, Compass } from "lucide-react"
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
  
  return (
    <Layout>
      <main>
        {/* Hero Section with split design - stacked on mobile, side-by-side on larger screens */}
        <section 
          className="flex flex-col md:flex-row flex-grow min-h-screen"
          aria-label="Hero section"
        >
          {/* Content section - full width on mobile, half width on larger screens */}
          <div className="w-full md:w-1/2 bg-[#f5f5f5] text-[#0c0c0c] flex items-center">
            <div className="px-8 py-20 md:px-12 lg:px-20 max-w-2xl mx-auto">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <motion.div className="hidden md:flex items-center gap-3" variants={itemVariants}>
                  <span className="text-xl md:text-2xl lg:text-3xl font-semibold">Suubee Portfolios HOME</span>
                </motion.div>
                
                <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight" variants={itemVariants}>
                  Invest in <span className="font-extrabold text-[#0c0c0c] underline decoration-mint decoration-4 underline-offset-4">Leadership</span>
                </motion.h1>
                
                <motion.p className="text-lg md:text-xl text-gray-600" variants={itemVariants}>
                  Expertly managed investment portfolios designed to provide exposure to leading stocks and themes, locally and abroad.
                </motion.p>
                
                <motion.div className="flex flex-col sm:flex-row gap-4 items-start pt-6" variants={itemVariants}>
                  <Link href="/register" aria-label="Open an account">
                    <Button className="group flex items-center gap-2 text-base px-6 py-6 bg-mint text-black hover:bg-mint/90 rounded-full transition-all">
                      <UserPlus className="w-4 h-4" aria-hidden="true" />
                      Open an Account
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="group flex items-center gap-2 text-base px-6 py-6 bg-transparent border border-gray-400 text-[#0c0c0c] hover:text-mint hover:border-mint rounded-full transition-all"
                    onClick={() => {
                      document.getElementById('portfolios')?.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }}
                    aria-label="Explore our portfolios"
                  >
                    <Compass className="w-4 h-4" aria-hidden="true" />
                    Explore Portfolios
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Button>
                </motion.div>
                
                {/* App Store and Play Store links */}
                <motion.div className="flex flex-col gap-3 mt-8" variants={itemVariants}>
                  <p className="text-sm text-gray-500">Our app is available on:</p>
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
            </div>
          </div>
          
          {/* Image section - shown below on mobile, to the side on larger screens */}
          <div className="w-full h-80 md:h-auto md:w-1/2 relative">
            <Image
              src={`${basePath}/earth.avif`}
              alt="Earth visualization"
              fill
              className="object-cover"
              priority
            />
          </div>
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
