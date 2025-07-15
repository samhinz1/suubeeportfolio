"use client";

import React from "react";
import Layout from "@/components/Layout";

export default function TOSPage() {
  return (
    <Layout>
      <main>
        <div className="container mx-auto px-4 pt-32 pb-24">
          <div className="max-w-4xl mx-auto">
            <header>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                Terms of Service
              </h1>
              <p className="text-gray-400 mb-12 text-lg max-w-2xl">
                Please read these terms and conditions carefully before using our services.
              </p>
            </header>
            
            <article className="prose prose-invert prose-mint max-w-none">
              <section aria-labelledby="company-info-heading">
                <h2 id="company-info-heading" className="text-2xl font-bold mb-6">SUUBEE PTY LTD</h2>
                <p className="mb-2">ABN 35 605 760 496</p>
                <p className="mb-2">Authorised Representative No. 1262749</p>
                <p className="mb-6">of Sanlam Private Wealth Pty Ltd (AFSL: 337927)</p>
              </section>
              
              <section aria-labelledby="terms-heading">
                <h2 id="terms-heading" className="text-2xl font-bold mb-6">SUUBEE PORTFOLIOS USER TERMS OF SERVICE</h2>
                
                <p className="mb-4">By subscribing to and accessing Suubee Portfolios, you acknowledge and agree to the following terms:</p>
                
                <p className="mb-4">Suubee Portfolios is a model portfolio service provided by Suubee Pty Ltd in partnership with OpenInvest Limited (OpenInvest). The information provided through Suubee Portfolios is general in nature and is intended for informational and educational purposes only. It should not be construed as a recommendation to buy, sell, or hold any security or asset class. Any reference to buy, sell, or hold reflects model portfolio actions and does not constitute personal financial advice.</p>
                
                <p className="mb-4">Suubee is not an investment advisory service. All investors should consult a licensed financial professional before making any investment decisions. By subscribing to Suubee Portfolios, you agree to relinquish any recourse to claim damages resulting from the use of information provided within the service. While Suubee strives to ensure information is obtained from reliable sources, no guarantee is made regarding the accuracy or completeness of such information.</p>
                
                <p className="mb-4">Please be aware that Suubee staff, directors, and related parties may hold, buy, or sell securities included in the Suubee Portfolios, and these positions may change at any time without notice.</p>
                
                <p className="mb-4">All information provided through Suubee Portfolios, including any communications, webinars, emails, or newsletters, is intended solely for your personal use and may not be distributed, shared, reposted, or otherwise disseminated to third parties without Suubee's prior written consent. Unauthorized sharing may result in immediate termination of your access and forfeiture of any remaining subscription value. All content is protected under Australian copyright laws.</p>
                
                <p className="mb-4">The information provided by Suubee Portfolios is delivered without regard to your individual investment goals, financial circumstances, knowledge, or risk tolerance. Investments carry risk; you may lose some or all of your invested capital. Suubee Pty Ltd and any associated parties disclaim all liability arising from your use of, or reliance on, the information provided.</p>
                
                <p className="mb-4">Your investment decisions are made solely at your own discretion, free will, and based on your own independent research. Suubee Portfolios does not provide personalized investment advice or portfolio management services.</p>
                
                <p className="mb-4">By using Suubee Portfolios, you confirm that you have read, understood, and agree to be bound by these Terms of Service, as well as Suubee's Privacy Policy and the OpenInvest Client Agreement.</p>
              </section>
            </article>
          </div>
        </div>
      </main>
    </Layout>
  );
} 