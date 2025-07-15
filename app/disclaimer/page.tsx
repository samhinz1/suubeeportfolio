"use client";

import Layout from "@/components/Layout";

export default function DisclaimerPage() {
  return (
    <Layout>
      <main>
        <div className="container mx-auto px-4 pt-32 pb-24">
          <div className="max-w-4xl mx-auto">
            <header>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                Disclaimer
              </h1>
              <p className="text-gray-400 mb-12 text-lg max-w-2xl">
                Important disclosures and disclaimers regarding our services and information.
              </p>
            </header>
            
            <article className="prose prose-invert prose-mint max-w-none">
              <p className="mb-4">Suubee Pty Ltd (ABN 35 605 760 496) ("Suubee") is an Authorised Representative (No. 1262749) of Sanlam Private Wealth Pty Ltd, which holds Australian Financial Services Licence No. 337927.</p>
              
              <p className="mb-4">Suubee Portfolios is a model portfolio service operated by Suubee in partnership with OpenInvest Limited ("OpenInvest"), the responsible entity and platform provider.</p>
              
              <p className="mb-4">By subscribing to Suubee Portfolios, you engage directly with OpenInvest, who is responsible for client onboarding, account management, execution, custody, and reporting. Suubee provides model portfolio information only and does not manage individual client accounts or execute trades.</p>
              
              <p className="mb-4">Whenever Suubee updates its model portfolios, OpenInvest will seek to rebalance your investment account accordingly. Trade execution typically occurs daily and is at the discretion of OpenInvest. Actual trade prices may differ from those shown in the model portfolio due to market conditions, timing, and execution processes.</p>
              
              <p className="mb-4">The information provided through Suubee Portfolios is general in nature and does not consider your personal financial objectives, situation, or needs. It should not be relied upon as personal financial advice. You should assess its suitability for your individual circumstances and consider obtaining independent financial advice where appropriate.</p>
              
              <p className="mb-4">Past performance is not a reliable indicator of future performance. All investments carry risk, including the potential loss of capital. Suubee makes no representation or warranty as to future performance, returns, or portfolio outcomes.</p>
              
              <p className="mb-4">Suubee does not provide tax or legal advice. You should consult a qualified professional for advice on tax consequences relevant to your situation.</p>
              
              <p className="mb-4">Directors, employees, or related parties of Suubee may hold, buy, or sell securities included in the Suubee model portfolios. These holdings may change without notice.</p>
              
              <p className="mb-4">Suubee receives fees from OpenInvest in connection with the provision of model portfolio services. These fees are paid by OpenInvest and are not charged directly to clients.</p>
              
              <p className="mb-4">All content provided through Suubee Portfolios is the intellectual property of Suubee Pty Ltd and is intended for personal use only. Redistribution, commercial use, or unauthorised sharing of any model portfolio content or related materials is strictly prohibited.</p>
              
              <p className="mb-4">By accessing Suubee Portfolios, you confirm that you have read and agreed to the Suubee Terms of Service, Privacy Policy, and the OpenInvest Client Agreement, and acknowledge that Suubee is not liable for any loss resulting from your use of, or reliance on, the model portfolios or associated content.</p>
            </article>
          </div>
        </div>
      </main>
    </Layout>
  );
} 