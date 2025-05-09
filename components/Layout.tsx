import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background elements for the entire page */}
      <div className="fixed inset-0 bg-gradient-to-b from-black to-black z-0"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(57,253,173,0.08),transparent_50%)] z-0"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(241,140,31,0.1),transparent_70%)] z-0"></div>
      
      <Header />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
} 