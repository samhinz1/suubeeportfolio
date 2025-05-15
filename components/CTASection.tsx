import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  secondaryLinkText?: string;
  secondaryLinkHref?: string;
}

export default function CTASection({
  title = "Start Your Portfolio Today",
  description = "Opening an account is free, fast, and easy. Start your investment journey with Suubee Portfolios in minutes.",
  buttonText = "Open an Account",
  buttonLink = "/register",
  secondaryLinkText = "Chat With a Portfolio Manager",
  secondaryLinkHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto bg-black/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-mint/20 group relative transition-all duration-300 hover:translate-y-[-8px] hover:border-mint/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {description.includes("free, fast, and easy") ? (
                <>
                  Opening an account is <span className="text-mint font-medium">free, fast, and easy</span>. Start your investment journey with Suubee Portfolios in minutes.
                </>
              ) : (
                description
              )}
            </p>
          </div>

          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href={buttonLink}>
              <Button className="group flex items-center gap-2 text-base px-8 py-6 bg-orange text-black rounded-full transition-all duration-500 
              hover:bg-gradient-to-r hover:from-orange hover:to-orange-400 hover:shadow-md
              group-hover:bg-gradient-to-r group-hover:from-orange group-hover:to-orange-400 group-hover:animate-pulse-subtle group-hover:shadow-md">
                {buttonText}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>

          {secondaryLinkText && (
            <motion.div 
              className="mt-8 flex justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href={secondaryLinkHref}
                className="flex items-center gap-2 text-mint hover:text-mint/80 transition-colors group"
              >
                <span>{secondaryLinkText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          )}

          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-mint to-mint/80 transition-all duration-300 rounded-b-lg group-hover:w-full"
          ></div>
        </motion.div>
      </div>
    </section>
  )
} 