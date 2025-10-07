"use client"
import Layout from "@/components/Layout"
import CTASection from "@/components/CTASection"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, XCircle, Sparkles, ShieldCheck, LineChart, ListChecks, Users, Unlock } from "lucide-react"
import JsonLd from "@/components/JsonLd"
import FAQSection from "@/components/FAQSection"

export default function InvestPage() {
  return (
    <Layout>
      <main>
        {/* Hero */}
        <section className="container mx-auto px-4 pt-32 pb-16 bg-[#f5f5f5]">
          <div className="max-w-6xl mx-auto">
            <header>
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#0c0c0c] leading-[1.1] tracking-tight">Invest with us</h1>
              <p className="text-gray-700 text-lg md:text-xl max-w-3xl">
                Discover how our rules-based, leadership-focused approach helps you stay allocated to the market’s strongest opportunities while keeping costs simple and the experience effortless.
              </p>
            </header>
          </div>
        </section>

        <div className="container mx-auto px-4 pt-8 pb-24 bg-[#f5f5f5]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 gap-28">
            {/* Why Suubee Portfolios? */}
            <section aria-labelledby="why-heading" className="bg-white rounded-2xl p-6 md:p-10 ring-1 ring-gray-100">
              <div className="relative mb-8">
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-3 h-12 bg-gradient-to-b from-mint to-mint/40 rounded-r-md" aria-hidden="true"></div>
                <h2 id="why-heading" className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0c0c0c]">Why Suubee Portfolios?</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[{
                  title: "Professionally managed portfolios",
                  desc: "Let our team of investing professionals construct the portfolios—you decide when and how much to invest.",
                  icon: <Users className="w-6 h-6" />,
                }, {
                  title: "Experience",
                  desc: "We have developed, refined, and demonstrated our leadership approach over a combined 40+ years of experience.",
                  icon: <Sparkles className="w-6 h-6" />,
                }, {
                  title: "Practical diversification",
                  desc: "Balanced position sizing across 15–30 equities with exposure across sectors and themes.",
                  icon: <LineChart className="w-6 h-6" />,
                }, {
                  title: "Own leadership",
                  desc: "We systematically target true market leaders, so you know your money is working as hard as possible.",
                  icon: <ListChecks className="w-6 h-6" />,
                }, {
                  title: "Active risk management",
                  desc: "Dynamic ability to de-risk—including moving to 100% cash—to help protect against downturns.",
                  icon: <ShieldCheck className="w-6 h-6" />,
                }, {
                  title: "Flexibility",
                  desc: "We don’t lock you—or your money—into any portfolio. Deposit or withdraw whenever you please.",
                  icon: <Unlock className="w-6 h-6" />,
                }].map((item, i) => (
                  <motion.article
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="relative bg-white border border-gray-200 rounded-xl p-6 hover:translate-y-[-6px] transition-all duration-300 hover:shadow-[0_10px_20px_-15px_rgba(57,253,173,0.25)] group"
                 >
                    <div className="flex items-center gap-3 mb-2 text-[#0c0c0c]">
                      {item.icon}
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-gray-600">{item.desc}</p>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-full h-1.5 bg-gradient-to-r from-mint to-mint/80 rounded-b-lg transition-all duration-300" aria-hidden="true"></div>
                  </motion.article>
                ))}
              </div>
            </section>

            {/* Is the portfolio right for you? */}
            <section aria-labelledby="fit-heading" className="bg-[#fafafa] rounded-2xl p-6 md:p-10 ring-1 ring-gray-100">
              <div className="relative mb-8">
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-3 h-12 bg-gradient-to-b from-mint to-mint/40 rounded-r-md" aria-hidden="true"></div>
                <h2 id="fit-heading" className="text-2xl md:text-3xl font-bold tracking-tight text-[#0c0c0c]">Is Suubee Portfolios right for you?</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-gray-300">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-[#0c0c0c]"><CheckCircle2 className="w-5 h-5 text-mint" /> The Suubee Portfolio is tailored for investors who:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-mint mt-0.5" /> Appreciate Suubee’s disciplined, quantitative, rules-based investment strategy</li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-mint mt-0.5" /> Seek transparent exposure to high-potential stocks and sectors</li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-mint mt-0.5" /> Are comfortable with moderate to high risk/return profiles</li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-mint mt-0.5" /> Prefer a professionally managed model portfolio–based solution</li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-mint mt-0.5" /> Aim for long-term capital growth while mitigating downside risk</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-gray-300">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-[#0c0c0c]"><XCircle className="w-5 h-5 text-gray-400" /> Might not be for you if you:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3"><XCircle className="w-5 h-5 text-gray-400 mt-0.5" /> Prefer to pick individual stocks yourself</li>
                    <li className="flex items-start gap-3"><XCircle className="w-5 h-5 text-gray-400 mt-0.5" /> Seek guaranteed returns or zero volatility</li>
                    <li className="flex items-start gap-3"><XCircle className="w-5 h-5 text-gray-400 mt-0.5" /> Want to trade frequently or speculate short term</li>
                     <li className="flex items-start gap-3"><XCircle className="w-5 h-5 text-gray-400 mt-0.5" /> Are primarily seeking dividend income</li>
                     <li className="flex items-start gap-3"><XCircle className="w-5 h-5 text-gray-400 mt-0.5" /> Require a personalised or fully custom portfolio</li>
                     <li className="flex items-start gap-3"><XCircle className="w-5 h-5 text-gray-400 mt-0.5" /> Are uncomfortable with short-term fluctuations</li>
                  </ul>
                </div>
              </div>
            </section>



            {/* Simple, transparent costs */}
            <section aria-labelledby="costs-heading" className="bg-white rounded-2xl p-6 md:p-10 ring-1 ring-blue-50">
              <div className="relative mb-8">
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-3 h-12 bg-gradient-to-b from-mint to-mint/40 rounded-r-md" aria-hidden="true"></div>
                <h2 id="costs-heading" className="text-2xl md:text-3xl font-bold tracking-tight text-[#0c0c0c]">Simple, transparent costs</h2>
              </div>

              <div className="space-y-3">
                {/* Row: Management Fee */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-full bg-blue-50 border border-blue-100 px-4 md:px-5 h-12 md:h-14 flex items-center text-[#0c0c0c] font-medium text-xs sm:text-sm md:text-base whitespace-nowrap">
                    Management Fee
                  </div>
                  <div className="rounded-2xl md:rounded-full bg-[#121c26] text-white px-4 md:px-5 h-12 md:h-14 flex items-center text-sm md:text-base">
                    <div className="font-semibold">Up to3.00% p.a.<sup>*</sup></div>
                  </div>
                </div>

                {/* Row: Recommended Minimum Investment */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-full bg-blue-50 border border-blue-100 px-4 md:px-5 h-12 md:h-14 flex items-center text-[#0c0c0c] font-medium text-xs sm:text-sm md:text-base whitespace-nowrap">
                    <span className="md:hidden">Minimum investment</span>
                    <span className="hidden md:inline">Recommended Minimum Investment</span>
                  </div>
                  <div className="rounded-full bg-[#121c26] text-white px-4 md:px-5 h-12 md:h-14 flex items-center font-semibold text-sm md:text-base">
                    $50,000 AUD
                  </div>
                </div>

                {/* Row: Suggested Timeframe */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-full bg-blue-50 border border-blue-100 px-4 md:px-5 h-12 md:h-14 flex items-center text-[#0c0c0c] font-medium text-xs sm:text-sm md:text-base whitespace-nowrap">
                    Suggested Timeframe
                  </div>
                  <div className="rounded-full bg-[#121c26] text-white px-4 md:px-5 h-12 md:h-14 flex items-center font-semibold text-sm md:text-base">
                    5 years+
                  </div>
                </div>

                {/* Row: Holdings */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-full bg-blue-50 border border-blue-100 px-4 md:px-5 h-12 md:h-14 flex items-center text-[#0c0c0c] font-medium text-xs sm:text-sm md:text-base whitespace-nowrap">
                    Holdings
                  </div>
                  <div className="rounded-2xl md:rounded-full bg-[#121c26] text-white px-4 md:px-5 h-12 md:h-14 flex items-center text-sm md:text-base">
                    <div className="font-semibold">15–30 stocks<sup>*</sup></div>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-600 mt-3">* ETF portfolio: management fee 1.5% p.a.; typically 5–10 ETFs.</p>
              <p className="text-sm text-gray-500 mt-3">Important: Investing involves risk. Returns are not guaranteed. Read the full Product Disclosure Statement (PDS) before making any investment decision. See our Terms and Disclaimers.</p>
            </section>

            {/* How it works */}
            <section aria-labelledby="how-it-works-heading" className="bg-[#fafafa] rounded-2xl p-6 md:p-10 ring-1 ring-gray-100">
              <div className="relative mb-8">
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-3 h-12 bg-gradient-to-b from-mint to-mint/40 rounded-r-md" aria-hidden="true"></div>
                <h2 id="how-it-works-heading" className="text-2xl md:text-3xl font-bold tracking-tight text-[#0c0c0c]">How it works</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[{
                  step: "1",
                  title: "Register an account",
                  desc: "Click ‘Get Started’ to sign up with OpenInvest and explore the Investor Portal. You can do this without an initial investment.",
                },{
                  step: "2",
                  title: "Select a Suubee Model Portfolio and deposit funds",
                  desc: "When you’re ready to invest, select the portfolio and deposit your desired amount. Minimum $50,000 AUD recommended.",
                },{
                  step: "3",
                  title: "Let us manage the rest",
                  desc: "We’ll manage the portfolio using our proven strategy and keep you updated regularly through the Investor Portal.",
                }].map((s, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-gray-300">
                    <div className="bg-mint text-[#0c0c0c] text-base md:text-lg font-semibold px-6 py-3">Step {s.step}</div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2 text-[#0c0c0c]">{s.title}</h3>
                      <p className="text-gray-600">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section aria-labelledby="faq-heading" className="bg-white rounded-2xl p-6 md:p-10 ring-1 ring-gray-100">
              <div className="relative mb-8">
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-3 h-12 bg-gradient-to-b from-mint to-mint/40 rounded-r-md" aria-hidden="true"></div>
                <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold tracking-tight text-[#0c0c0c]">Frequently asked questions</h2>
                <p className="text-[#0c0c0c] mt-2">Grouped answers to help you get started.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-2 md:p-6">
                <FAQSection />
              </div>
            </section>

            {/* CTA */}
            <CTASection 
              title="Ready to invest with us or still have questions?"
              description="Create your account in minutes and explore the Investor Portal—no initial deposit required."
              buttonText="Get Started"
              buttonLink="/register"
              secondaryLinkText="Speak with our team"
              secondaryLinkHref="/contact"
            />
          </div>
        </div>

        {/* Service JSON-LD */}
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "FinancialService",
          name: "Suubee Portfolios – Portfolio Management",
          url: (process.env.NEXT_PUBLIC_BASE_URL || "https://suubeeportfolios.com") + "/invest",
          description: "Rules-based portfolio management focused on market leadership, transparent costs, and a guided onboarding experience.",
          areaServed: ["Australia", "United States", "Europe"],
          serviceType: ["Portfolio Management", "Investment Services"],
        }} />
      </main>
    </Layout>
  )
}


