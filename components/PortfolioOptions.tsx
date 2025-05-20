import { motion } from "framer-motion"
import PortfolioCard from "@/components/portfolio-card"

export default function PortfolioOptions() {
  const basePath = process.env.NODE_ENV === 'production' ? '/suubeeportfolio' : '';

  return (
    <section 
      id="portfolios" 
      className="py-24 relative z-10"
      aria-labelledby="portfolios-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="portfolios-heading" className="text-3xl md:text-5xl font-bold mb-4">Our Portfolios</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Geographically diversified portfolios, with a focus on either US, or Australian equities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 h-full" role="list" aria-label="Portfolio options">
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
              portfolioType="us"
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
              portfolioType="au"
            >
              <div className="space-y-3 my-4">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
                >
                  {[
                    "Get access to established and emerging emerging companies",
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
  )
} 