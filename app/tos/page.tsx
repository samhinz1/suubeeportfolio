"use client";

import Layout from "@/components/Layout";

export default function TOSPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-mint to-mint/80 text-transparent bg-clip-text">
            Terms of Service
          </h1>
          <p className="text-gray-400 mb-12 text-lg max-w-2xl">
            Please read these terms and conditions carefully before using our services.
          </p>
          
          <div className="prose prose-invert prose-mint max-w-none">
            {/* Placeholder content */}
            <p>Content for the Terms of Service will be placed here.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
} 