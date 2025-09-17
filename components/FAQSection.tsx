"use client"

import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type FAQItem = {
  question: string
  answer: string
}

type FAQGroup = {
  title: string
  items: FAQItem[]
}

const faqGroups: FAQGroup[] = [
  {
    title: "About Suubee Portfolios",
    items: [
      {
        question: "What is Suubee Portfolios?",
        answer:
          "Suubee Portfolios are model portfolios created, and managed by Suubee. They are designed to provide exposure to leading stocks and themes in Australia and the United States (Pending release).",
      },
      {
        question: "Who are Suubee?",
        answer:
          "Operating since 2015, Suubee began as a private investment community built to deliver financial education and teach its investing methodology to its community. Our investment and trading methods have been developed and used over the past decade by our team of professional investors. The Suubee method combines a techo-fundamental approach, which places our portfolios into the leading market names while entering at optimal risk control points.",
      },
      {
        question: "What is the Suubee Investment philosophy?",
        answer:
          "The Suubee investment philosophy leverages a techo-fundamental approach to select high-quality, market-leading stocks and themes.",
      },
    ],
  },
  {
    title: "Investing in Suubee Portfolios",
    items: [
      {
        question: "How do I invest in Suubee Portfolios?",
        answer:
          "You can create an account at no cost, with no obligation to invest, through our sign-up page. This allows you to explore the Investor Portal and view the documentation. When you’re ready, simply select the ‘Strategy Portfolio’ and make your initial investment.",
      },
      {
        question: "Who are Suubee’s partners / which broker is used?",
        answer:
          "Our platform partner is OpenInvest; your account is set up and managed by OpenInvest.",
      },
      {
        question: "What is the minimum investment amount?",
        answer:
          "There is no minimum investment; however, due to position sizing and the number of holdings within portfolios, we recommend $50,000 AUD as a minimum.",
      },
      {
        question: "Where does cash sit and in what currency?",
        answer:
          "All cash balances are held in AUD with OpenInvest’s designated custodian (see their details for more information).",
      },
      {
        question: "Are investments CHESS sponsored?",
        answer: "Investments are held by a custodian arrangement through OpenInvest.",
      },
    ],
  },
  {
    title: "Fees",
    items: [
      {
        question: "What are the Suubee fees?",
        answer:
          "Suubee charges a flat management fee only, with no outperformance fee. To see an estimate of the costs based on your investment amount, you can use the Fee Calculator in the OpenInvest Investor Portal before making your initial investment. If you need assistance interpreting this information, we recommend seeking advice from a licensed financial professional.",
      },
      {
        question: "What are the non-Suubee fees?",
        answer:
          "Execution charges are 10 basis points capped at $10 AUD per trade. Suubee does not share any of the commissions earned from OpenInvest.",
      },
      {
        question: "Any other costs?",
        answer:
          "There are no other costs beyond the management fee and execution/market data charges.",
      },
      {
        question: "Do I earn interest on cash balances?",
        answer:
          "No, cash balances held in the portfolio do not earn interest. The portfolio aims to stay close to fully invested unless broader market sell signals exist.",
      },
    ],
  },
  {
    title: "Managing Your Investment",
    items: [
      {
        question:
          "How do I move funds in, and out of the account and how long does this take?",
        answer:
          "You can add or remove funds at any time through the OpenInvest Investor Portal. Withdrawals typically involve selling down investments, with funds generally returned within 5–10 business days, depending on market conditions and the nature of holdings. This also incurs a commission charge.",
      },
      {
        question: "Can I trade other stocks or ETFs with this account?",
        answer: "Investments are limited to the pre-defined Portfolios only.",
      },
      {
        question: "What is the recommended investment timeframe?",
        answer:
          "The recommended minimum investment timeframe is 3+ years to align with the portfolio’s long-term growth objectives.",
      },
    ],
  },
  {
    title: "Suubee Portfolio Strategy",
    items: [
      {
        question:
          "How many portfolios can I access and which will be offered? Will this increase in the future?",
        answer:
          "Initially, we offer AU Portfolios only, with US portfolios anticipated to be added in due course. Additional portfolios may be introduced based on market demand and strategic opportunities.",
      },
      {
        question: "Do you offer AU and US portfolios?",
        answer:
          "Currently, only AU Portfolios are available. US portfolios are planned for future release, with details to be announced.",
      },
      {
        question: "How often are the portfolios reviewed or adjusted?",
        answer:
          "The Suubee team reviews portfolios daily and makes adjustments as necessary to align with market conditions and the portfolio’s objectives.",
      },
      {
        question: "What is your purchase and sale methodology?",
        answer:
          "The Suubee purchase and sale methodology is based on a techo-fundamental approach. Purchases are made when technical indicators signal optimal entry points in market-leading stocks or themes. Exits are executed to lock in gains, manage risk, or rebalance the portfolio based on market conditions and technical signals.",
      },
    ],
  },
  {
    title: "Performance and Risk Management",
    items: [
      {
        question: "What are the expected returns?",
        answer:
          "Expected returns vary based on market conditions. The Suubee Portfolios aim to outperform market benchmarks during uptrends and reduce losses during downturns through active management. However, past performance is not indicative of future results, and returns are not guaranteed.",
      },
      {
        question: "Can I view and track my actual account performance?",
        answer:
          "You can monitor the performance of your investment through the OpenInvest Investor Portal, which provides daily updates on your portfolio.",
      },
      {
        question:
          "How are gains and losses handled? Are partial profits taken into strength? Are stop losses applied at the time of purchase?",
        answer:
          "Gains are managed by sometimes taking partial profits into strength when deemed appropriate. Losses are mitigated through rotation out of underperformers, aligned with the Suubee risk management framework, to limit downside exposure when momentum turns. The portfolio may also shift to cash or cash equivalents during periods of high market uncertainty. There is always the risk of gap downs in stocks below desired stop loss points.",
      },
      {
        question: "What are the risks of investing in Suubee Portfolios?",
        answer:
          "Investing in Suubee Portfolios involves risks, including market risk, sector-specific risk, and currency risk for any international exposures. While the team actively manages these risks through diversification, stop-losses, and cash allocation, losses will happen with 100% guarantee. This is a model portfolio which aims to deliver outperformance over the medium to long term. All market speculation involves risk and losses.",
      },
      {
        question: "How does Suubee manage risk?",
        answer:
          "Suubee manages risk through a combination of diversified stock selection, stop-loss orders, active market timing, and the ability to allocate up to 100% of the portfolio to cash or cash equivalents during periods of market volatility. The techo-fundamental approach ensures disciplined entry and exit points to minimize downside risk.",
      },
    ],
  },
  {
    title: "Support and Compliance",
    items: [
      {
        question:
          "Can I speak to someone regarding Suubee portfolios to determine if this product is a good fit for me?",
        answer:
          "Suubee does not provide personalized financial advice. If you’re unsure whether Suubee Portfolios are suitable, we recommend consulting a licensed financial adviser. Suubee can provide general information about the portfolios.",
      },
      {
        question: "Who do I speak to if I need help with the platform or my account?",
        answer:
          "For assistance with the platform or your account, contact OpenInvest’s customer service team via live chat, available during Melbourne business hours, or through their support channels.",
      },
      {
        question: "Does Suubee offer personalised financial advice?",
        answer: "No, Suubee does not offer personalized financial advice.",
      },
      {
        question:
          "Do you offer tax reporting? Will I receive a consolidated tax statement of profit and loss?",
        answer:
          "All essential reports and key documents, including transaction statements and consolidated tax reports, are available through the OpenInvest Investor Portal.",
      },
    ],
  },
]

export default function FAQSection() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {faqGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-2 text-lg font-semibold text-[#0c0c0c]">{group.title}</h3>
              <Accordion type="single" collapsible className="w-full">
                {group.items.map((item, idx) => (
                  <AccordionItem key={`${group.title}-${idx}`} value={`${group.title}-${idx}`}>
                    <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="leading-relaxed text-[#0c0c0c]">{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


