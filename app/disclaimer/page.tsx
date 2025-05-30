"use client";

import Layout from "@/components/Layout";

export default function DisclaimerPage() {
  return (
    <Layout>
      <main>
        <div className="container mx-auto px-4 pt-32 pb-24">
          <div className="max-w-4xl mx-auto">
            <header>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-mint to-mint/80 text-transparent bg-clip-text">
                Disclaimers
              </h1>
              <p className="text-gray-400 mb-12 text-lg max-w-2xl">
                Important disclosures and disclaimers regarding our services and information.
              </p>
            </header>
            
            <article className="prose prose-invert prose-mint max-w-none">
              {/* Placeholder content */}
              <p>Content for the Disclaimers will be placed here.</p>
            </article>
          </div>
        </div>
      </main>
    </Layout>
  );
} 