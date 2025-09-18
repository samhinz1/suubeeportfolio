import { motion } from "framer-motion"
import PortfolioCard from "@/components/portfolio-card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export default function PortfolioOptions() {
  const [selectedPortfolio, setSelectedPortfolio] = useState("au-leaders")

  const portfolioOptions = [
    { value: "au-leaders", label: "AU Leaders" },
    { value: "au-resources", label: "AU Resources" },
    { value: "global-etf", label: "Global ETF" },
    { value: "us-leaders", label: "US Leaders" },
    { value: "us-resources", label: "US Resources" }
  ]

  return (
    <section 
      id="portfolios" 
      className="py-24 relative z-10 bg-[#f5f5f5] text-[#0c0c0c]"
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
          <p className="text-gray-600 max-w-2xl mx-auto">
            Geographically diversified portfolios, with a focus on either US, or Australian equities.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Tabs value={selectedPortfolio} onValueChange={setSelectedPortfolio}>
            {/* Mobile Dropdown */}
            <div className="flex justify-center mb-8 md:hidden">
              <Select value={selectedPortfolio} onValueChange={setSelectedPortfolio}>
                <SelectTrigger className="w-64 bg-white border-gray-300">
                  <SelectValue placeholder="Select a portfolio" />
                </SelectTrigger>
                <SelectContent>
                  {portfolioOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Desktop Tabs */}
            <div className="hidden md:flex justify-center mb-8">
              <TabsList className="flex flex-wrap gap-2 bg-[#eaeaea]">
                <TabsTrigger value="au-leaders">AU Leaders</TabsTrigger>
                <TabsTrigger value="au-resources">AU Resources</TabsTrigger>
                <TabsTrigger value="global-etf">Global ETF</TabsTrigger>
                <TabsTrigger value="us-leaders">US Leaders</TabsTrigger>
                <TabsTrigger value="us-resources">US Resources</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="au-leaders" className="mt-0">
              <motion.div
                className="h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <PortfolioCard
                  title="Australian Leaders Portfolio"
                  subtitle="Portfolio One"
                  description="Unlock the power of Suubee leader's portfolio. A carefully crafted investment strategy designed for investors seeking growth, and consistent returns. This portfolio offers unparalleled exposure to the dynamic Australian market, blending growth companies with established leading names."
                  iconSrc="/australiaflag.svg"
                  color="orange"
                  portfolioType="au"
                >
                  <div className="space-y-3 my-4">
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                    >
                      {[
                        "Gain exposure to the leading Australian companies across all sizes and sectors",
                        "Technofundamental approach to ensure alignment between technical and fundamental analysis",
                        "Active portfolio & risk management to ensure outperformance in bull markets and downside protection in bear markets",
                        "Straightforward 3% management fee structure"                
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
            </TabsContent>

            <TabsContent value="au-resources" className="mt-0">
              <motion.div
                className="h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <PortfolioCard
                  title="Australian Resources Portfolio"
                  subtitle="Portfolio Two"
                  description="Dive into the heart of Australia's resources sector. The Australian Resources portfolio is a dynamic investment option, crafted for those seeking robust growth and stability. This portfolio showcases the nation's premier explorers, developers, and producers as well as exposure to the mining services industry."
                  iconSrc="/australiaflag.svg"
                  color="orange"
                  portfolioType="au"
                >
                  <div className="space-y-3 my-4">
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                    >
                      {[
                        "Focus on providing exposure to the leading resource names during commodity cycles",
                        "Blend of explorers, developers and producers",
                        "Agnostic to underlying commodity",
                        "Active risk management across commodity cycles",
                        "Straightforward 3% management fee structure"
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
            </TabsContent>

            <TabsContent value="global-etf" className="mt-0">
              <motion.div
                className="h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <PortfolioCard
                  title="Global ETF Portfolio (ASX Listed)"
                  subtitle="Portfolio Three"
                  description="An expertly curated selection of globally traded ETFs listed on the ASX. Designed for investors seeking diversified growth and stability, this portfolio delivers exposure to leading international markets, from U.S. tech giants to emerging economies and sustainable energy innovators."
                  iconSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23F18C1F'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'/%3E%3C/svg%3E"
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
                        "Expertly curated selection of globally traded ETFs listed on the ASX",
                        "Diversified exposure to leading international markets",
                        "Access to U.S. tech giants, emerging economies, and sustainable energy innovators",
                        "Designed for investors seeking diversified growth and stability",
                        "Cost-effective global diversification through ASX-listed ETFs",
                        "Straightforward 1.5% management fee structure"
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
            </TabsContent>

            <TabsContent value="us-leaders" className="mt-0">
              <motion.div
                className="h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <PortfolioCard
                  title="US Leaders Portfolio"
                  subtitle="Portfolio Four"
                  description="Designed for investors craving high growth and innovation, this portfolio targets leading names in high growth sectors like technology, AI, biotech, robotics and energy transition. Powered by Suubee's active management strategy which blends our cutting-edge technical and fundamental analysis, we handpick leading U.S. companies driving global change."
                  iconSrc="/usflag.png"
                  color="orange"
                  portfolioType="us"
                  comingSoon={true}
                >
                  <div className="space-y-3 my-4">
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
                    >
                      {[
                        "Access to some of the world's largest, highest-quality companies",
                        "Deep capital markets featuring diverse multinational corporations",
                        "Curated portfolio of market-leading companies across sectors",
                        "Dedicated US portfolio manager with specialized expertise",
                        "Direct US equity exposure (no repackaged ETFs)",
                        "Straightforward 3% management fee structure"
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
            </TabsContent>

            <TabsContent value="us-resources" className="mt-0">
              <motion.div
                className="h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <PortfolioCard
                  title="US Resources Portfolio"
                  subtitle="Portfolio Five"
                  description="Unleash the power of America's resource giants with Suubee's U.S. Resources Portfolio, a masterfully curated investment for those seeking growth and resilience. This portfolio targets top-tier explorers, developers, and producers in energy, precious metals, mining services, and critical minerals."
                  iconSrc="/usflag.png"
                  color="orange"
                  portfolioType="us"
                  comingSoon={true}
                >
                  <div className="space-y-3 my-4">
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
                    >
                      {[
                        "Aimed at providing exposure to the leading resource names and thematics across the entire resource and materials sector",
                        "Blend of conglomerates, large caps, diversified resource names and selective growth names",
                        "Active positioning across commodity cycles",
                        "Straightforward 3% management fee structure"
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
            </TabsContent>

          </Tabs>
        </div>
      </div>
    </section>
  )
} 