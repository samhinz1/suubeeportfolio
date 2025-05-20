"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Layout from "@/components/Layout"
import { motion } from "framer-motion"

export default function NotFound() {
  // Get base path for assets to work with GitHub Pages
  const basePath = process.env.NODE_ENV === 'production' ? '/suubeeportfolio' : '';
  
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
        <section 
          className="relative min-h-screen flex items-center pt-20 overflow-hidden"
          aria-label="404 page"
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
              {/* First blob layer */}
              <div 
                className="absolute inset-0 rounded-[70%_30%_20%_80%/60%_30%_70%_40%] bg-gradient-to-br from-mint via-orange/70 to-mint/90 blur-xl md:blur-3xl opacity-90"
                style={{
                  animation: "blob 6s infinite alternate",
                  transform: "scale(1.2)"
                }}
              ></div>
              
              {/* Second blob layer */}
              <div 
                className="absolute inset-0 rounded-[30%_70%_80%_20%/30%_80%_20%_70%] bg-gradient-to-br from-orange/80 via-mint/60 to-orange/80 blur-xl md:blur-3xl opacity-80"
                style={{
                  animation: "blob 7s infinite alternate-reverse",
                  animationDelay: "0.5s",
                  transform: "scale(1.1) rotate(15deg)"
                }}
              ></div>
              
              {/* Third blob layer */}
              <div 
                className="absolute inset-0 rounded-[40%_60%_30%_70%/60%_30%_70%_40%] bg-gradient-to-r from-mint/60 to-orange/60 blur-md md:blur-2xl opacity-60"
                style={{
                  animation: "blob 8s infinite alternate",
                  animationDelay: "1s",
                  transform: "scale(0.9) rotate(-10deg)"
                }}
              ></div>
              
              {/* Fourth blob layer */}
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
                  <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-mint">404</span>
                </motion.div>
                <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6" variants={itemVariants}>
                  Page Not{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint to-orange">
                    Found
                  </span>
                </motion.h1>
                <motion.p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl" variants={itemVariants}>
                  The page you're looking for doesn't exist or has been moved. Let's get you back on track.
                </motion.p>
                <motion.div className="flex flex-col sm:flex-row gap-4 items-start" variants={itemVariants}>
                  <Link href="/" aria-label="Return to home page">
                    <Button className="group flex items-center gap-2 text-base px-6 py-6 bg-mint text-black hover:bg-mint/90 rounded-full transition-all">
                      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
                      Return Home
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Empty div to maintain grid layout on desktop */}
              <div className="hidden md:block" aria-hidden="true"></div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
} 