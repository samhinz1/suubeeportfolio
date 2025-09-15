import Link from "next/link"
import { ArrowRight, CreditCard, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useEmailModal } from "./EmailModalProvider"

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
  const { openEmailModal } = useEmailModal()
  return (
    <section className="py-24 relative z-10 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-lg group relative transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0c0c0c]">{title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {description.includes("free, fast, and easy") ? (
                <>
                  Opening an account is <span className="font-bold">free, fast, and easy</span>. Start your investment journey with Suubee Portfolios in minutes.
                </>
              ) : (
                description
              )}
            </p>
          </div>

          <motion.div 
            className="flex flex-col md:flex-row justify-center gap-4 items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button 
              onClick={openEmailModal}
              className="group flex items-center gap-3 text-base px-8 py-6 bg-mint text-black rounded-full transition-all duration-300 hover:bg-mint/90 hover:translate-y-[-4px]"
            >
              <CreditCard className="w-5 h-5" />
              {buttonText}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            
            {secondaryLinkText && (
              <Link href={secondaryLinkHref}>
                <Button 
                  className="group flex items-center gap-3 text-base px-8 py-6 bg-orange text-black rounded-full transition-all duration-300 hover:bg-orange/90 hover:translate-y-[-4px]"
                >
                  <MessageCircle className="w-5 h-5" />
                  {secondaryLinkText}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            )}
          </motion.div>

          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-mint transition-all duration-300 rounded-b-lg group-hover:w-full"
          ></div>
        </motion.div>
      </div>
    </section>
  )
} 