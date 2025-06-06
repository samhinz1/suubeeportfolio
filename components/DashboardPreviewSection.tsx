import { motion } from "framer-motion"
import DashboardPreview from "@/components/dashboard-preview"

interface DashboardPreviewSectionProps {
  selectedPortfolio: string;
  onPortfolioChange: (portfolio: string) => void;
}

export default function DashboardPreviewSection({ selectedPortfolio, onPortfolioChange }: DashboardPreviewSectionProps) {
  return (
    <section className="py-24 relative z-10 overflow-hidden bg-white text-[#0c0c0c]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Performance</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
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
              onPortfolioChange={onPortfolioChange}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
} 